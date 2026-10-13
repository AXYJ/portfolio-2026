import Link from "next/link";
import { Fragment } from "react";
import type { JSX } from "react/jsx-runtime";

const externalLinks = [
  { label: "Github", href: "https://github.com/AXYJ" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/alex-xiao-web" },
];

const linkHover = "hover:underline underline-offset-4";

// `page` : lien interne affiché après les réseaux (mentions légales ou accueil).
export default function Footer({
  page,
}: {
  page: { label: string; href: string };
}): JSX.Element {
  return (
    <footer className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-x-4 gap-y-2 p-8 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-16 lg:p-16">
      <span className="lg:col-span-2">
        © 2026 Alex Xiao — Tous droits réservés
      </span>
      <span className="lg:col-span-2 lg:text-center">
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
        <Link href={page.href} className={linkHover}>
          {page.label}
        </Link>
      </span>
      <span className="lg:col-span-2 lg:text-end">
        Design & Développement par Alex Xiao
      </span>
    </footer>
  );
}
