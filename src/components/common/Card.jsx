// src/components/common/Card.jsx
import React from 'react';
import '../../styles/components/card.css'; // Create this file or add to main.css

const Card = ({ children, className = '', shadow = 'medium', hoverEffect = false, ...props }) => {
    const baseClassName = 'card';
    const shadowClassName = `card-shadow-${shadow}`;
    const hoverClassName = hoverEffect ? 'card-hover-effect' : '';

    const combinedClassName = `${baseClassName} ${shadowClassName} ${hoverClassName} ${className}`.trim();

    return (
        <div className={combinedClassName} {...props}>
            {children}
        </div>
    );
};

export default Card;