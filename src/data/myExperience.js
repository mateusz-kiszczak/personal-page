import frontEndIcon from '../img/icons/experience/frontend.svg';
import backEndIcon from '../img/icons/experience/backend.svg';
import softwareIcon from '../img/icons/experience/software.svg';


const myExperience = [
  {
    title: "Front-end Developer",
    tags: ["JavaScript", "ReactJS", "HTML", "CSS", "Sass", "React Router", "Redux", "jQuery"],
    description: "My front-end expertise centers on creating engaging and highly responsive user interfaces. I am proficient in React.js, leveraging its component-based architecture to build scalable and maintainable SPAs. My core toolkit includes JavaScript (ES6+) for interactive functionalities, HTML5 for semantic structuring, and CSS3 alongside Sass for advanced styling and responsive design. I also have experience with jQuery for streamlined DOM manipulation and adhere to strong UI/UX principles to ensure intuitive and accessible user experiences.",
    icon: frontEndIcon,
    color: 'pink'
  },
  {
    title: "Back-end Developer",
    tags: ["Python", "Django", "PHP", "MySQL", "RESTful APIs"],
    description: "On the back-end, I focus on developing robust and efficient server-side logic and managing data. I am skilled in Python with Django, building powerful web applications and RESTful APIs. My knowledge extends to PHP, where I've implemented database interactions using PDO. For data management, I am proficient in SQL, with hands-on experience in MySQL, PostgreSQL, and SQLite, designing schemas and executing complex queries to support dynamic application features.",
    icon: backEndIcon,
    color: 'yellow'
  },
  {
    title: "Software Skills",
    tags: ["Git", "Figma", "Photoshop", "Illustrator", "Gimp", "WordPress"];
    description: "My development workflow is supported by a solid command of essential software and tools. I utilize Git for version control, ensuring collaborative and organized code management. For design, I'm experienced with Figma in translating UI/UX concepts into practical interfaces, and proficient with Photoshop and Illustrator for graphic assets. I also have practical experience with WordPress (Elementor) for content management and web building, alongside foundational exposure to AWS for cloud deployment.",
    icon: softwareIcon,
    color: 'blue'
  }
];


export default myExperience;
