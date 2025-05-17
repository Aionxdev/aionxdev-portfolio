// src/utils/constants.js

// API Endpoints (if you had any, even for static form services)
// export const API_BASE_URL = 'https://api.example.com/v1';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mldbzpqz'; // Replace with your Formspree ID if you use it

// Contact Information (can also be in data files, but good here for global access)
export const MY_EMAIL = 'aionxdev@gmail.com';
export const MY_PHONE_NUMBER_INTERNATIONAL = '+2348089009786';
export const MY_PHONE_NUMBER_WHATSAPP = '2348089009786'; // For wa.me link
export const MY_LINKEDIN_URL = 'https://linkedin.com/in/aionxdev';
export const MY_GITHUB_URL = 'https://github.com/aionxdev';
export const MY_PORTFOLIO_URL = 'https://aionx.dev'; // Your future domain

// Site Metadata
export const SITE_NAME = 'AIONXDEV | Full-Stack Developer & AI Integrator';
export const SITE_DESCRIPTION = 'Portfolio of AionX (AIONXDEV), a full-stack developer, AI integrator, and biomedical engineer building digital systems that solve real-world problems.';
export const SITE_AUTHOR = 'AIONXDEV';
export const DEFAULT_OG_IMAGE_URL = `${MY_PORTFOLIO_URL}/og-image.png`; // Path to a default Open Graph image in your public folder

// UI Constants
export const MOBILE_BREAKPOINT = 768; // pixels
export const TABLET_BREAKPOINT = 1024; // pixels
export const DEBOUNCE_DELAY = 300; // ms for search inputs, etc.
export const THROTTLE_DELAY = 500; // ms for scroll events, etc.

// Local Storage Keys
export const LOCAL_STORAGE_THEME_KEY = 'aionxdev-theme';

// Default Messages
export const DEFAULT_CONTACT_FORM_SUCCESS_MESSAGE = "Thanks for your message! I'll get back to you soon.";
export const DEFAULT_CONTACT_FORM_ERROR_MESSAGE = "Sorry, there was an error sending your message. Please try again or contact me directly.";
export const DEFAULT_WHATSAPP_GREETING = "Hi AIONXDEV, I saw your portfolio and I’m interested in your services.";

// Project Statuses (if you want to standardize them)
export const PROJECT_STATUS = {
    LIVE: 'Live',
    IN_DEVELOPMENT: 'Under Development',
    CONCEPT: 'Concept',
    MAINTENANCE: 'Maintenance',
};

// Tech Stack Categories (could also be derived from skillsData.js)
export const TECH_CATEGORIES = {
    FRONTEND: 'Frontend',
    BACKEND: 'Backend',
    DATABASE: 'Database',
    AI_ML: 'AI/ML',
    TOOLS: 'Tools & Platforms',
    // ... add more as needed
};