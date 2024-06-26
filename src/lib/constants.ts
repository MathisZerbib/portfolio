import type { Site, Page } from "./types";

export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];

export const LINKS = {
  github: "https://github.com/mathisZerbib",
  linkedin: "https://linkedin.com/in/mathis-zerbib",
  mail: "mailto:mathis.zerbib@gmail.com",
  instagram: "https://www.instagram.com/elz3r/",
  medium: "https://medium.com/@mathis.zerbib_72683",
  discord: "https://discordapp.com/users/564153086201823232",
};

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION:
    "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mathis Zerbib",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Study Page
export const STUDIES = [
  {
    title: "React.js certification",
    institution: "OpenClassRooms",
    link: "https://www.openclassrooms.com/",
    date: "2019 - 2020",
  },
  {
    title: "Master in Computer Science",
    institution: "Epitech",
    link: "https://epitech.eu/",
    date: "2022 - 2024",
  },

  {
    title: "Music Production",
    institution: "Label - House Is Maison",
    link: "https://www.instagram.com/house__maison",
    date: "2022 - 2025",
  },
];

export const EXPERIENCE = [
  {
    company: "JobMe",
    location: "Montepllier, France",
    position: "Software Engineer - IOS/Android Developer",
    start: "2022",
    link: "https://job-me.fr",
    end: "2024",
    tasks: [
      "Development of a mobile application with the use of Flutter, that allows the user to find a job",
      "Development of API with the use of NodeJS",
      "Development and build of DB with mongoDB",
    ],
  },
  {
    company: "DCube",
    location: "Paris, France",
    position: "Fullstack developer",
    start: "2020",
    link: "https://www.dcube.fr",
    end: "2021",
    tasks: [
      "Development of a web application with Angular, C# and .NET",
      "Use of SCRUM methodology",
      "Claro projects with the use of frameworks and libraries such as react and angular",
      "Use of redux toolkit as aproposal which allowed a shorter development time when using this tool",
    ],
  },
  {
    company: "Zyneas",
    location: "Paris, France",
    position: "Software developer",
    start: "2019",
    link: "https://www.zyneas.fr",
    end: "2020",
    tasks: [
      "Development of a dashboard with react admin and chartjs for managing engineers and their work time",
      "Development of the static website zyneas.fr in collaboration with the design team",
      "Development of a nodeJs tools to gather information from a spreadsheet and send it to the dashboard",
    ],
  },
  {
    company: "BSWeb - Pricecomparator",
    location: "Montpellier, France",
    position: "Software developer",
    start: "2018",
    link: "https://pricecomparator.pro",
    end: "2019",
    tasks: [
      "Development of a price comparator with the use of React, Redux, and Material UI",
      "Development of a web scraper with the use of NodeJS, Puppeteer, Axios",
      "Development of their website with wordpress",
    ],
  },
];

export const PROJECTS_LIST = [
  {
    id: 1,
    title: "CBD Delivery - Blockchain",
    description: "Delivery web3 app to buy products on-chain with TON",
    skills: ["React", "TypeScript", "Web3"],
    link: "https://twa-ton.vercel.app",
    imgList: ["/projects/TWA.png", "/projects/TWA.gif"],
    imgAlt: "Astro Sphere",
  },

  {
    id: 2,
    title: "ATS Recruiter",
    description:
      "Mobile application to find a job with Flutter, NodeJS, MongoDB",
    skills: ["Flutter", "NodeJS", "MongoDB"],
    link: "/projects/job-me",
    imgList: ["/projects/AWA.png", "/projects/AWA.gif"],
    imgAlt: "ATS Recruiter",
  },
  {
    id: 3,
    title: "Angova - E-learning",
    description:
      "E-learning platform for learning the highway french code in foreign languages",
    skills: ["NextJS", "MongoDB", "S3 Bucket"],
    link: "https://www.angova.io/",
    imgList: ["/projects/angova.png", "/projects/angova.gif"],
    imgAlt: "Angova",
  },
];

export const PLAYLISTS = [
  {
    id: 1,
    title: "House Is Maison",
    description: "House music playlist",
    src: "https://open.spotify.com/playlist/3LxK2Fz9Q5y5vQvZ6Ez8Vc?si=3b1e8d8e9f5e4b6d",
    img: "/music/house.png",
  },
  {
    id: 2,
    title: "Hip Hop",
    description: "Hip Hop music playlist",
    src: "https://open.spotify.com/playlist/3LxK2Fz9Q5y5vQvZ6Ez8Vc?si=3b1e8d8e9f5e4b6d",
    img: "/music/hiphop.png",
  },
  {
    id: 3,
    title: "Techno",
    description: "Techno music playlist",
    src: "https://open.spotify.com/playlist/3LxK2Fz9Q5y5vQvZ6Ez8Vc?si=3b1e8d8e9f5e4b6d",
    img: "/music/techno.png",
  },
];
