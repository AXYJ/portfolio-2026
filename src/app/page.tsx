import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/Gradient";
import AnimatedWave from "@/components/AnimatedWave";
import Reveal from "@/components/Reveal";
import EmailLink from "@/components/EmailLink";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import type { JSX } from "react/jsx-runtime";

import type { project } from "@/lib/projects";
import { projects } from "@/lib/projects";

const menu = [
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const externalLinks = [
  { label: "Github", href: "https://github.com/AXYJ" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/alex-xiao-12a2bb35b",
  },
];

const linkHover = "hover:underline underline-offset-4";

// Lien avec flèche qui apparaît au survol
function ArrowLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <a
      href={href}
      className={`group flex w-fit items-center gap-2 transition-all duration-300 hover:-translate-x-1 ${className}`}
    >
      {children}
      <ArrowRight className="size-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

export default function Home(): JSX.Element {
  const lastProjects: project[] = projects
    .filter((project: project) => project.highlighted)
    .sort(
      (a: project, b: project) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <main className="mx-auto flex w-full flex-1 flex-col items-center bg-(--white) sm:items-start">
      <Reveal />
      <div className="relative h-[65vh] w-full animate-fade-in overflow-hidden lg:h-[40vh]">
        {/* 1. L'arrière-plan avec dégradé et texture grainée */}
        <Gradient />

        {/* 2. Les 12 rectangles avec blend-mode et flou (6 sur mobile, 12 sur écran moyen/large) */}
        <div className="pointer-events-none absolute inset-0 grid h-full w-full grid-cols-6 opacity-70 mix-blend-soft-light blur-xs md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full bg-linear-to-r from-white to-black ${i >= 6 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>

        {/* 3. La vague SVG animée par-dessus (dégradé transparent -> #FFF8F8) */}
        <AnimatedWave />
      </div>
      <section>
        <FadeIn className="col-span-3 flex flex-col self-end lg:col-span-2">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black">
            ALEX XIAO
          </h1>
          <span className="-mt-2 text-[clamp(1rem,2vw,1.5rem)] lg:-mt-4">
            Web Design & Développeur Web
          </span>
        </FadeIn>
        <FadeInStagger className="col-span-4 grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-2 lg:grid-cols-4">
          <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
            <span className="font-light">Situé à</span>
            <p className="font-medium">Bruxelles</p>
          </FadeIn>
          <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
            <span className="font-light">Langues</span>
            <div className="flex flex-col">
              <p className="font-medium">Français (FR)</p>
              <p className="font-medium">Anglais (EN)</p>
            </div>
          </FadeIn>
          <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
            <span className="font-light">Menu</span>
            <ul>
              {menu.map(({ label, href }) => (
                <li key={href} className="text-xl font-medium">
                  <ArrowLink href={href}>
                    <span>{label}</span>
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
            <span aria-hidden="true">&nbsp;</span>
            <ArrowLink
              href="#projects"
              className="h-fit text-start font-medium lg:text-xl"
            >
              Section suivante
            </ArrowLink>
          </FadeIn>
        </FadeInStagger>
      </section>

      <section id="projects">
        <h2>Projets</h2>
        <FadeInStagger className="col-span-4 grid grid-cols-2 gap-x-4 gap-y-16 lg:grid-cols-4">
          {/* Boucle pour afficher 2 derniers projets */}
          {lastProjects.map((project: project) => (
            <FadeIn
              key={project.slug}
              className="col-span-2 grid grid-cols-subgrid gap-y-4"
            >
              <Link
                className="group relative col-span-2 w-full cursor-pointer overflow-hidden lg:col-span-1"
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
                <div className="absolute inset-0 z-5 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Gradient />
                </div>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-xl text-(--white) opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-none lg:text-2xl">
                  Voir le site
                  <ArrowRight className="size-7" />
                </span>
              </Link>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex cursor-pointer flex-col gap-0 self-end transition-opacity hover:opacity-85 lg:col-span-1"
              >
                <span>{project.year}</span>
                <span className="h-fit w-fit text-xl font-semibold lg:text-2xl">
                  {project.title}
                </span>
                <span className="pr-8 text-lg">{project.description}</span>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </section>

      <section id="about">
        <FadeInStagger className="col-span-4 grid h-full grid-cols-subgrid gap-y-4 lg:gap-y-8">
          <h2>À propos</h2>
          <div className="col-span-2 flex flex-col gap-3 lg:gap-6">
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

          <div className="col-span-3 flex flex-col gap-6 text-base font-medium lg:col-span-2 lg:text-xl">
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
        <FadeInStagger className="col-span-4 grid h-full grid-cols-subgrid gap-y-4 lg:gap-y-8">
          <h2>Me contacter</h2>
          <FadeIn className="col-span-3">
            <p>
              Un projet en tête, une opportunité au sein de votre équipe ou
              simplement envie d&apos;échanger ? Écrivez-moi !
            </p>
          </FadeIn>
          <FadeIn className="col-span-2">
            <EmailLink className="text-lg font-semibold lg:text-3xl" />
          </FadeIn>
        </FadeInStagger>
      </section>

      <footer className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-x-4 gap-y-2 p-8 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-16 lg:p-16">
        <span className="lg:col-span-2">
          © 2026 Alex Xiao — Tous droits réservés
        </span>
        <span className="col-span-1 lg:col-span-2 lg:text-center">
          {externalLinks.map(({ label, href }) => (
            <Fragment key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkHover}
              >
                {label}
              </a>{" "}
              |{" "}
            </Fragment>
          ))}
          <Link href="/mentions-legales" className={linkHover}>
            Mentions légales
          </Link>
        </span>
        <span className="lg:col-span-2 lg:text-end">
          Design & Développement par Alex Xiao
        </span>
      </footer>
    </main>
  );
}
