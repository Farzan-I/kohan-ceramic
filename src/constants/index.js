import {
  backend,
  creator,
  cheshm,
  youtube,
  netlify,
  threeFaces,
} from "../assets";

import {
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "collection",
    title: "Collection"
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: threeFaces,
  },
  {
    title: "Designer / Creator",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
  {
    title: "Pro",
    icon: creator,
  }
];

const experiences = [
  {
    title: "Freelance: Ceramic pottery",
    company_name: "Sogol Orumchi ~ Kohan Ceramic by SGL (Intl.)",
    icon: logo,
    iconBg: "#000000",
    date: "August 2022 - Present",
    points: [
      "",
    ],
  },
];

const collections = [
  {
    name: "Name one",
    description:
      "",
    tags: [
      {
        name: "Number one",
        color: "blue-text-gradient",
      },
      {
        name: "Number two",
        color: "green-text-gradient",
      },
      {
        name: "Number three",
        color: "pink-text-gradient",
      },
    ], 
    image: cheshm,
    otherImage: youtube,
    source_code_link: "",
    source_code_link_other: "",
  },
  {
    name: "Name two",
    description:
      "",
    tags: [
      {
        name: "Number one",
        color: "blue-text-gradient",
      },
      {
        name: "Number two",
        color: "green-text-gradient",
      },
      {
        name: "Number three",
        color: "pink-text-gradient",
      },
    ],
    image: threeFaces,
    otherImage: netlify,
    source_code_link: "",
    source_code_link_other: "",
  },
];

export { services, experiences, collections};