// src/components/common/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/button.css'; // Create this file or add to main.css

const Button = ({
    children,
    onClick,
    type = 'button', // 'button', 'submit', 'reset'
    variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
    size = 'medium', // 'small', 'medium', 'large'
    to, // If 'to' is provided, it renders as a Link
    href, // If 'href' is provided, it renders as an anchor tag
    className = '',
    disabled = false,
    iconLeft, // ReactNode for icon on the left
    iconRight, // ReactNode for icon on the right
    ...props
}) => {
    const baseClassName = 'btn';
    const variantClassName = `btn-${variant}`;
    const sizeClassName = `btn-${size}`;

    const combinedClassName = `${baseClassName} ${variantClassName} ${sizeClassName} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={combinedClassName} onClick={onClick} {...props}>
                {iconLeft && <span className="btn-icon btn-icon-left">{iconLeft}</span>}
                {children}
                {iconRight && <span className="btn-icon btn-icon-right">{iconRight}</span>}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClassName} onClick={onClick} target="_blank" rel="noopener noreferrer" {...props}>
                {iconLeft && <span className="btn-icon btn-icon-left">{iconLeft}</span>}
                {children}
                {iconRight && <span className="btn-icon btn-icon-right">{iconRight}</span>}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {iconLeft && <span className="btn-icon btn-icon-left">{iconLeft}</span>}
            {children}
            {iconRight && <span className="btn-icon btn-icon-right">{iconRight}</span>}
        </button>
    );
};

export default Button;