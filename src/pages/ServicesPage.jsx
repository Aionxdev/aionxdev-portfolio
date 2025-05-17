// src/pages/ServicesPage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { pricingPlansData } from '../data/pricingData'; // Assuming you created this
import ServiceItem from '../components/services/ServiceItem';
import PricingPlan from '../components/services/PricingPlan';
import CallToActionSection from '../components/common/CallToActionSection';
import { FaTools, FaDollarSign } from 'react-icons/fa'; // Example icons
import '../styles/servicesPage.css';

const ServicesPage = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Services | AIONXDEV - Web Development, AI Integration';
        // Scroll to a specific service if linked with a hash, e.g., /services#web-dev
        if (location.hash) {
            const elementId = location.hash.substring(1); // Remove #
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Optional: Add a highlight class briefly
                element.classList.add('highlighted-service');
                setTimeout(() => element.classList.remove('highlighted-service'), 2000);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="services-page">
            <section className="services-list-section section-padding">
                <div className="container">
                    <header className="services-page-header text-center">
                        <h1 className="page-main-title"><FaTools /> My Services</h1>
                        <p className="page-subtitle">
                            Offering a comprehensive suite of development and integration services to transform your ideas into reality.
                            From initial concept to deployment and beyond, I provide tailored solutions that drive results.
                        </p>
                    </header>

                    <div className="services-grid">
                        {servicesData.map(service => (
                            // Add an id to the wrapper div for hash linking
                            <div key={service.id} id={service.id} className="service-item-wrapper">
                                <ServiceItem service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {pricingPlansData && pricingPlansData.length > 0 && (
                <section className="pricing-plans-section section-padding">
                    <div className="container">
                        <header className="section-header text-center">
                            <h2 className="section-title"><FaDollarSign /> Flexible Engagement Models</h2>
                            <p className="section-subtitle">
                                Choose a plan that best suits your project needs, or contact me for a custom quote.
                                My goal is to provide maximum value and a transparent process. (These are illustrative).
                            </p>
                        </header>
                        <div className="pricing-plans-grid">
                            {pricingPlansData.map(plan => (
                                <PricingPlan key={plan.name} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <CallToActionSection
                title="Ready to Start Your Project?"
                text="Whether you need a complex AI system, a robust web application, or expert consultation, I'm here to help. Let's discuss your requirements."
                buttonText="Request a Free Quote"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ServicesPage;