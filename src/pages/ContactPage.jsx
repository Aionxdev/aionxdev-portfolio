// src/pages/ContactPage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import LocationMap from '../components/contact/LocationMap';
import { MY_EMAIL, MY_PHONE_NUMBER_INTERNATIONAL, MY_LINKEDIN_URL, MY_GITHUB_URL } from '../utils/constants';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contactPage.css'; 

const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Contact AIONXDEV | Get in Touch';
        window.scrollTo(0, 0);
    }, []);

    // Pre-fill form fields based on query params (e.g., from service inquiry)
    const queryParams = new URLSearchParams(location.search);
    const serviceInquiry = queryParams.get('service');
    const planInquiry = queryParams.get('plan');
    let initialSubject = '';
    if (serviceInquiry) {
        initialSubject = `Inquiry about ${serviceInquiry} service`;
    } else if (planInquiry) {
        initialSubject = `Inquiry about ${planInquiry} plan`;
    }

    // Note: You'd pass this initialSubject to ContactForm if it accepts such a prop.
    // For now, the ContactForm component itself doesn't have an initial subject prop.

    return (
        <div className="contact-page section-padding">
            <div className="container">
                <header className="contact-page-header text-center">
                    <h1 className="page-main-title">Get In Touch</h1>
                    <p className="page-subtitle">
                        I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate.
                        Fill out the form below, or reach out through one of my direct channels.
                    </p>
                </header>

                <div className="contact-content-grid">
                    <div className="contact-form-area">
                        {/* Pass initialSubject to ContactForm if you modify it to accept it */}
                        <ContactForm />
                    </div>

                    <aside className="contact-details-area">
                        <div className="contact-info-box">
                            <h3 className="contact-info-title">Direct Contact</h3>
                            <ul>
                                <li>
                                    <FaEnvelope /> <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>
                                </li>
                                <li>
                                    <FaPhoneAlt /> <a href={`tel:${MY_PHONE_NUMBER_INTERNATIONAL}`}>{MY_PHONE_NUMBER_INTERNATIONAL}</a>
                                </li>
                                <li>
                                    <FaLinkedin /> <a href={MY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </li>
                                <li>
                                    <FaGithub /> <a href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt /> Based in Enugu, Nigeria (Remote work globally)
                                </li>
                            </ul>
                        </div>
                        <div className="whatsapp-section-on-contact-page">
                            <WhatsAppButton title="Quick Chat via WhatsApp" />
                        </div>
                    </aside>
                </div>

                <div className="location-map-section">
                    <LocationMap />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;