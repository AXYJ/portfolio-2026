"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

export default function HeroBanner({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative h-[65vh] w-full overflow-hidden lg:h-[40vh]"
    >
      {children}
    </motion.div>
  );
}
