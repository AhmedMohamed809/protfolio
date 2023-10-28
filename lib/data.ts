import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hotel from "@/public/js.png";
import lang from "@/public/lang.png";
import comm from "@/public/commercial.png";
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
    title: "Graduated from Code Your Future  bootcamp",
    location: "Manchester,Uk",
    description:
      "After 1 year of commitment and hard-worked I was graduated as Full-Stack Developer from code your future bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2022 - April 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Manchester,Uk",
    description:
"Developed the language exchange web application with the purpose of connecting language learners with native speakers to facilitate language practice and cultural exchange.Collaborated with a team to develop a full-stack web application for a language exchange program using JS, React, Node.js, Express, PostgreSQL, and JWT.Used Git & GitHub in an Agile & Scrum environment to efficiently work together on group projects.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023-April 2023",
  },
  {
    title: "Junior software Developer",
    location: "Manchester,Uk",
    description:
      "Responsible for developing and delivering front-end and back-end applications to meet the needs of the users and the organization. Collaborated with a team to develop a full-stack web application to build impactful features that support the day-to-day operations of CYF using JS, React, Node.js, Express, PostgreSQL, and Cypress.",
    icon: React.createElement(FaReact),
    date: "April 2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Language Exchange",
    description:
      "language exchange website that connects language learners worldwide.",
    tags: ["React", "PSQL", "Express", "Node.js", "Ant Design"],
    url:"https://github.com/levilu800b/DALR-Language-Exchange",
    imageUrl: lang,
  },
  {
    title: "Ahmed Shop", 
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "JSX", "CSS"],
    url:"https://ahmed-shop.netlify.app/",
    imageUrl: comm,
  },
  {
    title: "Word Analytics",
    description:
      "We are a professional removal’s company based in Manchester. JS Logistics Nationwide Ltd deliveries was established with one view in mind, ” EXCELLENCE”.",
    tags: ["HTML", "WLFORM", "Wordpress", "Tailwind", "Framer"],
    url:"www.google.com",
    imageUrl: hotel,
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
  "Agile",
  "DOM",
  "API",
  "TDD",
  "Express",
  "PostgreSQL",
  "Cypress",
  "Bootstrap",
  "wordpress",
  "Framer Motion",
] as const;