// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * A custom hook to manage state in localStorage.
 * It synchronizes state with localStorage and provides a way to update it.
 * @param {string} key - The key to use for localStorage.
 * @param {any} initialValue - The initial value if nothing is found in localStorage.
 * @returns {[any, Function]} A stateful value, and a function to update it.
 */
function useLocalStorage(key, initialValue) {
    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = () => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    };

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(readValue);

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`
            );
        }
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    // Listen to storage events to sync state across tabs/windows
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key && event.storageArea === window.localStorage) {
                try {
                    setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
                } catch (error) {
                    console.warn(`Error parsing localStorage change for key “${key}”:`, error);
                    setStoredValue(initialValue);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, initialValue]); // initialValue is for safety, key is the main dep

    return [storedValue, setValue];
}

export default useLocalStorage;