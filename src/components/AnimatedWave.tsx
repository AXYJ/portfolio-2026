import type { JSX } from "react/jsx-runtime";

// Vague statique (le blur est rasterisé une seule fois)
const wavePath: string =
  "M -100 1000 L -100 120 C 139 38 246 59 400 120 C 625 209 750 430 950 410 C 1150 390 1212 292 1292 285 C 1372 279 1427 295 1540 350 L 1540 1000 Z";

export default function AnimatedWave(): JSX.Element {
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
        <path
          d={wavePath}
          fill="url(#waveGrad)"
          style={{ filter: "blur(30px)" }}
        />
      </svg>
    </div>
  );
}
