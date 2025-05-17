// src/components/services/PricingPlan.jsx
import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaCheckCircle, FaTimesCircle, FaStar } from 'react-icons/fa'; // Example icons
import '../../styles/components/pricingPlan.css'; // We'll create this CSS file

const PricingPlan = ({ plan }) => {
    if (!plan) return null;

    const {
        name,
        price,
        billingCycle = '/ project', // or '/ month', '/ hour'
        description,
        features, // Array of strings or objects { text: string, included: boolean }
        ctaText = 'Get Started',
        ctaLink = '/contact', // Default link, can be customized
        isFeatured = false, // To highlight a specific plan
        icon // Optional icon for the plan itself
    } = plan;

    return (
        <Card className={`pricing-plan-card ${isFeatured ? 'featured' : ''}`} shadow="medium">
            {isFeatured && (
                <div className="featured-badge">
                    <FaStar /> Best Value
                </div>
            )}
            <div className="pricing-plan-header">
                {icon && <div className="pricing-plan-icon">{icon}</div>}
                <h3 className="pricing-plan-name">{name}</h3>
                <p className="pricing-plan-price">
                    {price}
                    <span className="billing-cycle">{billingCycle}</span>
                </p>
                {description && <p className="pricing-plan-description">{description}</p>}
            </div>
            <ul className="pricing-plan-features">
                {features.map((feature, index) => (
                    <li key={index} className={`feature-item ${typeof feature === 'object' && !feature.included ? 'excluded' : ''}`}>
                        {typeof feature === 'object' ? (
                            feature.included ? <FaCheckCircle className="feature-icon included" /> : <FaTimesCircle className="feature-icon excluded" />
                        ) : (
                            <FaCheckCircle className="feature-icon included" /> /* Default to included if just a string */
                        )}
                        <span>{typeof feature === 'object' ? feature.text : feature}</span>
                    </li>
                ))}
            </ul>
            <div className="pricing-plan-cta">
                <Button to={`${ctaLink}?plan=${encodeURIComponent(name)}`} variant={isFeatured ? 'primary' : 'outline'} size="large" className="full-width-btn">
                    {ctaText}
                </Button>
            </div>
        </Card>
    );
};

export default PricingPlan;