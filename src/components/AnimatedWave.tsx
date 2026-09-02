"use client";

import { motion } from "framer-motion";

// Différentes étapes de la vague créant une onde fluide qui se propage
const waveKeyframes = [
  // Étape 1 : Position de base
  "M -100 1000 L -100 120 C 139 38 246 59 400 120 C 625 209 750 430 950 410 C 1150 390 1212 292 1292 285 C 1372 279 1427 295 1540 350 L 1540 1000 Z",
  // Étape 2 : L'onde avance et se déforme vers la droite
  "M -100 1000 L -100 150 C 160 85 270 30 420 85 C 650 160 720 465 930 435 C 1120 410 1240 260 1310 265 C 1385 270 1450 330 1540 320 L 1540 1000 Z",
  // Étape 3 : Creux et crêtes inversés
  "M -100 1000 L -100 95 C 120 15 230 90 380 145 C 600 240 780 395 970 375 C 1170 355 1190 315 1275 305 C 1355 295 1410 265 1540 375 L 1540 1000 Z",
  // Étape 4 : Deuxième phase d'ondulation
  "M -100 1000 L -100 135 C 150 55 260 38 410 105 C 640 185 740 445 940 425 C 1140 400 1225 275 1300 275 C 1365 275 1435 310 1540 335 L 1540 1000 Z",
  // Étape 5 : Retour fluide au départ (boucle parfaite)
  "M -100 1000 L -100 120 C 139 38 246 59 400 120 C 625 209 750 430 950 410 C 1150 390 1212 292 1292 285 C 1372 279 1427 295 1540 350 L 1540 1000 Z",
];

export default function AnimatedWave() {
  return (
    <div className="transition absolute bottom-0 left-0 w-full h-1/2 lg:h-3/4 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient
            id="waveGrad"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="120"
            x2="0"
            y2="600"
          >
            <stop offset="0%" stopColor="#FFF8F8" stopOpacity="0" />
            <stop offset="90%" stopColor="#FFF8F8" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d={waveKeyframes[0]}
          animate={{
            d: waveKeyframes,
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          fill="url(#waveGrad)"
          style={{ filter: "blur(30px)" }}
        />
      </svg>
    </div>
  );
}
