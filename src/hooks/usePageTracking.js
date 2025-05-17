// src/hooks/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics'; // Our analytics stub

/**
 * A custom hook that tracks page views when the route changes.
 * To be used within a component rendered by React Router.
 */
function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        // Track page view with the new path and current document title
        trackPageView(location.pathname + location.search, document.title);
    }, [location]); // Re-run effect when location changes

    // This hook doesn't return anything, it just performs an effect.
}

export default usePageTracking;