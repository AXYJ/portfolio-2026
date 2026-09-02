import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Chemin absolu vers le dossier contenant les fichiers MDX
const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: number;
  tags: string[];
  url: string;
  image: string;
}

export interface Project extends ProjectMetadata {
  content: string;
}

export function getAllProjects(): ProjectMetadata[] {
  // 1. Lire tous les noms de fichiers dans le dossier
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // 2. Extraire les métadonnées (data) avec gray-matter
      const { data } = matter(fileContents);

      const year = data.date?.includes("-")
        ? Number(data.date.split("-").pop()) ||
          Number(data.date.split("-")[0]) ||
          2026
        : 2026;

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        year,
        tags: data.tags || [],
        image: data.image || "/img/placeholder.png",
        url: data.url || "#",
      };
    });

  // 3. Trier du plus récent au plus ancien
  return projects.sort((a, b) =>
    new Date(b.date) > new Date(a.date) ? -1 : 1,
  );
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const year = data.date?.includes("-")
      ? Number(data.date.split("-").pop()) ||
        Number(data.date.split("-")[0]) ||
        2026
      : 2026;

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      year,
      tags: data.tags || [],
      image: data.image || "/img/placeholder.png",
      url: data.url || "#",
      content,
    };
  } catch {
    return null;
  }
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectMetadata | null;
  next: ProjectMetadata | null;
} {
  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: currentIndex > 0 ? all[currentIndex - 1] : null,
    next: currentIndex < all.length - 1 ? all[currentIndex + 1] : null,
  };
}
