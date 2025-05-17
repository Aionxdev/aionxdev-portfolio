// src/pages/ProjectDetailPage.jsx
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectDetailLayout from '../components/projects/ProjectDetailLayout';
import NotFoundPage from './NotFoundPage'; // To show if project not found
import CallToActionSection from '../components/common/CallToActionSection';

// import '../../styles/projectDetailPage.css'; // Usually styles are in ProjectDetailLayout.css

const ProjectDetailPage = () => {
    const { projectId } = useParams(); // Get projectId from URL
    // Removed unused navigate variable

    const project = useMemo(() => {
        return projectsData.find(p => p.id === projectId);
    }, [projectId]); // projectsData is constant

    useEffect(() => {
        if (project) {
            document.title = `${project.title} | AIONXDEV Project`;
            window.scrollTo(0, 0); // Scroll to top on page load
        } else {
            document.title = 'Project Not Found | AIONXDEV';
        }
    }, [project]);

    if (!project) {
        // Option 1: Navigate to a 404 page
        // useEffect(() => { navigate('/404', { replace: true }); }, [navigate]);
        // return null;
        // Option 2: Render a NotFoundPage component directly
        return <NotFoundPage message="The project you are looking for could not be found." />;
    }

    return (
        <div className="project-detail-page">
            <ProjectDetailLayout project={project} />
            <CallToActionSection
                title="Impressed by this project?"
                text="Let's discuss how similar innovative solutions can be tailored for your needs. I'm ready to tackle your next challenge."
                buttonText="Start a Conversation"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ProjectDetailPage;