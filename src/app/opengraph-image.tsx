import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Alex Xiao - Web Design & Développeur Web, Bruxelles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accent = "#FF2F00";
const white = "#FFF8F8";

// Satori ne lit pas le woff2 : Switzer converti en ttf (src/fonts/*.ttf)
const font = (file: string): Promise<Buffer> =>
  readFile(join(process.cwd(), "src/fonts", file));

export default async function Image(): Promise<ImageResponse> {
  const [black, medium] = await Promise.all([
    font("Switzer-Black.ttf"),
    font("Switzer-Medium.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        color: accent,
        fontFamily: "Switzer",
        // Même dégradé que le hero, qui s'estompe vers le fond crème
        backgroundColor: "#F8916B",
        backgroundImage: `linear-gradient(to bottom, rgba(255,248,248,0) 20%, ${white} 66%), radial-gradient(ellipse 60% 55% at 50% 30%, ${accent} 0%, rgba(255,47,0,0) 100%), radial-gradient(ellipse 40% 45% at 62% 40%, #FF451A 0%, rgba(255,69,26,0) 100%)`,
      }}
    >
      <div style={{ fontSize: 150, fontWeight: 900, lineHeight: 1 }}>
        ALEX XIAO
      </div>
      <div style={{ fontSize: 44, fontWeight: 500, marginTop: 8 }}>
        Web Design & Développeur Web
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 32,
          fontWeight: 500,
          marginTop: 32,
        }}
      >
        <span>Bruxelles</span>
        <span>xiao-web.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Switzer", data: black, weight: 900, style: "normal" },
        { name: "Switzer", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
