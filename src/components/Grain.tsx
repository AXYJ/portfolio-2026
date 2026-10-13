import type { JSX } from "react/jsx-runtime";

// Dégradés radiaux qui s'estompent (remplacent un blur() coûteux)
const gradients: [id: string, color: string][] = [
  ["grad-a", "#FF2F00"],
  ["grad-b", "#FF451A"],
];

// Définitions SVG partagées par tous les <Gradient /> : à rendre une seule fois par page.
export default function Grain(): JSX.Element {
  return (
    <svg
      className="pointer-events-none fixed top-0 left-0"
      width="0"
      height="0"
      aria-hidden="true"
    >
      <filter
        id="grain"
        colorInterpolationFilters="sRGB"
        primitiveUnits="objectBoundingBox"
      >
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" />
        <feDisplacementMap
          in="SourceGraphic"
          scale="0.2"
          xChannelSelector="R"
        />
        <feBlend in2="SourceGraphic" />
      </filter>
      {gradients.map(([id, color]) => (
        <radialGradient key={id} id={id}>
          <stop offset="0%" stopColor={color} />
          <stop offset="45%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      ))}
    </svg>
  );
}
