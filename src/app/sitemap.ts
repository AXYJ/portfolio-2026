import type { MetadataRoute } from "next";

// Mettre à jour ces dates uniquement quand le contenu de la page change.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xiao-web.com",
      lastModified: new Date("2026-10-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://xiao-web.com/mentions-legales",
      lastModified: new Date("2026-10-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
