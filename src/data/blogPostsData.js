// src/data/blogPostsData.js

export const blogPostsData = [
    {
        id: 1,
        slug: 'getting-started-with-gemini-api',
        title: 'Getting Started with the Google Gemini API for Custom AI Solutions',
        date: '2024-03-15',
        author: 'AIONXDEV',
        tags: ['AI', 'Google Gemini', 'API', 'Development'],
        excerpt: 'A beginner-friendly guide to leveraging the power of Google\'s Gemini API for building next-generation AI applications, from setup to your first successful call.',
        thumbnail: '/blogs/gemini-api-thumb.jpg', // Path relative to public folder
        content: `
      <p>The Google Gemini API has opened up incredible possibilities for developers. In this post, we'll walk through...</p>
      <h2>Setting Up Your Environment</h2>
      <p>...</p>
      <h2>Making Your First API Call</h2>
      <p>...</p>
      <p><em>(Full content would go here, potentially as Markdown or HTML string)</em></p>
    `
    },
    {
        id: 2,
        slug: 'building-scalable-backends-nodejs-fastapi',
        title: 'Building Scalable Backends: Node.js (Express) vs Python (FastAPI)',
        date: '2024-02-28',
        author: 'AIONXDEV',
        tags: ['Backend', 'Node.js', 'Python', 'FastAPI', 'Express', 'Scalability'],
        excerpt: 'An in-depth comparison of Node.js with Express and Python with FastAPI for developing scalable and performant backend systems, discussing pros, cons, and use-cases.',
      thumbnail: '/blogs/backend-comparison-thumb.jpg',
        content: `
      <p>Choosing the right backend technology is crucial. Let's compare two popular choices...</p>
      <h2>Performance Benchmarks</h2>
      <p>...</p>
      <h2>Developer Experience</h2>
      <p>...</p>
      <p><em>(Full content would go here)</em></p>
    `
    },
    {
        id: 3,
        slug: 'ai-in-remote-diagnostics',
        title: 'The Future of Healthcare: AI in Remote Diagnostics',
        date: '2024-01-20',
        author: 'AIONXDEV',
        tags: ['AI', 'HealthTech', 'Biomedical Engineering', 'Remote Health'],
        excerpt: 'Exploring the transformative potential of Artificial Intelligence in remote medical diagnostics, ethical considerations, and the impact on patient care.',
      thumbnail: '/blogs/ai-health-thumb.jpg',
        content: `
      <p>Remote diagnostics are no longer science fiction, thanks to AI...</p>
      <h2>Current Applications</h2>
      <p>...</p>
      <h2>Challenges and Ethical Considerations</h2>
      <p>...</p>
      <p><em>(Full content would go here)</em></p>
    `
    }
];