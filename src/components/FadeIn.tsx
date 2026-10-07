"use client";

import { motion, Variants } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

const FadeInStaggerContext = createContext(false);

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

export function FadeInStagger({
  children,
  className,
}: FadeInProps): JSX.Element {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className={className}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}

export default function FadeIn({
  children,
  className,
}: FadeInProps): JSX.Element {
  const inStagger: boolean = useContext(FadeInStaggerContext);

  // Dans un groupe, le parent pilote l'animation ; seul, il s'anime à l'apparition.
  return (
    <motion.div
      variants={item}
      {...(!inStagger && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
      })}
      className={className}
    >
      {children}
    </motion.div>
  );
}
