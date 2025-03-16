import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aditya",
  lastName: "Gupta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist & ML/DL Enthusiast",
  avatar: "/images/avatar.jpg",
  location: "Asia/Calcutta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AdityaGupta832342",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/adityagupta1807",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityagupta1807@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Scientist and ML/DL Enthusiast</>,
  subline: (
    <>
      Bridging the gap between data and insights, I specialize in AI, ML, and 
      automation. When I’m not building intelligent systems, I’m crafting 
      seamless user experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a data scientist with a passion for AI, machine learning, and automation.
        My journey spans from building intelligent systems to designing seamless 
        user experiences. I thrive on solving complex problems, optimizing models, 
        and deploying AI-powered solutions that make an impact.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      
      {
        company: "Haltdos",
        timeframe: "Internship",
        role: "Web Development Intern",
        achievements: [
          <>Developed a Next.js website for AKS IT services, improving site performance and usability.</>,
          <>Gained hands-on experience in cloud security and enterprise solutions.</>,
        ],
        images: [],
      },
      {
        company: "HOBIT",
        timeframe: "Internship",
        role: "Web Development Intern",
        achievements: [
          <>Worked on frontend development, enhancing user interface designs.</>,
          <>Collaborated in a corporate setting, gaining exposure to agile workflows.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Sharda University",
        description: <>Completed B.Tech in Computer Science & Engineering (Data Science).</>,
      },
      {
        name: "Kothari International School",
        description: <>Completed 10th and 12th from Kothari International School, Noida. </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & Deep Learning",
        description: <>Proficient in PyTorch, TensorFlow, and model optimization techniques.</>,
        images: [],
      },
      {
        title: "Computer Vision",
        description: <>Experience with YOLO, OpenCV, and feature extraction methods.</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Building scalable web apps with Next.js, Tailwind CSS, and API integrations.</>,
        images: [],
      },
      {
        title: "Data Engineering",
        description: <>Worked on data pipelines, ETL processes, and on-premises data lakehouses.</>,
        images: [],
      },
      {
        title: "NLP & Generative AI",
        description: <>Fine-tuned LLMs for text annotation and manga artwork generation.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
