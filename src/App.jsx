// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import QuickContact from './components/common/QuickContact'; // Floating contact button

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SkillsTechPage from './pages/SkillsTechPage';
import NotFoundPage from './pages/NotFoundPage';

// Hooks & Utils
import useDarkMode from './hooks/useDarkMode'; // To initialize dark mode based on preference
import { initAnalytics, trackPageView } from './utils/analytics'; // Analytics stubs

// Helper component for page tracking and scroll-to-top
const PageTracker = () => {
    const location = useLocation();
    useEffect(() => {
        // Track page view on route change
        trackPageView(location.pathname + location.search, document.title);
        // Scroll to top on new page, unless it's a hash link navigation on the same page
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return null; // This component doesn't render anything
};


function App() {
    // Initialize dark mode hook - this will apply theme class to body
    useDarkMode();

    // Initialize analytics (call once)
    useEffect(() => {
        initAnalytics();
    }, []);

    return (
        <Router>
            <PageTracker /> {/* Handles page view tracking and scroll to top */}
            <Header />
            <main className="site-main-content"> {/* Wrapper for main content area */}
                <Routes>
                    {/* Core Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/skills" element={<SkillsTechPage />} />

                    {/* Blog Pages */}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/search" element={<BlogPage />} /> {/* For search results, BlogPage handles query param */}
                    <Route path="/blog/category/:categoryName" element={<BlogPage />} /> {/* For category archives */}
                    <Route path="/blog/:slug" element={<BlogPostPage />} />

                    {/* Fallback 404 Page */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
            <QuickContact /> {/* Floating quick contact button */}
        </Router>
    );
}

export default App;