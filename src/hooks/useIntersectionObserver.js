// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook to use the Intersection Observer API.
 * @param {object} options - Intersection Observer options (root, rootMargin, threshold).
 * @returns {[React.RefObject, boolean, IntersectionObserverEntry | null]}
 *          A ref to attach to the target element, a boolean indicating if it's intersecting,
 *          and the IntersectionObserverEntry object.
 */
function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [entry, setEntry] = useState(null);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([currentEntry]) => {
                setIsIntersecting(currentEntry.isIntersecting);
                setEntry(currentEntry);
            },
            {
                root: options.root || null,
                rootMargin: options.rootMargin || '0px',
                threshold: options.threshold || 0.1, // Trigger when 10% is visible by default
                ...options,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options.root, options.rootMargin, options.threshold]); // Re-create observer if options change

    return [elementRef, isIntersecting, entry];
}

export default useIntersectionObserver;