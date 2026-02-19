export async function getPostDetails(postId) {
    const projectDetails = {
        "taskmate": {
            title: "TaskMate",
            type: "Team Projects",
            platform: "Web Application",
            category: "Productivity Tools",
            cat: null,
            year: "Apr 2025 - Oct 2025",
            tech: [
                "Java 21",
                "Spring Boot",
                "Spring Data JPA",
                "MySQL",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind CSS"
            ],
            summary: "A full-stack to-do list platform enabling users to efficiently create, search, update, and manage their daily tasks through a responsive, modern web interface.",
            description: "TaskMate empowers personal productivity with features like dynamic task creation, flexible status updating, powerful search/filtering, and real-time refresh. Leveraging Spring Boot, MySQL, and a Tailwind-styled JavaScript frontend, it delivers a seamless user experience for organizing and tracking tasks.",
            myRole: "Designed and developed backend REST APIs and frontend modules for core features including task search, update, and bulk delete. Implemented JPA specification-driven queries, integrated real-time updates, and crafted a responsive, attractive UI.",
            logo: null,
            projectSharingImg: "/images/sharing/projects/taskmate.jpg",
            images: null,
            projectLinks: [
                { name: "Repository", url: "https://github.com/SuryaKDev/To-Do-List" }
            ]
        },

        "creasynth": {
            title: "CreaSynth",
            type: "Team Projects",
            platform: "Web Application",
            category: "AI-Powered Applications",
            cat: null,
            year: "Jul 2024 - Sep 2024",
            tech: [
                "Java 21",
                "Spring Boot",
                "Spring AI",
                "React",
                "OpenAI API"
            ],
            summary: "A multi-feature AI-powered web platform combining conversational intelligence, generative image creation, and personalized recipe suggestions to deliver an integrated digital experience.",
            description: "CreaSynth leverages cutting-edge AI models to deliver three distinct modules—interactive chat assistant (GPT), DALL-E-based image generation, and custom recipe guidance. The application is architected with Spring Boot backend services and React frontend for rich user interaction, providing RESTful endpoints and modular components for seamless communication and feature usage.",
            myRole: "Led full-stack feature development, integrating OpenAI services, architecting scalable REST endpoints, and building dynamic React components. Prioritized usability, modular design, and secure API integration to provide a robust and extensible AI platform.",
            logo: null,
            projectSharingImg: "/images/sharing/projects/creasynth.jpg",
            images: null,
            projectLinks: [
                { name: "Repository", url: "https://github.com/SuryaKDev/Chat-Bot" }
            ]
        },

        "ecomflow": {
            title: "EcomFlow",
            type: "Team Projects",
            platform: "Web Application",
            category: "E-Commerce Solutions",
            cat: null,
            year: "Jan 2024 - Oct 2024",
            tech: [
                "Java 17",
                "Spring Boot",
                "React",
                "Vite",
                "Bootstrap"
            ],
            summary: "A full-stack e-commerce platform delivering seamless product management, shopping cart features, and an engaging, responsive user experience.",
            description: "EcomFlow amalgamates modern web technologies to enable robust product and category management, dynamic cart operations, real-time updates, and visually appealing navigation. With Spring Boot powering the backend and React/Vite shaping the frontend, the system offers secure RESTful APIs, integrated image handling, and scalable development for efficient online retail.",
            myRole: "Developed backend APIs and frontend components for product, cart, and admin modules. Implemented core business logic, responsive UI design, optimized performance, and maintained best practices for code quality and scalability.",
            logo: null,
            projectSharingImg: "/images/sharing/projects/ecomflow.jpg",
            images: null,
            projectLinks: [
                { name: "Repository", url: "https://github.com/SuryaKDev/E-Commerce" }
            ]
        },

        "resourcehive": {
            title: "ResourceHive",
            type: "Team Projects",
            platform: "Web Application",
            category: "Institutional Resource Management",
            cat: null,
            year: "May 2024 - Oct 2025",
            tech: [
                "Java 21",
                "Spring Boot",
                "Spring Security",
                "React",
                "MySQL"
            ],
            summary: "A modern full-stack platform for secure and efficient management of campus resources, assets, and requests, empowering institutions to control physical and digital asset lifecycles.",
            description: "ResourceHive streamlines the oversight of campus assets with features such as real-time dashboards, role-based access for students and administrators, secure authentication, and user-friendly interfaces. Its three-tier architecture (React frontend, Spring Boot backend, MySQL database) supports scalable, analytics-driven management for educational institutions.",
            myRole: "Led backend and frontend architecture, implemented asset and request tracking modules, enforced security with JWT and role-based access, designed responsive UI, and optimized performance across deployment environments.",
            logo: null,
            projectSharingImg: "/images/sharing/projects/resourcehive.jpg",
            images: null,
            projectLinks: [
                { name: "Repository", url: "https://github.com/SuryaKDev/Campus_Asset_Manager" }
            ]
        },


        "rideconnect": {
            "title": "RideConnect",
            "type": "Intern - Team Projects",
            "platform": "Web Application",
            "category": "Ride Sharing Platform",
            "cat": null,
            "year": "Nov 2025 - Feb 2026",
            "tech": [
                "Java 21",
                "Spring Boot 3.5.8",
                "Spring Security",
                "PostgreSQL",
                "Redis",
                "WebSocket",
                "Thymeleaf",
                "JWT",
                "Google Maps API",
                "Razorpay",
                "Cloudinary"
            ],
            "summary": "Backend services for a ride-sharing platform with secure authentication, ride listings, booking flows, payments, real-time chat, notifications, and scheduled reminders.",
            "description": "RideConnect is a Spring Boot backend for a ride-sharing platform, providing REST APIs for user management, ride discovery, bookings, trip coordination, payments, reviews, support, and admin workflows. It integrates Google Maps for location services, Razorpay for payment processing, Cloudinary for media handling, and email notifications for onboarding, reminders, and monthly summaries. The stack uses PostgreSQL with JPA, Redis for caching/unread counts, JWT-based security, and WebSocket messaging for in-app chat.",
            "myRole": "Led a 4-member team to architect a scalable ride-sharing platform, taking ownership of the Spring Boot backend design and complex geospatial routing logic. Engineered a robust hybrid payment gateway and real-time notification system while guiding frontend integration to ensure seamless end-to-end delivery",
            "logo": null,
            "projectSharingImg": "/images/sharing/projects/rideconnect.jpg",
            "images": null,
            "projectLinks": [
                { name: "Repository", url: "https://github.com/SuryaKDev/RideConnect-Platform" }
            ]
        },

        "talentnest": {
            title: "TalentNest",
            type: "Personal Projects",
            platform: "Web Application",
            category: "Enterprise Solutions",
            cat: null,
            year: "May 2023 - Nov 2023",
            tech: [
                "Java 21",
                "Spring Boot",
                "Spring Cloud",
                "Netflix Eureka",
                "MongoDB",
                "React"
            ],
            summary: "A robust microservices-based hiring platform connecting recruiters and job seekers, enabling secure job postings, applications, and candidate profile management with scalable architecture.",
            description: "TalentNest streamlines recruitment operations with independent microservices for authentication, job management, and candidate profiles. The system ensures secure access via JWT authentication, scalable service discovery using Eureka, and seamless inter-service communication. MongoDB is used for data persistence and email notifications are automated using Gmail SMTP.",
            myRole: "Led backend microservices development and architecture. Implemented service discovery, API gateway, JWT-based authentication, and communication flows. Integrated MongoDB storage and automated notification services while ensuring scalability and security.",
            logo: null,
            projectSharingImg: "/images/sharing/projects/talentnest.jpg",
            images: null,
            projectLinks: [
                { name: "Repository", url: "https://github.com/SuryaKDev/Hiring-Platform_Microservice-Application" }
            ]
        }


    }

    return projectDetails[postId] || null; // Handle invalid IDs
}
