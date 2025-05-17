// src/data/projectsData.js

// It's good practice to have a consistent way to reference images.
// If your images are in public/projects/, then the path would be like '/projects/project-image.png'
// If they are in src/assets/projects/, you'd import them:
// import textiqThumb from '../assets/projects/textiq-thumb.png'; (adjust path as needed)

export const projectsData = [
    // Projects under development
    {
        id: 'textiq',
        title: 'TextIQ',
        category: 'AI Dashboard',
        status: 'Under Development',
        description: 'An AI-powered dashboard featuring advanced chat functionalities, secure sharing capabilities, and comprehensive history tracking for user interactions and generated content.',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'Google Gemini API', 'CSS'],
      thumbnail: '/projects/not_hosted.png', 
        liveLink: null, 
        repoLink: '#', 
        details: `
      <p>TextIQ is designed to be a central hub for AI-driven text analysis and generation. Key features include:</p>
      <ul>
        <li><strong>Intelligent Chat:</strong> Leverages Google Gemini API for nuanced conversations and task completion.</li>
        <li><strong>Secure Sharing:</strong> Allows users to share generated content or chat sessions with collaborators securely.</li>
        <li><strong>History Management:</strong> Provides a robust system for tracking and retrieving past interactions and AI outputs.</li>
        <li><strong>Modular UI:</strong> Built with React and Vite for a fast and responsive user experience.</li>
      </ul>
      <p>The backend is powered by Node.js and Express, ensuring scalable and efficient API communication.</p>
    `
    },
    {
        id: 'coalhealth-ai',
        title: 'CoalHealth AI',
        category: 'HealthTech AI',
        status: 'Under Development',
        description: 'A remote health diagnostic tool utilizing AI for symptom detection, offering live chat with simulated health assistants, and providing doctor suggestions based on user input.',
        technologies: ['React', 'Vite', 'Python', 'FastAPI', 'Google Gemini API', 'MySQL', 'CSS'],
      thumbnail: '/projects/not_hosted.png',
        liveLink: null,
        repoLink: '#',
        details: `
      <p>CoalHealth AI aims to bridge the gap in remote healthcare access through intelligent diagnostics. Features include:</p>
      <ul>
        <li><strong>AI Symptom Checker:</strong> Users can describe their symptoms, and the AI provides potential insights (not a replacement for professional advice).</li>
        <li><strong>Live Chat Simulation:</strong> Simulated chat with AI health assistants for guidance and information.</li>
        <li><strong>Doctor Referral System:</strong> Suggests relevant medical professionals based on symptoms and location (future feature).</li>
        <li><strong>Secure Data Handling:</strong> Prioritizes user privacy with secure data storage and communication protocols.</li>
      </ul>
      <p>The robust backend is built with Python (FastAPI) for its performance in AI applications, connected to a MySQL database.</p>
    `
    },
    {
        id: 'replai',
        title: 'Replai',
        category: 'AI SaaS Builder',
        status: 'Under Development',
        description: 'An AI chatbot SaaS builder that enables clients to purchase pre-trained chatbots and integrate them into their platforms via API or embeddable code snippets.',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'Google Gemini API', 'Flutterwave', 'CSS'],
      thumbnail: '/projects/not_hosted.png', // Placeholder, create actual thumbnails
        liveLink: null,
        repoLink: '#',
        details: `
      <p>Replai empowers businesses to deploy AI chatbots without extensive development. Its core offerings are:</p>
      <ul>
        <li><strong>Pre-trained Chatbot Marketplace:</strong> A selection of chatbots trained for various industries and use-cases (e.g., customer service, lead generation).</li>
        <li><strong>Easy Integration:</strong> Simple API endpoints and embeddable scripts for seamless integration into existing websites and applications.</li>
        <li><strong>Customization Options:</strong> While pre-trained, clients will have options to fine-tune responses and branding.</li>
        <li><strong>Subscription Management:</strong> Built-in payment integration using Flutterwave for managing client subscriptions.</li>
      </ul>
    `
    },
    // Live sites
    {
        id: 'contentcraft-ai',
        title: 'Con10 AI',
        category: 'AI Creator Tools',
        status: 'Live',
        description: 'A suite of AI-powered tools for content creators, including caption generators, hashtag AI, and script generators to streamline content production.',
        technologies: ['React', 'Vite', 'Google Gemini API', 'CSS'],
        thumbnail: '/projects/con10-thumb.png',
        liveLink: 'https://con10-frontend.vercel.app/', 
        repoLink: '#',
        details: `
      <p>ContentCraft AI assists creators in overcoming writer's block and optimizing their content for engagement. Tools include:</p>
      <ul>
        <li><strong>AI Caption Generator:</strong> Creates engaging captions for social media posts.</li>
        <li><strong>Hashtag AI:</strong> Suggests relevant and trending hashtags to increase visibility.</li>
        <li><strong>Script Generator:</strong> Helps draft scripts for videos or podcasts.</li>
      </ul>
    `
    },
    {
        id: 'glowsale-glowharmony',
        title: 'Glowsale & Glowharmony',
        category: 'E-commerce',
        status: 'Live',
        description: 'An affiliate e-commerce store showcasing products in the beauty and wellness niche, integrated with affiliate marketing platforms.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Affiliate APIs'],
        thumbnail: '/projects/glowsale-thumb.png',
        liveLink: 'https://glowsale0.web.app/', 
        repoLink: '#',
        details: "<p>Glowsale and Glowharmony serve as a curated platform for affiliate products, focusing on a clean user experience and effective product presentation to drive conversions.</p>"
    },
    {
        id: 'yourpassword',
        title: 'YourPassword',
        category: 'Utility Tool',
        status: 'Live',
        description: 'A web-based utility for generating strong, random passwords and checking the strength of existing passwords against common vulnerabilities.',
        technologies: ['react', 'CSS', 'Vite'],
        thumbnail: '/projects/yourpassword-thumb.png',
        liveLink: 'https://yourpassword0.web.app/', // Replace
        repoLink: '#',
        details: "<p>A simple yet effective tool built with reactjs to help users enhance their online security by creating and evaluating passwords.</p>"
    },
    {
        id: 'statcalc',
        title: 'Statcalc',
        category: 'Utility Tool',
        status: 'Live',
        description: 'A mini statistics calculator built purely with HTML, CSS, and JavaScript for performing basic statistical calculations directly in the browser.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'chartjs'],
      thumbnail: '/projects/statcalc-thumb.png',
      liveLink: 'https://statcalc10.web.app/', // Replace
        repoLink: '#',
        details: "<p>Statcalc provides a quick and easy way for users to perform common statistical operations without needing complex software. It's lightweight and runs entirely client-side.</p>"
    },
    {
        id: 'fastemergency',
        title: 'FastEmergency',
        category: 'Public Service',
        status: 'Live',
        description: 'An emergency contact platform allowing users to submit and search for emergency contact information, aimed at providing quick access in critical situations.',
        technologies: ['React+vite', 'CSS', 'Nodejs', 'Mysql'], // Assuming local storage or a simple backend if live
      thumbnail: '/projects/fastemergency-thumb.png',
      liveLink: 'https://www.fastemergency.com.ng/', // Replace
        repoLink: '#',
        details: "<p>FastEmergency is designed to be a community-driven database for emergency contacts, helping users quickly find vital information when needed. It emphasizes ease of use and speed.</p>"
    },
    {
        id: 'itportfolio',
        title: 'IT Portfolio (Previous)',
        category: 'Portfolio',
        status: 'Live',
        description: 'A previous iteration of my personal portfolio site, showcasing earlier projects and skills.',
        technologies: ['React+vite', 'CSS', 'Firebase'], 
      thumbnail: '/projects/itportfolio-thumb.png',
      liveLink: 'https://itiriportfolio.web.app/', // Replace
        repoLink: '#',
        details: "<p>This site served as my primary online presence before the current rebuild, highlighting my journey and evolution as a developer.</p>"
    }
];