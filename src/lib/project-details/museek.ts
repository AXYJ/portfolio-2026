import type { ProjectDetail } from "@/lib/project-detail";

export const museek: ProjectDetail = {
  slug: "museek",
  title: "Museek",
  tagline:
    "Un blindtest multijoueur où chacun apporte sa playlist, pour que tout le monde puisse jouer.",
  cover: {
    src: "/projects/museek/cover.png",
    alt: "Écran de partie de Museek : pochette floutée, champs Artiste et Morceau, barre de temps",
  },
  links: [
    { label: "Voir le site", href: "https://museek.xiao-web.com" },
    { label: "Article technique (EN)", href: "https://museek.hashnode.dev/building-a-multiplayer-music-quiz-where-everyone-brings-their-own-playlist-next-js-socket-io"},
    { label: "Code source", href: "https://github.com/AXYJ/museek" },
  ],
  facts: {
    role: "Projet personnel : design, front-end et back-end",
    period: "Août 2026",
  },
  categories: ["UI/UX", "Web design", "Développement"],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Socket.io",
  ],

  context: {
    problem:
      "Le soir, avec des amis en appel Discord, on lançait des quiz musicaux sur YouTube. Sur les quiz anime, un ami ne pouvait pas suivre : ce n'était pas son univers. Quand on passait aux films Disney ou aux années 80, c'était à mon tour de décrocher. Quel que soit le thème, quelqu'un restait sur la touche.",
    idea: "Plutôt que d'imposer un thème, j'ai voulu laisser chacun apporter le sien. Dans Museek, chaque joueur ajoute sa playlist et le jeu mélange tous les morceaux. Tout le monde a donc des titres qu'il connaît, et on découvre au passage les goûts des autres.",
  },

  principles: [
    {
      title: "Sans compte",
      text: "Personne n'a envie de donner ses données avant même de comprendre le jeu. Un pseudo suffit, et une simple URL de playlist publique remplace toute connexion à Spotify, Deezer ou Apple Music.",
    },
    {
      title: "Pas une course",
      text: "Tout le monde peut marquer sur chaque morceau, la vitesse ne compte pas. Le but est que chacun s'amuse.",
    },
    {
      title: "Aucune réponse contestable",
      text: "Pas de vote entre joueurs pour valider une réponse : l'autocomplétion propose les vrais noms. Qui connaît l’artiste ne peut pas se tromper.",
    },
  ],

  identity: {
    intro:
      "L'identité est la première chose que j'ai conçue, avant d'écrire une ligne de code. Tout part d'une idée : la musique est cachée, il faut la chercher.",
    points: [
      {
        title: "Logo",
        text: "Un M dont les barres verticales dessinent deux notes de musique en contreforme. On ne les voit pas tout de suite : il faut les chercher, comme dans le jeu. C'est le sens du nom, music + seek.",
      },
      {
        title: "Couleurs",
        text: "Un violet profond (#770FB8) sur un fond presque noir (#0E0712), pour une ambiance cosy, pensée pour jouer le soir entre amis. Le vert et le rouge sont réservés aux bonnes et mauvaises réponses, pour être compris d'un coup d'œil.",
      },
      {
        title: "Typographie",
        text: "Public Sans, une linéale lisible à toutes les tailles, même sur petit écran en pleine partie. La maquette utilisait aussi Clash Display pour les titres, mais le logo et le fond suffisaient à donner du caractère : j'ai simplifié.",
      },
      {
        title: "Texture",
        text: "Un dégradé violet recouvert de grain donne de la matière aux écrans sombres, sans détourner l'attention de la partie.",
      },
    ],
    image: {
      src: "/projects/museek/identite.png",
      alt: "Planche d'identité Museek : logo, palette violette et typographie Public Sans",
    },
  },

  evolution: [
    {
      title: "Salon de jeu",
      before: {
        src: "/projects/museek/maquette-lobby.png",
        alt: "Maquette du salon : liste des joueurs, paramètres, choix de la plateforme",
      },
      after: {
        src: "/projects/museek/actuel-lobby.png",
        alt: "Site actuel : salon sur deux colonnes, code copiable, options d'aide et de devinette",
      },
      why: "Moins de champs à remplir : une seule URL de playlist suffit. Deux options sont apparues : deviner qui a choisi le morceau, et une aide qui défloute la pochette.",
    },
    {
      title: "Résultats",
      before: {
        src: "/projects/museek/maquette-resultats.png",
        alt: "Maquette : podium des trois meilleurs joueurs et classement",
      },
      after: {
        src: "/projects/museek/actuel-resultats.png",
        alt: "Site actuel : récap morceau par morceau avec les réponses de chaque joueur",
      },
      why: "En testant avec des amis, tout le monde voulait voir ce que les autres avaient répondu. Le podium est devenu un récap morceau par morceau, avec un lien vers la plateforme pour retrouver les morceaux qu'on a aimés.",
    },
  ],

  challenges: [
    {
      title: "Romaniser les titres japonais et chinois",
      problem:
        "J'écoute beaucoup de musique japonaise et chinoise. Pour que tout le monde puisse jouer, il fallait pouvoir répondre en lettres latines. Le piège : les deux langues partagent les mêmes caractères. 東京 se lit « Tōkyō » en japonais mais « Dōngjīng » en chinois. Sans savoir de quelle langue il s'agit, impossible de donner la bonne réponse.",
      steps: [
        "Premier essai : une bibliothèque de romanisation directement sur le serveur. C'était rapide, mais face à un titre écrit uniquement avec ces caractères communs, elle ne pouvait pas deviner la langue.",
        "Deuxième essai : demander à une IA de romaniser chaque artiste et chaque titre séparément. Sans contexte, elle hésitait : le même titre sortait parfois en japonais, parfois en chinois.",
      ],
      solution:
        "J'envoie maintenant l'artiste et le titre ensemble : un artiste japonais indique à l'IA que le titre est sûrement japonais aussi. Pour limiter les appels, le serveur traite seul ce qu'il sait déjà lire (les textes contenant des caractères propres au japonais), et seul le reste part à l'IA. Si l'IA ne répond pas, le serveur prend le relais pour que la partie continue.",
    },
  ],

  workflow:
    "J'ai codé l'architecture moi-même et utilisé Claude Code comme appui : débogage, audit technique, tests serveur, découpage en modules. En tant que junior, je voulais comprendre chaque ligne plutôt que tout déléguer.",

  features: [
    "Jusqu'à 12 joueurs, sur mobile, tablette et ordinateur",
    "Playlists Spotify, Deezer et Apple Music",
    "Autocomplétion tolérante (accents, majuscules, écriture latine)",
    "Récap des réponses et liens vers les morceaux",
    "Installable comme une application",
  ],

  metrics: [
    { label: "Lighthouse mobile", value: "100 / 100 / 100 / 100" },
    { label: "Compte requis", value: "Aucun" },
    { label: "Joueurs par salon", value: "Jusqu'à 12" },
  ],

  learnings: [
    "Typer proprement un projet TypeScript de bout en bout",
    "Comprendre les échanges client / serveur en temps réel",
    "Penser chaque écran pour qu'il se comprenne sans explication",
    "Les bases du référencement naturel",
  ],
};
