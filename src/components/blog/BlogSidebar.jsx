// src/components/blog/BlogSidebar.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../../data/blogPostsData'; // Your blog posts data
import { FaSearch, FaTag, FaClock } from 'react-icons/fa';
import '../../styles/components/blogSidebar.css'; // We'll create this

const BlogSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // In a real app with many posts, search would be backend or client-side with more advanced libraries.
    // This is a very basic client-side search example.
    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic or navigation to a search results page
        // For now, just log it. You'd likely navigate: navigate(`/blog/search?q=${searchTerm}`);
        console.log('Search term:', searchTerm);
    };

    const categories = useMemo(() => {
        const cats = new Set();
        blogPostsData.forEach(post => {
            if (post.tags) post.tags.forEach(tag => cats.add(tag));
        });
        return Array.from(cats).sort().slice(0, 10); // Show top 10 categories/tags
    }, []); // blogPostsData is constant

    const recentPosts = useMemo(() => {
        return [...blogPostsData]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5); // Show 5 most recent posts
    }, []); // blogPostsData is constant

    return (
        <div className="blog-sidebar">
            {/* Search Widget */}
            <div className="sidebar-widget search-widget">
                <h4 className="widget-title">Search</h4>
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button" aria-label="Search">
                        <FaSearch />
                    </button>
                </form>
            </div>

            {/* Categories/Tags Widget */}
            {categories.length > 0 && (
                <div className="sidebar-widget categories-widget">
                    <h4 className="widget-title"><FaTag /> Categories</h4>
                    <ul className="widget-list category-list">
                        {categories.map(category => (
                            <li key={category}>
                                {/* Link to a category page, e.g., /blog/category/my-category */}
                                <Link to={`/blog/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Recent Posts Widget */}
            {recentPosts.length > 0 && (
                <div className="sidebar-widget recent-posts-widget">
                    <h4 className="widget-title"><FaClock /> Recent Posts</h4>
                    <ul className="widget-list recent-posts-list">
                        {recentPosts.map(post => (
                            <li key={post.slug}>
                                <Link to={`/blog/${post.slug}`} className="recent-post-link">
                                    <span className="recent-post-title">{post.title}</span>
                                    <span className="recent-post-date">{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Optional: About Me Teaser Widget */}
            {/* Optional: Social Links Widget */}
        </div>
    );
};

export default BlogSidebar;