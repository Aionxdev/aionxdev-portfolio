// src/components/contact/WhatsAppButton.jsx
import React, { useState } from 'react';
import Button from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import { MY_PHONE_NUMBER_WHATSAPP, DEFAULT_WHATSAPP_GREETING } from '../../utils/constants';
import { sendCustomWhatsAppMessage } from '../../utils/whatsappHelper';
import '../../styles/components/whatsAppButton.css'; // We'll create this CSS file

const WhatsAppButton = ({
    phoneNumber = MY_PHONE_NUMBER_WHATSAPP,
    defaultMessage = DEFAULT_WHATSAPP_GREETING,
    title = "Chat on WhatsApp"
}) => {
    const [customMessage, setCustomMessage] = useState('');

    const handleSend = () => {
        sendCustomWhatsAppMessage(customMessage, defaultMessage, phoneNumber);
        setCustomMessage(''); // Clear after sending
    };

    return (
        <div className="whatsapp-button-container">
            <h4 className="whatsapp-title">{title}</h4>
            <p className="whatsapp-instruction">
                Need a quick response? Send me a message directly on WhatsApp.
            </p>
            <div className="whatsapp-input-group">
                <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Type your message here (optional)..."
                    rows="3"
                    className="whatsapp-message-input"
                />
                <Button onClick={handleSend} variant="primary" className="whatsapp-send-button" iconLeft={<FaWhatsapp />}>
                    Send WhatsApp Message
                </Button>
            </div>
        </div>
    );
};

export default WhatsAppButton;