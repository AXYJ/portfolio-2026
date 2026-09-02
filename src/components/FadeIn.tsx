"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import React, { createContext, useContext } from "react";

const FadeInStaggerContext = createContext(false);

interface FadeInStaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.2,
  initialDelay = 0.1,
  once = true,
  className,
  viewport,
  variants,
  ...props
}: FadeInStaggerProps) {
  const containerVariants: Variants = variants ?? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport ?? { once }}
        variants={containerVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  variants?: Variants;
}

export default function FadeIn({
  children,
  delay,
  duration = 0.8,
  yOffset = 20,
  once = true,
  className,
  viewport,
  variants,
  ...props
}: FadeInProps) {
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  if (isInStaggerGroup) {
    const childVariants: Variants = variants ?? {
      hidden: { opacity: 0, y: yOffset },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ...(delay !== undefined ? { delay } : {}),
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    return (
      <motion.div variants={childVariants} className={className} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport ?? { once }}
      transition={{
        duration,
        delay: delay ?? 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
