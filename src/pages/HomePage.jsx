// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProjectsTeaser from '../components/home/FeaturedProjectsTeaser';
import HomeServicesTeaser from '../components/home/HomeServicesTeaser';
// import AboutTeaser from '../components/home/AboutTeaser'; // Optional: A short teaser about you
import TestimonialsSlider from '../components/common/TestimonialsSlider'; // Optional
import StatsCounter from '../components/common/StatsCounter'; // Optional stats
import { FaProjectDiagram, FaCode, FaCoffee, FaBug } from 'react-icons/fa'; // Example icons for StatsCounter
import CallToActionSection from '../components/common/CallToActionSection'; // A generic CTA component
import Button from '../components/common/Button';

import '../styles/homePage.css'; // Page-specific styles

const HomePage = () => {
    useEffect(() => {
        document.title = 'AIONXDEV | Full-Stack Developer & AI Integrator';
    }, []);

    const statsItems = [
        { value: projectsData.length, label: 'Projects Completed', icon: <FaProjectDiagram />, suffix: '+' },
        { value: 100000, label: 'Lines of Code', icon: <FaCode />, suffix: '+' }, // Example static number
        { value: 500, label: 'Cups of Coffee', icon: <FaCoffee />, suffix: '+' }, // Example
        { value: 999, label: 'Bugs Squashed', icon: <FaBug />, suffix: '+' },
    ];
    // Note: To get actual project count for statsItems, import projectsData from '../../data/projectsData'
    // For now, I'll hardcode a number or you can import it.
    // import { projectsData } from '../../data/projectsData';
    // const statsItems = [ { value: projectsData.length, ... } ]


    return (
        <>
            <div className="home-page">
                <HeroSection />
                <FeaturedProjectsTeaser />
                {/* You can add an About Me teaser section here if desired */}
        <section className="about-teaser-section section-padding">
            <div className="container text-center">
            <h2>A Little About Me</h2>
            <p>Driven by passion and innovation, I transform complex challenges into elegant digital solutions...</p>
            <Button to="/about" variant="outline">Learn More About Me</Button>
            </div>
        </section> 
                <HomeServicesTeaser />
                <StatsCounter items={statsItems} />
                <TestimonialsSlider /> 
                <CallToActionSection
                    title="Ready to build something amazing?"
                    text="Whether it's an AI-powered app, a scalable SaaS platform, or a stunning portfolio, let's collaborate and bring your vision to life."
                    buttonText="Get in Touch"
                    buttonLink="/contact"
                />
            </div>
        </>
    );
};
// To use projectsData.length in statsItems:
import { projectsData } from '../data/projectsData';

export default HomePage;