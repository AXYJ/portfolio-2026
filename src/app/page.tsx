import Image from "next/image";
import Link from "next/link";
import Gradient from "@/components/Gradient";
import Grain from "@/components/Grain";
import AnimatedWave from "@/components/AnimatedWave";
import Reveal from "@/components/Reveal";
import EmailLink from "@/components/EmailLink";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import ArrowLink from "@/components/ArrowLink";

import { projectDetails } from "@/lib/project-detail";

const menu = [
  { label: "Projets", href: "#projects" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home(): JSX.Element {
  return (
    <>
      <main className="mx-auto flex w-full flex-1 flex-col items-center bg-(--white) sm:items-start">
        <Reveal />
        <Grain />
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
          <FadeIn className="col-span-3 flex flex-col self-end lg:col-span-4">
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black">
              ALEX XIAO
            </h1>
            <span className="-mt-2 text-[clamp(1rem,2vw,1.5rem)] lg:-mt-4">
              Développeur front-end junior : interfaces temps réel et accessibles <br />Disponible pour un CDI à Bruxelles
            </span>
          </FadeIn>
          <FadeInStagger className="col-span-4 grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-2 lg:grid-cols-4">
            <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
              <span className="font-light">Situé à</span>
              <p className="lg:text-xl">Bruxelles</p>
            </FadeIn>
            <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
              <span className="font-light">Langues</span>
              <div className="flex flex-col">
                <p className="lg:text-xl">Français (FR)</p>
                <p className="lg:text-xl">Anglais (EN)</p>
              </div>
            </FadeIn>
            <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
              <span className="font-light">Menu</span>
              <nav aria-label="Menu principal">
                <ul>
                  {menu.map(({ label, href }) => (
                    <li key={href} className="text-xl font-medium">
                      <ArrowLink href={href}>
                        <span>{label}</span>
                      </ArrowLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </FadeIn>
            <FadeIn className="row-span-2 grid grid-rows-subgrid gap-y-0">
              <span aria-hidden="true">&nbsp;</span>
              <ArrowLink
                href="#contact"
                className="h-fit text-start font-medium lg:text-xl"
              >
                Me contacter
              </ArrowLink>
            </FadeIn>
          </FadeInStagger>
        </section>

        <section id="projects">
          <h2>Projets</h2>
          <FadeInStagger className="col-span-4 grid grid-cols-2 gap-x-4 gap-y-16 lg:grid-cols-4">
            {/* Ordre défini dans projectDetails */}
            {projectDetails.map((project) => (
              <FadeIn
                key={project.slug}
                className="col-span-2 grid grid-cols-subgrid gap-y-4"
              >
                <Link
                  className="group relative col-span-2 w-full cursor-pointer overflow-hidden lg:col-span-1"
                  href={`/projects/${project.slug}`}
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={project.thumbnail.src}
                    alt={project.thumbnail.alt}
                    width={1000}
                    height={1000}
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 z-5 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Gradient />
                  </div>
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-xl text-(--white) opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-none lg:text-2xl">
                    En savoir plus
                    <ArrowRight className="size-7" />
                  </span>
                </Link>
                <div className="col-span-2 flex flex-col gap-0 self-end lg:col-span-1">
                  <span>{project.year}</span>
                  <span className="h-fit w-fit text-xl font-semibold lg:text-2xl">
                    {project.title}
                  </span>
                  <ul className="flex flex-wrap gap-x-3 text-base font-light opacity-70">
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="pr-8 text-lg">{project.tagline}</span>
                  <ArrowLink
                    href={`/projects/${project.slug}`}
                    className="hover:opacity-85 mt-4"
                    arrowVisible
                  >
                    En savoir plus
                  </ArrowLink>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </section>

        <section id="about">
          <FadeInStagger className="lg:col-span-4 grid h-full grid-cols-subgrid gap-y-4 lg:gap-y-8">
            <h2>À propos</h2>
            <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-8">
              <div className="lg:col-span-2 flex flex-col gap-2 lg:gap-4">
                <h3>Formations</h3>
                <div className="flex flex-col lg:gap-4">
                  <FadeIn>
                    <p>Techniques graphiques orientation WEB | HEFF</p>
                    <p className="font-light">2023 - 2026 | Bruxelles</p>
                  </FadeIn>
                  <FadeIn>
                    <p>Accessibilité Web | AnySurfer</p>
                    <p className="font-light">2025 | Bruxelles</p>
                  </FadeIn>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-2 lg:gap-4">
                <h3>Expérience</h3>
                <div className="flex flex-col lg:gap-4">
                  <FadeIn>
                    <p>Stage | MindFactory</p>
                    <p className="font-light">2026 | Bruxelles </p>
                    <p>Maintenance de sites clients WordPress (Divi, Elementor)</p>
                    <p>Conception d&apos;un formulaire de déclaration IPP pour un cabinet comptable, avec logique conditionnelle et calculs (Forminator).</p>
                  </FadeIn>
                </div>
              </div>

            </div>

            <div className="col-span-3 flex flex-col gap-2 text-base font-medium lg:col-span-2 lg:gap-4 lg:text-xl">
              <span aria-hidden="true" className="hidden lg:block">
                &nbsp;
              </span>
              <div>
                <FadeIn>
                  Développeur front-end et web designer en Belgique, j&apos;aime
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
          <FadeInStagger className="lg:col-span-4 grid h-full grid-cols-subgrid gap-y-2 lg:gap-y-4">
            <h2>Me contacter</h2>
            <FadeIn className="lg:col-span-4 font-medium">
              <p>
                Un projet en tête, une opportunité au sein de votre équipe ou
                simplement envie d&apos;échanger ? Écrivez-moi !
              </p>
            </FadeIn>
            <FadeIn className="lg:col-span-4">
              <EmailLink className="text-lg font-semibold lg:text-3xl" />
            </FadeIn>
            <FadeIn className="lg:col-span-4">
              <ArrowLink
                href="/cv-alex-xiao.pdf"
                download
                className="text-lg font-semibold lg:text-3xl"
              >
                Télécharger mon CV
              </ArrowLink>
            </FadeIn>
          </FadeInStagger>
        </section>
      </main>

      <Footer page={{ label: "Mentions légales", href: "/mentions-legales" }} />
    </>
  );
}
