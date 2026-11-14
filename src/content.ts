// All the words on the site live here, so you can edit them without touching the layout.
// House rule from the brief: no dashes of any kind in the copy.

export const site = {
  name: "Jeewan Khatri",
  year: 2026,
  // Change this to the address you want people to write to.
  // Tip: name.com can forward hello@tekkhatri.ninja to your Gmail.
  email: "hello@tekkhatri.ninja",
  github: "https://github.com/t2-khatri",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  label: "Digital media, UWE Bristol, class of 2027",
  titleStart: "I make games, websites and",
  titleItalic: "moving",
  titleEnd: "pictures.",
  pitch:
    "I am a final year digital media student in Bristol. I build browser games, web apps and AI video tools, and I like shipping things people can actually use.",
  button: "See the work",
  link: "Get in touch",
  featured: {
    kicker: "Featured project",
    title: "Pitch Legends",
    meta: "Football game for iOS and Android",
    colour: "#1F4E4F",
  },
};

export const focus = [
  {
    line: "Games that start in a browser tab and end up in an app store.",
    source: "p5.js, Canvas, Capacitor",
  },
  {
    line: "Websites with real backends, real logins and real users.",
    source: "Node, Express, PostgreSQL",
  },
  {
    line: "AI tools for looking at video, and AI video that tells a story.",
    source: "Python, FastAPI, Whisper",
  },
];

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
    title: "Pitch Legends",
    year: "2026",
    tag: "Mobile game",
    description:
      "A football squad builder and match simulator that runs in the browser and is packaged for the App Store and Google Play with Capacitor, complete with the store compliance paperwork.",
    colour: "#1F4E4F",
    links: [],
  },
  {
    title: "Himal Warrior",
    year: "2026",
    tag: "HTML5 game",
    description:
      "A Nepal themed platform game drawn on canvas, with five levels and touch controls so it plays as well on a phone as on a laptop.",
    colour: "#6B2F2A",
    links: [],
  },
  {
    title: "Nebula Runner",
    year: "2026",
    tag: "University coursework",
    description:
      "A two level arcade game in p5.js for module UFCF8L 30 1, delivered with a written report and a presentation on the design decisions.",
    colour: "#1E2A44",
    links: [{ label: "GitHub", href: "https://github.com/t2-khatri/Nebula_Runner_Game" }],
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

export const about = {
  paragraphs: [
    "I grew up in Nepal and came to the UK to study. I am now in my final year of a BSc in Digital Media at UWE Bristol, working mostly in creative coding, web development and game design.",
    "Alongside my degree I work in Bristol shops and kitchens. It has taught me to work fast, stay calm with a queue out the door and look after a team, which turns out to be useful on group projects too.",
    "Right now I am building a website that shows river levels and rain forecasts across Nepal, and taking on small freelance jobs in web and AI video.",
  ],
  line: "Open to freelance work and graduate roles from summer 2027.",
};

export const experience = [
  { when: "Now", role: "Colleague assistant", place: "Tesco Express", city: "Bristol" },
  { when: "Now", role: "Store assistant", place: "Costcutter", city: "Bristol" },
  { when: "Now", role: "Team member", place: "Pasta Evangelists", city: "Bristol" },
  { when: "Before", role: "Store colleague assistant", place: "Pets at Home", city: "Bristol" },
  { when: "Before", role: "Kitchen assistant", place: "Indian Rasohi", city: "Bristol" },
  { when: "Before", role: "Warehouse operative", place: "DX Express and DPD", city: "Bristol" },
];

export const contact = {
  heading: "Have something in mind?",
  text: "Tell me about the project, the deadline and the budget. I reply to every message, usually within a day.",
  placeholder: "Your email",
  button: "Say hello",
};
