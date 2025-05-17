// src/components/blog/BlogLayout.jsx
import React from 'react';
import BlogSidebar from './BlogSidebar'; // We'll create this
import '../../styles/components/blogLayout.css'; // We'll create this

const BlogLayout = ({ children, showSidebar = true }) => {
    return (
        <div className="blog-layout container section-padding">
            <div className={`blog-layout-grid ${showSidebar ? 'with-sidebar' : 'no-sidebar'}`}>
                <main className="blog-main-content">
                    {children}
                </main>
                {showSidebar && (
                    <aside className="blog-sidebar-container">
                        <BlogSidebar />
                    </aside>
                )}
            </div>
        </div>
    );
};

export default BlogLayout;