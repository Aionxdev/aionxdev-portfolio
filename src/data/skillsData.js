// src/data/skillsData.js

export const skillsData = {
    categories: [
        {
            name: 'Frontend Development',
            icon: 'frontend-icon', // Placeholder for an icon representing frontend
            skills: [
                { name: 'React', level: 95, logo: '/assets/logos/react-logo.svg' },
                { name: 'Vite', level: 90, logo: '/assets/logos/vite-logo.svg' },
                { name: 'JavaScript (ES6+)', level: 95, logo: '/assets/logos/javascript-logo.svg' },
                { name: 'HTML5', level: 98, logo: '/assets/logos/html5-logo.svg' },
                { name: 'CSS3', level: 95, logo: '/assets/logos/css3-logo.svg' },
                { name: 'Responsive Design', level: 98 },
            ]
        },
        {
            name: 'Backend Development',
            icon: 'backend-icon',
            skills: [
                { name: 'Node.js', level: 90, logo: '/assets/logos/nodejs-logo.svg' },
                { name: 'Express.js', level: 88 },
                { name: 'Python', level: 85, logo: '/assets/logos/python-logo.svg' },
                { name: 'FastAPI', level: 80 },
                { name: 'REST API Design', level: 95 },
            ]
        },
        {
            name: 'Databases & Storage',
            icon: 'database-icon',
            skills: [
                { name: 'MySQL', level: 80, logo: '/assets/logos/mysql-logo.svg' },
                { name: 'MongoDB', level: 75, logo: '/assets/logos/mongodb-logo.svg' },
                { name: 'Firebase', level: 70, logo: '/assets/logos/firebase-logo.svg' },
                { name: 'Local Storage', level: 90 },
                { name: 'JSON Data Management', level: 95 },
            ]
        },
        {
            name: 'AI & Machine Learning',
            icon: 'ai-ml-icon',
            skills: [
                { name: 'Google Gemini API', level: 90, logo: '/assets/logos/gemini-api-logo.svg' },
                { name: 'NLP Fine-tuning', level: 75 },
                { name: 'AI Chatbot Logic', level: 85 },
                { name: 'Automation Workflows', level: 80 },
            ]
        },
        {
            name: 'Authentication & Security',
            icon: 'auth-security-icon',
            skills: [
                { name: 'Google OAuth', level: 85 },
                { name: 'JWT (JSON Web Tokens)', level: 90 },
                { name: 'Secure Session Management', level: 80 },
            ]
        },
        {
            name: 'Payments & E-commerce',
            icon: 'payments-icon',
            skills: [
                { name: 'Flutterwave', level: 80, logo: '/assets/logos/flutterwave-logo.svg' },
                { name: 'Paystack', level: 75, logo: '/assets/logos/paystack-logo.svg' },
                { name: 'Stripe', level: 70, logo: '/assets/logos/stripe-logo.svg' },
            ]
        },
        {
            name: 'Tools & Platforms',
            icon: 'tools-platforms-icon',
            skills: [
                { name: 'Git & GitHub', level: 95, logo: '/assets/logos/github-logo.svg' },
                { name: 'VS Code', level: 98, logo: '/assets/logos/vscode-logo.svg' },
                { name: 'Figma (for collaboration)', level: 70, logo: '/assets/logos/figma-logo.svg' },
                { name: 'Docker (Basic)', level: 60, logo: '/assets/logos/docker-logo.svg' },
                { name: 'Postman', level: 90, logo: '/assets/logos/postman-logo.svg' },
            ]
        },
        {
            name: 'Methodologies & Others',
            icon: 'methodologies-icon',
            skills: [
                { name: 'Agile Development', level: 80 },
                { name: 'Problem Solving', level: 95 },
                { name: 'Product Architecture Thinking', level: 90 },
                { name: 'Biomedical Engineering Principles', level: 85 },
            ]
        }
    ],
    // You can also add a separate list for "core beliefs" or "working philosophy" here
    // based on your "What I Believe" section if you want to display it programmatically.
    philosophyPoints: [
        "Build tools that work – clean, scalable, and smart.",
        "Focus on real-world utility and efficient code pipelines.",
        "Think beyond 'just getting it to work': Will it scale? Is it intuitive? Can it be monetized?",
        "Prioritize systems that work, UI that feels good, logic that scales, and tech that sells."
    ]
};