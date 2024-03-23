import ecommerce from "../assets/projects/ecommerce.png";
import netflix from "../assets/projects/netflix.png";
import foodOrdering from "../assets/projects/food-ordering.png";
import realEstate from "../assets/projects/real-estate.png";
import tafsolIcon from '../assets/tafsol-icon.png';
import ephluxIcon from '../assets/ephlux-icon.jpg';

export const projectsArray = [
    {
        img: ecommerce,
        title: 'E-Commerce App',
        description: 'This comprehensive platform seamlessly integrates the realms of healthcare and technology, catering to the needs of doctors, patients, and administrators alike. From a diverse catalog of medicines to personalized consultations, users experience convenience at their fingertips. With a robust admin panel, administrators effortlessly manage products, appointments, and user interactions, ensuring streamlined operations. Embodying innovation and reliability, this app revolutionizes the healthcare industry, offering a seamless and secure solution.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-E-Commerce-App',
        demoLink: 'https://mern-e-commerce-app-wsg3.onrender.com/'
    },
    {
        img: realEstate,
        title: 'Real Estate App',
        description: "This platform is your ultimate real estate companion, seamlessly connecting users to their dream properties with just a tap. With personalized profiles at your fingertips, effortlessly create listings for properties to rent or sell across diverse categories. Whether you're on the hunt for your next home or seeking the perfect investment opportunity, our intuitive search feature ensures you find exactly what you're looking for. Welcome to the future of real estate, where convenience meets choice in the palm of your hand, transforming property transactions.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Real-Estate-App',
        demoLink: 'https://mern-real-estate-app-kbi6.onrender.com/'
    },
    {
        img: netflix,
        title: 'Netflix Clone App',
        description: "This app utilizes Reactjs for a user-friendly interface, mirroring the seamless experience of top streaming services with a vast library of movies and TV shows. Users effortlessly browse, search, and watch content. With personalized recommendations and profiles, our platform ensures an immersive entertainment experience. Emphasizing responsiveness and intuitive design, our platform guarantees exceptional viewing across all devices, while effortless sharing enhances the vibrant discovery of captivating content, enriching the viewing experience for all.",
        ghLink: 'https://github.com/Syed-Moazzam/Netflix-Clone-App',
        demoLink: 'https://react-netflix-replica.vercel.app/'
    },
    {
        img: netflix,
        title: 'Real-Time Chat App',
        description: "Real-time chat app is crafted using MERN stack and integrated with web sockets for instant messaging. Connect effortlessly with friends, colleagues, or loved ones, engaging in lively conversations and sharing moments in real-time. With a sleek and intuitive interface, navigating through this platform is a breeze, ensuring seamless interaction across devices. This platform is developed with functionalities similar to WhatsApp and Messenger and users can communicate with each other instantly. Boost your connectivity and productivity on the go.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Real-Estate-App',
        demoLink: 'https://mern-real-estate-app-kbi6.onrender.com/'
    },
    {
        img: netflix,
        title: 'Blogs App',
        description: 'This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD operations. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database. Dive into a vibrant blogging community, where inspiration flows freely.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Blogs-App',
        demoLink: 'https://mern-e-commerce-app-wsg3.onrender.com/'
    },
    {
        img: foodOrdering,
        title: 'Food Ordering App',
        description: "'Flavor Fusion Lab' – an exquisite  and user friendly restaurant website meticulously crafted with HTML, CSS and JavaScript. Dive into a culinary journey like no other as you explore our enticing array of specialities, tantalizing your taste buds with every click. From delectable dishes to heartfelt reviews, our platform offers a seamless blend of elegance and functionality. Discover our popular menu items, learn about our passion for food in the about section, and effortlessly place orders to savor our heavenly creations. Let Flavor Fusion Lab guide your gastronomic adventures.",
        ghLink: 'https://github.com/Syed-Moazzam/Restaurant-Website-HTML-CSS-JS',
        demoLink: 'https://flavor-fusion-lab.vercel.app/'
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