// src/pages/BlogPage.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // useParams for category filtering
import { blogPostsData } from '../data/blogPostsData';
import BlogPostCard from '../components/blog/BlogPostCard';
import BlogLayout from '../components/blog/BlogLayout'; // Includes sidebar
// import Pagination from '../components/common/Pagination'; // If you create a pagination component
import CallToActionSection from '../components/common/CallToActionSection';
import '../styles/blogPage.css';

const POSTS_PER_PAGE = 6; // Example value

const BlogPage = () => {
    const { categoryName } = useParams(); // For /blog/category/:categoryName route
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q'); // For /blog/search?q=searchTerm route

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let title = 'Blog | AIONXDEV Insights & Articles';
        if (categoryName) title = `Category: ${categoryName.replace(/-/g, ' ')} | AIONXDEV Blog`;
        if (searchQuery) title = `Search results for "${searchQuery}" | AIONXDEV Blog`;
        document.title = title;
        window.scrollTo(0, 0);
        setCurrentPage(1); // Reset to first page on filter/search change
    }, [categoryName, searchQuery]);

    const filteredPosts = useMemo(() => {
        let posts = blogPostsData;
        if (categoryName) {
            const formattedCategory = categoryName.replace(/-/g, ' ').toLowerCase();
            posts = posts.filter(post =>
                post.tags && post.tags.some(tag => tag.toLowerCase() === formattedCategory)
            );
        }
        if (searchQuery) {
            const lowerSearchQuery = searchQuery.toLowerCase();
            posts = posts.filter(post =>
                post.title.toLowerCase().includes(lowerSearchQuery) ||
                post.excerpt.toLowerCase().includes(lowerSearchQuery) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerSearchQuery)))
            );
        }
        return posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by newest first
    }, [categoryName, searchQuery]); // blogPostsData is constant

    // Pagination logic
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let pageTitle = "My Blog & Insights";
    let pageSubtitle = "Sharing my thoughts on AI, web development, biomedical engineering, and the tech world.";
    if (categoryName) {
        pageTitle = `Category: ${categoryName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
        pageSubtitle = `Posts tagged under "${categoryName.replace(/-/g, ' ')}".`;
    }
    if (searchQuery) {
        pageTitle = `Search Results for "${searchQuery}"`;
        pageSubtitle = `${filteredPosts.length} post(s) found.`;
    }


    return (
        <BlogLayout showSidebar={true}> {/* BlogLayout wraps the content */}
            <header className="blog-page-header">
                <h1 className="page-main-title">{pageTitle}</h1>
                <p className="page-subtitle">{pageSubtitle}</p>
            </header>

            {currentPosts.length > 0 ? (
                <div className="blog-posts-grid">
                    {currentPosts.map(post => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <div className="no-posts-found text-center">
                    <p>No posts found matching your criteria.</p>
                    {(categoryName || searchQuery) &&
                        <Button to="/blog" variant="outline">View All Posts</Button>
                    }
                </div>
            )}

            {totalPages > 1 && (
                // <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={paginate} />
                <div className="pagination-placeholder text-center" style={{ marginTop: 'var(--space-xl)' }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                            style={{ margin: '0 5px', padding: '8px 12px', cursor: 'pointer' }}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            )}
            {!categoryName && !searchQuery && ( /* Show CTA only on main blog page */
                <div style={{ marginTop: 'var(--space-xxl)' }}>
                    <CallToActionSection
                        title="Have an Idea for a Post?"
                        text="Or perhaps a topic you'd like me to cover? Feel free to reach out with your suggestions or collaboration inquiries."
                        buttonText="Suggest a Topic"
                        buttonLink="/contact?subject=Blog%20Suggestion"
                    />
                </div>
            )}
        </BlogLayout>
    );
};

export default BlogPage;