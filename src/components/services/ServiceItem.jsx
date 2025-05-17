// src/components/services/ServiceItem.jsx
import React from 'react';
import Card from '../common/Card'; // Reusable Card component
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaBrain, FaBullhorn, FaCog, FaCreditCard, FaUserTie, FaHeartbeat, FaArrowRight } from 'react-icons/fa'; // Example icons
import '../../styles/components/serviceItem.css'; // We'll create this CSS file

// Helper to map icon strings from data to actual icon components
// (Similar to the one in HomeServicesTeaser.jsx, could be centralized in a util if used often)
const getServiceIconComponent = (iconId) => {
    const iconMap = {
        'web-dev-icon': <FaLaptopCode />,
        'ai-integration-icon': <FaBrain />,
        'chatbot-dev-icon': <FaBullhorn />,
        'api-automation-icon': <FaCog />,
        'payment-systems-icon': <FaCreditCard />,
        'portfolio-build-icon': <FaUserTie />,
        'health-tech-icon': <FaHeartbeat />,
        // Add more mappings as needed
    };
    return iconMap[iconId] || <FaCog />; // Default icon
};

const ServiceItem = ({ service }) => {
    if (!service) return null;

    const { title, description, icon } = service;

    return (
        <Card className="service-item" shadow="medium" hoverEffect={true}>
            <div className="service-item-icon-container">
                {getServiceIconComponent(icon)}
            </div>
            <div className="service-item-content">
                <h3 className="service-item-title">{title}</h3>
                <p className="service-item-description">{description}</p>
            </div>
            <div className="service-item-action">
                {/* You could link to a more detailed section on the contact page or a specific inquiry form */}
                <Link to={`/contact?service=${encodeURIComponent(title)}`} className="service-item-cta-link">
                    Inquire About This Service <FaArrowRight />
                </Link>
            </div>
        </Card>
    );
};

export default ServiceItem;