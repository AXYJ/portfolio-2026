# 🌐 Portfolio 2026 — Alex Xiao

> Portfolio personnel et vitrine de projets d'Alex Xiao — Développeur Web & Web Designer basé à Bruxelles.

---

## ✨ Aperçu

Ce portfolio a été conçu pour présenter mes créations, compétences et expériences à travers une interface soignée, vivante et interactive. 

### Points forts :
- 🎨 **Design & Identité visuelle** : Gradients dynamiques, filtres de grain SVG, vagues animées et typographie personnalisée (*Switzer*).
- ⚡ **Performances & Modernité** : Développé avec Next.js 16 (App Router), React 19 et Tailwind CSS v4.
- 📂 **Contenu modulaire (MDX)** : Architecture orientée contenu permettant d'ajouter et mettre à jour des projets facilement via des fichiers Markdown avec frontmatter (`gray-matter`).
- 🌊 **Micro-interactions & Animations** : Transitions au survol, animations keyframes SVG GPU-accélérées et animations de vagues via Framer Motion.
- ⚖️ **Mentions Légales & Confidentialité** : Page dédiée (`/mentions-legales`) détaillant l'hébergement, la propriété intellectuelle et une politique sans cookies tiers ni traceurs (conforme RGPD).

---

## 🛠️ Stack Technique

| Domaine | Technologies |
| :--- | :--- |
| **Framework Web** | [Next.js](https://nextjs.org/) 16 (App Router) |
| **Bibliothèque UI** | [React](https://react.dev/) 19 & TypeScript |
| **Styles & Design** | [Tailwind CSS](https://tailwindcss.com/) v4 & CSS Custom Properties |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes |
| **Gestion du contenu** | [gray-matter](https://github.com/jonschlinkert/gray-matter) (Parsing MDX) |
| **Icônes** | [Lucide React](https://lucide.dev/) |
| **Typographie** | Switzer (Fontes locales woff2) & Geist |
| **Qualité de code** | ESLint & Prettier (avec plugin Tailwind CSS) |

---

## 🗺️ Pages & Routes

- `/` — **Accueil** : Hero banner animé, présentation, vitrine des réalisations (MDX), stacks techniques et section contact.
- `/mentions-legales` — **Mentions Légales & Confidentialité** : Informations sur l'éditeur, hébergeur (Hostinger), droits d'auteur et respect de la vie privée (RGPD).

---

## 📁 Structure du Projet

```text
portfolio/
├── content/
│   ├── projects/           # Fichiers MDX des projets (métadonnées & contenu)
│   │   ├── museek.mdx
│   │   └── rituels.mdx
│   └── stacks/             # Données JSON des technologies
│       └── stacks.json
├── public/
│   ├── fonts/              # Polices locales (Switzer)
│   ├── img/                # Images des projets et aperçus
│   └── stacks/             # Icônes et logos des technologies
├── src/
│   ├── app/
│   │   ├── favicon.svg     # Favicon vectoriel du site
│   │   ├── globals.css     # Styles globaux, variables CSS et Tailwind v4
│   │   ├── layout.tsx      # Layout racine Next.js (métadonnées & typographies)
│   │   ├── mentions-legales/
│   │   │   └── page.tsx    # Page des mentions légales & confidentialité
│   │   └── page.tsx        # Page d'accueil principale
│   ├── components/
│   │   ├── AnimatedWave.tsx# Animation de vague SVG (Framer Motion)
│   │   ├── FadeIn.tsx      # Composant d'apparition fluide au scroll
│   │   ├── Gradient.tsx    # Arrière-plan animé avec dégradés fluides
│   │   ├── Grain.tsx       # Filtre SVG de bruit/grain
│   │   └── HeroBanner.tsx  # Bannière interactive d'en-tête
│   └── lib/
│       └── projects.ts     # Fonctions utilitaires de lecture et tri des projets MDX
├── next.config.ts          # Configuration Next.js
├── package.json            # Dépendances et scripts
└── tsconfig.json           # Configuration TypeScript
```

---

## 🚀 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) (version 18+ recommandée)
- [npm](https://www.npmjs.com/) (ou pnpm / yarn / bun)

### 1. Cloner le dépôt et installer les dépendances
```bash
git clone <URL_DU_DEPOT>
cd portfolio
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## 📝 Ajouter un Nouveau Projet

Les projets sont gérés dans le dossier `content/projects/`. Pour ajouter une nouvelle réalisation, créez un fichier `.mdx` (ex: `content/projects/mon-projet.mdx`) avec la structure suivante :

```markdown
---
title: "Nom du Projet"
description: "Courte description du projet et des objectifs"
date: "01-09-2026"
tags: ["UI/UX", "Next.js", "Tailwind CSS", "TypeScript"]
image: "/img/mon-projet.png"
---

## Contexte du projet

Détails, défis techniques et solutions apportées...
```

Les projets sont automatiquement parsés par [`projects.ts`](file:///c:/Users/alexx/Documents/projets/portfolio/src/lib/projects.ts) et triés par date décroissante sur le portfolio.

---

## 📜 Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement local avec hot-reload. |
| `npm run build` | Compile l'application pour la production. |
| `npm run start` | Démarre le serveur en mode production (après un build). |
| `npm run lint` | Analyse le code avec ESLint pour détecter les erreurs. |
| `npm run format` | Formate l'ensemble des fichiers sources avec Prettier. |

---

## 📬 Contact & Réseaux

- **Auteur** : Alex Xiao
- **Rôle** : Web Design & Développeur Web Front-End
- **Localisation** : Bruxelles, Belgique
- **Email** : `contact@xiao-web.com`
- **GitHub** : [AXYJ](https://github.com/AXYJ)
- **LinkedIn** : [Alex Xiao](https://www.linkedin.com/in/alex-xiao-12a2bb35b)

---

*© 2026 Alex Xiao — Tous droits réservés.*

