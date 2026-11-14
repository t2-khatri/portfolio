// All the words on the site live here, so you can edit them without touching the layout.
// House rule from the brief: no dashes of any kind in the copy.

export const site = {
  name: "Jeewan Khatri",
  year: 2026,
  // Change this to the address you want people to write to.
  // Tip: name.com can forward hello@tekkhatri.ninja to your Gmail.
  email: "hello@tekkhatri.ninja",
  github: "https://github.com/t2-khatri",
  // Shown under the name in About and in the footer, so old credits link to this site.
  creditedAs: "Tek Bahadur Khatri",
  nav: [
    { label: "3D", href: "#three-d" },
    { label: "Film", href: "#videos" },
    { label: "Games", href: "#games" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  label: "3D and media production, UWE Bristol, class of 2027",
  titleStart: "I build 3D worlds and",
  titleItalic: "film",
  titleEnd: "the real one.",
  pitch:
    "I am a final year digital media student in Bristol. I model and light in Maya, build environments in Unity, and work behind the camera on live action shoots. I am looking to join a small studio that does all of it.",
  button: "See the 3D work",
  link: "Get in touch",
  featured: {
    kicker: "Maya and Arnold",
    title: "Robot, shopping centre",
    meta: "Modelled, lit and rendered by me",
    colour: "#1F4E4F",
    image: "/robot-cover.jpg",
  },
};

export const focus = [
  {
    line: "Models built by hand, lit properly and placed into the real world.",
    source: "Maya, Arnold, Unity",
  },
  {
    line: "Behind the camera on live action shoots, from planning to the final shot.",
    source: "Camera operator, pre production",
  },
  {
    line: "And when a project needs it, the game, the website or the tool that holds it together.",
    source: "C#, Three.js, React",
  },
];

export type ThreeDPiece = {
  title: string;
  tag: string;
  description: string;
  role: string;
  image?: string;
  colour: string;
  status?: string;
};

export const threeD = {
  lead: {
    title: "Robot in a shopping centre",
    tool: "Maya, Arnold",
    image: "/robot-render.jpg",
    caption:
      "A character modelled in Maya, lit with Arnold area lights and an HDRI sky dome, then rendered into a photograph of a real shopping centre.",
  },
  pieces: [
    {
      title: "Building the robot",
      tag: "Maya viewport",
      description:
        "Built up from primitives into a full character of around 39,000 vertices, with the scene lit to match the photograph behind it.",
      role: "Modelling, lighting, rendering",
      image: "/robot-maya.jpg",
      colour: "#2A2622",
    },
    {
      title: "Unity environment",
      tag: "Principles of 3D Environments",
      description:
        "An explorable 3D environment where the player finds and opens a chest, with books and objects placed around the level and interaction written in C#.",
      role: "Modelling (my own Maya assets), level layout, C# scripting",
      colour: "#1E2A44",
    },
    {
      title: "Animated short",
      tag: "In production",
      description:
        "A short animated scene bringing the robot to life: posed, textured and moving, with full lighting and detail.",
      role: "Modelling, texturing, animation, lighting",
      colour: "#7A2E2A",
      status: "Coming December 2026",
    },
  ] as ThreeDPiece[],
};

export type Project = {
  title: string;
  year: string;
  tag: string;
  description: string;
  colour: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Jim Jim Kim Kim",
    year: "2026",
    tag: "3D website",
    description:
      "A toy shop site where three 3D toys, a bot, a bunny and a rocket, load into a live Three.js stage and come apart as you scroll. Built with GLB models, D3 charts and a pinned scrolling gallery.",
    colour: "#7A2E2A",
    links: [{ label: "GitHub", href: "https://github.com/t2-khatri/jim-jim-kim-kim-toy-site" }],
  },
  {
    title: "Living Garden",
    year: "2025",
    tag: "Interactive artwork",
    description:
      "A p5.js and ml5.js piece where flowers grow and sway in answer to your hand, tracked live through the webcam with handpose.",
    colour: "#2F4A2B",
    links: [],
  },
  {
    title: "GreenLeaf",
    year: "2026",
    tag: "Website",
    description:
      "A site for a plant based café in Bristol, built on Node and Express with Google and Facebook sign in, then audited and fixed across legal, UX and SEO.",
    colour: "#3D4A2A",
    links: [{ label: "GitHub", href: "https://github.com/t2-khatri/GreenLeafRestaurant" }],
  },
  {
    title: "VideoInsight",
    year: "2026",
    tag: "AI tool",
    description:
      "Paste a link or upload a clip and get a breakdown of what is said and shown, using Whisper for speech, PySceneDetect for cuts and Claude vision for the frames.",
    colour: "#4A2340",
    links: [],
  },
];

export type Game = {
  title: string;
  line: string;
  meta: string;
  colour: string;
  image?: string; // put a screenshot in public/ and write its path here, e.g. "/game-3d.jpg"
  link?: { label: string; href: string };
};

export const games: Game[] = [
  {
    // TODO: swap in the real name, a one line pitch and the repo link of your 3D game
    title: "3D Game",
    line: "My 3D game, built in the browser with Three.js. Play it or read the code on GitHub.",
    meta: "3D, BROWSER. 2026.",
    colour: "#1E2A44",
    link: { label: "GitHub", href: "https://github.com/t2-khatri" },
  },
  {
    title: "Pitch Legends",
    line: "Build a football squad and simulate the season, in a browser or on your phone.",
    meta: "IOS, ANDROID, BROWSER. 2026.",
    colour: "#1F4E4F",
  },
  {
    title: "Himal Warrior",
    line: "Five levels of Himalayan platforming, drawn on canvas, with touch controls.",
    meta: "BROWSER, MOBILE. 2026.",
    colour: "#6B2F2A",
  },
  {
    title: "Nebula Runner",
    line: "A two level arcade runner in p5.js, made for my first year coursework.",
    meta: "BROWSER, P5.JS. 2026.",
    colour: "#3A2F55",
    link: { label: "GitHub", href: "https://github.com/t2-khatri/Nebula_Runner_Game" },
  },
];

export const videos = {
  // Paste your channel link here when you have one to share, e.g. "https://www.youtube.com/@yourname"
  channel: "",
  intro:
    "I work as a camera operator on live action shoots, and I care about the planning as much as the shot. These are from my university productions.",
  // Four frames for the film strip. Each is a YouTube video ID, plus which auto thumbnail to use.
  frames: [
    { id: "q2ovHoHDA6g", thumb: "hqdefault" },
    { id: "q2ovHoHDA6g", thumb: "hq2" },
    { id: "3STIhqdVBDk", thumb: "hqdefault" },
    { id: "q2ovHoHDA6g", thumb: "hq3" },
  ],
  caption: "Frames from Real Magicians and my night shoot.",
  films: [
    {
      title: "Real Magicians",
      meta: "Live action short. 2 min 16 sec.",
      role: "Camera operator",
      href: "https://youtu.be/q2ovHoHDA6g",
    },
    {
      title: "Night shoot",
      meta: "Live action, milestone 4. 34 sec.",
      role: "Camera",
      href: "https://youtu.be/3STIhqdVBDk",
    },
  ],
  preproduction: {
    label: "See the pre production board",
    href: "https://www.figma.com/board/pgpQzwPGpeyixvZJDq5pIn/CW2F2---Live-Action-Pre-Production-Template?node-id=177-745&p=f",
  },
};

export const about = {
  paragraphs: [
    "I grew up in Nepal and came to the UK to study. I am now in my final year of a BSc in Digital Media at UWE Bristol, working mostly in 3D, live action production and interactive work.",
    "Right now I am animating a short 3D scene, cutting my first showreel, and building a website that shows river levels and rain forecasts across Nepal.",
  ],
  line: "Looking for a junior 3D or media production role in a small studio from summer 2027.",
};


export const contact = {
  heading: "Have something in mind?",
  text: "Tell me about the project, the deadline and the budget. I reply to every message, usually within a day.",
  placeholder: "Your email",
  button: "Say hello",
};
