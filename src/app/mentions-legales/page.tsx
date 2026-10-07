import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import EmailLink from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Mentions Légales & Confidentialité | Alex Xiao",
  description:
    "Mentions légales et politique de confidentialité du portfolio d'Alex Xiao.",
};

export default function MentionsLegales(): JSX.Element {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-1 flex-col items-center bg-(--white)">
      {/* En-tête / Retour */}
      <header className="flex w-full max-w-7xl items-center justify-between px-8 pt-12 pb-6 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-medium transition-all duration-300 hover:-translate-x-1 lg:text-xl"
        >
          <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </header>

      {/* Titre principal */}
      <section className="pt-8 pb-4">
        <div className="col-span-full flex flex-col gap-2">
          <h1 className="text-3xl leading-tight font-black uppercase lg:text-5xl">
            Mentions Légales &amp; Confidentialité
          </h1>
          <p className="text-base font-light opacity-80 lg:text-lg">
            Dernière mise à jour : Mars 2026
          </p>
        </div>
      </section>

      {/* Contenu structuré */}
      <section className="grid w-full grid-cols-1 gap-12 pt-4 pb-16 lg:grid-cols-4 lg:gap-16">
        {/* 1. Éditeur du site */}
        <div className="col-span-2 grid gap-4 lg:col-span-2 lg:gap-8">
          <h2 className="text-2xl font-bold uppercase lg:col-span-1 lg:text-3xl">
            01. Éditeur
          </h2>
          <div className="flex flex-col gap-2 lg:col-span-3">
            <p className="text-lg font-semibold lg:text-xl">Alex Xiao</p>
            <p className="font-light">Web Design &amp; Développeur Web</p>
            <p className="font-light">Localisation : Bruxelles, Belgique</p>
            <p className="font-light">
              Contact :{" "}
              <EmailLink className="font-medium underline underline-offset-4 transition-opacity hover:opacity-80" />
            </p>
          </div>
        </div>

        {/* 2. Hébergement */}
        <div className="col-span-2 grid grid-cols-1 gap-4 lg:col-span-2 lg:gap-8">
          <h2 className="text-2xl font-bold uppercase lg:col-span-1 lg:text-3xl">
            02. Hébergeur
          </h2>
          <div className="flex flex-col gap-2 lg:col-span-3">
            <p className="text-lg font-semibold lg:text-xl">
              Hostinger International Ltd.
            </p>
            <p className="font-light">
              Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
            </p>
            <p className="font-light">
              Site web :{" "}
              <a
                href="https://www.hostinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                https://www.hostinger.com
              </a>
            </p>
          </div>
        </div>

        {/* 3. Propriété intellectuelle */}
        <div className="col-span-2 grid grid-cols-1 gap-4 lg:col-span-4 lg:gap-8">
          <h2 className="text-2xl font-bold uppercase lg:col-span-1 lg:text-3xl">
            03. Propriété
          </h2>
          <div className="flex flex-col gap-4 text-base lg:col-span-3 lg:text-lg">
            <p>
              L&apos;ensemble des éléments composant ce site internet (textes,
              typographies, identités visuelles, maquettes graphiques, images,
              code source et animations) sont la propriété exclusive d&apos;Alex
              Xiao, sauf mention expresse contraire (notamment pour les visuels
              et projets réalisés dans le cadre d&apos;études ou de
              collaborations).
            </p>
            <p>
              Toute reproduction, représentation, diffusion ou adaptation,
              totale ou partielle, sans l&apos;accord écrit préalable de
              l&apos;auteur est strictement interdite et constituerait une
              contrefaçon sanctionnée par le Code de la propriété
              intellectuelle.
            </p>
          </div>
        </div>

        {/* 4. Données personnelles et cookies */}
        <div className="col-span-2 grid grid-cols-1 gap-4 lg:col-span-4 lg:gap-8">
          <h2 className="text-2xl font-bold uppercase lg:col-span-1 lg:text-3xl">
            04. Données &amp; Cookies
          </h2>
          <div className="flex flex-col gap-4 text-base lg:col-span-3 lg:text-lg">
            <div>
              <h3 className="mb-1 text-lg font-semibold lg:text-xl">
                Absence totale de traceurs et cookies tiers
              </h3>
              <p className="font-light">
                Ce site n&apos;utilise aucun cookie de pistage, traceur
                publicitaire ou outil d&apos;analyse statistique tiers (tel que
                Google Analytics). Votre navigation est entièrement anonyme et
                ne nécessite aucun bandeau de consentement préalable.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold lg:text-xl">
                Formulaire et prise de contact
              </h3>
              <p className="font-light">
                Le site ne comporte pas de base de données ni de formulaire
                d&apos;inscription. Le contact s&apos;effectue directement via
                votre client de messagerie électronique. Les données reçues par
                e-mail sont exclusivement utilisées dans le but de répondre à
                vos sollicitations professionnelles et ne sont jamais
                transmises, vendues ou cédées à des tiers.
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold lg:text-xl">
                Vos droits (RGPD)
              </h3>
              <p className="font-light">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous bénéficiez d&apos;un droit d&apos;accès, de
                rectification et de suppression de vos données personnelles
                transmises lors d&apos;un échange. Vous pouvez exercer ce droit
                à tout moment par e-mail à{" "}
                <EmailLink className="font-medium underline underline-offset-4 transition-opacity hover:opacity-80" />
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-x-4 gap-y-2 p-8 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-16 lg:p-16">
        <span className="lg:col-span-2">
          © 2026 Alex Xiao — Tous droits réservés
        </span>
        <span className="lg:text-center">
          <Link href="/" className="underline-offset-4 hover:underline">
            Accueil
          </Link>{" "}
          |{" "}
          <a
            href="https://github.com/AXYJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/alex-xiao-12a2bb35b"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Linkedin
          </a>
        </span>
        <span className="lg:col-span-2 lg:text-end">
          Design &amp; Développement par Alex Xiao
        </span>
      </footer>
    </main>
  );
}
