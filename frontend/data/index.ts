export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
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
    title: "E-Commerce Application using .NET and Blazor",
    des: "Developed a full-stack e-commerce web application to deliver a secure and seamless online shopping experience, featuring product browsing, shopping cart functionality, order tracking, and Stripe payment integration. The system includes authentication using Google and Facebook OAuth 2.0 with role-based access control. The application was built using C#, .NET 9, Blazor Server, Entity Framework Core, ASP.NET Core Identity, Stripe API, and Bootstrap 5.",
    img: "/ecommerce.png",
    iconLists: ["/dotnet.svg", "/blazor.svg", "/csharp.svg", "/stripe.svg", "/sql.svg"],
    link: "https://github.com/KanchanaKoralage1/Ecommerce_Web_App_with_.NET_and_Blazor.git",
  },
  {
    id: 2,
    title: "Application Tracking System using Machine Learning",
    des: "Developed a full-stack Application Tracking System (ATS) that analyzes resumes against job descriptions to generate ATS scores, perform skill matching, and classify roles using machine learning techniques. The system includes features such as resume upload, CV filtering, candidate management, user authentication, profile management with image uploads, and a responsive dashboard interface. It was built using React with TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Python for machine learning (TF-IDF and resume classification), Multer, and RESTful APIs.",
    img: "/ats.png",
    iconLists: ["/react.svg", "/nodejs.svg", "/python.svg", "/mongo.svg"],
    link: "https://github.com/KanchanaKoralage1/Application-tracking-system.git",
  },
  {
    id: 3,
    title: "Social Media Application",
    des: "Developed a responsive full-stack social media platform with secure JWT-based authentication, Google OAuth2 login, and real-time messaging using WebSockets. Implemented core features such as post creation/editing, comments, likes, shares, follow/unfollow functionality, and real-time notifications. Designed RESTful APIs with Spring Boot and managed the frontend using React and Tailwind CSS for a modern, mobile-friendly UI. Integrated MySQL for persistent storage and ensured secure data flow through role-based access and token-based authorization.",
    img: "/social.png",
    iconLists: ["/spring.svg", "/tail.svg", "/js.svg", "/gcp.svg", "/sql.svg"],
    link: "https://github.com/KanchanaKoralage1/Social-Media-App",
  },
  {
    id: 4,
    title: "Book Store Mobile App using React Native",
    des: "Amobile app where users can sign up, log in, and share book recommendations. Users can add, edit, or delete book posts with images and ratings.",
    img: "/book.png",
    iconLists: ["/reactnative.svg", "/tail.svg", "/js.svg", "/mongo.svg", "/expo.svg"],
    link: "https://github.com/KanchanaKoralage1/Book-store-Mobile-app",
  },
  {
    id: 5,
    title: "Task Management WebApp",
    des: " A full-stack web application built to streamline team task assignment, tracking, and management. Designed with a responsive UI and secure role-based access for both users and admins, it enhances collaboration and productivity across all devices. Users can login and signup with their google account (OAuth 2.0) And Users can generate documents as well.",
    img: "/task.png",
    iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/gcp.svg", "/mongo.svg"],
    link: "https://github.com/KanchanaKoralage1/Task-Management-WebApp",
  },
  {
    id: 6,
    title: "Library management system",
    des: "This is my recently created full-stack web application that allows users to manage a digital library efficiently. Features include user authentication, book search, CRUD operations for books, image uploads, and a responsive UI. Built using the MERN stack with Cloudinary for image storage.",
    img: "/library.png",
    iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/mongo.svg", "/cloudinary.svg"],
    link: "https://github.com/KanchanaKoralage1/Library-management",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/KanchanaKoralage1"
  },
  
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/kanchana-koralage/"
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
      "TypeScript",
      "C#",
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
      ".NET ",
      "Blazor",
    ],
    databases: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
    DevOps_and_CICD: [
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "Bitbucket",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    Cloud_Platforms: [
      "Azure",
      "AWS",
      "Oracle Cloud Infrastructure",
      "Google Cloud Platform",
    ],
     Tools: [
      "Trello",
      "SonarQube",
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
    title: "Oracle Certificate",
    description:
      "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=368A7098EA6DD0980960A37BB693684AF3EDACBFE1C65163D5A714F3DB6BEF7B",
    image:"devops.png"
  },
  {
    title: "KodeKloud Certificate",
    description:
      "Kode Kloud 100 days of DevOps",
    link: "https://engineer.kodekloud.com/certificate-verification/df63d657-51cf-4a9a-a700-99b05be9114f",
    image:"kodekloud.png"
  },
  {
    title: "Oracle Certificate",
    description:
      "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D5647B355DA37B44C8ACFEE2E8A44F4AA5C4FAD5F7505E07377A6866DF510555",
    image:"oracle.png"
  },
  {
    title: "Learnkarts Certificate",
    description:
      "Git with GitLab and BitBucket",
    link: "https://www.coursera.org/account/accomplishments/verify/U6PJC12BVM81",
    image:"bitbucket.png"
  },
  {
    title: "Microsoft Certificate",
    description:
      "Back-End Development with .NET",
    link: "https://www.coursera.org/account/accomplishments/verify/ZEAD242VMLIK",
    image:"net.png"
  },
  {
    title: "Microsoft Certificate",
    description:
      "Introduction to Programming With C#",
    link: "https://www.coursera.org/account/accomplishments/verify/DIVH4D85908A",
    image:"c.png"
  },
  {
    title: "Microsoft Certificate",
    description:
      "Foundations of Coding Full-Stack ",
    link: "https://www.coursera.org/account/accomplishments/verify/IWGAA1FMD6TD",
    image:"fullstack.png"
  },
  {
    title: "Udemy Certificate",
    description:
      "Learn DevOps: CI/CD with Jenkins using Pipelines and Docker",
    link: "https://www.udemy.com/certificate/UC-e10a48de-ec35-4136-bd36-b58e9be76931/",
    image:"Jenkins.jpg"
  },
];

export const cv=[
  {
    id:1,
    title:"Download CV",
    link:"/kanchanakoralageCV.pdf"
  }
]