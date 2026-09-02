import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/Gradient";
import AnimatedWave from "@/components/AnimatedWave";
import HeroBanner from "@/components/HeroBanner";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const emailUser = "contact";
  const emailDomain = "xiao-web.com";
  const projects = getAllProjects();
  const lastProjects = projects.slice(0, 2);

  return (
    <main className="flex flex-1 w-full mx-auto flex-col items-center bg-(--white) sm:items-start">
      <HeroBanner>
        {/* 1. L'arrière-plan avec dégradé et texture grainée */}
        <Gradient />

        {/* 2. Les 12 rectangles avec blend-mode et flou (6 sur mobile, 12 sur écran moyen/large) */}
        <div className="rectangles absolute inset-0 grid grid-cols-6 md:grid-cols-12 w-full h-full pointer-events-none mix-blend-soft-light blur-xs opacity-70">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full bg-linear-to-r from-white to-black
                ${i >= 6 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>

        {/* 3. La vague SVG animée par-dessus (dégradé transparent -> #FFF8F8) */}
        <AnimatedWave />
      </HeroBanner>
      <section>
        <FadeIn className="myself col-span-3 lg:col-span-2 flex flex-col self-end">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black">
            ALEX XIAO
          </h1>
          <span className="text-[clamp(1rem,2vw,1.5rem)] -mt-2 lg:-mt-4">
            Web Design & Développeur Web
          </span>
        </FadeIn>
        {/* <div className="description col-span-3 lg:col-span-2 lg:self-end text-base lg:text-lg">
          <span className="block">
            Développeur front-end et web designer en Belgique, j’aime concevoir
            des interfaces soignées, vivantes et agréables à utiliser.
          </span>
          <span className="block">
            Diplômé récemment, je recherche une équipe avec laquelle collaborer
            sur des projets concrets et continuer à monter en compétences.
          </span>
        </div> */}
        <FadeInStagger className="grid grid-cols-2 lg:grid-cols-4 grid-rows-[auto_1fr] gap-x-8 gap-y-2 col-span-4">
          <FadeIn className="location grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Situé à</span>
            <p className="font-medium">Bruxelles</p>
          </FadeIn>
          <FadeIn className="languages grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Langues</span>
            <div className="flex flex-col">
              <p className="font-medium">Français (FR)</p>
              <p className="font-medium">Anglais (EN)</p>
            </div>
          </FadeIn>
          <FadeIn className="menu grid row-span-2 grid-rows-subgrid gap-y-0">
            <span className="font-light">Menu</span>
            <ul>
              <li className="font-medium text-xl">
                <a
                  href="#projects"
                  className="flex items-center gap-2 group hover:-translate-x-1 transition-all duration-300 w-fit"
                >
                  <span>Projets</span>
                  <ArrowRight className="size-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
              <li className="font-medium text-xl">
                <a
                  href="#about"
                  className="flex items-center gap-2 group hover:-translate-x-1 transition-all duration-300 w-fit"
                >
                  <span>À propos</span>
                  <ArrowRight className="size-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
              <li className="font-medium text-xl">
                <a
                  href="#contact"
                  className="flex items-center gap-2 group hover:-translate-x-1 transition-all duration-300 w-fit"
                >
                  <span>Contact</span>
                  <ArrowRight className="size-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </FadeIn>
          <FadeIn className="grid row-span-2 grid-rows-subgrid gap-y-0">
            <span aria-hidden="true">&nbsp;</span>
            <a
              href="#projects"
              className="font-medium h-fit text-start lg:text-xl flex items-center gap-2 group hover:-translate-x-1 transition-all duration-300 w-fit"
            >
              Section suivante
              <ArrowRight className="size-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </FadeIn>
        </FadeInStagger>
      </section>

      <section id="projects">
        <h2>Projets</h2>
        <FadeInStagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 col-span-4">
          {/* Boucle pour afficher 2 derniers projets */}
          {lastProjects.map((project) => (
            <FadeIn
              key={project.slug}
              className="col-span-2 grid grid-cols-subgrid gap-y-4"
            >
              <Link
                className="project-image relative overflow-hidden w-full cursor-pointer col-span-2 lg:col-span-1"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <span className="en-savoir-plus text-xl lg:text-2xl w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-(--white) opacity-0 blur-xl flex items-center justify-center gap-2 group">
                  Voir le site
                  <ArrowRight className="size-7" />
                </span>
              </Link>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-0 self-end cursor-pointer hover:opacity-85 transition-opacity col-span-2 lg:col-span-1"
              >
                <span>{project.year}</span>
                <span className="text-xl lg:text-2xl w-fit h-fit font-semibold">
                  {project.title}
                </span>
                <span className="pr-8 text-lg">{project.description}</span>
              </Link>
            </FadeIn>
          ))}
          {/* <div className="col-span-full flex justify-center pt-4">
            <Link
              href="/projects"
              className="text-lg lg:text-xl font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Voir tous les projets →
            </Link>
          </div> */}
        </FadeInStagger>
      </section>

      <section id="about">
        <FadeInStagger className="h-full grid-cols-subgrid grid col-span-4 gap-y-4 lg:gap-y-8 ">
          <h2>À propos</h2>
          <div className="formations col-span-2 gap-3 lg:gap-6 flex flex-col">
            <h3>Formations</h3>
            <div className="flex flex-col gap-4">
              <FadeIn>
                <p className="font-semibold">
                  Techniques graphiques orientation WEB | HEFF
                </p>
                <p>2023 - 2026 | Bruxelles</p>
              </FadeIn>
              <FadeIn>
                <p className="font-semibold">Stage | MindFactory</p>
                <p>2026 | Bruxelles </p>
              </FadeIn>
              <FadeIn>
                <p className="font-semibold">Accessibilité Web | AnySurfer</p>
                <p>2025 | Bruxelles</p>
              </FadeIn>
            </div>
          </div>

          <div className="description col-span-3 lg:col-span-2 text-base lg:text-xl font-medium flex gap-6 flex-col">
            <span aria-hidden="true" className="hidden lg:block">
              &nbsp;
            </span>
            <div>
              <FadeIn>
                Développeur front-end et web designer en Belgique, j’aime
                concevoir des interfaces soignées, vivantes et agréables à
                utiliser.
              </FadeIn>
              <FadeIn>
                Diplômé récemment, je recherche une équipe avec laquelle
                collaborer sur des projets concrets et continuer à monter en
                compétences.
              </FadeIn>
            </div>
          </div>
        </FadeInStagger>
      </section>

      <section id="contact">
        <FadeInStagger className="h-full grid-cols-subgrid grid col-span-4 gap-y-4 lg:gap-y-8 ">
          <h2>Me contacter</h2>
          <FadeIn className="col-span-3">
            <p>
              Un projet en tête, une opportunité au sein de votre équipe ou
              simplement envie d'échanger ? Écrivez-moi !
            </p>
          </FadeIn>
          <FadeIn className="col-span-2">
            <a
              className="text-lg lg:text-3xl font-semibold"
              href={`mailto:${emailUser}@${emailDomain}`}
            >
              {emailUser} [at] {emailDomain}
            </a>
          </FadeIn>
        </FadeInStagger>
      </section>

      <footer className="grid grid-cols-1 mt-8 lg:grid-cols-5 gap-x-4 lg:gap-x-8 gap-y-2 lg:gap-y-16 w-full -mt-8 p-8 lg:p-16 mx-auto max-w-7xl">
        <span className="lg:col-span-2">
          © 2026 Alex XiaoTous droits réservés
        </span>
        <span className="lg:text-center">
          <a
            href="https://github.com/AXYJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/alex-xiao-12a2bb35b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </span>
        <span className="lg:col-span-2 lg:text-end">
          Design & Développement par Alex Xiao
        </span>
      </footer>
    </main>
  );
}
