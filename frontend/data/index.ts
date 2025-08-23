export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "Final-year IT undergraduate at SLIIT with hands-on experience in full-stack development",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Sri Lanka, flexible with global communications",
    description: "Location & Availability",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about building scalable applications and self-learning.",
    description: "Tech Enthusiast",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently seeking internship opportunities in software development and DevOps.",
    description: "Career Goals",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect and discuss opportunities!",
    description: "Contact Me",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Social Media Application",
    des: "Developed a responsive full-stack social media platform with secure JWT-based authentication, Google OAuth2 login, and real-time messaging using WebSockets. Implemented core features such as post creation/editing, comments, likes, shares, follow/unfollow functionality, and real-time notifications. Designed RESTful APIs with Spring Boot and managed the frontend using React and Tailwind CSS for a modern, mobile-friendly UI. Integrated MySQL for persistent storage and ensured secure data flow through role-based access and token-based authorization.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/KanchanaKoralage1/Social-Media-App",
  },
  {
    id: 2,
    title: "Book Store Mobile App using React Native",
    des: "Amobile app where users can sign up, log in, and share book recommendations. Users can add, edit, or delete book posts with images and ratings.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/KanchanaKoralage1/Book-store-Mobile-app",
  },
  {
    id: 3,
    title: "Task Management WebApp",
    des: " A full-stack web application built to streamline team task assignment, tracking, and management. Designed with a responsive UI and secure role-based access for both users and admins, it enhances collaboration and productivity across all devices. Users can login and signup with their google account (OAuth 2.0) And Users can generate documents as well.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/KanchanaKoralage1/Task-Management-WebApp",
  },
  {
    id: 4,
    title: "Library management system",
    des: "This is my recently created full-stack web application that allows users to manage a digital library efficiently. Features include user authentication, book search, CRUD operations for books, image uploads, and a responsive UI. Built using the MERN stack with Cloudinary for image storage.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/KanchanaKoralage1/Library-management",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];


export const skillsData = {
  education: [
    {
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      degree: "BSc (Hons) in Information Technology",
      period: "Oct 2022 - Present",
    },
    {
      school: "Ananda Central College, Elpitiya",
      degree: "Advanced Level (AL)",
      period: "May 2017 - 2019",
    },
  ],
  softSkills: [
    "Teamwork",
    "Leadership",
    "Communication",
    "Problem-solving",
    "Creativity",
    "Adaptability",
    "Time Management",
  ],
  technical: {
    programmingLanguages: [
      "JavaScript",
      "Java",
      "Kotlin",
      "Python",
      "SQL",
      "HTML",
      "CSS",
    ],
    frameworks: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "Spring Boot",
    ],
    databases: ["MongoDB", "MySQL", "SQLite"],
    tools: [
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jenkins",
      "Docker",
      "Google Cloud Platform",
      "Postman",
      "Figma",
      "SonarQube",
      "Trello",
    ],
    ideTesting: [
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Android Studio",
      "JUnit",
      "Postman",
      "Selenium",
    ],
    concepts: [
      "RESTful APIs",
      "OOP",
      "MVC",
      "Data Structures & Algorithms",
      "CI/CD",
      "Microservices",
    ],
  },
};


export const certifications = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];