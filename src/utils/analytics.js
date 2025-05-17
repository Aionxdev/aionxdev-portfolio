// src/utils/analytics.js

// This is a placeholder for an analytics service.
// In a real application, you would initialize your analytics library here.
// For example, with Google Analytics (gtag.js):

/**
 * Initializes the analytics service.
 * Call this once when your application loads, e.g., in App.jsx or main.jsx.
 */
export const initAnalytics = () => {
    // Example for Google Analytics (replace GA_MEASUREMENT_ID)
    // const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
    // const script = document.createElement('script');
    // script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    // script.async = true;
    // document.head.appendChild(script);

    // script.onload = () => {
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', GA_MEASUREMENT_ID);
    //   console.log('Analytics initialized.');
    // };

    console.log('Analytics service initialized (stub).');
};

/**
 * Tracks a page view.
 * Call this when a route changes.
 * @param {string} path - The path of the page being viewed (e.g., window.location.pathname).
 * @param {string} [title] - Optional title of the page.
 */
export const trackPageView = (path, title = document.title) => {
    // Example for Google Analytics
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', 'page_view', {
    //     page_path: path,
    //     page_title: title,
    //     // page_location: window.location.href // Optional
    //   });
    // }
    console.log(`Analytics: Page view tracked - Path: ${path}, Title: ${title} (stub)`);
};

/**
 * Tracks a custom event.
 * @param {string} category - The category of the event (e.g., 'User Interaction').
 * @param {string} action - The action performed (e.g., 'Button Click').
 * @param {string} [label] - Optional label for the event (e.g., 'Contact Form Submit').
 * @param {number} [value] - Optional numeric value associated with the event.
 */
export const trackEvent = (category, action, label, value) => {
    // Example for Google Analytics
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', action, {
    //     event_category: category,
    //     event_label: label,
    //     value: value,
    //   });
    // }
    console.log(`Analytics: Event tracked - Category: ${category}, Action: ${action}, Label: ${label}, Value: ${value} (stub)`);
};

// You might also want a hook for easily tracking page views in React Router
// e.g., usePageTracking.js in src/hooks/