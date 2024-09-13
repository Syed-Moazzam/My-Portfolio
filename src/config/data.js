import ecommerceApp from "../assets/images/ecommerce-app.png";
import foodOrderingApp from "../assets/images/food-ordering-app.png";
import blogsApp from "../assets/images/blogs-app.png";
import realEstateApp from "../assets/images/real-estate-app.png";
import netflixApp from "../assets/images/netflix-app.png";
import tafsolIcon from '../assets/images/tafsol-icon.png';
import ephluxIcon from '../assets/images/ephlux-icon.jpg';

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
        title: "Software Engineer",
        company_name: "Ephlux",
        icon: ephluxIcon,
        iconBg: "#383E56",
        date: "May 2023 - Present",
        points: [
            "Currently working on a full stack low code/no code product that has thousands of different users.",
            "Coding and fixing bugs using React.js on the client-side and Node.js & Express.js on the server-side.",
            "Developing and testing new features for the product based on emerging client requirements.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Tafsol Technologies",
        icon: tafsolIcon,
        iconBg: "#E6DEDD",
        date: "October 2022 - April 2023",
        points: [
            "Converted Adobe XD/Figma Designs to actual user interfaces.",
            "Made websites responsive according to different web and mobile screen sizes.",
            "Integrated REST APIs with websites and ensured the execution of every single feature according to the requirements."
        ],
    }
];