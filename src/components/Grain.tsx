import type { JSX } from "react/jsx-runtime";

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
    </svg>
  );
}
