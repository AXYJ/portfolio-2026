export type project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: number;
  tags: string[];
  url: string;
  image: string;
  highlighted: boolean;
}

export const projects: project[] = [
  {
    slug: "rituels",
    title: "Rituels",
    description: "Jeu de cartes tactique en ligne : déchiffrez les règles cachées à chaque manche et soyez le premier à atteindre le quota de graines",
    date: "2026-06-18",
    year: 2026,
    tags: ["UI/UX", "Next.js", "Tailwind CSS", "Node.js", "Websockets"],
    url: "https://rituels.xiao-web.com",
    image: "/img/rituels.webp",
    highlighted: true,
  },
  {
    slug: "museek",
    title: "Museek",
    description: "L'expérience du blindtest réinventée : affrontez vos amis en direct sur vos morceaux préférés",
    date: "2026-08-28",
    year: 2026,
    tags: ["UI/UX", "Next.js", "Tailwind CSS", "Node.js", "Websockets"],
    url: "https://museek.xiao-web.com",
    image: "/img/museek.webp",
    highlighted: true,
  },
];
