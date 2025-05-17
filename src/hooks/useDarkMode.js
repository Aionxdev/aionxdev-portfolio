// src/hooks/useDarkMode.js
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { LOCAL_STORAGE_THEME_KEY } from '../utils/constants'; // Assuming you have this constant

/**
 * A custom hook to manage dark mode.
 * It uses localStorage to persist the theme preference and applies a class to the body.
 * @returns {[string, Function]} The current theme ('light' or 'dark'), and a function to toggle it.
 */
function useDarkMode() {
    // Check for system preference first
    const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage(LOCAL_STORAGE_THEME_KEY, prefersDarkMode ? 'dark' : 'light');

    useEffect(() => {
        const body = window.document.body;
        body.classList.remove('light-mode', 'dark-mode'); // Clean up previous classes
        body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');

        // Optional: Update a meta theme-color for browser chrome styling
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            // You'll need to define these CSS variables in your theme.css or main.css
            // for light and dark mode respectively.
            const newColor = getComputedStyle(body).getPropertyValue(
                theme === 'dark' ? '--dm-background' : '--background-light' // Example variables
            ).trim();
            if (newColor) {
                metaThemeColor.setAttribute('content', newColor);
            }
        }

    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return [theme, toggleTheme];
}

export default useDarkMode;