import React from "react";
import Grain from "@/components/Grain";
import type { JSX } from "react/jsx-runtime";

interface GradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Gradient({
  children,
  className = "",
}: GradientProps): JSX.Element {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
    >
      {/* Filtre de grain SVG global */}
      <Grain id="grain" baseFrequency="0.5" scale="0.2" />

      {/* Visuel SVG en fond avec dégradés et grain */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          {/* Dégradés radiaux qui s'estompent : remplacent le blur() coûteux */}
          <radialGradient id="grad-center">
            <stop offset="0%" stopColor="#FF2F00" />
            <stop offset="45%" stopColor="#FF2F00" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF2F00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad-1">
            <stop offset="0%" stopColor="#FF2F00" />
            <stop offset="45%" stopColor="#FF2F00" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF2F00" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad-2">
            <stop offset="0%" stopColor="#FF451A" />
            <stop offset="45%" stopColor="#FF451A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF451A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Le groupe 'g' applique le filtre de grain */}
        <g style={{ filter: "url(#grain)" }}>
          {/* Fond */}
          <rect width="100%" height="100%" fill="#F8916B" />

          {/* Ellipse centrale principale */}
          <ellipse
            cx="500"
            cy="300"
            rx="520"
            ry="350"
            fill="url(#grad-center)"
          />

          {/* Formes complémentaires avec flou pour dynamiser le dégradé */}
          <ellipse
            cx="380"
            cy="240"
            rx="330"
            ry="250"
            fill="url(#grad-1)"
          />
          <ellipse
            cx="620"
            cy="360"
            rx="310"
            ry="240"
            fill="url(#grad-2)"
          />
        </g>
      </svg>

      {/* Contenu optionnel au-dessus */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
