import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    agakhan,
    ted,
    threejs,
    coming_soon,
    flixx_app,
    sumz,
    scs,
    rbc
  } from "../assets";
  
  export const navLinks = [
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Computer Science Student",
      icon: mobile,
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
      title: "Software Developer Intern",
      company_name: "Royal Bank of Canada (RBC)",
      icon: rbc,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "International Money Transfer",
         ],
    },
    {
      title: "Director of Technology",
      company_name: "Software Engineering and Computer Science Society (SCS) Concordia",
      icon: scs,
      iconBg: "#383E56",
      date: "Oct 2023 - Present",
      points: [
        "Work with 4 directors on projects including the SCS and Algotime websites",
         ],
    },
    {
      title: "Software Engineer",
      company_name: "DoMore 2021",
      icon: agakhan,
      iconBg: "#383E56",
      date: "Jan 2021 - June 2021",
      points: [
        "Led a team of 2 developers to engineer a tuition fundraising website using JavaScript, HTML, CSS and Figma for underprivileged East African students, with over $40,000 USD raised",
        ],
    },
    {
      title: "Web Developer",
      company_name: "TEDxYouth@AKAMombasa",
      icon: ted,
      iconBg: "#383E56",
      date: "Sep 2019 - Jan 2021",
      points: [
        "Built upon the TEDxYouth website by adding Javascript components and migrating the website to WordPress CMS reducing content update times by 50%",
         ],
    },
  ];
  
  const projects = [
    {
      name: "Flixx",
      description:
        "Movie app using TMDB API v3 built with vanilla JavaScript; shows popular films/TV, details, search, pagination and more.",
      additional_info: "",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "vanillaJS",
          color: "white-text-gradient",
        }
      ],
      image: flixx_app,
      source_code_link: "https://github.com/HishamLadha/flixx-app",
      project_link: "https://flixx.hishamladha.com",
    },
    {
      name: "AI Article Summarizer",
      description:
        "AI-powered application that extracts and summarizes content from article links using the OpenAI API.",
      additional_info: "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "orange-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/HishamLadha/ai_summarizer",
      project_link: "https://sumz.hishamladha.com"
    },
    {
      name: "Hectic Garage",
      description:
        "Secure web dashboard showing revenue generated & potential revenue missed through a for a tire repair shop.",
      additional_info: "Won 3rd place for the SAP hackathon challenge at ConUHacks VIII",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "orange-text-gradient",
        },
      ],
      image: coming_soon,
      source_code_link: "https://github.com/HishamLadha",
      
    },
    {
      name: "Hectic Garage",
      description:
        "Secure web dashboard showing revenue generated & potential revenue missed through a for a tire repair shop.",
      additional_info: "Won 3rd place for the SAP hackathon challenge at ConUHacks VIII",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "orange-text-gradient",
        },
      ],
      image: coming_soon,
      source_code_link: "https://github.com/HishamLadha",
      
    },
    {
      name: "Hectic Garage",
      description:
        "Secure web dashboard showing revenue generated & potential revenue missed through a for a tire repair shop.",
      additional_info: "Won 3rd place for the SAP hackathon challenge at ConUHacks VIII",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "orange-text-gradient",
        },
      ],
      image: coming_soon,
      source_code_link: "https://github.com/HishamLadha",
      
    },
  ];
  
  export { services, technologies, experiences, projects };