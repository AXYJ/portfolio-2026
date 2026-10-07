import type { ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

// L'animation est gérée en CSS (globals.css) et déclenchée par <Reveal />.
export default function FadeIn({
  children,
  className,
}: FadeInProps): JSX.Element {
  return (
    <div data-fade className={className}>
      {children}
    </div>
  );
}

// Les FadeIn d'un groupe apparaissent l'un après l'autre.
export function FadeInStagger({
  children,
  className,
}: FadeInProps): JSX.Element {
  return (
    <div data-fade-group className={className}>
      {children}
    </div>
  );
}
