// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Assuming you installed react-icons
import '../../styles/footer.css'; // Assuming styles are in src/styles/footer.css

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer-main">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">AIONXDEV</Link>
                        <p>Full-Stack Developer, AI Integrator & Biomedical Engineer.</p>
                        <p>Building digital systems that solve problems.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/aionxdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://github.com/aionxdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="mailto:aionxdev@gmail.com" aria-label="Email"><FaEnvelope /></a>
                            <a href="https://wa.me/2348089009786" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                        <p>Email: <a href="mailto:aionxdev@gmail.com">aionxdev@gmail.com</a></p>
                        <p>WhatsApp: <a href="https://wa.me/2348089009786" target="_blank" rel="noopener noreferrer">+234 808 900 9786</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    {/* Optional: Add a link to a privacy policy or terms page if needed */}
                    
                    <p className="footer-credit">Designed & Developed by AIONXDEV</p>
                    <p className="footer-credit">Inspired by the beauty of technology and nature.</p>

                    <p className="copyright">&copy; {currentYear} AIONXDEV. All rights reserved. Based in Nigeria.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;