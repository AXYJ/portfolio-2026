// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import Gradient from "@/components/Gradient";
// import AnimatedWave from "@/components/AnimatedWave";
// import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// export async function generateStaticParams() {
//   const projects = getAllProjects();
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;
//   const project = getProjectBySlug(slug);

//   if (!project) {
//     return {
//       title: "Projet non trouvé | Alex Xiao",
//     };
//   }

//   return {
//     title: `${project.title} | Alex Xiao`,
//     description: project.description,
//   };
// }

// export default async function ProjectDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const project = getProjectBySlug(slug);

//   if (!project) {
//     notFound();
//   }

//   const { prev, next } = getAdjacentProjects(slug);
//   const contact = "[EMAIL_ADDRESS]";

//   return (
//     <main className="flex flex-1 w-full mx-auto flex-col items-center bg-(--white) sm:items-start">

//       {/* 2. Navigation et Entête du projet */}
//       <section className="-mb-8">
//         <div className="col-span-full flex flex-col gap-8 w-full">
//           {/* Fil d'Ariane / Liens de navigation */}
//           <nav className="flex items-center justify-between w-full">
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-2 font-medium text-lg lg:text-xl hover:opacity-75 transition-opacity"
//             >
//               <span>←</span>
//               <span>Tous les projets</span>
//             </Link>

//             <ul className="flex gap-6">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-sm lg:text-base font-light hover:underline underline-offset-4"
//                 >
//                   Accueil
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#about"
//                   className="text-sm lg:text-base font-light hover:underline underline-offset-4"
//                 >
//                   À propos
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/#contact"
//                   className="text-sm lg:text-base font-light hover:underline underline-offset-4"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </section>

//       <section>
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={1400}
//           height={900}
//           priority
//           className="h-full w-full object-cover col-span-4 aspect-video"
//         />

//         {/* Titre & Description du projet */}
//         <div className="col-span-4 grid-cols-subgrid grid gap-y-16">

//           <h1 className="text-5xl font-black text-center col-span-4">
//             {project.title}
//           </h1>

//           <div className="col-span-2 grid grid-cols-subgrid gap-y-16">

//             <div className="flex flex-col gap-2">
//               <span>Tags</span>
//               {project.tags && project.tags.length > 0 && (
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-xs lg:text-sm px-3 py-1 rounded-full border border-current/30 font-medium tracking-wide"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//               )}
//             </div>
//             <div className="flex flex-col gap-2">
//               <span>Année</span>
//               {project.year && (
//                 <span className="font-medium text-3xl">
//                   {project.year}
//                 </span>
//               )}
//             </div>

//             {project.url && (
//               <Link
//                 href={project.url}
//                 className="voir-projet text-lg inline-flex gap-3 items-center w-fit font-medium"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="first-arrow flex">→</span>
//                 <span>Voir le projet</span>
//                 <span className="second-arrow flex">→</span>
//               </Link>
//             )}

//           </div>
//           {project.content && (
//             <>
//               {project.content.split(/\r?\n\r?\n/).map((block, idx) => {
//                 const trimmed = block.trim();
//                 if (!trimmed || trimmed.startsWith("#")) return null;

//                 return (
//                   <p key={idx} className="col-span-2 col-start-3">
//                     {trimmed}
//                   </p>
//                 );
//               })}
//             </>
//           )}

//         </div>

//       </section>

//       {/* 6. Navigation entre Projets (Précédent / Suivant) */}
//       <section>
//         <div className="col-span-full flex flex-col sm:flex-row justify-between items-stretch gap-6 w-full">
//           {prev ? (
//             <Link
//               href={`/projects/${prev.slug}`}
//               className="flex flex-col gap-1 p-6 flex-1"
//             >
//               <span className="text-xs uppercase tracking-wider opacity-60">
//                 ← Projet précédent
//               </span>
//               <span className="text-xl lg:text-2xl font-medium">
//                 {prev.title}
//               </span>
//             </Link>
//           ) : (
//             <div className="flex-1" />
//           )}

//           {next && (
//             <Link
//               href={`/projects/${next.slug}`}
//               className="flex flex-col gap-1 p-6 flex-1 text-right sm:items-end"
//             >
//               <span className="text-xs uppercase tracking-wider opacity-60">
//                 Projet suivant →
//               </span>
//               <span className="text-xl lg:text-2xl font-medium">
//                 {next.title}
//               </span>
//             </Link>
//           )}
//         </div>
//       </section>

//       {/* 7. Section Contact & Footer */}
//       <section id="contact">
//         <h2>Me contacter</h2>
//         <div className="col-span-2">
//           <p>Un projet ou une idée à développer ensemble ?</p>
//           <p>N&apos;hésitez pas à me contacter !</p>
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

//       <footer className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-16 w-full -mt-8 p-8 lg:p-16 mx-auto max-w-7xl">
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
//     </main >
//   );
// }
