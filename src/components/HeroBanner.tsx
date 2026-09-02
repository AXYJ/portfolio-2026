"use client";

import { motion } from "framer-motion";
import React from "react";

interface HeroBannerProps {
  children: React.ReactNode;
}

export default function HeroBanner({ children }: HeroBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 0.5, delay: 0, ease: "easeInOut" },
      }}
      className="gradient w-full relative overflow-hidden h-[80vh] lg:h-[70vh]"
    >
      {children}
    </motion.div>
  );
}
