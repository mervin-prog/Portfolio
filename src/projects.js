
import keep from "../src/assets/images/p1.png";
import quiz from "../src/assets/images/p2.png";
import invoice from "../src/assets/images/p3.png";
import weather from "../src/assets/images/p4.png";
import fashion from "../src/assets/images/p5.png";
import travel from "../src/assets/images/p6.png";
import student from "../src/assets/images/p7.png";
import sms from "../src/assets/images/p8.png";

const projectList = [
     {
        id:1,
        title: "Keeper App",
        description: "This note-taking app is built to perform CRUD operations for all notes. It handles authentication in both frontend and backend includes sign up, login, forgot password for users providing enhanced security.",
        image: keep,
        liveDemo: "https://keeper-app-01i2.onrender.com/",
        github: "https://github.com/mervin-prog/keeper_app"
    },
    {
        id:2,
        title: "Quiz App",
        description: "This app is a useful tool for online quizzes. It provides instant feedback, tracks progress, and offers a dynamic scoring system. It’s built using modern web technology React.",
        image: quiz,
        liveDemo: "https://mervin-prog.github.io/Quiz_App/",
        github: "https://github.com/mervin-prog/Quiz_App"
    },
    {
        id:3,
        title: "Invoice Generator",
        description: "This app is a user-friendly tool for creating and managing professional invoices quickly. It takes input for items, quantity, and price per item, then generates a bill amount that you can download as a professional invoice.",
        image: invoice,
        liveDemo: "https://mervin-prog.github.io/Invoice_Generator/",
        github: "https://github.com/mervin-prog/Invoice_Generator"
    },
    {
        id:4,
        title: "Weather App",
        description: "It provides real-time weather information for any city worldwide using the OpenWeather API. The application allows users to search for current weather conditions, including temperature, humidity, wind speed, and weather description.",
        image: weather,
        liveDemo: "https://weather-app-mervin.vercel.app/",
        github: "https://github.com/mervin-prog/Weather_App"
    },
    {
        id:5,
        title: "Fashion Landing page",
        description: "This Fashion Landing Page is designed and developed using React to create an elegant and responsive user experience. The page is structured to highlight fashion collections, with clean layouts and interactive features for an immersive browsing experience",
        image: fashion,
        liveDemo: "https://mervin-prog.github.io/Fashion_Template/",
        github: "https://github.com/mervin-prog/Fashion_Template"
    },
    {
        id:6,
        title: "Travel Landing Page",
        description: "This Travel Landing Page is designed and developed using React. The page is designed to capture the excitement of travel and exploration, offering a visually appealing resources and user-friendly interface.",
        image: travel,
        liveDemo: "https://mervin-prog.github.io/Travel_Template/",
        github: "https://github.com/mervin-prog/Travel_Template"
    },
    {
        id:7,
        title: "Student App",
        description: "This Student Management App utilizes a REST API to perform full CRUD operations, handling HTTP requests to manage student data. It offers a streamlined interface for adding, editing, viewing, and deleting student entries with efficient backend communication.",
        image: student,
        liveDemo: "",
        github: "https://github.com/mervin-prog/Student_CRUD_App"
    },
    {
        id:8,
        title: "Student Management System",
        description: "This App is built in MVC architecture, ensures data security and management. It's built using Java and Jdbc for server-pages, to perform full CRUD operations. It handles and stores student data in the database.",
        image: sms,
        liveDemo: "",
        github: "https://github.com/mervin-prog/SMS"
    }
];

export default projectList;
