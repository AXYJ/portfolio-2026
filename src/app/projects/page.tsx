// import Image from "next/image";
// import Link from "next/link";
// import Gradient from "@/components/Gradient";
// import AnimatedWave from "@/components/AnimatedWave";
// import { getAllProjects } from "@/lib/projects";

// export const metadata = {
//   title: "Projets | Alex Xiao",
//   description: "Découvrez tous les projets et réalisations d'Alex Xiao en web design et développement web.",
// };

// export default function ProjectsPage() {
//   const contact = "[EMAIL_ADDRESS]";
//   const projects = getAllProjects();

//   return (
//     <main className="flex flex-1 w-full mx-auto flex-col items-center bg-(--white) sm:items-start">
//       {/* 1. Bannière haute avec dégradé animé, rectangles et vague */}
//       <div className="gradient h-[45vh] lg:h-[55vh] w-full relative overflow-hidden">
//         <Gradient />

//         <div className="rectangles absolute inset-0 grid grid-cols-6 md:grid-cols-12 w-full h-full pointer-events-none mix-blend-soft-light blur-xs opacity-70">
//           {Array.from({ length: 12 }).map((_, i) => (
//             <div
//               key={i}
//               className={`h-full bg-linear-to-r from-white to-black ${
//                 i >= 6 ? "hidden md:block" : ""
//               }`}
//             />
//           ))}
//         </div>

//         <AnimatedWave />
//       </div>

//       {/* 2. Navigation et En-tête de la page */}
//       <section className="-mt-12 lg:-mt-16">
//         <div className="col-span-full flex flex-col gap-6">
//           <nav className="flex items-center justify-between w-full">
//             <Link
//               href="/"
//               className="inline-flex items-center gap-2 font-medium text-lg lg:text-xl hover:opacity-75 transition-opacity"
//             >
//               <span>←</span>
//               <span>Retour à l&apos;accueil</span>
//             </Link>

//             <span className="text-sm lg:text-base font-light tracking-wide uppercase">
//               {projects.length.toString().padStart(2, "0")} {projects.length > 1 ? "Projets" : "Projet"}
//             </span>
//           </nav>

//           <div className="flex flex-col gap-2 pt-4">
//             <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight">
//               TOUS LES PROJETS
//             </h1>
//             <p className="max-w-2xl text-base lg:text-lg opacity-90">
//               Une sélection de mes travaux récents en design d&apos;interface,
//               développement web interactif et applications en temps réel.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 3. Grille complète des projets */}
//       <section id="projects-list" className="pt-0">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 col-span-full w-full">
//           {projects.map((project) => (
//             <article
//               key={project.slug}
//               className="flex flex-col gap-4 cursor-pointer group"
//             >
//               {/* Image & Overlay interactif */}
//               <div className="relative overflow-hidden aspect-video w-full rounded-sm bg-neutral-100">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={1000}
//                   height={1000}
//                   className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
//                 />
//                 <div className="overlay absolute inset-0 w-full h-full z-5 bg-(--accent) opacity-0 text-(--white) flex flex-col justify-center items-center">
//                   <Gradient />
//                 </div>
//                 <Link
//                   href={`/projects/${project.slug}`}
//                   className="en-savoir-plus text-xl lg:text-2xl w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-(--white) opacity-0 blur-xl font-medium"
//                 >
//                   En savoir plus
//                 </Link>
//               </div>

//               {/* Détails du projet */}
//               <div className="flex flex-col gap-2">
//                 <div className="flex items-center justify-between gap-4">
//                   <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">
//                     <Link
//                       href={`/projects/${project.slug}`}
//                       className="hover:underline underline-offset-4"
//                     >
//                       {project.title}
//                     </Link>
//                   </h2>
//                   {project.year && (
//                     <span className="text-sm lg:text-base font-light opacity-80 shrink-0">
//                       {project.year}
//                     </span>
//                   )}
//                 </div>

//                 {project.description && (
//                   <p className="text-sm lg:text-base opacity-85 line-clamp-2">
//                     {project.description}
//                   </p>
//                 )}

//                 {project.tags && project.tags.length > 0 && (
//                   <div className="flex flex-wrap gap-2 pt-1">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-xs lg:text-sm px-2.5 py-0.5 rounded-full border border-current opacity-75 font-light"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* 4. Section Contact Rapide */}
//       <section id="contact" className="pt-8 border-t border-current/10">
//         <h2>Un projet en tête ?</h2>
//         <div className="col-span-2">
//           <p>Je suis toujours ouvert à de nouvelles opportunités et collaborations.</p>
//           <p>N&apos;hésitez pas à m&apos;écrire pour en discuter !</p>
//         </div>
//         <div className="flex items-center">
//           <a
//             href={`mailto:${contact}`}
//             className="text-lg lg:text-xl font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
//           >
//             {contact}
//           </a>
//         </div>
//       </section>

//       {/* 5. Footer */}
//       <footer className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-16 w-full -mt-8 p-8 lg:p-16 mx-auto max-w-7xl border-t border-current/10">
//         <span className="lg:col-span-2">
//           © 2026 Alex Xiao | Tous droits réservés
//         </span>
//         <span>
//           <a href="" className="hover:underline">Github</a> | <a href="" className="hover:underline">Linkedin</a>
//         </span>
//         <span>
//           Design & Développement par Alex Xiao
//         </span>
//       </footer>
//     </main>
//   );
// }
