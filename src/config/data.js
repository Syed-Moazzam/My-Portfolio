import alRaisApp from "../assets/images/web-projects/al-rais-app.png";
import tradesocialApp from "../assets/images/web-projects/tradesocial-app.png";
import creditbaseApp from "../assets/images/web-projects/creditbase-ai-app.png";
import pocketmateApp from "../assets/images/web-projects/pocketmate-ai-app.png";
import merakiApp from "../assets/images/web-projects/meraki-app.png";
import clearingApp from "../assets/images/web-projects/clearing-app.png";
import ecommerceApp from "../assets/images/web-projects/ecommerce-app.png";
import foodOrderingApp from "../assets/images/web-projects/food-ordering-app.png";
import blogsApp from "../assets/images/web-projects/blogs-app.png";
import realEstateApp from "../assets/images/web-projects/real-estate-app.png";
import netflixApp from "../assets/images/web-projects/netflix-app.png";
import alRaisMobile1 from "../assets/images/mobile-projects/alrais-1.png";
import alRaisMobile2 from "../assets/images/mobile-projects/alrais-2.png";
import tradesocialMobile1 from "../assets/images/mobile-projects/tradesocial-1.png";
import tradesocialMobile2 from "../assets/images/mobile-projects/tradesocial-2.png";
import tradesocialMobile3 from "../assets/images/mobile-projects/tradesocial-3.png";
import h2otoMobile1 from "../assets/images/mobile-projects/h2oto-1.png";
import h2otoMobile2 from "../assets/images/mobile-projects/h2oto-2.png";
import ephluxIcon from '../assets/images/company-assets/ephlux-icon.jpg';
import ahoyIcon from '../assets/images/company-assets/ahoy-icon.png';
import centroxIcon from '../assets/images/company-assets/centrox-icon.jpeg';
import ianconIcon from '../assets/images/company-assets/iancon-icon.jpeg';

