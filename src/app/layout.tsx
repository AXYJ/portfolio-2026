import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiao-web.com"),
  title: {
    default: "Portfolio 2026 | Alex Xiao",
    template: "%s | Alex Xiao",
  },
  description: "Portfolio 2026 | Alex Xiao - Web Design & Développeur Web",
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
    description: "Portfolio 2026 | Alex Xiao - Web Design & Développeur Web",
    url: "https://xiao-web.com",
    siteName: "Portfolio Alex Xiao",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio 2026 | Alex Xiao",
    description: "Portfolio 2026 | Alex Xiao - Web Design & Développeur Web",
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
    "https://www.linkedin.com/in/alex-xiao-12a2bb35b",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): JSX.Element {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-(--white) text-(--accent)">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
