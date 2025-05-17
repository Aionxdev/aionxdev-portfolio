// src/components/about/Timeline.jsx
import React from 'react';
// import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa'; // Example icons
import '../../styles/components/timeline.css'; // We'll create this CSS file

// Example timeline data - move to src/data/aboutData.js or similar for better organization
const timelineData = [
    {
        id: 1,
        date: '2023 - Present',
        title: 'Full-Stack Development & AI Integration',
        description: 'Developing end-to-end web applications, integrating AI (Google Gemini), and building SaaS platforms. Focus on HealthTech, AI tools, and automation.',
        // icon: <FaBriefcase />,
        iconType: 'work' // For styling
    },
    {
        id: 2,
        date: '2021 - 2023',
        title: 'Biomedical Engineering & Software Projects',
        description: 'Applied engineering principles to health-related software challenges, including remote diagnostics research and early-stage development of AI tools for healthcare.',
        // icon: <FaGraduationCap />, // Or a relevant project icon
        iconType: 'project'
    },
    {
        id: 3,
        date: '2020',
        title: 'Deep Dive into Web Technologies',
        description: 'Intensive self-study and project-based learning in React, Node.js, Python, and database management, laying the groundwork for full-stack capabilities.',
        // icon: <FaStar />,
        iconType: 'learning'
    },
    // Add more relevant milestones
];

const TimelineItem = ({ item }) => {
    return (
        <div className={`timeline-item ${item.iconType || ''}`}>
            <div className="timeline-item-icon-wrapper">
                <div className="timeline-item-icon">
                    {/* Render actual icon component if using one like react-icons */}
                    {/* {item.icon || <FaBriefcase />} */}
                    <span className="default-icon-placeholder" aria-hidden="true"></span>
                </div>
            </div>
            <div className="timeline-item-content">
                <span className="timeline-item-date">{item.date}</span>
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-item-description">{item.description}</p>
            </div>
        </div>
    );
};

const Timeline = () => {
    if (!timelineData || timelineData.length === 0) {
        return null; // Don't render if no data
    }

    return (
        <section className="timeline-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">My Journey</h2>
                <div className="timeline-container">
                    {timelineData.map((item) => (
                        <TimelineItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;