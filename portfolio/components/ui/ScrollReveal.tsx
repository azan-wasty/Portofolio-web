"use client";

import { useEffect, useRef, useState } from "react";
import type { ScrollRevealProps } from "@/types/ui";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = window.setTimeout(
            () => setIsVisible(true),
            delay
          );
          observer.disconnect();
          return () => window.clearTimeout(timeout);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={`scroll-reveal ${className}`}
    >
      {children}
    </div>
  );
}