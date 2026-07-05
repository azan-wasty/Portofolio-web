"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    // Only animate if the full route changes. 
    // Hash links will not trigger the exit/enter cycle if wrapped correctly.
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Animation only triggers on route change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}