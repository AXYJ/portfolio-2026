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
  icons: {
    icon: "/favicon.svg",
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

export default function RootLayout({ children }: LayoutProps<"/">): JSX.Element {
  return (
    <html lang="fr" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
