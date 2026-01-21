import ecommerceApp from "../assets/images/ecommerce-app.png";
import foodOrderingApp from "../assets/images/food-ordering-app.png";
import blogsApp from "../assets/images/blogs-app.png";
import realEstateApp from "../assets/images/real-estate-app.png";
import netflixApp from "../assets/images/netflix-app.png";
import ephluxIcon from '../assets/images/ephlux-icon.jpg';
import ahoyIcon from '../assets/images/ahoy-icon.png';
import centroxIcon from '../assets/images/centrox-icon.jpeg';
import ianconIcon from '../assets/images/iancon-icon.jpeg';

export const projectsArray = [
    {
        img: ecommerceApp,
        title: 'E-Commerce App',
        description: 'Fit Fables is a specialized e-commerce platform crafted with the MERN stack, designed to cater to the healthcare needs of users by offering a wide range of medicines, proteins, and wellness products. The app delivers a seamless, secure shopping experience, leveraging Redux for efficient state management and Cloudinary for fast media delivery. Fit Fables also includes a robust appointment booking system, enabling patients to consult with doctors directly through the app. The admin panel provides powerful tools for managing products, orders, and user interactions, ensuring smooth operations.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-E-Commerce-App',
        demoLink: 'https://mern-e-commerce-app-wsg3.onrender.com'
    },
    {
        img: foodOrderingApp,
        title: 'Food Ordering App',
        description: 'Tomato. is a food ordering application developed using the MERN stack, featuring client and admin panels. The admin panel enables administrators to add food items, track inventory, view order histories, and update order statuses, including processing, out for delivery, and delivered. The client panel allows users to browse and order from a diverse menu, with categories like Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles. The application integrates Stripe for secure payments, Context API for state management, and Nodemailer for seamless communication between users and the admin.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Food-Ordering-App',
        demoLink: 'https://mern-food-ordering-app-s1vs.onrender.com'
    },
    {
        img: blogsApp,
        title: 'Blogs App',
        description: 'StoryStreamline is a responsive platform built with the MERN stack, utilizing React, React-Bootstrap, and CSS to deliver a user-friendly interface. Users can manage profiles, create and edit blogs across categories such as sports, music, movies, technology, and fashion, and comment on posts when logged in. The app ensures seamless post viewing and interaction through comments while offering efficient content management for admins. Powered by Node.js and Express.js, the platform uses MongoDB for data storage, Redux Toolkit for state management, Cloudinary for image handling, and Nodemailer for user-admin communication.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Blogs-App',
        demoLink: 'https://mern-blogs-app-gzo3.onrender.com'
    },
    {
        img: realEstateApp,
        title: 'Real Estate App',
        description: "PropertyPulse is a real estate application created using the MERN stack, allowing users to view, create, and search property listings efficiently. The app utilizes Firebase Storage for secure image handling, enabling high-quality uploads and storage. Tailwind CSS is employed for a clean and responsive design, while Redux Toolkit handles global state management, ensuring consistent data flow across the app. Users can explore detailed property listings, filter searches by location, price, and other criteria, and manage their own listings directly within the platform for an optimized user experience.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Real-Estate-App',
        demoLink: 'https://mern-real-estate-app-kbi6.onrender.com'
    },
    {
        img: netflixApp,
        title: 'Netflix Clone App',
        description: "This Netflix clone is developed using the MERN stack, incorporating React and Styled Components for a modern, responsive interface. Firebase Authentication ensures secure user sign-ups and logins. Users can browse a wide library of TV shows and movies and save their favorite titles to a personalized list, which is securely managed and stored in MongoDB for each individual user. The application leverages Redux for efficient state management, ensuring a smooth user experience. Whether exploring genres or searching for specific content, the app offers a seamless experience, resembling with the original Netflix platform.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Netflix-Clone-App',
        demoLink: 'https://mern-netflix-clone-app.onrender.com'
    },
];

export const experiencesArray = [
    {
        title: "Senior Software Engineer",
        company_name: "AHOY",
        icon: ahoyIcon,
        iconBg: "#383E56",
        date: "Apr. 2025 - Present",
        points: [
            "Leading TradeSocial platform development, built cross-platform React Native mobile app from scratch and modernized legacy codebase, reducing technical debt by 40%.",
            "Driving UI/UX modernization initiatives across the platform, increasing user satisfaction by 30% and reducing interaction friction by 25%.",
            "Architected H2OTO IoT solution with LoRaWAN sensors, designing system architecture, data pipelines, and JSON schemas for 1,000+ real-time telemetry streams.",
            "Conduct technical interviews for MERN and React Native roles; mentor junior developers across frontend and backend teams.",
        ],
    },
    {
        title: "Full Stack Software Engineer",
        company_name: "Centrox AI",
        icon: centroxIcon,
        iconBg: "#E6DEDD",
        date: "Nov. 2024 - May 2025",
        points: [
            "Led development of CreditBase platform using Next.js and TypeScript, enabling 100+ financial teams to parse, analyze, and compare complex legal documents 60% faster.",
            "Delivered 4+ features for Pocket Mate AI mental health app, enhancing performance and user experience for 500+ daily active users.",
            "Integrated RESTful APIs and fixed 40+ critical bugs across Next.js, NestJS, and MongoDB stack, increasing system uptime to 99.2% and reducing latency by 35%.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "Ephlux",
        icon: ephluxIcon,
        iconBg: "#383E56",
        date: "May 2023 - Oct. 2024",
        points: [
            "Maintained Swift no-code platform for 4,000+ enterprise users using React, Node.js, and Express.js, enhancing 5+ modules and improving UI load time by 35%.",
            "Resolved 50+ complex platform issues across bi-weekly sprints, reducing ticket resolution time by 50%.",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "IANCON",
        icon: ianconIcon,
        iconBg: "#E6DEDD",
        date: "Sep. 2022 - Mar. 2023",
        points: [
            "Developed buyer and seller consoles for Noonhut's multi-vendor food delivery marketplace using React, enabling 100+ vendors to process 600+ daily orders.",
            "Implemented Firebase authentication and real-time database, reducing checkout abandonment by 20%.",
        ],
    },
];