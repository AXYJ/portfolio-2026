import { museek } from "@/lib/project-details/museek";
import { rituels } from "./project-details/rituels";

// Page détail projet : types partagés + liste des projets.
// Le contenu de chaque projet est dans src/lib/project-details/<slug>.ts
// Règle d'écriture : 1 à 3 phrases par bloc, des listes plutôt que des paragraphes.
// Les champs optionnels (?) permettent d'alléger la page pour un petit projet.

// ---------- Types ----------

export type Link = {
  label: string;
  href: string;
};

export type Image = {
  src: string;
  alt: string; // obligatoire : accessibilité
};

/** Une comparaison avant / après (maquette → site actuel) */
export type BeforeAfter = {
  title: string;
  before: Image;
  after: Image;
  why: string; // la raison du changement, en une ou deux phrases
};

/** Un défi : problème → essais → solution */
export type Challenge = {
  title: string;
  problem: string;
  steps?: string[]; // essais successifs, une ligne chacun
  solution: string;
};

/** Une vidéo YouTube, chargée seulement au clic sur l'image d'aperçu */
export type Video = {
  title: string;
  text: string; // 1 à 3 phrases
  youtubeId: string; // ex. "Cb2AY2S5HGs"
  poster: Image; // image affichée avant la lecture
};

export type Metric = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  // En-tête
  slug: string;
  title: string;
  tagline: string;
  year: number;
  thumbnail: Image; // vignette carrée de la page d'accueil
  cover: Image;
  links: Link[];
  facts: {
    role: string;
    period: string;
  };
  categories: string[];
  stack: string[];

  // Le pourquoi
  context: {
    problem: string;
    idea: string;
  };
  principles?: { title: string; text: string }[];

  // Le comment
  identity?: {
    intro: string;
    points: { title: string; text: string }[];
    image: Image;
  };
  video?: Video;
  evolution?: BeforeAfter[];
  challenges?: Challenge[];
  workflow?: string; // méthode de travail, usage de l'IA

  // Le résultat
  features?: string[];
  metrics?: Metric[];
  learnings?: string[];
};

// ---------- Projets ----------

// Ordre = ordre de la navigation « projet suivant »
export const projectDetails: ProjectDetail[] = [museek, rituels];
