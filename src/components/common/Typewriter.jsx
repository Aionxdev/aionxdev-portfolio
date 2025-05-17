// src/components/common/Typewriter.jsx
import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/components/typewriter.css'; // Create this file or add to main.css

const Typewriter = ({
    texts, // Array of strings to type
    typingSpeed = 100, // Milliseconds per character
    deletingSpeed = 50,
    pauseDuration = 1500, // Pause after typing, before deleting
    loop = true,
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const handleTyping = useCallback(() => {
        const fullText = texts[currentIndex % texts.length];

        if (isDeleting) {
            setCurrentText((prev) => prev.substring(0, prev.length - 1));
        } else {
            setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        }

        if (!isDeleting && currentText === fullText) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => prev + 1);
            if (!loop && currentIndex >= texts.length - 1) {
                // Stop if not looping and all texts are typed
                return;
            }
        }
    }, [currentIndex, currentText, isDeleting, texts, loop, pauseDuration]);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [handleTyping, currentText, isDeleting, typingSpeed, deletingSpeed, texts]);

    // Reset if texts array changes
    useEffect(() => {
        setCurrentIndex(0);
        setCurrentText('');
        setIsDeleting(false);
    }, [texts]);


    return (
        <span className={`typewriter-text ${className}`}>
            {currentText}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default Typewriter;