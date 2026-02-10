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
  gestionVisiteurs,
  affichageNumerique,
  chocolat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Automation Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur Full-Stack & Automation",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#383E56",
    date: "Juin 2024 – Décembre 2025",
    points: [
      "Conception et développement d’applications web interactives avec React, Node.js, PHP et Python.",
      "Création de workflows automatisés avec n8n pour optimiser les processus.",
      "Gestion de bases de données SQL et MongoDB et intégration d’API externes.",
      "Mise en ligne des projets et suivi de version avec Git/GitHub.",
    ],
  },
  {
    title: "Agent logistique",
    company_name: "bpost",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Juillet 2022 – Juin 2024",
    points: [
      "Organisation et suivi des opérations pour garantir l’efficacité des flux.",
      "Utilisation d’outils numériques pour le suivi et la traçabilité.",
      "Coordination avec les équipes pour optimiser la productivité.",
      "Résolution rapide des problèmes et amélioration continue des processus.",
    ],
  },
  {
    title: "Formateur en mathématiques",
    company_name: "Indépendant",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Juillet 2021 – Juin 2022",
    points: [
      "Animation de formations et explication de concepts complexes de façon simple.",
      "Conception de supports pédagogiques clairs et structurés.",
      "Accompagnement personnalisé des élèves pour maximiser leur apprentissage.",
      "Gestion de projets éducatifs et suivi des performances.",
    ],
  },
  {
    title: "Enseignant en mathématiques",
    company_name: "Lycée secondaire Ibn Yassine",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Septembre 2017 – Juin 2021",
    points: [
      "Gestion de projets pédagogiques et organisation de contenus complexes.",
      "Explication de concepts techniques de manière claire et structurée.",
      "Encadrement et suivi des progrès des élèves.",
      "Développement de compétences analytiques et de résolution de problèmes.",
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
    name: "Gestion Visiteurs",
    description:
      "Platform that allows schools to manage visitor registration, track attendance, and generate reports. Built with React, Node.js, Express, and MongoDB, providing real-time updates and secure access control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: gestionVisiteurs,
    source_code_link: "https://github.com/SoulaimanDev",
  },
  {
    name: "Chocolat",
    description:
      "Website for a chocolate shop where users can browse products, view details, and place orders. Built with PHP, CSS, and MySQL to manage inventory and user accounts efficiently.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chocolat,
    source_code_link: "https://github.com/SoulaimanDev",
  },
  {
    name: "Affichage Numérique",
    description:
      "Web application for digital signage, enabling users to upload, schedule, and display content on screens remotely. Developed with PHP and MySQL, with a responsive dashboard and secure authentication system.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "responsive-design",
        color: "pink-text-gradient",
      },
    ],
    image: affichageNumerique,
    source_code_link: "https://github.com/SoulaimanDev",
  },
];

export { services, technologies, experiences, testimonials, projects };
