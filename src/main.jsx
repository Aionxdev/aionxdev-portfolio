// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Global CSS Files - Order can matter
import './styles/main.css';   // Base styles, variables, resets (light theme defaults)
import './styles/theme.css'; // Dark mode overrides and theme application logic

// Any other global CSS or third-party CSS like for a lightbox, carousel, etc.
// import 'some-lightbox-library/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);