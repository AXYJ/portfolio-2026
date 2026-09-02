import React from "react";
import Grain from "@/components/Grain";

interface GradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Gradient({ children, className = "" }: GradientProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
    >
      {/* Filtre de grain SVG global */}
      <Grain id="grain" baseFrequency="0.5" scale="0.2" />

      {/* Styles d'animation fluide et infinie (GPU-accéléré) */}
      <style>{`
        @keyframes drift-1 {
          0% {
            transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
          }
          20% {
            transform: translate(50px, -35px) rotate(14deg) scale(1.08, 0.94);
          }
          40% {
            transform: translate(-40px, 45px) rotate(-10deg) scale(0.95, 1.1);
          }
          60% {
            transform: translate(35px, 40px) rotate(18deg) scale(1.06, 0.96);
          }
          80% {
            transform: translate(-45px, -30px) rotate(-8deg) scale(0.94, 1.04);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
          }
        }

        @keyframes drift-2 {
          0% {
            transform: translate(0px, 0px) rotate(-15deg) scale(1, 1);
          }
          25% {
            transform: translate(-70px, 55px) rotate(20deg) scale(1.16, 0.86);
          }
          50% {
            transform: translate(75px, -45px) rotate(-35deg) scale(0.88, 1.18);
          }
          75% {
            transform: translate(-40px, -60px) rotate(10deg) scale(1.12, 0.92);
          }
          100% {
            transform: translate(0px, 0px) rotate(-15deg) scale(1, 1);
          }
        }

        @keyframes drift-3 {
          0% {
            transform: translate(0px, 0px) rotate(20deg) scale(1, 1);
          }
          20% {
            transform: translate(70px, -55px) rotate(-15deg) scale(0.9, 1.15);
          }
          45% {
            transform: translate(-75px, 35px) rotate(45deg) scale(1.18, 0.88);
          }
          70% {
            transform: translate(55px, 65px) rotate(5deg) scale(0.94, 1.12);
          }
          85% {
            transform: translate(-35px, -40px) rotate(30deg) scale(1.08, 0.95);
          }
          100% {
            transform: translate(0px, 0px) rotate(20deg) scale(1, 1);
          }
        }

        .animate-ellipse-1 {
          transform-box: fill-box;
          transform-origin: center;
          animation: drift-1 5s ease-in-out infinite;
          will-change: transform;
        }

        .animate-ellipse-2 {
          transform-box: fill-box;
          transform-origin: center;
          animation: drift-2 3s ease-in-out infinite;
          will-change: transform;
        }

        .animate-ellipse-3 {
          transform-box: fill-box;
          transform-origin: center;
          animation: drift-3 8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* Visuel SVG en fond avec dégradés et grain */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          <radialGradient
            id="grad-center"
            cx="50%"
            cy="50%"
            r="60%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#FF2F00" />
            <stop offset="100%" stopColor="#F8916B" />
          </radialGradient>
          <linearGradient id="grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2F00" />
            <stop offset="100%" stopColor="#F8916B" />
          </linearGradient>
          <linearGradient id="grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF451A" />
            <stop offset="100%" stopColor="#F8916B" />
          </linearGradient>
        </defs>

        {/* Le groupe 'g' applique le filtre de grain */}
        <g style={{ filter: "url(#grain)" }}>
          {/* Fond */}
          <rect width="100%" height="100%" fill="#F8916B" />

          {/* Ellipse centrale principale remplaçant le radial-gradient */}
          <ellipse
            className="animate-ellipse-1"
            cx="500"
            cy="300"
            rx="450"
            ry="280"
            fill="url(#grad-center)"
            style={{
              filter: "blur(60px)",
            }}
          />

          {/* Formes complémentaires avec flou pour dynamiser le dégradé */}
          <ellipse
            className="animate-ellipse-2"
            cx="380"
            cy="240"
            rx="260"
            ry="180"
            fill="url(#grad-1)"
            style={{
              filter: "blur(70px)",
            }}
          />
          <ellipse
            className="animate-ellipse-3"
            cx="620"
            cy="360"
            rx="240"
            ry="170"
            fill="url(#grad-2)"
            style={{
              filter: "blur(65px)",
            }}
          />
        </g>
      </svg>

      {/* Contenu optionnel au-dessus */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