export const webProjectsArray = [
    {
        img: alRaisApp,
        title: 'Al Rais',
        type: 'web',
        description: 'Al Rais is a travel booking platform built to help travelers discover, compare, and reserve flights and hotels through fast search, structured listing pages, and streamlined checkout. The public site is responsive and performance-minded for clear planning on any device. Behind the scenes it includes a dedicated admin panel where operations teams manage catalog content, fares and availability signals, booking records, and ongoing day-to-day workflows with better visibility and control. The platform is architected on AWS using a serverless model—APIs and business logic scale on demand, assets and static delivery stay efficient, and costs track usage—so the travel experience and back-office tools stay reliable during traffic spikes and seasonal demand.',
        ghLink: '',
        demoLink: 'http://al-rais-ui-2.0.s3-website.eu-west-1.amazonaws.com/'
    },
    {
        img: tradesocialApp,
        title: 'TradeSocial',
        type: 'web',
        description: 'TradeSocial is a global trade logistics platform built to simplify shipment operations for businesses handling international movement of goods. The product includes shipment documentation workflows, parcel and container tracking modules, and delivery coordination features in one centralized dashboard. It is designed with responsive interfaces and structured forms to support reliable usage across devices and teams. Through real-time updates and service integrations, the platform helps organizations improve execution speed, reduce operational complexity, and manage business-critical trade processes with better visibility, consistency, and control at scale.',
        ghLink: '',
        demoLink: 'https://tradesocial.tech/'
    },
    {
        img: creditbaseApp,
        title: 'CreditBase',
        type: 'web',
        description: 'CreditBase is a documentation platform created for financial institutions to manage complex loan and credit agreement files in one secure environment. The system allows teams to upload large documents, search clauses, compare terms, and review key provisions with greater speed and accuracy. It supports document versioning, structured analysis workflows, and guided navigation for large deal repositories. By reducing manual review effort and improving access to contract intelligence, the platform helps deal, risk, and operations teams make informed decisions faster while maintaining consistency across documentation lifecycles.',
        ghLink: '',
        demoLink: 'https://www.creditbase.ai/'
    },
    {
        img: pocketmateApp,
        title: 'PocketMate',
        type: 'web',
        description: 'PocketMate is a mental wellness companion platform offering everyday, private support through guided check-ins, chat, and voice-friendly sessions for people seeking a calm digital space to reflect at their own pace. The main web app emphasizes approachable language, pacing, and accessibility so moments feel grounded and trustworthy, clarifying that it supports self-care rather than crisis intervention. The AI Listener admin panel backs that experience, letting teams manage prompts, educational and in-app messaging, feature flags, and coordinated releases so updates ship in a measured, policy-aware way. Together this keeps the PocketMate web app coherent, maintainable, and aligned as adoption grows.',
        ghLink: '',
        demoLink: 'https://Ailistener.ai/'
    },
    {
        img: merakiApp,
        title: 'Meraki',
        type: 'web',
        description: 'Meraki is a furniture and interior lifestyle commerce platform developed for a client in the home furnishing space. The product highlights curated collections and organizes browsing through practical categories such as indoor, outdoor, kids, wall covering, cutains, decor, and accessories. It focuses on responsive presentation, clean visual hierarchy, and smooth category-led navigation for modern shoppers. By combining elegant design with structured product exploration, the platform improves customer engagement, strengthens product discovery, and delivers a polished online shopping experience tailored for home and furniture-focused audiences.',
        ghLink: '',
        demoLink: 'https://meraki-interior-design-app.vercel.app/'
    },
    {
        img: clearingApp,
        title: 'Clearing App',
        type: 'web',
        description: 'Clearing App is an operations-focused admin panel developed for a local client to manage day-to-day business workflows from one interface. The system includes modules for customer management, job management, invoice management, ledger management, transaction management, sub admin permissions, and settings. It is designed with structured navigation and clear dashboard views to support faster execution of routine tasks. By centralizing key administrative functions in one platform, the product improves process visibility, reduces coordination overhead, and enables teams to operate with better control, consistency, and reliability.',
        ghLink: '',
        demoLink: 'https://clearing-forwarding-software.vercel.app/'
    },
    {
        img: ecommerceApp,
        title: 'E-Commerce App',
        type: 'web',
        description: 'Fit Fables is a specialized e-commerce platform crafted with the MERN stack, designed to cater to the healthcare needs of users by offering a wide range of medicines, proteins, and wellness products. The app delivers a seamless, secure shopping experience, leveraging Redux for efficient state management and Cloudinary for fast media delivery. Fit Fables also includes a robust appointment booking system, enabling patients to consult with doctors directly through the app. The admin panel provides powerful tools for managing products, orders, and user interactions, ensuring smooth operations.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-E-Commerce-App',
        demoLink: 'https://mern-e-commerce-app-wsg3.onrender.com'
    },
    {
        img: foodOrderingApp,
        title: 'Food Ordering App',
        type: 'web',
        description: 'Tomato. is a food ordering application developed using the MERN stack, featuring client and admin panels. The admin panel enables administrators to add food items, track inventory, view order histories, and update order statuses, including processing, out for delivery, and delivered. The client panel allows users to browse and order from a diverse menu, with categories like Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles. The application integrates Stripe for secure payments, Context API for state management, and Nodemailer for seamless communication between users and the admin.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Food-Ordering-App',
        demoLink: 'https://mern-food-ordering-app-s1vs.onrender.com'
    },
    {
        img: blogsApp,
        title: 'Blogs App',
        type: 'web',
        description: 'StoryStreamline is a responsive platform built with the MERN stack, utilizing React, React-Bootstrap, and CSS to deliver a user-friendly interface. Users can manage profiles, create and edit blogs across categories such as sports, music, movies, technology, and fashion, and comment on posts when logged in. The app ensures seamless post viewing and interaction through comments while offering efficient content management for admins. Powered by Node.js and Express.js, the platform uses MongoDB for data storage, Redux Toolkit for state management, Cloudinary for image handling, and Nodemailer for user-admin communication.',
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Blogs-App',
        demoLink: 'https://mern-blogs-app-gzo3.onrender.com'
    },
    {
        img: realEstateApp,
        title: 'Real Estate App',
        type: 'web',
        description: "PropertyPulse is a real estate application created using the MERN stack, allowing users to view, create, and search property listings efficiently. The app utilizes Firebase Storage for secure image handling, enabling high-quality uploads and storage. Tailwind CSS is employed for a clean and responsive design, while Redux Toolkit handles global state management, ensuring consistent data flow across the app. Users can explore detailed property listings, filter searches by location, price, and other criteria, and manage their own listings directly within the platform for an optimized user experience.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Real-Estate-App',
        demoLink: 'https://mern-real-estate-app-kbi6.onrender.com'
    },
    {
        img: netflixApp,
        title: 'Netflix Clone App',
        type: 'web',
        description: "This Netflix clone is developed using the MERN stack, incorporating React and Styled Components for a modern, responsive interface. Firebase Authentication ensures secure user sign-ups and logins. Users can browse a wide library of TV shows and movies and save their favorite titles to a personalized list, which is securely managed and stored in MongoDB for each individual user. The application leverages Redux for efficient state management, ensuring a smooth user experience. Whether exploring genres or searching for specific content, the app offers a seamless experience, resembling with the original Netflix platform.",
        ghLink: 'https://github.com/Syed-Moazzam/MERN-Netflix-Clone-App',
        demoLink: 'https://mern-netflix-clone-app.onrender.com'
    },
];

