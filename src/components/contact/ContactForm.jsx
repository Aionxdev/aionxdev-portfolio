// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import Button from '../common/Button';
import { FORMSPREE_ENDPOINT, DEFAULT_CONTACT_FORM_SUCCESS_MESSAGE, DEFAULT_CONTACT_FORM_ERROR_MESSAGE } from '../../utils/constants';
import { FaPaperPlane } from 'react-icons/fa';
import '../../styles/components/contactForm.css'; // We'll create this CSS file

const ContactForm = ({ formspreeEndpoint = FORMSPREE_ENDPOINT }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        succeeded: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitted: false, succeeded: false, message: 'Sending...' });

        // Simple client-side validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({ submitted: true, succeeded: false, message: 'Please fill in all required fields (Name, Email, Message).' });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setFormStatus({ submitted: true, succeeded: false, message: 'Please enter a valid email address.' });
            return;
        }

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({ submitted: true, succeeded: true, message: DEFAULT_CONTACT_FORM_SUCCESS_MESSAGE });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            } else {
                const data = await response.json();
                if (data.errors) {
                    setFormStatus({ submitted: true, succeeded: false, message: data.errors.map(error => error.message).join(', ') });
                } else {
                    setFormStatus({ submitted: true, succeeded: false, message: DEFAULT_CONTACT_FORM_ERROR_MESSAGE });
                }
            }
        } catch (error) {
            setFormStatus({ submitted: true, succeeded: false, message: DEFAULT_CONTACT_FORM_ERROR_MESSAGE }), error;
        }
    };

    // If you prefer a mailto: link instead of Formspree:
    // const handleMailtoSubmit = (e) => {
    //   e.preventDefault();
    //   const { name, email, subject, message } = formData;
    //   const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name}`);
    //   const mailtoBody = encodeURIComponent(
    //     `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    //   );
    //   window.location.href = `mailto:aionxdev@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    // };

    return (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <h3 className="form-title">Send Me a Message</h3>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name <span className="required-asterisk">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="e.g., John Doe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address <span className="required-asterisk">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                        placeholder="e.g., john.doe@example.com"
                    />
                </div>
            </div> {/* End form-grid */}
            <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., Project Inquiry"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label">Message <span className="required-asterisk">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="6"
                    required
                    placeholder="Your message here..."
                />
            </div>
            <div className="form-actions">
                <Button type="submit" variant="primary" size="large" iconLeft={<FaPaperPlane />} disabled={formStatus.message === 'Sending...'}>
                    {formStatus.message === 'Sending...' ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
            {formStatus.submitted && (
                <p className={`form-status-message ${formStatus.succeeded ? 'success' : 'error'}`}>
                    {formStatus.message}
                </p>
            )}
        </form>
    );
};

export default ContactForm;