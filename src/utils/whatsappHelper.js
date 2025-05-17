// src/utils/whatsappHelper.js

const WHATSAPP_BASE_URL = 'https://wa.me/';
const YOUR_PHONE_NUMBER = '2348089009786'; // Your WhatsApp number without '+' or leading zeros if not needed by wa.me

/**
 * Generates a WhatsApp click-to-chat link.
 * @param {string} [message] - Optional predefined message.
 * @param {string} [phoneNumber] - Optional phone number (defaults to YOUR_PHONE_NUMBER).
 * @returns {string} The WhatsApp URL.
 */
export const generateWhatsAppLink = (message = '', phoneNumber = YOUR_PHONE_NUMBER) => {
    const encodedMessage = encodeURIComponent(message);
    return `${WHATSAPP_BASE_URL}${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;
};

/**
 * Opens a WhatsApp chat window with an optional message.
 * @param {string} [message] - Optional predefined message.
 * @param {string} [phoneNumber] - Optional phone number.
 */
export const openWhatsAppChat = (message = '', phoneNumber = YOUR_PHONE_NUMBER) => {
    const link = generateWhatsAppLink(message, phoneNumber);
    window.open(link, '_blank', 'noopener,noreferrer');
};

/**
 * Handles sending a custom WhatsApp message from an input field.
 * @param {string} customMessage - The message typed by the user.
 * @param {string} defaultMessage - A default message if customMessage is empty.
 * @param {string} [phoneNumber] - Optional phone number.
 */
export const sendCustomWhatsAppMessage = (
    customMessage,
    defaultMessage = "Hi AIONXDEV, I'm interested in your services.",
    phoneNumber = YOUR_PHONE_NUMBER
) => {
    const messageToSend = customMessage.trim() || defaultMessage;
    openWhatsAppChat(messageToSend, phoneNumber);
};