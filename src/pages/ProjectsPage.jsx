// // src/pages/ProjectsPage.jsx
// import React, { useState, useMemo, useEffect } from 'react';
// import { projectsData } from '../data/projectsData';
// import ProjectCard from '../components/projects/ProjectCard';
// import ProjectFilter from '../components/projects/ProjectFilter';
// import CallToActionSection from '../components/common/CallToActionSection';
// import '../styles/projectsPage.css';

// const ProjectsPage = () => {
//     useEffect(() => {
//         document.title = 'Projects | AIONXDEV Portfolio';
//     }, []);

//     const [filters, setFilters] = useState({ category: 'all', tech: 'all' });

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//     };

//     const filteredProjects = useMemo(() => {
//         return projectsData.filter(project => {
//             const categoryMatch = filters.category === 'all' || project.category === filters.category;
//             const techMatch = filters.tech === 'all' || (project.technologies && project.technologies.includes(filters.tech));
//             return categoryMatch && techMatch;
//         });
//     }, [filters]); // projectsData is constant

//     return (
//         <div className="projects-page section-padding">
//             <div className="container">
//                 <header className="projects-page-header text-center">
//                     <h1 className="page-main-title">My Projects</h1>
//                     <p className="page-subtitle">
//                         Explore a collection of my work, from live applications to ongoing developments.
//                         Use the filters to find projects by category or technology.
//                     </p>
//                 </header>

//                 <ProjectFilter onFilterChange={handleFilterChange} />

//                 {filteredProjects.length > 0 ? (
//                     <div className="projects-grid-full">
//                         {filteredProjects.map(project => (
//                             <ProjectCard key={project.id} project={project} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="no-projects-found text-center">
//                         <p>No projects match your current filter criteria.</p>
//                         <Button onClick={() => setFilters({ category: 'all', tech: 'all' })} variant="outline">
//                             Clear Filters
//                         </Button>
//                     </div>
//                 )}
//             </div>
//             <CallToActionSection
//                 title="Have a Project in Mind?"
//                 text="If you're inspired by what you see or have a unique challenge, let's talk about how I can help build your next digital solution."
//                 buttonText="Let's Collaborate"
//                 buttonLink="/contact"
//             />
//         </div>
//     );
// };

// export default ProjectsPage;

// src/pages/ProjectsPage.jsx
import React, { useState, useMemo, useEffect, useCallback } from 'react'; // Import useCallback
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import CallToActionSection from '../components/common/CallToActionSection';
import Button from '../components/common/Button'; // Added Button import
import '../styles/projectsPage.css';

const ProjectsPage = () => {
    useEffect(() => {
        document.title = 'Projects | AIONXDEV Portfolio';
        window.scrollTo(0, 0);
    }, []);

    const [filters, setFilters] = useState({ category: 'all', tech: 'all' });

    // Wrap handleFilterChange in useCallback
    // setFilters is guaranteed to be stable by React, so it doesn't need to be in the dependency array
    // but linters might complain if it's not. It's safe to include it.
    const handleFilterChange = useCallback((newFilters) => {
        setFilters(newFilters);
    }, [setFilters]); // Or just [] if your linter is okay with it.

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const categoryMatch = filters.category === 'all' || project.category === filters.category;
            const techMatch = filters.tech === 'all' || (project.technologies && project.technologies.includes(filters.tech));
            return categoryMatch && techMatch;
        });
    }, [filters]);

    return (
        <div className="projects-page section-padding">
            <div className="container">
                <header className="projects-page-header text-center">
                    <h1 className="page-main-title">My Projects</h1>
                    <p className="page-subtitle">
                        Explore a collection of my work, from live applications to ongoing developments.
                        Use the filters to find projects by category or technology.
                    </p>
                </header>

                <ProjectFilter onFilterChange={handleFilterChange} />

                {filteredProjects.length > 0 ? (
                    <div className="projects-grid-full">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="no-projects-found text-center">
                        <p>No projects match your current filter criteria.</p>
                        <Button onClick={() => setFilters({ category: 'all', tech: 'all' })} variant="outline">
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
            <CallToActionSection
                title="Have a Project in Mind?"
                text="If you're inspired by what you see or have a unique challenge, let's talk about how I can help build your next digital solution."
                buttonText="Let's Collaborate"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ProjectsPage;