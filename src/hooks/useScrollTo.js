// src/hooks/useScrollTo.js
import { useCallback } from 'react';

/**
 * Provides a function to smoothly scroll to an element by its ID.
 * @returns {Function} A function `(elementId, options) => void`.
 */
function useScrollTo() {
    const scrollTo = useCallback((elementId, options = { behavior: 'smooth', block: 'start' }) => {
        const element = document.getElementById(elementId);
        if (element) {
            try {
                element.scrollIntoView(options);
            } catch (error) {
                console.error(`Error scrolling to element "${elementId}":`, error);
                // Fallback for older browsers or if options are not supported
                element.scrollIntoView(options.behavior === 'smooth' ? true : undefined);
            }
        } else {
            console.warn(`Element with ID "${elementId}" not found for scrolling.`);
        }
    }, []);

    return scrollTo;
}

export default useScrollTo;