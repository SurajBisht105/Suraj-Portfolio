import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "anonymous-feedback-system-nextjs",
    title: "Anonymous Feedback System",
    description:
      "Developed a full-stack application for collecting anonymous feedback with robust authentication and OTP verification features. Share your Public Profile link to enjoy anonymous feedbacks with AI enabled suggestion.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SurajBisht105/True-Feedback",
    url: "https://www.surajbisht.me/",
    tags: ["Next..js", "Typescrip", "MongoDB", "Tailwind","Gemini","Next-Auth","Resend","shadcn"],
  },
  {
    id: "blog-web-app-React",
    title: "Blog Web App",
    description:
      "Developed a fully functional, production grade web application using React.js and appwrite. Implemented features such as user authentication, CRUD operation for blog posts, and integration with the appwrite backend for database management.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SurajBisht105/blogshala",
    url: "https://blogshala-five.vercel.app",
    tags: ["React.JS", "Redux", " Appwrite", "Tailwind","TinyMCE"],
  },
  {
    id: "mental-health-checkin-app-mern",
    title: "Mental Health Checkin App",
    description:
      "A secure, responsive full-stack web application for daily mental health check-ins..",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SurajBisht105/mental-health-checkin-app",
    url: "https://mental-health-checkin-app.vercel.app",
    tags: ["MongoDB", "Express.js", "React.js", "Nodejs","Tailwind"],
  },
  {
    id: "data-aIchemist-nextjs",
    title: "Data AIchemist",
    description:
      "The Data-AIchemist is a web application that helps organizations transform chaotic spreadsheet data into clean, validated, and rule-based configurations ready for resource allocation systems. Using Google's Gemini AI, it provides an intuitive interface for data cleaning, validation, and business rule creation.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SurajBisht105/Data-Alchemist",
    url: "https://data-alchemist-neon-ten.vercel.app",
    tags: ["Next.js", "Typescripts", "Tailwind", "Gemini"],
  },
 {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/SurajBisht105/Suraj-Portfolio",
    url: "https://suraj-portfolio-rho-six.vercel.app/",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  // {
  //   id: "e-commerce-api-nodejs",
  //   title: "E-commerce API",
  //   description:
  //     "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
  //   icon: "/skills/nodejs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  // },
  // {
  //   id: "flutter-carousel-widget-package",
  //   title: "Flutter Carousel Widget Package",
  //   description:
  //     "A customizable carousel widget for Flutter, offering features such as infinite scrolling, auto-scrolling, custom child widgets, pre-built indicators, expandable child widgets, auto-sized child support, and enlarged center page.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/flutter-carousel-widget-package",
  //   tags: ["Flutter", "Dart", "Carousel"],
  // },
  // {
  //   id: "get-time-ago-package",
  //   title: "GetTimeAgo Package",
  //   description:
  //     "A Dart package that converts and formats DateTime objects into human-readable 'time ago' strings, such as '20 seconds ago', 'a minute ago', or '7 hours ago'.",
  //   icon: "/skills/dart.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/gettimeago",
  //   tags: ["Dart", "DateTime", "Formatting"],
  // },
  // {
  //   id: "bus-reservation-system-management",
  //   title: "Bus Reservation System Management",
  //   description:
  //     "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
  //   icon: "/skills/cpp.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/bus-reservation-system",
  //   tags: ["C++", "OOP", "File Handling"],
  // },
];
export default projects;
