// src/components/common/CallToActionSection.jsx
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
// import '../../styles/components/callToActionSection.css'; // Create if needed

const CallToActionSection = ({ title, text, buttonText, buttonLink, buttonIcon }) => {
    return (
        <section className="cta-section section-padding" style={{ backgroundColor: 'var(--background-section-alt)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text-color-heading)', marginBottom: 'var(--space-md)' }}>{title}</h2>
                <p style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-color-muted)', maxWidth: '750px', margin: '0 auto var(--space-xl) auto' }}>{text}</p>
                <Button to={buttonLink} variant="primary" size="large" iconLeft={buttonIcon}>
                    {buttonText}
                </Button>
            </div>
        </section>
    );
};
export default CallToActionSection;