export const myProjects = [
  {
    id: 1,
    title: "SISFO SARPRAS",
    description:
      "A web-based system for managing institutional facilities and infrastructure procurement efficiently.",
    subDescription: [
      "Developed using Laravel to manage facility data and procurement workflows.",
      "Designed a clean and responsive interface with TailwindCSS.",
      "Utilized MySQL for structured storage of assets, purchase requests, and user data.",
      "Includes authentication, CRUD operations, and user role management.",
    ],
    href: "https://github.com/Justdhif/revisi-sarpras.git",
    image: "/assets/projects/sarpras.png",
    tags: [
      { id: 1, name: "Laravel" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "MySQL" },
    ],
  },
  {
    id: 2,
    title: "To Do App",
    description:
      "A simple yet secure task management application with modern authentication features.",
    subDescription: [
      "Implemented user authentication and authorization using Auth0.",
      "Built a responsive and intuitive UI with TailwindCSS.",
      "Used SQLite for lightweight local task and user data storage.",
      "Supports login, task creation, editing, completion, and deletion.",
    ],
    href: "https://github.com/Justdhif/todolist.git",
    image: "/assets/projects/to-do-list.png",
    tags: [
      { id: 1, name: "Laravel" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "MySQL" },
    ],
  },
  {
    id: 3,
    title: "Portofolio Class",
    description:
      "A class portfolio web application for showcasing classroom activities, student data, and organizational structure.",
    subDescription: [
      "Built with NextJS for dynamic routing and seamless page transitions.",
      "Styled using TailwindCSS to ensure a modern, responsive layout.",
      "Supabase is used as a backend for managing student information, gallery images, and class structure data.",
      "Includes sections for student profiles, class organization, activity gallery, and announcements.",
    ],
    href: "https://github.com/Justdhif/class-porto-next.git",
    image: "/assets/projects/portof-class.png",
    tags: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Supabase" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Student Developer",
    job: "Front-End Development",
    date: "2022",
    contents: [
      "Started learning the basics of web development including HTML, CSS, and JavaScript.",
      "Created beginner-level projects such as a personal portfolio and a simple weather application.",
      "Gained understanding of responsive design and DOM manipulation.",
    ],
  },
  {
    title: "Student Developer",
    job: "Full-Stack Development",
    date: "2023",
    contents: [
      "Advanced to server-side development using PHP and the Laravel framework.",
      "Built full-stack applications such as an e-commerce website and a to-do list system.",
      "Applied MVC architecture, authentication, and CRUD operations in real-world scenarios.",
    ],
  },
  {
    title: "Student Developer",
    job: "Modern Web & App Development",
    date: "2024–2025",
    contents: [
      "Explored modern frameworks and libraries such as React, Next.js, and Flutter.",
      "Completed projects including a Quran web app, an updated personal portfolio, a to-do list app, and a web app for generating compliments.",
      "Focused on component-based architecture, REST API integration, and mobile-first design.",
      "Continuously learning and building more advanced features to sharpen development skills.",
    ],
  },
];

export const reviews = [
  {
    name: "arief",
    username: "@adewersz",
    body: "GOOD JOB",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const playlist = [
  {
    title: "The Number Song",
    artist: "Logan Paul",
    src: "/assets/music/the-number-song.mp3",
    cover: "/assets/music/covers/the-number-song-cover.jpg",
  },
  {
    title: "8 Letters",
    artist: "Why don't we",
    src: "/assets/music/8-letters.mp3",
    cover: "/assets/music/covers/8-letters-cover.jpg",
  },
  {
    title: "Back to Friends",
    artist: "Sombr",
    src: "/assets/music/back-to-friends.mp3",
    cover: "/assets/music/covers/back-to-friends-cover.jpg",
  },
  {
    title: "About You",
    artist: "The 1975",
    src: "/assets/music/about-you-1975.mp3",
    cover: "/assets/music/covers/about-you-cover.jpg",
  },
  {
    title: "Daylight",
    artist: "Maroon 5",
    src: "/assets/music/daylight-maroon5.mp3",
    cover: "/assets/music/covers/daylight-maroon5-cover.jpg",
  },
];
