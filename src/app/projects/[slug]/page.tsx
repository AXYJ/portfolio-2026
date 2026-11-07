import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { JSX } from "react/jsx-runtime";
import Reveal from "@/components/Reveal";
import Grain from "@/components/Grain";
import Gradient from "@/components/Gradient";
import AnimatedWave from "@/components/AnimatedWave";
import { projectDetails } from "@/lib/project-detail";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { FadeInStagger } from "@/components/FadeIn";
import FadeIn from "@/components/FadeIn";
import EmailLink from "@/components/EmailLink";
import ArrowLink from "@/components/ArrowLink";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `/projects/${project.slug}`;
  const images = [{ url: project.cover.src, alt: project.cover.alt }];
  // openGraph/twitter replace the layout's objects instead of merging, so shared fields are repeated
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Alex Xiao`,
      description: project.tagline,
      url,
      siteName: "Portfolio Alex Xiao",
      locale: "fr_FR",
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Alex Xiao`,
      description: project.tagline,
      images,
    },
  };
}

export default async function Project({ params }: Props): Promise<JSX.Element> {
  const { slug } = await params;
  const index = projectDetails.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projectDetails[index];
  // Wraps around: the last project links back to the first one
  const next = projectDetails[(index + 1) % projectDetails.length];

  return (
    <main className="mx-auto flex w-full flex-1 flex-col items-center bg-(--white) sm:items-start">
      <Reveal />
      <Grain />
      <div className="relative h-24 w-full animate-fade-in overflow-hidden">
        <Gradient />
        <div className="pointer-events-none absolute inset-0 grid h-full w-full grid-cols-6 opacity-70 mix-blend-soft-light blur-xs md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`h-full bg-linear-to-r from-white to-black ${i >= 6 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>
        <AnimatedWave />
      </div>

      {/* Voir autres projets */}
      <nav
        aria-label="Navigation entre projets"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 pt-8 text-lg font-medium lg:px-16 lg:text-xl"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform duration-300 hover:-translate-x-1"
        >
          <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Accueil
        </Link>
      </nav>

      {/* Titre et tagline */}
      <section data-fade-group className="flex flex-col gap-0 lg:pb-0">
        <h1 data-fade className="text-4xl font-black lg:text-6xl">
          {project.title}
        </h1>
        <p data-fade>{project.tagline}</p>
      </section>

      {/* Introduction */}
      <section data-fade-group className="gap-x-4 lg:grid-cols-12">
        <Image
          data-fade
          src={project.cover.src}
          alt={project.cover.alt}
          width={1000}
          height={1000}
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="h-full w-full object-contain lg:col-span-3 lg:col-start-2"
        ></Image>
        <div className="flex flex-col gap-4 lg:col-span-7 lg:col-start-6">
          <div data-fade>
            <span className="text-xl font-semibold text-(--accent) lg:text-2xl">
              {project.facts.role}
            </span>
            <p className="text-xl text-(--accent) lg:text-2xl">
              {project.facts.period}
            </p>
          </div>
          <div data-fade className="grid gap-2 lg:grid-cols-2 lg:gap-8">
            <p className="text-base font-light">
              {project.categories.join(", ")}
            </p>
            <p className="text-base font-light">{project.stack.join(", ")}</p>
          </div>
          <div data-fade className="flex flex-col gap-2">
            <p className="text-base">{project.context.problem}</p>
            <p className="text-base">{project.context.idea}</p>
          </div>
          <ul
            data-fade
            className="flex flex-col lg:flex-row lg:justify-between"
          >
            {project.links.map((extLink) => (
              <li key={extLink.href}>
                <ArrowLink
                  href={extLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  arrowVisible
                >
                  {extLink.label}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principes et metrics */}
      {project.metrics && project.principles && (
        <section data-fade-group className="gap-16">
          <h2 className="sr-only">Principes et chiffres clés</h2>
          <div className="flex flex-col gap-4 lg:col-span-3">
            {project.principles.map((princ) => {
              return (
                <div data-fade key={princ.title}>
                  <h3 className="text-xl font-semibold text-(--text) normal-case lg:text-xl">
                    {princ.title}
                  </h3>
                  <p>{princ.text}</p>
                </div>
              );
            })}
          </div>
          <dl className="flex flex-col gap-4 text-center lg:col-start-4 lg:text-left">
            {project.metrics.map((metric, i) => {
              return (
                <div data-fade key={i}>
                  <dt>{metric.label}</dt>
                  <dd className="text-xl font-semibold text-(--accent) lg:text-2xl">
                    {metric.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      )}

      {/* Features */}
      {project.features && (
        <section data-fade-group className="gap-4">
          <h2 data-fade className="lg:col-start-2">
            Features
          </h2>
          <ul className="flex flex-col gap-2 lg:col-span-3 lg:col-start-2">
            {project.features.map((feat, i) => {
              return (
                <li data-fade key={i}>
                  {feat}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Identité visuelle */}
      {project.identity && (
        <section data-fade-group className="lg:grid-cols-12">
          <h2 data-fade className="lg:col-span-5">
            Identité visuelle
          </h2>
          <Image
            data-fade
            src={project.identity.image?.src}
            alt={project.identity.image?.alt}
            width={1000}
            height={500}
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="h-full w-full object-cover lg:col-span-7 lg:col-start-6"
          ></Image>
          <p data-fade className="lg:col-span-6">
            {project.identity.intro}
          </p>
          {project.identity.points.map((point) => {
            return (
              <p data-fade key={point.title} className="lg:col-span-6">
                {point.text}
              </p>
            );
          })}
          {/* Rajouter plus de texte */}
        </section>
      )}

      {/* Évolution visuelle */}
      {project.evolution && (
        <section data-fade-group>
          <h2 data-fade>Évolution visuelle</h2>
          <div className="grid gap-16 lg:col-span-4 lg:grid-cols-2">
            {project.evolution.map((evo) => {
              return (
                <div
                  data-fade
                  key={evo.title}
                  className="flex flex-col gap-2 lg:gap-4"
                >
                  <h3>{evo.title}</h3>
                  <div className="flex flex-col gap-2 lg:flex-row lg:gap-0">
                    <Image
                      src={evo.before.src}
                      alt={evo.before.alt}
                      width={1000}
                      height={1000}
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="h-full w-full object-cover"
                    ></Image>
                    <Image
                      src={evo.after.src}
                      alt={evo.after.alt}
                      width={1000}
                      height={1000}
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="h-full w-full object-cover"
                    ></Image>
                  </div>
                  <p>{evo.why}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Challenge */}
      {project.challenges && (
        <section data-fade-group>
          <h2 data-fade>Challenges</h2>

          {project.challenges.map((chall) => {
            return (
              <div
                key={chall.title}
                className="flex flex-col gap-2 lg:col-span-4 lg:grid lg:grid-cols-subgrid lg:gap-4"
              >
                <h3 data-fade className="lg:col-span-4">
                  {chall.title}
                </h3>
                <div
                  data-fade
                  className="lg:col-span-4 lg:grid lg:grid-cols-subgrid"
                >
                  <h4 className="text-xl font-semibold text-(--accent)">
                    Problématique
                  </h4>
                  <p className="lg:col-span-3 lg:text-base">{chall.problem}</p>
                </div>
                <div
                  data-fade
                  className="lg:col-span-4 lg:grid lg:grid-cols-subgrid"
                >
                  <h4 className="text-xl font-semibold text-(--accent)">
                    Étapes
                  </h4>
                  <div className="flex flex-col gap-2 lg:col-span-3">
                    {chall.steps?.map((step) => {
                      return (
                        <p key={step} className="lg:text-base">
                          {step}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div
                  data-fade
                  className="lg:col-span-4 lg:grid lg:grid-cols-subgrid"
                >
                  <h4 className="text-xl font-semibold text-(--accent)">
                    Solution
                  </h4>
                  <p className="lg:col-span-3 lg:text-base">{chall.solution}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {/* Workflow */}
      {project.workflow && (
        <section>
          <h2 className="sr-only">Workflow</h2>
          <p data-fade className="lg:col-span-3 lg:col-start-2">
            {project.workflow}
          </p>
        </section>
      )}

      {/* Learning */}
      {project.learnings && (
        <section data-fade-group>
          <h2 data-fade className="lg:text-center">
            Enseignements
          </h2>
          <div className="col-span-full flex flex-col justify-around gap-4 lg:flex-row">
            {project.learnings.map((learn, i) => {
              return (
                <p data-fade key={i} className="text-center">
                  {learn}
                </p>
              );
            })}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact">
        <FadeInStagger className="col-span-4 grid h-full grid-cols-subgrid gap-y-2 lg:gap-y-4">
          <h2>Me contacter</h2>
          <FadeIn className="col-span-4">
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

      {/* Voir autres projets */}
      <nav
        aria-label="Navigation entre projets"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 text-lg font-medium lg:px-16 lg:text-xl"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 transition-transform duration-300 hover:-translate-x-1"
        >
          <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Accueil
        </Link>
        {next !== project && (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-2 text-end transition-transform duration-300 hover:translate-x-1"
          >
            {next.title}
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </nav>

      <Footer page={{ label: "Mentions légales", href: "/mentions-legales" }} />
    </main>
  );
}