export const mobileProjectsArray = [
    {
        title: "Al Rais",
        type: "mobile",
        description: "The Al Rais mobile app brings the same booking journey to phones with touch-first search, comparison, and reservation flows optimized for people planning trips on the go. It is designed to pair with the broader Al Rais ecosystem, including a web admin panel used by operations to curate offers, manage bookings, and oversee catalog and pricing workflows—the mobile client consumes the same secure, scalable services. The backend follows an AWS serverless approach so APIs and processing can scale with traffic while keeping infrastructure lean and maintainable. Native Android and iOS builds are currently in development so travelers and partners get a consistent experience end to end.",
        images: [alRaisMobile1, alRaisMobile2],
        ghLink: "",
        playStoreLink: "",
        appStoreLink: ""
    },
    {
        title: "TradeSocial",
        type: "mobile",
        description: "TradeSocial mobile app extends the global trade platform experience to handheld devices so users can manage shipment activity and business workflows from anywhere. The application supports real-time visibility for trade operations, access to key process steps, and quick monitoring of ongoing logistics activities through a mobile-first interface. It is built to keep operations teams connected with better responsiveness, cleaner navigation, and faster decision support while away from desktop systems. The app is available on both Play Store and App Store with continuous performance improvements.",
        images: [tradesocialMobile1, tradesocialMobile2, tradesocialMobile3],
        ghLink: "",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.tradesocial.user&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/tradesocialuser/id6758530090"
    },
    {
        title: "H2OTO",
        type: "mobile",
        description: "H2OTO is a smart water management mobile app created for provisioning IoT sensors and monitoring consumption across houses, buildings, schools, and commercial properties. The app enables real-time tracking, usage visibility, and operational control from one connected interface designed for property owners and managers. It helps detect water leakage, identify low-level conditions, and supports valve control for daily routines as well as vacation mode scheduling. With role-based access and reliable mobile workflows, H2OTO makes water monitoring and control practical, proactive, and easier to manage at scale.",
        images: [h2otoMobile1, h2otoMobile2],
        ghLink: "",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.ahoy.h2oto&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/h2oto/id6753791556"
    }
];

export const experiencesArray = [
    {
        title: "Senior Software Engineer",
        company_name: "AHOY Tech",
        icon: ahoyIcon,
        iconBg: "#383E56",
        date: "Apr. 2025 - Present",
        points: [
            "Leading development of Al Rais's cross-platform mobile app using React Native, building core modules including hotels, flights, activities, bookings, cart, and account with end-to-end RESTful API integrations.",
            "Architected serverless backend infrastructure on AWS for Al Rais, defining and deploying Lambda functions to handle core business logic and API workloads.",
            "Built a RAG-powered travel assistant for Al Rais to answer user queries and recommend hotels, flights, and activities in natural language.",
            "Led TradeSocial development, building the cross-platform React Native app from scratch and modernizing the legacy web app, cutting technical debt by 40%, lifting user satisfaction by 30%, and reducing interaction friction by 25%.",
            "Developed an AI-powered support chatbot for TradeSocial to resolve user queries and concerns, reducing response times and support workload.",
            "Conduct technical interviews for MERN and React Native roles; mentor junior developers across frontend and backend teams.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Centrox AI",
        icon: centroxIcon,
        iconBg: "#E6DEDD",
        date: "Nov. 2024 - May 2025",
        points: [
            "Led development of CreditBase platform using Next.js and TypeScript, integrating LLM-powered document parsing with the Anthropic Claude API to analyze and compare complex legal documents 60% faster.",
            "Delivered 4+ features for Pocket Mate AI mental health app, leveraging OpenAI API and prompt engineering to enhance conversational performance and user experience for 500+ daily active users.",
            "Integrated RESTful APIs and fixed 40+ critical bugs across Next.js, NestJS, and MongoDB stack, increasing system uptime to 99.2% and reducing latency by 35%.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "Ephlux",
        icon: ephluxIcon,
        iconBg: "#383E56",
        date: "Dec. 2023 - Mar. 2024",
        points: [
            "Maintained Swift no-code platform for 4,000+ enterprise users using React, Node.js, and Express.js, enhancing 5+ modules and improving UI load time by 35%.",
            "Resolved 20+ complex platform issues across bi-weekly sprints, reducing ticket resolution time by 50%.",
        ],
    },
    {
        title: "Junior Full Stack Developer",
        company_name: "IANCON",
        icon: ianconIcon,
        iconBg: "#E6DEDD",
        date: "Sep. 2021 - Oct. 2023",
        points: [
            "Developed buyer and seller consoles for Noonhut's multi-vendor food delivery marketplace using React, enabling 100+ vendors to process 500+ daily orders.",
            "Implemented Firebase authentication and real-time database, reducing checkout abandonment by 20%.",
        ],
    },
];