import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chartjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Éxpérience professionnelle",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Architecte logiciel",
    icon: web,
  },
  {
    title: "Développeur Frontend",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Formateur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "chartjs",
    icon: chartjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Développeur Frontend",
    company_name: "Etienne Service - Noisy-le-Sec | Stage",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Janvier 2020 - Mars 2020",
    points: [
      "Maquettage, prototypage et création d’icones.",
      "Développement front-end HTML/CSS/JS.",
      "Maintenance du site et SEO.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "Marquerie - Paris 2eme arrondissement | Alternance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Septembre 2021 - Septembre 2022",
    points: [
      "Développement d’une carte interactive en JS/LIQUID/JSON pour 2000 marques présentes en France",
      "maintenance du site et déploiement de nouveaux modules à l’aide de JQUERY et REACT. ",
      "Maquettage et intégration à l’aide de FIGMA.",
    ],
  },
  {
    title: "Architecte Logiciel",
    company_name: "Ministère de l’Économie - Paris 12eme arrondissement | Alternance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Septembre 2022 - Aujourd’hui",
    points: [
      "Accompagement des porteurs d’offres du Ministère dans la conception technique, la transformation numérique et le développement de solutions Innovantes à destination des acteurs clés du Ministère et de l’État.",
    ],
  },
  {
    title: "Mentorat",
    company_name: "Article 1 - Dema1n",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Aujourd’hui",
    points: [
      "En tant que mentor et architecte logiciel, je conseille et guide les élèves dans leur domaine. Je les aide à mieux comprendre les concepts de programmation, les processus de développement de logiciels, les pratiques de codage efficaces et les techniques d'analyse et de conception de systèmes.",
      "Les commentaires constructifs sont essentiels pour aider les élèves à améliorer leurs compétences. Je fournis des commentaires sur le travail des élèves et les aide à comprendre comment améliorer leur performance et atteindre leurs objectifs.",
      " J'encourage et motive les élèves à poursuivre leurs objectifs et à persévérer dans leur domaine. J'inspire les élèves en partageant mon expérience personnelle et en leur offrant un soutien moral. Je les aide également à établir des objectifs réalistes et à travailler de manière cohérente pour les atteindre.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Etienne Services",
    description:
      "Etienne Services est une entreprise familiale d’artisans fournissant des services de serrurerie, plomberie et électricien.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.etienne-services.fr/",
  },
  {
    name: "Marquerie",
    description:
      "Marquerie.co est un site B2B de vente de produits français et locaux qui met en relation marque et point de vente en facilitant le dialogue et les échanges.",
    tags: [
      {
        name: "Sass",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Transformation Bercy",
    description:
      "Transformation Bercy est un hub dedié au Laboratoire de transformations du Ministère et qui contient différentes applications et outils pour permettre aux agents de mener à bien leurs missions.",
    tags: [
      {
        name: "Sass",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
