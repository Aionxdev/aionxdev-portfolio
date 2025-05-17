
// src/components/common/DarkModeToggle.jsx
import React from 'react';
import useDarkMode from '../../hooks/useDarkMode'; // Import the hook
import { FiSun, FiMoon } from 'react-icons/fi';
import '../../styles/components/darkModeToggle.css';

const DarkModeToggle = () => {
    const [theme, toggleTheme] = useDarkMode(); // Use the hook

    return (
        <button
            onClick={toggleTheme}
            className="dark-mode-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <FiSun className="toggle-icon" />
            ) : (
                <FiMoon className="toggle-icon" />
            )}
        </button>
    );
};
export default DarkModeToggle;