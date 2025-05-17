// src/components/common/QuickContact.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes, FaCommentDots } from 'react-icons/fa'; // Example icons
import Button from './Button'; // Reusable button
import '../../styles/components/quickContact.css'; // Create this file

const QuickContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [whatsappMessage, setWhatsappMessage] = useState('');

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleWhatsAppSend = () => {
        const defaultMsg = "Hi AIONXDEV, I saw your portfolio and I’m interested in your services.";
        const encodedMsg = encodeURIComponent(whatsappMessage.trim() || defaultMsg);
        window.open(`https://wa.me/2348089009786?text=${encodedMsg}`, '_blank');
        setWhatsappMessage(''); // Clear message after sending
        setIsOpen(false); // Close menu after action
    };

    return (
        <div className={`quick-contact-container ${isOpen ? 'open' : ''}`}>
            <button className="quick-contact-toggle-button" onClick={toggleOpen} aria-label={isOpen ? "Close quick contacts" : "Open quick contacts"}>
                {isOpen ? <FaTimes /> : <FaCommentDots />}
            </button>

            {isOpen && (
                <div className="quick-contact-menu">
                    <h4 className="quick-contact-title">Quick Contact</h4>

                    <a href="tel:+2348089009786" className="quick-contact-link">
                        <FaPhoneAlt className="qc-icon" /> Call Me
                    </a>
                    <a href="mailto:aionxdev@gmail.com" className="quick-contact-link">
                        <FaEnvelope className="qc-icon" /> Email Me
                    </a>

                    <div className="quick-contact-whatsapp">
                        <label htmlFor="whatsappQuickMsg" className="qc-whatsapp-label">
                            <FaWhatsapp className="qc-icon" /> Message on WhatsApp:
                        </label>
                        <textarea
                            id="whatsappQuickMsg"
                            value={whatsappMessage}
                            onChange={(e) => setWhatsappMessage(e.target.value)}
                            placeholder="Type your message (optional)"
                            rows="3"
                            className="qc-whatsapp-input"
                        />
                        <Button onClick={handleWhatsAppSend} size="small" className="qc-whatsapp-button">
                            Send WhatsApp
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuickContact;