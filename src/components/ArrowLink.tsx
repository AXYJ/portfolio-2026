"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import type { ComponentProps } from "react";
import type { JSX } from "react/jsx-runtime";

// Lien avec flèche qui apparaît au survol (ou toujours visible avec `arrowVisible`)
export default function ArrowLink({
  className = "",
  arrowVisible = false,
  children,
  ...props
}: ComponentProps<"a"> & { arrowVisible?: boolean }): JSX.Element {
  const newTab = props.target === "_blank";
  const Icon = newTab ? ArrowUpRight : ArrowRight;
  const arrowState = arrowVisible
    ? "translate-x-0 opacity-100"
    : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100";

  return (
    <a
      {...props}
      className={`group flex w-fit items-center gap-2 transition-all duration-300 hover:-translate-x-1 ${className}`}
    >
      {children}
      {newTab && <span className="sr-only">(nouvel onglet)</span>}
      <Icon
        aria-hidden="true"
        className={`size-5 transition-all duration-300 ${arrowState}`}
      />
    </a>
  );
}
