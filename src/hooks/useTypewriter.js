// src/hooks/useTypewriter.js
import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * A custom hook to create a typewriter effect for an array of texts.
 * @param {string[]} texts - Array of strings to type.
 * @param {object} options - Configuration options.
 * @param {number} [options.typingSpeed=100] - Speed of typing in ms.
 * @param {number} [options.deletingSpeed=50] - Speed of deleting in ms.
 * @param {number} [options.pauseDuration=1500] - Pause duration after typing, before deleting.
 * @param {boolean} [options.loop=true] - Whether to loop through texts.
 * @returns {string} The currently displayed text.
 */
function useTypewriter(texts, {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
    loop = true
} = {}) {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const textsRef = useRef(texts); // To handle changes in texts prop

    useEffect(() => {
        textsRef.current = texts;
        // Reset if texts array changes significantly (e.g., content or length)
        setTextIndex(0);
        setDisplayedText('');
        setIsDeleting(false);
        setIsPaused(false);
    }, [texts]);

    const handleTyping = useCallback(() => {
        if (isPaused) return;

        const currentFullText = textsRef.current[textIndex % textsRef.current.length];

        if (isDeleting) {
            setDisplayedText((prev) => prev.substring(0, prev.length - 1));
            if (displayedText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => {
                    const nextIndex = prev + 1;
                    if (!loop && nextIndex >= textsRef.current.length) {
                        setIsPaused(true); // Stop if not looping and all texts are done
                        return prev;
                    }
                    return nextIndex;
                });
            }
        } else {
            setDisplayedText((prev) => currentFullText.substring(0, prev.length + 1));
            if (displayedText === currentFullText) {
                setIsPaused(true);
                setTimeout(() => {
                    setIsDeleting(true);
                    setIsPaused(false);
                }, pauseDuration);
            }
        }
    }, [textIndex, displayedText, isDeleting, isPaused, loop, pauseDuration, textsRef]);

    useEffect(() => {
        if (!textsRef.current || textsRef.current.length === 0 || isPaused && isDeleting && displayedText === '') return;

        const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(handleTyping, currentSpeed);

        return () => clearTimeout(timer);
    }, [handleTyping, displayedText, isDeleting, isPaused, typingSpeed, deletingSpeed]);

    return displayedText;
}

export default useTypewriter;