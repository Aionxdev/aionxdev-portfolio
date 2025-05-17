// src/components/contact/LocationMap.jsx
import React from 'react';
import '../../styles/components/locationMap.css'; // We'll create this CSS file

const LocationMap = ({
    embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126868.29328951554!2d7.430233394019531!3d6.441002532301205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3cf887d1a25%3A0x9e342e82908e0c3d!2sEnugu!5e0!3m2!1sen!2sng!4v1747468865713!5m2!1sen!2sng", // Example: Lagos, Nigeria - REPLACE THIS!
    title = "My General Location (Enugu, Nigeria)",
    staticImageSrc, // Optional: path to a static map image if not using iframe
    staticImageAlt = "Map showing my general location"
}) => {
    return (
        <div className="location-map-container">
            {title && <h4 className="location-map-title">{title}</h4>}
            {staticImageSrc ? (
                <img src={staticImageSrc} alt={staticImageAlt} className="static-map-image" />
            ) : (
                <div className="map-iframe-wrapper">
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="400" // Adjust height as needed
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            )}
            <p className="map-caption">
                While I work remotely and serve clients globally, I am based in Enugu, Nigeria.
            </p>
        </div>
    );
};

export default LocationMap;