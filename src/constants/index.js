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
    sumz
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
      title: "Computer Science Student",
      icon: mobile,
    },
    // {
    //   title: "",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      title: "IT Team Lead",
      company_name: "TEDxYouth@AKAMombasa",
      icon: ted,
      iconBg: "#383E56",
      date: "Sep 2019 - Jan 2021",
      points: [
        "Front-end development and general IT oversight for the 2020 TEDxYouth@AKAMombasa Event.",
        "Built upon the website by adding JavaScript components and later migrated the contents to WordPress for simpler content management.",
        "Organized screen projection and audio interface communication for every TED talk.",

      ],
    },
    {
      title: "Lead Web Developer",
      company_name: "DoMore 2021 - Aga Khan Academy, Mombasa",
      icon: agakhan,
      iconBg: "#383E56",
      date: "Jan 2021 - June 2021",
      points: [
        "Front-end development for the DoMore fundraising website (over USD 40,000 raised).",
        "Led a team of 2 developers to design and develop the fundraising website for the 2021 DoMore initiative",
        "Coordinated with the media and finance team to add scheduled content to the website including success story videos/testimonials, student backgrounds, graduation photos.",
        "Improved the user experience over time by modifying the position and behavior of different elements based on feedback from the entire team."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Flixx",
      description:
        "Movie app using TMDB API v3 built with vanilla JavaScript; shows popular films/TV, details, search, pagination and more.",
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
    },
    {
      name: "AI Article Summarizer",
      description:
        "AI-powered application that extracts and summarizes content from article links using the OpenAI API.",
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
    },
    {
      name: "Code-named: Treasure Island",
      description:
        "Sailing the digital seas to bring you a gem of a project. Drop anchor back here soon!",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: coming_soon,
      source_code_link: "https://github.com/HishamLadha",
    },
  ];
  
  export { services, technologies, experiences, projects };