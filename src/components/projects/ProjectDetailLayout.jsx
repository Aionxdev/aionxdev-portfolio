// src/components/projects/ProjectDetailLayout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaTags, FaCalendarAlt, FaTools } from 'react-icons/fa'; // Example icons
import '../../styles/components/projectDetailLayout.css'; // We'll create this

// Simplified TechIcon - can be reused or made more complex
const TechPill = ({ tech }) => <span className="tech-pill">{tech}</span>;

const ProjectDetailLayout = ({ project }) => {
    const navigate = useNavigate();

    if (!project) {
        return (
            <div className="container section-padding text-center">
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist or could not be loaded.</p>
                <Button onClick={() => navigate('/projects')} iconLeft={<FaArrowLeft />}>
                    Back to Projects
                </Button>
            </div>
        );
    }

    const {
        title,
        category,
        status,
        description, // Main description
        details, // More detailed HTML content
        technologies,
        thumbnail,
        liveLink,
        repoLink,
        // Assume you might add `startDate`, `endDate` to your projectData
        // startDate,
        // endDate,
        // client, (if applicable)
        // role, (your role in the project)
        galleryImages // array of image paths for a gallery
    } = project;

    return (
        <article className="project-detail-layout section-padding">
            <div className="container">
                <div className="project-detail-header">
                    <Button onClick={() => navigate(-1)} variant="ghost" className="back-button" iconLeft={<FaArrowLeft />}>
                        Back
                    </Button>
                    <h1 className="project-detail-title">{title}</h1>
                    <p className="project-detail-category-status">
                        <span className="category"><FaTags /> {category}</span>
                        {status && <span className={`status status-${status.toLowerCase().replace(/\s+/g, '-')}`}><FaCalendarAlt /> {status}</span>}
                    </p>
                </div>

                <div className="project-detail-main-content">
                    <div className="project-detail-media">
                        {/* Main Thumbnail */}
                        <img
                            src={thumbnail || '/projects/default-thumb.png'}
                            alt={`${title} main visual`}
                            className="project-detail-main-image"
                        />
                        {/* Optional Image Gallery */}
                        {galleryImages && galleryImages.length > 0 && (
                            <div className="project-detail-gallery">
                                {galleryImages.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`${title} gallery image ${index + 1}`} className="gallery-image" />
                                ))}
                            </div>
                        )}
                    </div>

                    <aside className="project-detail-sidebar">
                        <div className="sidebar-section project-links">
                            <h4>Quick Links</h4>
                            {liveLink && (
                                <Button href={liveLink} target="_blank" rel="noopener noreferrer" variant="primary" iconLeft={<FaExternalLinkAlt />} className="full-width-btn">
                                    Live Demo
                                </Button>
                            )}
                            {repoLink && (
                                <Button href={repoLink} target="_blank" rel="noopener noreferrer" variant="secondary" iconLeft={<FaGithub />} className="full-width-btn">
                                    View Repository
                                </Button>
                            )}
                            {!liveLink && !repoLink && (
                                <p className="no-links-msg">Details available upon request.</p>
                            )}
                        </div>

                        {technologies && technologies.length > 0 && (
                            <div className="sidebar-section tech-stack-info">
                                <h4><FaTools /> Technology Stack</h4>
                                <div className="tech-pills-container">
                                    {technologies.map(tech => <TechPill key={tech} tech={tech} />)}
                                </div>
                            </div>
                        )}
                        {/* Add more sidebar sections like Client, Role, Dates if applicable */}
                        {/*
            {client && <div className="sidebar-section"><p><strong>Client:</strong> {client}</p></div>}
            {role && <div className="sidebar-section"><p><strong>My Role:</strong> {role}</p></div>}
            */}
                    </aside>

                    <div className="project-detail-description-content">
                        <h2>About This Project</h2>
                        <p className="project-long-description">{description}</p>
                        {details && (
                            <div className="project-full-details" dangerouslySetInnerHTML={{ __html: details }} />
                        )}
                    </div>

                </div>
            </div>
        </article>
    );
};

export default ProjectDetailLayout;