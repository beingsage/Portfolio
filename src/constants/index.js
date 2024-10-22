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
  logocolor,
  Instagram, 
  fullstack,
  sdlc,
  reccomendations,
  cyrptomania,
  cloudanamoly,
  oneai
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "AWS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  
];

const experiences = [
  {
    title: "IT Intern",
    company_name: "Startup World",
    icon: logocolor,
    iconBg: "#383E56",
    date: "August 2024 - October 2024",
    points: [
      "Guided both offline and online teams in implementing the CJN Project.",
      "Developed static sites for marketing purposes and a database system for attendance management.",
      "Fixed UI bugs in deployed websites to ensure smooth functionality and a better user experience.",
      "Collaborated with cross-functional teams to deliver effective solutions and project outcomes.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NullClass EDTech.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2024 - July 2024",
    points: [
      "Developed and maintained web applications using React.js and other related technologies",
      "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implemented microservices such as internationalization, payment integration, and accessibility in a Twitter clone application developed during the training period.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Instagram Influencer(14k)",
    company_name: "Self- Employed ",
    icon: Instagram,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Current",
    points: [
      "@bitsage_ suggests a tech-focused or insightful content theme, potentially around technology, coding, or digital topics.",
      "Likely involves tech-related posts, possibly sharing knowledge, tips, or resources in areas such as software development, AI, or tech trends.",
      "Might target tech enthusiasts, coders, or developers interested in staying updated with the latest trends or learning new skills.",
      "Could use a clean, minimalistic visual aesthetic, emphasizing clarity and practicality, fitting well with a professional or tech-savvy audience.",
    ],
  }
];

const testimonials = [
  {
  name: "Full Stack Developer",
  description:
    "Successfully completed an 8-week Full Stack Developer Bootcamp, mastering both frontend and backend technologies, provided by GeeksforGeeks.",
  tags: [
    {
      name: "Geeks For Geeks",
      color: "blue-text-gradient",
    }
    
  ],
  image: fullstack,
  source_code_link: "https://drive.google.com/file/d/14G7rEmJe28CVDjF3ze95fMx1EWk2zj7W/view?usp=drive_link",
},
{
  name: "Building Recommendation System",
  description:
    "Successfully completed a course on Building Recommendation Systems, gaining skills in algorithms and techniques for personalized recommendations.",
  tags: [
    {
      name: "Great learning",
      color: "blue-text-gradient",
    }
  ],
  image: reccomendations,
  source_code_link: "https://drive.google.com/file/d/1y7r-SDWBvGKbAjvZh1DlGdrQGGPSn-np/view?usp=drive_link",
},
{
  name: "Software Developement Life Cycle",
  description:
    "Successfully completed a course on Software Development Life Cycle (SDLC), mastering key phases from planning to deployments.",
  tags: [
    {
      name: "Great Learning",
      color: "blue-text-gradient",
    }
  ],
  image: sdlc,
  source_code_link: "https://drive.google.com/file/d/1Z_EjkGbQu_b9sRXWwM9CBl-sptdmZ3zz/view?usp=drive_link",
},
];

const projects = [
  {
    name: "Crypto Mania",
    description:
      "A UI Dashboard for Crypto Enthusiasts where they can see accurate Real-Time Data of highly fluctuating market.",
    tags: [
      {
        name: "Chart.JS",
        color: "blue-text-gradient",
      },
      {
        name: "ShadCN",
        color: "green-text-gradient",
      },
      {
        name: "Tanstack Table",
        color: "pink-text-gradient",
      },
    ],
    image: cyrptomania,
    source_code_link: "https://github.com/beingsage/Crypto_Mania",
  },
  {
    name: "One AI",
    description:
      "AI Infused Platform where user can visualize the project idea, file structure, and tech stack just by giving a single prompt.",
    tags: [
      {
        name: "Supabase",
        color: "blue-text-gradient",
      },
      {
        name: "Formik",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: oneai,
    source_code_link: "https://github.com/beingsage/one_ai",
  },
  {
    name: "Cloud Anamoly Detection",
    description:
      " A Monitoring Platform where user can keep a track of their cloud Infrastrucure Resources and get automated alerts on probable anamolies.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Magic UI",
        color: "pink-text-gradient",
      },
    ],
    image: cloudanamoly,
    source_code_link: "https://github.com/beingsage/anamoly",
  },
];

export { services, technologies, experiences, testimonials, projects };
