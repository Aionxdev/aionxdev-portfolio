// src/components/blog/BlogPostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card'; // Reusable Card component
import { formatDate } from '../../utils/helpers'; // Date formatting utility
import { FaCalendarAlt, FaUserEdit, FaTags, FaArrowRight } from 'react-icons/fa'; // Example icons
import '../../styles/components/blogPostCard.css'; // We'll create this CSS file

const BlogPostCard = ({ post }) => {
    if (!post) return null;

    const {
        slug, // Unique identifier for the blog post URL
        title,
        date,
        author,
        tags, // Array of strings
        excerpt,
        thumbnail // Path to image in public/blog/ or imported from src/assets/blog/
    } = post;

    return (
        <Card className="blog-post-card" shadow="medium" hoverEffect={true}>
            <Link to={`/blog/${slug}`} className="blog-post-card-clickable-area">
                {thumbnail && (
                    <div className="blog-post-card-thumbnail-container">
                        <img
                            src={thumbnail || '/blog/default-blog-thumb.png'} // Fallback
                            alt={`${title} thumbnail`}
                            className="blog-post-card-thumbnail"
                            loading="lazy"
                        />
                    </div>
                )}
                <div className="blog-post-card-content">
                    <div className="blog-post-card-meta">
                        {date && (
                            <span className="meta-item date">
                                <FaCalendarAlt /> {formatDate(date, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                        )}
                        {author && (
                            <span className="meta-item author">
                                <FaUserEdit /> {author}
                            </span>
                        )}
                    </div>
                    <h3 className="blog-post-card-title">{title}</h3>
                    {excerpt && <p className="blog-post-card-excerpt">{excerpt}</p>}
                    {tags && tags.length > 0 && (
                        <div className="blog-post-card-tags">
                            <FaTags className="tags-icon" />
                            {tags.slice(0, 3).map(tag => ( // Show first 3 tags
                                <span key={tag} className="tag-badge">{tag}</span>
                            ))}
                            {tags.length > 3 && <span className="tag-badge more">+{tags.length - 3} more</span>}
                        </div>
                    )}
                </div>
            </Link>
            <div className="blog-post-card-action">
                <Link to={`/blog/${slug}`} className="read-more-link">
                    Read More <FaArrowRight />
                </Link>
            </div>
        </Card>
    );
};

export default BlogPostCard;