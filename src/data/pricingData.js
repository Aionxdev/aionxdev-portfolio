// src/data/pricingData.js
// import { FaProjectDiagram, FaBuilding, FaRocket } from 'react-icons/fa'; // If storing icons

export const pricingPlansData = [
    {
        name: 'Basic Project',
        price: '$XXX', // Or "Quote-Based"
        billingCycle: '/ project',
        description: 'Ideal for small websites, landing pages, or initial consultations.',
        features: [
            { text: 'Static Website (up to 5 pages)', included: true },
            { text: 'Responsive Design', included: true },
            { text: 'Basic SEO Setup', included: true },
            { text: 'AI Integration Consult', included: false },
            { text: 'Dedicated Support', included: false },
        ],
        ctaText: 'Request Quote',
        ctaLink: '/contact',
        // icon: <FaProjectDiagram />
    },
    {
        name: 'Standard SaaS/App',
        price: '$YYYY',
        billingCycle: '/ starting',
        description: 'For custom web applications, AI integrations, or small SaaS products.',
        features: [
            'Full-Stack Web App Development',
            'AI Model Integration (Basic)',
            'Database Setup & Management',
            'User Authentication',
            'Monthly Maintenance (Optional Add-on)',
        ],
        isFeatured: true,
        ctaText: 'Discuss Project',
        // icon: <FaRocket />
    },
    // ... more plans
];