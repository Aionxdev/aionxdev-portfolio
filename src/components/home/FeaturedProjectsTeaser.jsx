// src/components/home/FeaturedProjectsTeaser.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData'; // Import your projects data
import Button from '../common/Button';
import ProjectCard from '../projects/ProjectCard'; // Assuming ProjectCard is in src/components/projects/
import { FaArrowRight } from 'react-icons/fa';
import '../../styles/components/featuredProjectsTeaser.css';

const FeaturedProjectsTeaser = () => {
    // Select a few projects to feature, e.g., the first 3-4 or specific ones by ID
    const featuredProjects = projectsData.filter(p => p.status === 'Live' || p.id === 'textiq' || p.id === 'coalhealth-ai').slice(0, 3);
    // Or, add a `featured: true` property to your projectsData objects.
    // const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);


    if (!featuredProjects || featuredProjects.length === 0) {
        return null; // Don't render if no projects to feature
    }

    return (
        <section className="featured-projects-section section-padding" id="featured-projects-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A glimpse into some of the innovative solutions I've built or am currently developing.
                    </p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="view-all-projects-cta text-center">
                    <Button to="/projects" variant="primary" size="large" iconRight={<FaArrowRight />}>
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectsTeaser;