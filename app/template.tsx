"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    // Re-trigger glitch animation on route change
    setIsGlitching(true);
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 500); // Matches the 0.5s CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isGlitching ? "page-glitch-enter" : ""}>
      {children}
    </div>
  );
}
