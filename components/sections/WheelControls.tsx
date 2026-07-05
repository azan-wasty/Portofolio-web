interface WheelControlsProps {
  activeIndex: number;
  totalItems: number;
  handlePrev: () => void;
  handleNext: () => void;
}

export function WheelControls({ activeIndex, totalItems, handlePrev, handleNext }: WheelControlsProps) {
  return (
    <div className="mt-4 flex items-center gap-6 z-10">
      <button
        onClick={handlePrev}
        className="flex h-10 w-10 items-center justify-center bg-void-raised text-signal-yellow font-mono text-lg active:bg-void transition-colors"
        style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", backgroundColor: "var(--color-void-line)" }}
        aria-label="Previous Project"
      >
        <span className="flex h-[36px] w-[36px] items-center justify-center bg-void-raised hover:bg-void" style={{ clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)" }}>
          &lt;
        </span>
      </button>

      <div className="flex h-1 w-48 bg-void-line relative overflow-hidden" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
        <div
          className="h-full bg-signal-yellow transition-all duration-300"
          style={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }}
        />
      </div>

      <button
        onClick={handleNext}
        className="flex h-10 w-10 items-center justify-center bg-void-raised text-signal-yellow font-mono text-lg active:bg-void transition-colors"
        style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", backgroundColor: "var(--color-void-line)" }}
        aria-label="Next Project"
      >
        <span className="flex h-[36px] w-[36px] items-center justify-center bg-void-raised hover:bg-void" style={{ clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)" }}>
          &gt;
        </span>
      </button>
    </div>
  );
}
