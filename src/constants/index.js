import {
  youtube,
  netlify,
  cheshm,
  threeFaces,
  hamoun,
  contconsult,
  nasimearam,
  kimiaye,
  gallery,
  ego,
  virgo,
  leavesVase,
  fishplate,
  circleplate,
  dali,
  logoBlack,
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
    icon: fishplate,
  },
  {
    title: "Designer / Creator",
    icon: gallery,
  },
  {
    title: "Project Manager",
    icon: dali,
  }
];

const experiences = [
  {
    title: "Pottery Instructor",
    company_name: "Non-profit school of Kimiaye Elm",
    icon: kimiaye,
    iconBg: "#ffffff",
    date: "August 2022 - July 2023",
    points: [
      "Ceramic theory training (primary and secondary soils)",
      "Teaching how to make clay objects in three ways: pinch, coil and slab",
      "Basic training on drying pottery crafts",
      "Having an effective relationship with students aged 6 - 12 years",
      "Children's familiarity with pottery materials and accessories, such as types of clay pastes, colours, glazes and tools needed in pottery",
    ],
  },
  {
    title: "Pottery and Sculpture Instructure",
    company_name: "Kohan Ceramic School (independent workshop)",
    icon: logoBlack,
    iconBg: "#ffffff",
    date: "March 2021 - Present",
    points: [
      "Nurturing the students' ability to synchronise movement of their fingers with precision and dexterity when using their hands",
      "Teaching decorating and colouring techniques such as painting, stamping and using glazes to children aged 5 - 15 years",
      "Improving children's skills in working with pottery tools such as pottery wheels, cutting and turning tools, and decorative tools",
      "Making and producing pottery objects with various techniques while ensuring a high standard throughout",
      "Having an effective relationship and cooperation with art galleries and other designers (especially architects)",
      "Reconstruction of pottery objects to give sentimental objects a new lease of life",
    ],
  },
  {
    title: "Pottery Instructor",
    company_name: "Nasime Aram Pottery School",
    icon: nasimearam,
    iconBg: "#ffffff",
    date: "January 2020 - Present",
    points: [
      "Help in cultivating the creativity of each person and increasing their power of ideation",
      "Basic training of drying clay structures",
      "Teaching all kinds of pottery processes, such as wheel pottery, hand pottery and casting pottery",
      "Collaboration with other artists designing and creating unique, one-off pieces",
    ],
  },
  {
    title: "AutoCAD and 3D Work Specialist",
    company_name: "Cont Consulting Engineers and Associates",
    icon: contconsult,
    iconBg: "#ffffff",
    date: "November 2016 - November 2017",
    points: [
      "Carrying out research and educational work in the field of space design",
      "Execution of plans for the first and second phase of the building design of the Central Bar Association in AutoCAD (two and three-dimensional designs)",
      "Execution of the building facade of the Central Bar Association in AutoCAD",
    ],
  },
  {
    title: "Designer and AutoCAD Specialist",
    company_name: "Hamoun Consulting Engineers Co",
    icon: hamoun,
    iconBg: "#ffffff",
    date: "July 2014 - October 2016",
    points: [
      "Developed the initial designs and interior decor for duplex villas in Northern Iran",
      "Implemented plans for the design of the first and second phase of the Green Towers complex (Aghdasiyeh, Tehran)",
      "Drew mechanical and electrical installations for clients' buildings"
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
