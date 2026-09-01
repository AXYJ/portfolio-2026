import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/Gradient";
import AnimatedWave from "@/components/AnimatedWave";

import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const contact = "[EMAIL_ADDRESS]";
  const projects = getAllProjects();
  const lastProjects = projects.slice(0, 2);

  return (
    <main className="flex flex-1 w-full mx-auto flex-col items-center bg-[var(--white)] sm:items-start">
      <div className="gradient h-[75vh] w-full relative overflow-hidden">
        {/* 1. L'arrière-plan avec dégradé et texture grainée */}
        <Gradient />

        {/* 2. Les 12 rectangles avec blend-mode et flou (6 sur mobile, 12 sur écran moyen/large) */}
        <div className="rectangles absolute inset-0 grid grid-cols-6 md:grid-cols-12 w-full h-full pointer-events-none mix-blend-soft-light blur-xs opacity-70">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full bg-gradient-to-r from-white to-black ${
                i >= 6 ? "hidden md:block" : ""
              }`}
            />
          ))}
        </div>

        {/* 3. La vague SVG animée par-dessus (dégradé transparent -> #FFF8F8) */}
        <AnimatedWave />
      </div>
      <section>
        <div className="myself col-span-3 lg:col-span-2 flex flex-col self-end">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black">
            ALEX XIAO
          </h1>
          <span className="text-[clamp(1rem,2vw,1.5rem)] -mt-2 lg:-mt-4">
            Web Design & Développeur Web
          </span>
        </div>
        <div className="description col-span-3 lg:col-span-2 lg:self-end font-light text-base lg:text-lg">
          <span className="block">
            Développeur front-end et web designer en Belgique, j’aime concevoir
            des interfaces soignées, vivantes et agréables à utiliser.
          </span>
          <span className="block">
            Diplômé récemment, je recherche une équipe avec laquelle collaborer
            sur des projets concrets et continuer à monter en compétences.
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto_1fr] gap-x-8 gap-y-2 col-span-4">
          <div className="location grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Situé à</span>
            <p className="font-medium">Bruxelles</p>
          </div>
          <div className="languages grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Langues</span>
            <div className="flex flex-col">
              <p className="font-medium">Français (FR)</p>
              <p className="font-medium">Anglais (EN)</p>
            </div>
          </div>
          <div className="menu grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Menu</span>
            <ul>
              <li className="font-medium text-xl">
                <a href="#projects">Projets</a>
              </li>
              <li className="font-medium text-xl">
                <a href="#about">À propos</a>
              </li>
              <li className="font-medium text-xl">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="grid row-span-2 grid-rows-subgrid gap-y-0">
            <span aria-hidden="true">&nbsp;</span>
            <button className="font-medium w-fit h-fit lg:text-xl">
              Section suivante
            </button>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projets</h2>
        <div className="grid grid-cols-4 gap-x-8 gap-y-2 col-span-4">
          {/* Boucle pour afficher 2 derniers projets */}
          {lastProjects.map((project) => (
            <article
              key={project.slug}
              className="col-span-2 flex flex-col gap-4"
            >
              <div className="relative overflow-hidden aspect-video w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <div className="overlay absolute inset-0 w-full h-full z-5 bg-(--accent) opacity-0 text-(--white) flex flex-col justify-center items-center">
                  <Gradient />
                </div>
                <Link
                  href={`projects/${project.slug}`}
                  className="en-savoir-plus text-xl lg:text-2xl w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-(--white) opacity-0 blur-xl"
                >
                  En savoir plus
                </Link>
              </div>
              <h4 className="text-xl lg:text-2xl w-fit h-fit font-medium">
                {project.title}
              </h4>
            </article>
          ))}
        </div>
      </section>

      <section id="about">
        <h2>À propos</h2>
        <div className="formations col-span-2 gap-6 flex flex-col">
          <h3>Formations</h3>
          <div className="flex flex-col gap-4">
            <div>
              <p>Techniques graphiques orientation WEB | HEFF</p>
              <p>2023 - 2026 | Bruxelles</p>
            </div>
            <div>
              <p>Stage | MindFactory</p>
              <p>2026 | Bruxelles </p>
            </div>
            <div>
              <p>Accessibilité Web | AnySurfer</p>
              <p>2025 | Bruxelles</p>
            </div>
          </div>
        </div>

        <div className="stacks col-span-2 gap-6 flex flex-col">
          <h3>Outils & Technologies</h3>
          <div className="grid grid-cols-8 gap-4">
            {/* Images des outils */}
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Me contacter</h2>
        <div className="col-span-2">
          <p>Je suis à la recherche constante de projets.</p>
          <p>Si vous êtes partant, n’hésitez pas à me contacter !</p>
        </div>
        <div>
          <a href={`mailto:${contact}`}>{contact}</a>
        </div>
      </section>

      <footer>
        <span className="col-span-2">
          © 2026 Alex Xiao | Tous droits réservés
        </span>
        <span>
          <a href="">Github</a> | <a href="">Linkedin</a>
        </span>
        <span className="whitespace-nowrap">
          Design et développement par Alex Xiao
        </span>
      </footer>
    </main>
  );
}
