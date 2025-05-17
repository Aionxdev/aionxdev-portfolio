// src/pages/BlogPostPage.jsx
import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPostsData } from '../data/blogPostsData';
import BlogLayout from '../components/blog/BlogLayout'; // Includes sidebar
import NotFoundPage from './NotFoundPage';
import { formatDate } from '../utils/helpers';
import { FaCalendarAlt, FaUserEdit, FaTags, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa'; // Example icons
import '../styles/blogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams(); // Get slug from URL
    const navigate = useNavigate();

    const post = useMemo(() => {
        return blogPostsData.find(p => p.slug === slug);
    }, [slug]); // blogPostsData is constant

    useEffect(() => {
        if (post) {
            document.title = `${post.title} | AIONXDEV Blog`;
            window.scrollTo(0, 0); // Scroll to top on page load
        } else {
            document.title = 'Post Not Found | AIONXDEV Blog';
        }
    }, [post]);

    if (!post) {
        return <NotFoundPage message="The blog post you are looking for could not be found." />;
    }

    const { title, date, author, tags, content, thumbnail } = post;
    const currentUrl = window.location.href;

    // Basic share functions
    const shareOnFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`, '_blank');
    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`, '_blank');
    const copyLink = () => navigator.clipboard.writeText(currentUrl).then(() => alert('Link copied to clipboard!'), () => alert('Failed to copy link.'));


    return (
        <BlogLayout showSidebar={true}> {/* Or showSidebar={false} for a focused reading experience */}
            <article className="blog-post-full">
                <header className="blog-post-header">
                    <Button onClick={() => navigate('/blog')} variant="ghost" className="back-to-blog-button" iconLeft={<FaArrowLeft />}>
                        Back to Blog
                    </Button>
                    <h1 className="blog-post-title-full">{title}</h1>
                    <div className="blog-post-meta-full">
                        {date && (
                            <span className="meta-item date">
                                <FaCalendarAlt /> Published on {formatDate(date, { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        )}
                        {author && (
                            <span className="meta-item author">
                                <FaUserEdit /> By {author}
                            </span>
                        )}
                    </div>
                    {thumbnail && (
                        <img src={thumbnail} alt={`${title} - Featured Image`} className="blog-post-featured-image" />
                    )}
                </header>

                <div className="blog-post-content-full" dangerouslySetInnerHTML={{ __html: content }} />

                {tags && tags.length > 0 && (
                    <footer className="blog-post-footer">
                        <div className="blog-post-tags-full">
                            <FaTags className="tags-icon-full" />
                            {tags.map(tag => (
                                <Link key={tag} to={`/blog/category/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`} className="tag-link">
                                    {tag}
                                </Link>
                            ))}
                        </div>

                        <div className="blog-post-share">
                            <span>Share this post:</span>
                            <button onClick={shareOnFacebook} aria-label="Share on Facebook" className="share-button facebook"><FaFacebook /></button>
                            <button onClick={shareOnTwitter} aria-label="Share on Twitter" className="share-button twitter"><FaTwitter /></button>
                            <button onClick={shareOnLinkedIn} aria-label="Share on LinkedIn" className="share-button linkedin"><FaLinkedin /></button>
                            <button onClick={copyLink} aria-label="Copy link" className="share-button copy-link"><FaLink /></button>
                        </div>
                    </footer>
                )}
                {/* Optional: Related Posts Section */}
                {/* Optional: Comments Section (would require a third-party service like Disqus, Commento) */}
            </article>
        </BlogLayout>
    );
};

export default BlogPostPage;