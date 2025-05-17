// src/components/home/HomeServicesTeaser.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData'; // Your services data
import Button from '../common/Button';
import { FaCog, FaLaptopCode, FaBrain, FaBullhorn, FaArrowRight } from 'react-icons/fa'; // Example icons
import '../../styles/components/homeServicesTeaser.css';

// Helper to get an icon (if you're not storing actual components in servicesData)
const getServiceIcon = (iconId) => {
    // This is a simple map. In a real app, you might have a more robust icon system
    // or store the icon component directly in servicesData if preferred.
    const iconMap = {
        'web-dev-icon': <FaLaptopCode />,
        'ai-integration-icon': <FaBrain />,
        'chatbot-dev-icon': <FaBullhorn />,
        'api-automation-icon': <FaCog />,
        // Add more mappings as needed from your servicesData icon strings
    };
    return iconMap[iconId] || <FaCog />; // Default icon
};


const HomeServicesTeaser = () => {
    // Show first 3-4 services, or mark specific ones as 'featured' in servicesData
    const featuredServices = servicesData.slice(0, 4);

    if (!featuredServices || featuredServices.length === 0) {
        return null;
    }

    return (
        <section className="home-services-teaser-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">What I Offer</h2>
                    <p className="section-subtitle">
                        Providing end-to-end solutions to bring your digital ideas to life with precision and innovation.
                    </p>
                </div>

                <div className="services-teaser-grid">
                    {featuredServices.map((service) => (
                        <div key={service.id} className="service-teaser-item">
                            <div className="service-teaser-icon">
                                {getServiceIcon(service.icon)}
                            </div>
                            <h3 className="service-teaser-title">{service.title}</h3>
                            <p className="service-teaser-description">
                                {service.description.substring(0, 100)}... {/* Short description */}
                            </p>
                            <Link to={`/services#${service.id}`} className="service-teaser-link">
                                Learn More <FaArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="view-all-services-cta text-center">
                    <Button to="/services" variant="outline" size="large" iconRight={<FaArrowRight />}>
                        Explore All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HomeServicesTeaser;