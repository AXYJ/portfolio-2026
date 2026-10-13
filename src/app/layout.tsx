import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import "./globals.css";

const description =
  "Développeur front-end et web designer à Bruxelles. Découvrez mes projets web (Next.js, UI/UX) et contactez-moi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiao-web.com"),
  title: {
    default: "Portfolio 2026 | Alex Xiao",
    template: "%s | Alex Xiao",
  },
  description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio 2026 | Alex Xiao",
    description,
    url: "https://xiao-web.com",
    siteName: "Portfolio Alex Xiao",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio 2026 | Alex Xiao",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Xiao",
  url: "https://xiao-web.com",
  jobTitle: "Développeur Web & Web Designer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bruxelles",
    addressCountry: "BE",
  },
  knowsLanguage: ["fr", "en"],
  sameAs: [
    "https://github.com/AXYJ",
    "https://www.linkedin.com/in/alex-xiao-web",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): JSX.Element {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-(--white) text-(--text)">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Sans JS, <Reveal /> ne tourne pas : on affiche tout directement */}
        <noscript>
          <style>{"[data-fade]{opacity:1;translate:none}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
