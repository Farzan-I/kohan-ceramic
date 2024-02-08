import {
  threeFaces,
  gallery,
  goat,
  fishplate,
  greendo,
  girihvase,
  hamoun,
  contconsult,
  nasimearam,
  kimiaye,
  pouya,
  logoBlack,
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

const aboutPics = [
  {
    title: "Fish plate",
    icon: fishplate,
  },
  {
    title: "Gallery image",
    icon: gallery,
  },
  {
    title: "Green doughnut vase",
    icon: greendo,
  }
];

const experiences = [
  {
    title: "Pottery and Sculpture Instructure",
    company_name: "Kohan Ceramic School (independent workshop)",
    icon: logoBlack,
    iconBg: "#ffffff",
    date: "August 2019 - Present",
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
    date: "April 2019 - Present",
    points: [
      "Help in cultivating the creativity of each person and increasing their power of ideation",
      "Basic training of drying clay structures",
      "Teaching all kinds of pottery processes, such as wheel pottery, hand pottery and casting pottery",
      "Collaboration with other artists designing and creating unique, one-off pieces",
    ],
  },
  {
    title: "Art student",
    company_name: "Aesthetics of Art course in Pouya Andish",
    icon: pouya,
    iconBg: "#ffffff",
    date: "January 2023 - December 2023",
    points: [
      "Gaining insights from legendary director, poet and professor of the course, Mohammad Reza Aslani, the educational programme discussed the importance of fantasy and its cultivation, how it differs from illusion and that fantasy is our escape from the world",
      "",
    ],
  },
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
      "Having an effective relationship with students aged 5 - 15 years",
      "Children's familiarity with pottery materials and accessories, such as types of clay pastes, colours, glazes and tools needed in pottery",
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
    name: "Inspired by architecture",
    description:
      "Inspired by girih tiling and muqarnas art found in Persian and Middle-Eastern architecture, I've created several pieces using hand-drawn and freehand techniques. Having studied the field at degree level, I've brought elements of buildings into my work that capture most of their intricate aspects such as the carvings, paintings and hand welded structures.",
    image: girihvase,
    source_code_link: "https://www.instagram.com/p/CAIDOIAAujx/",
  },
  {
    name: "Raising social awareness",
    description:
      "Touching on social issues and bringing them to life in the form of sculptures, I provoke thoughts that most people would stay away from. My most famous piece, the 'ahle jahl' represents the three emotions of fear, pride and anger. These qualities destroy human life by keeping a person at a low frequency. By avoiding these, we can achieve more success in life.",
    image: threeFaces,
    source_code_link: "https://www.instagram.com/p/CQBEAI-AGso/?igsh=MTc4MmM1YmI2Ng%3D%3D",
  },
  {
    name: "Innovative designs",
    description:
      "A believer of Zodiac star signs, I created horoscope pieces that initially began with custom orders for clients. This became a permanent range that was created as 2D or 3D items in the form of vases, mugs, ashtrays, plates, sculptures, you name it! I also create unique pieces that repurpose sentimental objects and give them a new lease of life for clients.",
    image: goat,
    source_code_link: "https://www.instagram.com/p/CQbQ4FNgL67/?igsh=MTc4MmM1YmI2Ng%3D%3D",
  },
];

export { aboutPics, experiences, collections};
