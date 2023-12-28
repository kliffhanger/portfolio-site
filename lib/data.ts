import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import geniusIng from "@/public/genius.png";
import MedzImg from "@/public/medzexchange.png";
import LuxImg from "@/public/luxuryliving.png";
import carboImg from "@/public/carbonyte.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering - BE",
    location: "Goa, India",
    institution: "Padre Conceicao College of Engineering",
    description:
      "Graduated for Padre Conceicao college of engineering with a degree in computer engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
  {
    title: "Front-End Developer / Co-founder",
    location: "Goa, India",
    institution: "Alphacode Technologies LLP",
    description:
      "From freelancing during college me and a couple of friends created a startup where I did my part as UI/UX designer and frontend developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Electronic Data Interchange Developer",
    location: "Goa India",
    institution: "Tangentia",
    description:
      "Got an opportunity to try EDI development where I was able to interact with international clients and help setup their data exchange processes",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Frontend Developer",
    location: "Goa India",
    institution: "EnigmaSoft Technologies",
    description:
      "Shifted back to frontend development and started focusing on frameworks and upskilling my tech stack",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Genius Telecoms",
    description:
      "I worked as a fontend developer on this project for 1 years. An ecommerce website for buying esims.",
    tags: ["HTML", "Sass", "JQuery", "Bootsrap"],
    imageUrl: geniusIng,
  },
  {
    title: "Medz Exhange",
    description:
      "Assited in the developement of this B2B pharmaceutical portal and also assisted in their wordpress website.",
    tags: ["HTML", "JavaScript", "jQuery", "CSS", "Data Tables", "SEO optimization"],
    imageUrl: MedzImg,
  },
  {
    title: "Luxury Living",
    description:
      "A wordpress site for the brokeage of properties around India.",
    tags: ["Wordress", "JIRA"],
    imageUrl: LuxImg,
  },
  {
    title: "Carbonyte",
    description:
      "A landing page for the Carbonyte NeoBank which includes blogs and mordern UI.",
    tags: ["HTML", "Sass", "PHP", "jQuery", "Ajax"],
    imageUrl: carboImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Bootstrap",
  "Sass",
  "Redux",
  "jQuery",
  "Figma",
  "Wordpress",
  "Framer Motion",
] as const;