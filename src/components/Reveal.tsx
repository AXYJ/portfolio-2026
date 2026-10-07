"use client";

import { useEffect } from "react";

// Révèle les [data-fade] quand ils entrent à l'écran (et décale ceux d'un groupe).
export default function Reveal(): null {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.setAttribute("data-visible", "");
        observer.unobserve(target);
      });
    });

    document
      .querySelectorAll<HTMLElement>("[data-fade-group]")
      .forEach((group) => {
        group
          .querySelectorAll<HTMLElement>("[data-fade]")
          .forEach((item, i) => {
            item.style.transitionDelay = `${0.1 + i * 0.2}s`;
          });
        observer.observe(group);
      });
    document
      .querySelectorAll("[data-fade]:not([data-fade-group] [data-fade])")
      .forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
