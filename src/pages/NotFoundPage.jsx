// src/pages/NotFoundPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'; // Example icons
import notfoundIllustration from '../assets/illustrations/notfound-illustration.svg';
import '../styles/notFoundPage.css';

const NotFoundPage = ({ message = "Oops! The page you're looking for doesn't exist." }) => {
    useEffect(() => {
        document.title = '404 - Page Not Found | AIONXDEV';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="not-found-page section-padding">
            <div className="container text-center">
                <div className="not-found-icon">
                    {/* <FaExclamationTriangle /> */}
                    <img src={notfoundIllustration} alt="Page not found illustration" />
                </div>
                <h1 className="not-found-title">404 - Not Found</h1>
                <p className="not-found-message">{message}</p>
                <p className="not-found-suggestion">
                    You can try returning to the homepage or exploring other sections of the site.
                </p>
                <div className="not-found-actions">
                    <Button to="/" variant="primary" size="large" iconLeft={<FaHome />}>
                        Go to Homepage
                    </Button>
                    {/* Optional: A "Report Issue" button or contact link */}
                    
          <Button to="/contact?subject=Page%20Not%20Found%20Report" variant="outline" size="large">
            Report Issue
          </Button>
         
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;