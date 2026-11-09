import type { MetadataRoute } from "next";
import { projectDetails } from "@/lib/project-detail";

// Mettre à jour ces dates uniquement quand le contenu de la page change.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xiao-web.com",
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Une entrée par page projet (Museek, Rituels…), ajoutée dès que le projet est dans projectDetails
    ...projectDetails.map((project) => ({
      url: `https://xiao-web.com/projects/${project.slug}`,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://xiao-web.com/mentions-legales",
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
