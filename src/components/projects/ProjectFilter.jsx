// src/components/projects/ProjectFilter.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { projectsData } from '../../data/projectsData'; // Assuming this is where all projects are
import '../../styles/components/projectFilter.css'; // We'll create this

const ProjectFilter = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTech, setSelectedTech] = useState('all');

    // Extract unique categories and technologies from projectsData
    const categories = useMemo(() => {
        const cats = new Set(['all']); // Start with 'all'
        projectsData.forEach(project => cats.add(project.category));
        return Array.from(cats);
    }, []); // projectsData is constant, so run once

    const technologies = useMemo(() => {
        const techs = new Set(['all']); // Start with 'all'
        projectsData.forEach(project => {
            if (project.technologies) {
                project.technologies.forEach(tech => techs.add(tech));
            }
        });
        return Array.from(techs).sort(); // Sort for consistent order
    }, []); // projectsData is constant, so run once

    useEffect(() => {
        onFilterChange({ category: selectedCategory, tech: selectedTech });
    }, [selectedCategory, selectedTech, onFilterChange]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleTechChange = (e) => {
        setSelectedTech(e.target.value);
    };

    return (
        <div className="project-filter-container">
            <div className="filter-group">
                <label htmlFor="category-filter" className="filter-label">Category:</label>
                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="filter-select"
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat === 'all' ? 'All Categories' : cat}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="tech-filter" className="filter-label">Technology:</label>
                <select
                    id="tech-filter"
                    value={selectedTech}
                    onChange={handleTechChange}
                    className="filter-select"
                >
                    {technologies.map(tech => (
                        <option key={tech} value={tech}>
                            {tech === 'all' ? 'All Technologies' : tech}
                        </option>
                    ))}
                </select>
            </div>
            {/*
        // Alternative: Button-based filters for better UX on few options
        <div className="filter-group">
            <span className="filter-label">Category:</span>
            <div className="filter-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat === 'all' ? 'All' : cat}
                    </button>
                ))}
            </div>
        </div>
       */}
        </div>
    );
};

export default ProjectFilter;