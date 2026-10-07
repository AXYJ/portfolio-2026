"use client";

import { useSyncExternalStore } from "react";
import type { JSX } from "react/jsx-runtime";

const subscribe = (): (() => void) => () => {};

// Adresse assemblée côté client uniquement : absente du HTML servi aux bots sans JS.
export default function EmailLink({
  className,
}: {
  className?: string;
}): JSX.Element {
  const email: string = useSyncExternalStore(
    subscribe,
    () => ["contact", "xiao-web.com"].join("@"),
    () => "",
  );

  if (!email) {
    return <span className={className}>contact [at] xiao-web [dot] com</span>;
  }

  return (
    <a className={className} href={`mailto:${email}`}>
      {email}
    </a>
  );
}
