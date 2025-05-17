// src/components/about/BioSection.jsx
import React from 'react';
import profilePicture from '../../../public/profile-picture.jpg'; // Path to your profile picture in public folder
// Or if in src/assets: import profilePicture from '../../assets/your-profile-picture.jpg';
import '../../styles/components/bioSection.css'; // We'll create this CSS file

// Your "About Me" content from earlier.
// It's better to store this in a data file (e.g., src/data/aboutData.js) for easier management,
// but for simplicity here, I'll embed it.

const aboutMeContent = {
    greeting: "Hey, I’m AionX, but online I go by AIONXDEV",
    title: "Full-Stack Developer, AI Integrator & Biomedical Engineer",
    intro: "Building digital systems that actually solve problems.",
    mainParagraph: `My work sits at the intersection of <strong>code</strong>, <strong>health</strong>, and <strong>automation</strong>. I don’t just write code for the sake of aesthetics or buzzwords. I build <strong>tools that work</strong> — products that are clean, scalable, and smart, whether that’s in healthcare, AI-powered SaaS, or web automation.`,
    whatIDoHeader: "What I Do",
    whatIDo: `
    I design and develop <strong>end-to-end web applications</strong>, with:
    <ul>
      <li>🔹 <strong>Frontend</strong>: React + Vite (modular, fast, responsive)</li>
      <li>🔹 <strong>Backend</strong>: Node.js (Express), Python (FastAPI)</li>
      <li>🔹 <strong>Database</strong>: MySQL & local storage (depends on the project)</li>
      <li>🔹 <strong>Authentication</strong>: OAuth, JWT, secure session-based flows</li>
      <li>🔹 <strong>Styling</strong>: Raw CSS (clean, scoped, responsive)</li>
      <li>🔹 <strong>Payments</strong>: Flutterwave (live/test), previously Paystack</li>
      <li>🔹 <strong>APIs</strong>: I build and consume REST APIs with precision</li>
      <li>🔹 <strong>AI</strong>: Google Gemini API, fine-tuned for text, automation, and chatbot logic</li>
    </ul>
    I’m obsessed with <strong>efficient code pipelines</strong>, <strong>AI-powered automation</strong>, and <strong>real-world utility</strong>. You’ll usually find me building platforms that automate customer service, enhance remote diagnostics, or make content creation smarter with AI.
  `,
    whatIBelieveHeader: "What I Believe",
    whatIBelieve: `
    I’m part developer, part product architect. I think beyond “just getting it to work.” I ask questions like:
    <ul>
      <li><em>Will it scale?</em></li>
      <li><em>Will users understand it intuitively?</em></li>
      <li><em>Can this be automated, streamlined, or monetized better?</em></li>
    </ul>
    I don’t chase trends. I build what makes sense — <strong>systems that work, UI that feels good, logic that scales</strong>, and <strong>tech that sells</strong>.
  `
};


const BioSection = () => {
    return (
        <section className="bio-section container section-padding">
            <div className="bio-content-wrapper">
                <div className="bio-image-container">
                    <img
                        src={profilePicture} // Use the imported path
                        alt="AIONXDEV - AionX"
                        className="bio-profile-picture"
                    />
                </div>
                <div className="bio-text-content">
                    <h1 className="bio-greeting">{aboutMeContent.greeting}</h1>
                    <p className="bio-title">
                        {aboutMeContent.title} – <span className="bio-tagline">{aboutMeContent.intro}</span>
                    </p>
                    <div className="bio-main-text" dangerouslySetInnerHTML={{ __html: aboutMeContent.mainParagraph }} />

                    <h2 className="bio-subheader">{aboutMeContent.whatIDoHeader}</h2>
                    <div className="bio-details" dangerouslySetInnerHTML={{ __html: aboutMeContent.whatIDo }} />

                    <h2 className="bio-subheader">{aboutMeContent.whatIBelieveHeader}</h2>
                    <div className="bio-details" dangerouslySetInnerHTML={{ __html: aboutMeContent.whatIBelieve }} />
                </div>
            </div>
        </section>
    );
};

export default BioSection;