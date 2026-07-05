import { useState, useRef, useEffect, TouchEvent, MouseEvent as ReactMouseEvent } from "react";

interface UseWheelGesturesProps {
  totalItems: number;
}

export function useWheelGestures({ totalItems }: UseWheelGesturesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const glitchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const theta = 360 / totalItems;

  const triggerGlitch = () => {
    if (glitchTimeout.current) clearTimeout(glitchTimeout.current);
    setIsGlitching(true);
    glitchTimeout.current = setTimeout(() => setIsGlitching(false), 260);
  };

  const goTo = (index: number) => {
    const normalized = ((index % totalItems) + totalItems) % totalItems;
    if (normalized === activeIndex) return;
    setActiveIndex(normalized);
    triggerGlitch();
  };

  const handleNext = () => {
    setRotation((r) => r - theta);
    goTo(activeIndex + 1);
  };

  const handlePrev = () => {
    setRotation((r) => r + theta);
    goTo(activeIndex - 1);
  };

  const handleMouseDown = (e: ReactMouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotation;
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    const currentRot = startRotation.current + deltaX * 0.12;
    setRotation(currentRot);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const snappedIndex = Math.round(-rotation / theta) % totalItems;
    const normalizedIndex = (snappedIndex + totalItems) % totalItems;

    if (normalizedIndex !== activeIndex) {
      goTo(normalizedIndex);
    }

    setRotation(-snappedIndex * theta);
  };

  const handleTouchStart = (e: TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startRotation.current = rotation;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const currentRot = startRotation.current + deltaX * 0.18;
    setRotation(currentRot);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotation]);

  useEffect(() => {
    return () => {
      if (glitchTimeout.current) clearTimeout(glitchTimeout.current);
    };
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 5) {
      e.preventDefault();
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return {
    activeIndex,
    rotation,
    isGlitching,
    handleNext,
    handlePrev,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleMouseUp,
    handleWheel,
  };
}
