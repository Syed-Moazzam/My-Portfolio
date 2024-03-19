import ecommerce from "../assets/projects/ecommerce.png";
import netflix from "../assets/projects/netflix.png";
import foodOrdering from "../assets/projects/food-ordering.png";
import tafsolIcon from '../assets/tafsol-icon.png';
import ephluxIcon from '../assets/ephlux-icon.jpg';

export const projectsArray = [
    {
        img: ecommerce,
        title: 'E-Commerce App',
        description: 'This comprehensive platform seamlessly integrates the realms of healthcare and technology, catering to the needs of doctors, patients, and administrators alike. From a diverse catalog of medicines to personalized consultations, users experience convenience at their fingertips. With a robust admin panel, administrators effortlessly manage products, appointments, and user interactions, ensuring streamlined operations. Embodying innovation and reliability, this app revolutionizes the healthcare industry, offering a seamless and secure solution.',
        ghLink: 'https://github.com/19sajib/lift-buddy',
        demoLink: 'https://project-krypto.netlify.app/'
    },
    {
        img: netflix,
        title: 'Netflix Clone App',
        description: "This app uses Reactjs at the client-side for user friendly and intuitive interface and mirrors the renowned streaming giant's seamless user experience, offering a vast library of movies and TV shows. Users can browse, search, and watch their favorite content effortlessly. With personalized recommendations and user profiles, our platform ensures an immersive and tailored entertainment experience for every viewer. Emphasizing responsiveness and intuitive design, our Netflix clone app guarantees an exceptional viewing experience across all devices.",
        ghLink: 'https://github.com/19sajib/social-media',
        demoLink: 'https://project-krypto.netlify.app/'
    },
    {
        img: netflix,
        title: 'Blogs App',
        description: 'This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD operations. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database.',
        ghLink: 'https://github.com/19sajib/mern-stack-ecommerce',
        demoLink: 'https://project-krypto.netlify.app/'
    },
    {
        img: netflix,
        title: 'Real Estate App',
        description: 'This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience.',
        ghLink: 'https://github.com/19sajib/mern-blog-app',
        demoLink: 'https://project-krypto.netlify.app/'
    },
    {
        img: netflix,
        title: 'Real-Time Chat App',
        description: "Real-time chat app is crafted using MERN stack and integrated with web sockets for instant messaging. Connect effortlessly with friends, colleagues, or loved ones, engaging in lively conversations and sharing moments in real-time. With a sleek and intuitive interface, navigating through this platform is a breeze, ensuring seamless interaction across devices. This platform is developed with functionalities similar to WhatsApp and Messenger and users can communicate with each other instantly.",
        ghLink: 'https://github.com/19sajib/Project-Krypto-Web-3.0',
        demoLink: 'https://project-krypto.netlify.app/'
    },
    {
        img: foodOrdering,
        title: 'Food Ordering App',
        description: "'The Heaven's Kitchen' – an exquisite  and user friendly restaurant website meticulously crafted with HTML, CSS and JavaScript. Dive into a culinary journey like no other as you explore our enticing array of specialties, tantalizing your taste buds with every click. From delectable dishes to heartfelt reviews, our platform offers a seamless blend of elegance and functionality. Discover our popular menu items, learn about our passion for food in the about section, and effortlessly place orders to savor our heavenly creations.",
        ghLink: 'https://github.com/19sajib/Solidity-Kickstart',
        demoLink: 'https://project-krypto.netlify.app/'
    }
];

export const experiencesArray = [
    {
        title: "Software Engineer",
        company_name: "Ephlux",
        icon: ephluxIcon,
        iconBg: "#383E56",
        date: "August 2023 - Present",
        points: [
            "Currently working on a full-stack low code/no code product that has thousands of different users.",
            "Coding and fixing bugs using React.js on the client-side and Node.js & Express.js on the server-side.",
            "Developing and testing new features for the product based on emerging client requirements.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Tafsol Technologies",
        icon: tafsolIcon,
        iconBg: "#E6DEDD",
        date: "February 2022 - August 2023",
        points: [
            "Converted Adobe XD/Figma Designs to actual user interfaces.",
            "Made websites responsive according to different web and mobile screen sizes.",
            "Integrated REST APIs with websites and ensured the execution of every single feature according to the requirements."
        ],
    }
];