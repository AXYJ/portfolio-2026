import type { ProjectDetail } from "@/lib/project-detail";


export const rituels: ProjectDetail = {
  slug: "rituels",
  title: "Rituels",
  tagline:
    "Un jeu de cartes en ligne dont les règles changent à chaque partie : à vous de les deviner avant les autres.",
  year: 2026,
  thumbnail: { src: "/img/rituels.webp", alt: "Rituels" },
  cover: {
    src: "/projects/rituels/cover.png",
    alt: "Logo de Rituels",
  },
  links: [
    { label: "Voir le site", href: "https://rituels.xiao-web.com" },
    { label: "Code source", href: "https://github.com/AXYJ/rituels" },
    {
      label: "Vidéo des règles",
      href: "https://www.youtube.com/watch?v=Cb2AY2S5HGs",
    },
  ],
  facts: {
    role: "Travail de fin d'études : concept du jeu, design, front-end et back-end",
    period: "Février – juin 2026",
  },
  categories: ["UI/UX", "Web design", "Développement"],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Express",
    "Socket.io",
  ],

  context: {
    problem:
      "Pour mon travail de fin d'études, je devais créer un site de A à Z : identité, logo et code. J'avais envie de créer un jeu, et je pensais au Mao, un jeu de cartes où l'on découvre des règles cachées en se trompant. Mais je jouais surtout avec des débutants : connaissant les règles, je ne pouvais que les « punir », sans plus rien avoir à deviner.",
    idea: "J'ai donc inventé un jeu où même moi, je serais perdu : les règles sont tirées au hasard à chaque partie, parmi 7 200 combinaisons. L'univers vient de l'expérience du psychologue B.F. Skinner, qui rendait des pigeons superstitieux en leur donnant des graines au hasard. Ici, les joueurs sont les pigeons : ils posent une carte sans savoir combien de graines elle va leur rapporter.",
  },

  principles: [
    {
      title: "Observer plutôt que deviner",
      text: "Le jeu donne de quoi raisonner : un bloc-notes pour les hypothèses et l'historique de toutes les cartes jouées. Entre amis, un joueur à deux points de la victoire nous a nargués… puis a perdu 3 points sur une règle mal comprise.",
    },
    {
      title: "Prendre son temps",
      text: "Pas de chronomètre : chacun réfléchit aussi longtemps qu'il veut avant de poser sa carte. Rituels est avant tout un jeu de déduction.",
    },
    {
      title: "Simple à jouer, difficile à percer",
      text: "Un croisement entre le Uno et le Cluedo. Du Uno, une carte par tour, des symboles et des couleurs ; du Cluedo, des hypothèses qu'on note et qu'on élimine.",
    },
  ],

  metrics: [
    { label: "Lighthouse ordinateur (accueil)", value: "100 / 99 / 96 / 100" },
    { label: "Lighthouse mobile (accueil)", value: "98 / 99 / 96 / 100" },
    { label: "Note du travail de fin d'études", value: "18 / 20" },
    { label: "Combinaisons de règles", value: "7 200" },
  ],

  identity: {
    intro:
      "Toute la direction artistique repose sur un équilibre entre le scientifique et le surnaturel. D'un côté Skinner, psychologue reconnu qui étudiait la superstition ; de l'autre, les cartes de Zener, issues de la parapsychologie.",
    points: [
      {
        title: "Logo",
        text: "Une tête de pigeon, pensée comme une mascotte, qui fait le lien avec l'expérience de Skinner. Le nom est au pluriel : chaque carte posée est un rituel, un geste fait dans l'espoir d'un résultat sans lien prouvé. Je l'ai aussi animé pour l'accueil.",
      },
      {
        title: "Couleurs",
        text: "Un fond presque noir (#191918) éclairé par un halo, comme une lampe au-dessus d'une table d'expérience. Les cartes reprennent les couleurs des cartes de Zener : rouge (#B24038), vert (#9ADB8C), bleu (#88AADA) et jaune (#C5AB46), avec un rose (#CB5CC5) à la place du noir pour ressortir sur le fond.",
      },
      {
        title: "Typographie",
        text: "Sweet and Salty rappelle les polices sobres des articles scientifiques, mais avec des diagonales et des espacements irréguliers. Une seule police pour tout le jeu.",
      },
      {
        title: "Formes",
        text: "Les cinq symboles des cartes de Zener : cercle, croix, vagues, carré et étoile. Des formes géométriques aux bords abîmés, comme le logo et les boutons.",
      },
    ],
    image: {
      src: "/projects/rituels/identite.png",
      alt: "Planche d'identité Rituels : logo pigeon, cinq couleurs des cartes, police Sweet and Salty et symboles de Zener",
    },
  },

  video: {
    title: "Les règles en mouvement",
    text: "Pour rendre mes règles compréhensibles, j'avais besoin de les illustrer. J'ai réalisé une vidéo d'1 min 38 où le pigeon vous explique le protocole comme un personnage de jeu vidéo, avec musique et effets sonores : une semaine de travail sur After Effects, à partir d'éléments dessinés sur Figma et Illustrator. Le plus dur a été de synchroniser le son, le texte et les animations.",
    youtubeId: "Cb2AY2S5HGs",
    poster: {
      src: "/projects/rituels/video-regles.png",
      alt: "Aperçu de la vidéo des règles : logo Rituels, tête de pigeon et nom en lettres manuscrites",
    },
  },

  evolution: [
    {
      title: "Table de jeu",
      before: {
        src: "/projects/rituels/maquette-partie.png",
        alt: "Maquette de la partie : adversaires en rectangles gris, une carte en croix au centre, chat et bloc-notes en bas",
      },
      after: {
        src: "/projects/rituels/actuel-partie.png",
        alt: "Site actuel : un adversaire de chaque côté avec le dos de ses cartes et son score en graines, bloc-notes avec icônes et couleurs",
      },
      why: "Les adversaires n'étaient que des rectangles gris : j'ai ajouté le dos de leurs cartes et leur score pour aider à visualiser la partie. Dans le bloc-notes, une icône et le nom de la couleur rendent chaque ligne plus facile à lire.",
    },
    {
      title: "Fin de partie",
      before: {
        src: "/projects/rituels/maquette-victoire.png",
        alt: "Maquette de la victoire : un simple message « Bravo… ! Vous êtes le premier à atteindre 15 points ! »",
      },
      after: {
        src: "/projects/rituels/actuel-victoire.png",
        alt: "Site actuel : pigeon de la victoire, classement des joueurs et règles de la partie enfin révélées",
      },
      why: "La maquette n'était qu'une ébauche : je ne savais pas encore quoi montrer. L'écran final dévoile enfin les règles de la partie, que les joueurs ont cherchées tout du long.",
    },
  ],

  challenges: [
    {
      title: "Empêcher la triche",
      problem:
        "Pour ne pas surcharger le serveur, j'avais d'abord confié le calcul des points au navigateur de chaque joueur. Lors d'un test, un développeur senior s'est amusé à tricher : il a modifié les messages envoyés au serveur pour jouer des cartes qu'il n'avait pas et s'attribuer un score énorme.",
      steps: [
        "Premier correctif, sur ses conseils : le serveur calcule lui-même les points et vérifie que c'est bien le tour du joueur et que la carte jouée est dans sa main.",
        "Plus tard, un audit avec Claude Code a révélé une autre fuite : les règles secrètes et les cartes des autres joueurs partaient encore vers chaque navigateur, où un curieux pouvait les lire.",
      ],
      solution:
        "Aujourd'hui, le serveur est le seul arbitre et n'envoie à chaque joueur que ce qu'il a le droit de voir. Les règles ne sont révélées qu'à la fin de la partie, et des tests automatiques le vérifient.",
    },
  ],

  workflow:
    "Pendant le travail de fin d'études, j'ai principalement codé à la main et utilisé Gemini pour corriger mes erreurs ; les parties générées par IA sont signalées dans le code, par transparence envers le jury. Après la sortie, Claude Code a fait l'essentiel d'un audit : sécurité, typage, réorganisation du code et tests automatiques.",

  features: [
    "De 2 à 4 joueurs, sans compte : un pseudo et un code de salon suffisent",
    "Nouvelles règles tirées au hasard à chaque partie",
    "Bloc-notes des hypothèses et historique des cartes jouées",
    "Reprise de la partie après une déconnexion",
    "Pseudos et messages du chat modérés par une IA",
    "Sur ordinateur et sur mobile, en mode paysage",
  ],

  learnings: [
    "Inventer un jeu, de la règle à l'écran",
    "Créer une identité graphique en quasi-autonomie",
    "Mon premier serveur et mon premier projet en temps réel",
    "Découvrir Next.js et les animations avec Motion",
    "Ne jamais faire confiance au navigateur : c'est le serveur qui arbitre",
  ],
};
