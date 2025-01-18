/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mauro Pereyra",
  title: "Hola a todos, soy Mauro",
  subTitle: emoji(
    "Apasionado por el análisis y la ingeniería de datos 🚀, con experiencia en limpieza, procesamiento y visualización de datos. Abierto a roles en análisis, ingeniería y entrada de datos. Manejo herramientas como Python, SQL, Power BI, Spark y Docker para crear soluciones innovadoras basadas en datos. 🌟"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1trNEwGIHA0nKoukITbijJ6doM3UjPa9u/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mauro-coder555",
  linkedin: "www.linkedin.com/in/mauroandrespereyra",
  gmail: "maupereyra96@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle: "APASIONADO POR EL ANÁLISIS Y LA INGENIERÍA DE DATOS, ABIERTO A TODAS LAS ÁREAS DE DATOS",
  skills: [
    emoji("⚡ Análisis de datos: Exploración, limpieza y procesamiento de grandes volúmenes de información"),
    emoji("⚡ Ingeniería de datos: Desarrollo de pipelines ETL, integración y optimización de datos"),
    emoji("⚡ Visualización de datos: Creación de dashboards interactivos con Power BI, Superset"),
    emoji("⚡ Manejo de herramientas como Python, SQL, Apache Spark y Docker para soluciones basadas en datos"),
    emoji("⚡ Abierto a roles en entrada, análisis e ingeniería de datos")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Henry Bootcamp",
      logo: require("./assets/images/henryLogo.png"), // Reemplazar con el logo del bootcamp, si lo tienes
      subHeader: "Data Science",
      duration: "2023 - 2024",
      desc: "Formación intensiva en ciencia de datos, manejo de pipelines ETL, visualización de datos y machine learning.",
      descBullets: [
        "Desarrollo de sistemas de recomendación y análisis de datos",
        "Trabajo con tecnologías como Python, Pandas, Apache Spark y Docker",
        "Generación de reportes y dashboards con Power BI y Superset"
      ]
    },
    {
      schoolName: "Universidad Nacional del Sur",
      logo: require("./assets/images/unsLogo.png"), // Reemplazar con el logo de la universidad, si lo tienes
      subHeader: "Licenciatura en Ciencias de la Computación (2 años completos)",
      duration: "2016 - 2021",
      desc: "Formación en ciencias de la computación con enfoque en tecnologías de programación y pensamiento creativo.",
      descBullets: [
        "Conocimientos sólidos en programación en Java",
        "Familiarización con conceptos fundamentales de algoritmos y estructuras de datos"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programación (Python, SQL)",
      progressPercentage: "85%" // Estimación de tu nivel en programación, especialmente en Python y SQL
    },
    {
      Stack: "Ingeniería de Datos",
      progressPercentage: "80%" // Estimación de tu nivel en ingeniería de datos
    },
    {
      Stack: "Análisis de Datos",
      progressPercentage: "70%" // Estimación de tu nivel en análisis de datos
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Operator",
      company: "ProdSoftware",
      companylogo: require("./assets/images/prodSoftwareLogo.png"),
      date: "Agosto 2022 – Junio 2023",
      desc: "Realicé análisis y procesamiento de datos utilizando Google Sheets, Python y Java. Participé en proyectos de extracción, transformación y carga (ETL) de datos.",
      descBullets: [
        "Entrada de datos y generación de informes detallados",
        "Desarrollo de scripts en Python y Java para procesamiento de datos",
        "Automatización de tareas relacionadas con el manejo de datos"
      ]
    },
    {
      role: "Data Engineer (Proyecto Académico)",
      company: "Henry Bootcamp",
      companylogo: require("./assets/images/henryLogo.png"),
      desc: "Desarrollo de un sistema de recomendación utilizando datos de la plataforma Steam. Creación de pipelines ETL y visualización de datos.",
      descBullets: [
        "Inspeccion, limpieza y transformación completa de los datos con Pandas",
        "Desarrollo de sistema de recomendación",
        "Generacion de API para consultas con FastAPI y despliegue en Render"
      ]
    },
    {
      role: "Data Analyst (Proyecto Académico)",
      company: "Henry Bootcamp",
      companylogo: require("./assets/images/henryLogo.png"),
      desc: "Análisis de datos sobre homicidios y víctimas en el área de seguridad vial utilizando datos del Observatorio de Movilidad y Seguridad Vial de Buenos Aires.",
      descBullets: [
        "Análisis exploratorio de datos y desarrollo de KPIs",
        "Creación de dashboards interactivos con Apache Superset",
        "Gestión de la base de datos utilizando PostgreSQL y Docker"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificaciones 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Certificado en Ciencia de Datos",
      subtitle: "Completé un bootcamp de Ciencia de Datos, dominando herramientas como Python, SQL y machine learning.",
      image: require("./assets/images/henryLogo.png"), // Reemplaza con el logo correspondiente
      imageAlt: "Data Science Logo",
      footerLink: [
        {
          name: "Certificación",
          url: "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=238bc1aca60662caa51a7027fc2daa1bd0fd55a96cb2086f93427c7e041c12aa",
        }
      ]
    },
    {
      title: "Certificado de Inglés Avanzado",
      subtitle:
        "Certificación de inglés avanzado obtenida en el examen TOEFL, demostrando dominio del idioma en el entorno profesional.",
      image: require("./assets/images/toeflLogo.png"), // Reemplaza con el logo del TOEFL, si lo tienes
      imageAlt: "TOEFL Logo",
      footerLink: [
        {
          name: "Certificación",
          url: "https://cert.efset.org/MQRq4R" // Coloca el enlace a tu certificación si lo tienes
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Puedes incluir un enlace a tu currículum si lo tienes en línea
  display: true, // Set false to hide this section, defaults to true
  resumeLink: "https://drive.google.com/file/d/1trNEwGIHA0nKoukITbijJ6doM3UjPa9u/view?usp=drive_link" // Coloca el enlace a tu currículum si lo tienes disponible
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "¿Quieres discutir un proyecto o simplemente saludar? Mi bandeja de entrada está abierta para todo.",
  number: "+542932465196", // Tu número de contacto
  email_address: "maupereyra96@gmail.com", // Tu dirección de correo
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
