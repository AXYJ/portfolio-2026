import type { JSX } from "react/jsx-runtime";

// Utilise les définitions (#grain, #grad-a, #grad-b) rendues par <Grain />.
export default function Gradient(): JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <g style={{ filter: "url(#grain)" }}>
          <rect width="100%" height="100%" fill="#F8916B" />
          <ellipse cx="500" cy="300" rx="520" ry="350" fill="url(#grad-a)" />
          <ellipse cx="380" cy="240" rx="330" ry="250" fill="url(#grad-a)" />
          <ellipse cx="620" cy="360" rx="310" ry="240" fill="url(#grad-b)" />
        </g>
      </svg>
    </div>
  );
}
