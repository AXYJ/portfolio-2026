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
  image: string;
}

export function getAllProjects(): ProjectMetadata[] {
  // 1. Lire tous les noms de fichiers dans le dossier
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // 2. Extraire les métadonnées (data) avec gray-matter
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        year: Number(data.date.slice(6, 10)),
        tags: data.tags || [],
        image: data.image,
      };
    });

  // 3. Trier du plus récent au plus ancien
  return projects.sort((a, b) =>
    new Date(b.date) > new Date(a.date) ? 1 : -1,
  );
}
