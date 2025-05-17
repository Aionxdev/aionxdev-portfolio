// src/pages/AboutPage.jsx
import React, { useEffect } from 'react';
import BioSection from '../components/about/BioSection';
import Timeline from '../components/about/Timeline';
import WhyHireMe from '../components/about/WhyHireMe';
import SkillsTechPage from './SkillsTechPage'; // Or import components from SkillsTechPage if you prefer sections
import CallToActionSection from '../components/common/CallToActionSection';
import Button from '../components/common/Button';


import '../styles/aboutPage.css'; // Page-specific styles

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About AIONXDEV | Developer & AI Integrator';
    }, []);

    return (
        <div className="about-page">
            <BioSection />
            <Timeline />
            <WhyHireMe />
            {/* You can either embed the SkillsTechPage content here or link to it */}
            {/* For embedding, you might import specific sections/components from SkillsTechPage */}
            <section className="skills-preview-section section-padding" style={{ backgroundColor: 'var(--background-light)' }}>
                <div className="container text-center">
                    <h2 className="section-title">My Technical Arsenal</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto var(--space-lg) auto' }}>
                        A look at the primary tools and technologies I leverage to build robust and innovative solutions.
                    </p>
                    {/* Placeholder for a few key skills or a link to the full skills page */}
                    {/* Example: <KeySkillsGrid /> component could be created */}
                    <p>For a detailed breakdown of my skills, please visit the Skills & Tech page.</p>
                    <Button to="/skills" variant="outline">View All Skills & Technologies</Button>
                </div>
            </section>
            <CallToActionSection
                title="Let's Discuss Your Next Project"
                text="I'm passionate about leveraging technology to solve complex problems. If you have an idea or a challenge, I'd love to hear about it."
                buttonText="Contact Me"
                buttonLink="/contact"
            />
        </div>
    );
};

export default AboutPage;