// src/components/home/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // If "My Work" button links to a page
import Button from '../common/Button';
import Typewriter from '../common/Typewriter'; // Assuming you have the Typewriter component
import useScrollTo from '../../hooks/useScrollTo'; // For "My Work" scrolling
import { FaPaperPlane, FaBriefcase } from 'react-icons/fa'; // Example icons
import { MY_PHONE_NUMBER_WHATSAPP, DEFAULT_WHATSAPP_GREETING } from '../../utils/constants';
import { openWhatsAppChat } from '../../utils/whatsappHelper';
import '../../styles/components/heroSection.css'; // We'll create this CSS file

// Optional: if you have a hero image/illustration in src/assets/
import heroIllustration from '../../assets/illustrations/hero-illustration.svg';

const HeroSection = () => {
    const scrollTo = useScrollTo();

    const typewriterTexts = [
        "AI-Powered Web Apps",
        "Full-Stack SaaS Products",
        "Intelligent Automation Systems",
        "Biomedical Tech Solutions",
        "Scalable Digital Platforms"
    ];

    const handleHireMeClick = () => {
        openWhatsAppChat(DEFAULT_WHATSAPP_GREETING, MY_PHONE_NUMBER_WHATSAPP);
        // Or link to contact page: navigate('/contact');
    };

    const handleMyWorkClick = (e) => {
        e.preventDefault(); // Prevent default if it's an anchor
        scrollTo('featured-projects-section'); // ID of your projects section on the homepage
    };

    return (
        <section className="hero-section" id="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">AIONXDEV</h1>
                    <div className="hero-tagline">
                        <span>I Build </span>
                        <Typewriter
                            texts={typewriterTexts}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseDuration={2000}
                        />
                    </div>
                    <p className="hero-intro">
                        A <strong className="highlight">Full-Stack Developer</strong>, <strong className="highlight">AI Integrator</strong>, and <strong className="highlight">Biomedical Engineer</strong> crafting digital systems that deliver real-world solutions and drive innovation.
                    </p>
                    <div className="hero-cta-buttons">
                        <Button
                            onClick={handleHireMeClick}
                            variant="primary"
                            size="large"
                            iconLeft={<FaPaperPlane />}
                        >
                            Hire Me
                        </Button>
                        <Button
                            onClick={handleMyWorkClick}
                            href="#featured-projects-section" // For fallback if JS fails / non-React scrolling
                            variant="outline"
                            size="large"
                            iconLeft={<FaBriefcase />}
                        >
                            My Work
                        </Button>
                    </div>
                </div>
                {/* Optional: Hero Image/Illustration Column */}
                <div className="hero-image-container">
                <img src={heroIllustration} alt="Digital solutions and AI concepts" className="hero-illustration" />
                </div>
            </div>
            {/* Optional: Scroll down indicator */}
            <a href="#featured-projects-section" onClick={handleMyWorkClick} className="scroll-down-indicator" aria-label="Scroll to next section">
                <span className="mouse">
                    <span></span>
                </span>
            </a>
        </section>
    );
};

export default HeroSection;