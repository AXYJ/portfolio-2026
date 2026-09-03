import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales & Confidentialité | Alex Xiao",
  description:
    "Mentions légales et politique de confidentialité du portfolio d'Alex Xiao.",
};

export default function MentionsLegales() {
  const emailUser = "contact";
  const emailDomain = "xiao-web.com";

  return (
    <main className="flex flex-1 w-full mx-auto flex-col items-center bg-(--white) min-h-screen">
      {/* En-tête / Retour */}
      <header className="w-full max-w-7xl px-8 pt-12 pb-6 lg:px-16 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 group hover:-translate-x-1 transition-all duration-300 font-medium text-lg lg:text-xl"
        >
          <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Retour à l&apos;accueil</span>
        </Link>
      </header>

      {/* Titre principal */}
      <section className="pt-8 pb-4">
        <div className="col-span-full flex flex-col gap-2">
          <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight">
            Mentions Légales &amp; Confidentialité
          </h1>
          <p className="text-base lg:text-lg opacity-80 font-light">
            Dernière mise à jour : Mars 2026
          </p>
        </div>
      </section>

      {/* Contenu structuré */}
      <section className="pt-4 pb-16 gap-12 lg:gap-16 w-full grid grid-cols-1 lg:grid-cols-4">
        {/* 1. Éditeur du site */}
        <div className="grid gap-4 lg:gap-8 col-span-2 lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase lg:col-span-1">
            01. Éditeur
          </h2>
          <div className="lg:col-span-3 flex flex-col gap-2">
            <p className="font-semibold text-lg lg:text-xl">Alex Xiao</p>
            <p className="font-light">Web Design &amp; Développeur Web</p>
            <p className="font-light">Localisation : Bruxelles, Belgique</p>
            <p className="font-light">
              Contact :{" "}
              <a
                href={`mailto:${emailUser}@${emailDomain}`}
                className="font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {emailUser}@{emailDomain}
              </a>
            </p>
          </div>
        </div>

        {/* 2. Hébergement */}
        <div className="grid grid-cols-1 gap-4 lg:gap-8 col-span-2 lg:col-span-2">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase lg:col-span-1">
            02. Hébergeur
          </h2>
          <div className="lg:col-span-3 flex flex-col gap-2">
            <p className="font-semibold text-lg lg:text-xl">
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
                className="font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                https://www.hostinger.com
              </a>
            </p>
          </div>
        </div>

        {/* 3. Propriété intellectuelle */}
        <div className="grid grid-cols-1 gap-4 lg:gap-8 col-span-2 lg:col-span-4">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase lg:col-span-1">
            03. Propriété
          </h2>
          <div className="lg:col-span-3 flex flex-col gap-4 text-base lg:text-lg">
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
        <div className="grid grid-cols-1 gap-4 lg:gap-8 col-span-2 lg:col-span-4">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase lg:col-span-1">
            04. Données &amp; Cookies
          </h2>
          <div className="lg:col-span-3 flex flex-col gap-4 text-base lg:text-lg">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-1">
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
              <h3 className="text-lg lg:text-xl font-semibold mb-1">
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
              <h3 className="text-lg lg:text-xl font-semibold mb-1">
                Vos droits (RGPD)
              </h3>
              <p className="font-light">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous bénéficiez d&apos;un droit d&apos;accès, de
                rectification et de suppression de vos données personnelles
                transmises lors d&apos;un échange. Vous pouvez exercer ce droit
                à tout moment par e-mail à{" "}
                <a
                  href={`mailto:${emailUser}@${emailDomain}`}
                  className="font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  {emailUser}@{emailDomain}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="grid grid-cols-1 mt-8 lg:grid-cols-5 gap-x-4 lg:gap-x-8 gap-y-2 lg:gap-y-16 w-full p-8 lg:p-16 mx-auto max-w-7xl">
        <span className="lg:col-span-2">
          © 2026 Alex Xiao — Tous droits réservés
        </span>
        <span className="lg:text-center">
          <Link href="/" className="hover:underline underline-offset-4">
            Accueil
          </Link>{" "}
          |{" "}
          <a
            href="https://github.com/AXYJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/alex-xiao-12a2bb35b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
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
