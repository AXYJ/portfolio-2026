import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio 2026 | Alex Xiao",
  description: "Portfolio 2026 | Alex Xiao - Web Design & Développeur Web",
  icons: {
    icon: "/favicon.svg",
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
