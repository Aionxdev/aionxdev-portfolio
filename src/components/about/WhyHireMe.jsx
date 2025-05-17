// src/components/about/WhyHireMe.jsx
import React from 'react';
import { FaLightbulb, FaCodeBranch, FaRocket, FaBrain, FaUsers, FaDollarSign } from 'react-icons/fa'; // Example icons
import '../../styles/components/whyHireMe.css'; // We'll create this

// Example data - move to src/data/aboutData.js for better organization
const whyHireMeData = [
    {
        id: 1,
        // icon: <FaBrain />,
        title: 'Problem Solver at Core',
        description: "I don't just code; I architect solutions. My biomedical engineering background trained me to dissect complex problems and build robust, effective systems."
    },
    {
        id: 2,
        // icon: <FaCodeBranch />,
        title: 'Versatile Full-Stack & AI Expertise',
        description: "Proficient across the entire stack (React, Node, Python/FastAPI) and skilled in AI integration (Google Gemini), I can take projects from concept to deployment."
    },
    {
        id: 3,
        // icon: <FaRocket />,
        title: 'Focus on Real-World Utility',
        description: "I build tools that work and provide tangible value, emphasizing clean code, scalability, and intuitive user experiences, not just chasing tech trends."
    },
    {
        id: 4,
        // icon: <FaLightbulb />,
        title: 'Product-Oriented Mindset',
        description: "I think about scalability, user experience, automation, and monetization. I aim to build tech that not only functions well but also has market potential."
    },
    {
        id: 5,
        // icon: <FaUsers />,
        title: 'HealthTech & Automation Specialist',
        description: "Unique experience at the intersection of healthcare and AI, capable of building specialized solutions like remote diagnostic tools or AI-powered SaaS platforms."
    },
    {
        id: 6,
        // icon: <FaDollarSign />,
        title: 'Efficient & Results-Driven',
        description: "Obsessed with efficient pipelines and delivering results. I'm committed to building it right, ensuring your project is a technical and commercial success."
    }
];

const WhyHireMe = () => {
    if (!whyHireMeData || whyHireMeData.length === 0) {
        return null;
    }

    return (
        <section className="why-hire-me-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">Why Work With Me?</h2>
                <div className="why-hire-me-grid">
                    {whyHireMeData.map((item) => (
                        <div key={item.id} className="why-hire-me-item">
                            <div className="why-hire-me-icon">
                                {/* Render actual icon if using react-icons */}
                                {/* {item.icon || <FaLightbulb />} */}
                                <span className="default-icon-placeholder" aria-hidden="true">{item.id}</span> {/* Placeholder */}
                            </div>
                            <h3 className="why-hire-me-title">{item.title}</h3>
                            <p className="why-hire-me-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;