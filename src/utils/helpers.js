// src/utils/helpers.js

/**
 * Formats a date string or Date object into a more readable format.
 * @param {string | Date} dateInput - The date to format.
 * @param {object} options - Intl.DateTimeFormat options.
 * @returns {string} Formatted date string.
 */
export const formatDate = (dateInput, options = { year: 'numeric', month: 'long', day: 'numeric' }) => {
    if (!dateInput) return '';
    try {
        const date = new Date(dateInput);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (error) {
        console.error("Error formatting date:", error);
        return String(dateInput); // Return original if formatting fails
    }
};

/**
 * Generates a slug from a string (e.g., for URLs or IDs).
 * @param {string} text - The text to slugify.
 * @returns {string} A URL-friendly slug.
 */
export const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

/**
 * Debounces a function, delaying its execution until after a certain wait time
 * has elapsed since the last time it was invoked.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The wait time in milliseconds.
 * @param {boolean} immediate - If true, trigger the function on the leading edge instead of the trailing.
 * @returns {Function} The debounced function.
 */
export const debounce = (func, wait, immediate = false) => {
    let timeout;
    return function executedFunction(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/**
 * Throttles a function, ensuring it's called at most once in a specified time period.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The throttle time in milliseconds.
 * @returns {Function} The throttled function.
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Smoothly scrolls to a specific element on the page.
 * @param {string} elementId - The ID of the element to scroll to.
 * @param {object} options - ScrollIntoViewOptions (e.g., { behavior: 'smooth', block: 'start' }).
 */
export const scrollToElement = (elementId, options = { behavior: 'smooth', block: 'start' }) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView(options);
    } else {
        console.warn(`Element with ID "${elementId}" not found for scrolling.`);
    }
};

/**
 * A simple function to get a value from localStorage.
 * @param {string} key - The key to retrieve.
 * @param {any} defaultValue - The default value if the key is not found or an error occurs.
 * @returns {any} The parsed value from localStorage or the default value.
 */
export const getFromLocalStorage = (key, defaultValue = null) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
        return defaultValue;
    }
};

/**
 * A simple function to set a value in localStorage.
 * @param {string} key - The key to set.
 * @param {any} value - The value to store (will be stringified).
 */
export const setToLocalStorage = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
    }
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncates a string to a specified length and appends an ellipsis.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} The truncated string with an ellipsis.
 */
export const truncateText = (str, maxLength) => {
    if (!str || str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
};