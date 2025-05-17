// src/components/projects/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card'; // Assuming Card component is in common
import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt, FaFlask } from 'react-icons/fa'; // Example icons
import '../../styles/components/projectCard.css'; // We'll create this

// Helper to get tech icons (simplified)
const TechIcon = ({ techName }) => {
    // In a real app, you might have a mapping to actual icon components or SVGs
    // For now, just display the name or a generic icon.
    // You could import specific logos from src/assets/logos/
    // import reactLogo from '../../assets/logos/react-logo.svg';
    // const logoMap = { 'React': reactLogo, ... };
    // return <img src={logoMap[techName]} alt={techName} className="tech-icon-img" />;
    return <span className="tech-icon-badge">{techName}</span>;
};

const ProjectCard = ({ project }) => {
    if (!project) return null;

    const {
        id,
        title,
        category,
        status,
        description,
        technologies,
        thumbnail, // Path to image in public/projects/ or imported from src/assets/
        liveLink,
        repoLink
    } = project;

    return (
        <Card className="project-card" shadow="medium" hoverEffect={true}>
            <Link to={`/projects/${id}`} className="project-card-clickable-area">
                <div className="project-card-thumbnail-container">
                    <img
                        src={thumbnail || '/projects/default-thumb.png'} // Fallback to a default thumbnail
                        alt={`${title} thumbnail`}
                        className="project-card-thumbnail"
                        loading="lazy" // Lazy load images
                    />
                    {status && status !== 'Live' && (
                        <span className={`project-status-badge status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {status === 'Under Development' ? <FaFlask /> : null} {status}
                        </span>
                    )}
                </div>
                <div className="project-card-content">
                    <p className="project-card-category">{category}</p>
                    <h3 className="project-card-title">{title}</h3>
                    <p className="project-card-description">
                        {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                    </p>
                    {technologies && technologies.length > 0 && (
                        <div className="project-card-tech-stack">
                            {technologies.slice(0, 4).map((tech) => ( // Show first 4 techs
                                <TechIcon key={tech} techName={tech} />
                            ))}
                            {technologies.length > 4 && <span className="tech-icon-badge more">+{technologies.length - 4}</span>}
                        </div>
                    )}
                </div>
            </Link>
            <div className="project-card-actions">
                {liveLink && (
                    <Button href={liveLink} target="_blank" rel="noopener noreferrer" variant="primary" size="small" iconLeft={<FaExternalLinkAlt />}>
                        Live Demo
                    </Button>
                )}
                {repoLink && (
                    <Button href={repoLink} target="_blank" rel="noopener noreferrer" variant="secondary" size="small" iconLeft={<FaGithub />}>
                        View Code
                    </Button>
                )}
                {!liveLink && !repoLink && (
                    <Button to={`/projects/${id}`} variant="outline" size="small">
                        View Details
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default ProjectCard;