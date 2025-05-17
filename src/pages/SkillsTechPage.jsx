// src/pages/SkillsTechPage.jsx
import React, { useEffect } from 'react';
import { skillsData } from '../data/skillsData'; // Your skills data
import WhyHireMe from '../components/about/WhyHireMe'; // Re-use from about components
import { FaStar, FaCheckCircle } from 'react-icons/fa'; // Example icons
import CallToActionSection from '../components/common/CallToActionSection';
import '../styles/skillsTechPage.css';

const SkillsTechPage = () => {
    useEffect(() => {
        document.title = 'Skills & Technologies | AIONXDEV';
        window.scrollTo(0, 0);
    }, []);

    const { categories: skillCategories, philosophyPoints } = skillsData;

    // Helper for skill level progress bar (visual only)
    const SkillLevelBar = ({ level }) => (
        <div className="skill-level-bar-container">
            <div className="skill-level-bar" style={{ width: `${level || 0}%` }}>
                {/* {level}% */}
            </div>
        </div>
    );

    return (
        <div className="skills-tech-page section-padding">
            <div className="container">
                <header className="skills-page-header text-center">
                    <h1 className="page-main-title">My Technical Arsenal & Approach</h1>
                    <p className="page-subtitle">
                        A detailed look at the technologies I master, the tools I use, and the philosophy that guides my work.
                    </p>
                </header>

                {skillCategories && skillCategories.length > 0 && (
                    <section className="skills-categories-section">
                        {skillCategories.map(category => (
                            <div key={category.name} className="skill-category-card">
                                <h2 className="skill-category-title">
                                    {/* {category.icon && <span className="category-icon">{category.icon}</span>} Placeholder */}
                                    {category.name}
                                </h2>
                                <ul className="skills-list">
                                    {category.skills.map(skill => (
                                        <li key={skill.name} className="skill-item">
                                            {/* {skill.logo && <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />} */}
                                            <span className="skill-name">{skill.name}</span>
                                            {skill.level && <SkillLevelBar level={skill.level} />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                )}

                {philosophyPoints && philosophyPoints.length > 0 && (
                    <section className="philosophy-section section-padding">
                        <div className="container text-center">
                            <h2 className="section-title">My Development Philosophy</h2>
                            <div className="philosophy-points-grid">
                                {philosophyPoints.map((point, index) => (
                                    <div key={index} className="philosophy-point-card">
                                        <FaCheckCircle className="philosophy-icon" />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Re-using WhyHireMe component */}
                <WhyHireMe />
            </div>
            <CallToActionSection
                title="Leverage My Skills for Your Success"
                text="My diverse skill set and problem-solving approach are ready to tackle your most ambitious projects. Let's build something impactful together."
                buttonText="Discuss Your Project"
                buttonLink="/contact"
            />
        </div>
    );
};

export default SkillsTechPage;