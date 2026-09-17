"use client";

import { motion } from "framer-motion";
import React from "react";
import type { JSX } from "react/jsx-runtime";

interface HeroBannerProps {
  children: React.ReactNode;
}

export default function HeroBanner({ children }: HeroBannerProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.5, delay: 0, ease: "easeInOut" },
      }}
      className="gradient w-full relative overflow-hidden h-[65vh] lg:h-[40vh]"
    >
      {children}
    </motion.div>
  );
}
