import { Home, User, FolderGit2, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const PROFILE = {
  name: "Razan Nasrallah",
  role: "Full Stack Developer",
  slogan: "Engineering Intelligent SaaS Solutions.",
  about:
    "I engineer digital ecosystems. With a focus on AI & Full-Stack Architecture, I build platforms that transform raw data into insights.",
  email: "razan.rezzq@gmail.com",
};

export const NAV_ITEMS = [
  {
    title: "Home",
    icon: React.createElement(Home, {
      className: "h-full w-full text-neutral-300",
    }),
    href: "#home",
  },
  {
    title: "About",
    icon: React.createElement(User, {
      className: "h-full w-full text-neutral-300",
    }),
    href: "#about",
  },
  {
    title: "Work",
    icon: React.createElement(FolderGit2, {
      className: "h-full w-full text-neutral-300",
    }),
    href: "#projects",
  },
  {
    title: "GitHub",
    icon: React.createElement(Github, {
      className: "h-full w-full text-neutral-300",
    }),
    href: "https://github.com/RazanRezq",
    external: true,
  },
  {
    title: "LinkedIn",
    icon: React.createElement(Linkedin, {
      className: "h-full w-full text-neutral-300",
    }),
    href: "https://www.linkedin.com/in/rznrzq/",
    external: true,
  },
  {
    title: "Contact",
    icon: React.createElement(Mail, {
      className: "h-full w-full text-neutral-300",
    }),
    href: `mailto:${PROFILE.email}`,
    external: true,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Jadara",
    des: "AI-powered recruitment platform. Analyzes voice interviews & CVs for real-time match scoring.",
    img: "/jadara-dashboard.png",
    iconLists: ["Next.js", "Tailwind", "TypeScript", "OpenAI", "MongoDB"],
    link: "https://jadara.vercel.app/login",
    github: "https://github.com/RazanRezq/munjiz",
  },
];

export const TECH_ICONS: Record<string, string> = {
  "Next.js": "⚡",
  Tailwind: "🎨",
  TypeScript: "📘",
  OpenAI: "🤖",
  MongoDB: "🍃",
};

export const GRID_ITEMS = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building an AI Recruitment SaaS",
    description: "Jadara - The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-30",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
