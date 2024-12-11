import BODHABYTES from "../assets/BODHABYTES.jpg";
import CareerCampus from "../assets/CareerCampus.jpg";
import GITA from "../assets/GITA.jpg";

export const HERO_CONTENT = `I am a dedicated full-stack developer currently in the final year of my Computer Science and Engineering degree. I have hands-on experience building frontend projects using React.js and Tailwind CSS, complemented by backend development with Node.js and Express.js. I am eager to contribute my skills to help businesses achieve their goals. My professional objective is to deepen my understanding of technology to solve problems effectively and efficiently, driving innovation and delivering impactful solutions.`;

export const PROJECTS = [
  {
    title: "BodhaBytes",
    image: BODHABYTES,
    description:
      "A fully functional bloging site where one can read and write blogs .",
    TechStack: [
      "React",
      "MongoDb",
      "NodeJs",
      "expressJs",
      "Tailwind Css",
      "Zod",
      "JWT",
    ],
    gitHub: "https://github.com/roysubhajyoti/Blog.",
  },
  {
    title: "CareerCampus",
    image: CareerCampus,
    description:
      "A website for students and parents to navigate various educational path starting from class 10 through interactive interface.",
    TechStack: [
      "React",
      "MongoDb",
      "NodeJs",
      "expressJs",
      "Tailwind Css",
      "JWT",
      "Motion.div",
    ],
    gitHub: "https://github.com/roysubhajyoti/CareerCompass",
  },
  {
    title: "Bhagavad Gita On Web",
    image: GITA,
    description:
      "A simple website to read the verse through an Api using Chapter and verse number and understand the meaning.",
    TechStack: ["React", "Tailwind Css"],
    gitHub: "https://github.com/roysubhajyoti/Gita_On_Web",
  },
];

export const CONTACTS = {
  email: "roySubbhajyoti272@gmail.com",
  ldin: "https://www.linkedin.com/in/roysubhajyoti/",
  gitHUb: "https://github.com/roysubhajyoti",
};
