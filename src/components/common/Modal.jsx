// src/components/common/Modal.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { FiX } from 'react-icons/fi'; // Example close icon
import '../../styles/components/modal.css'; // Create this file or add to main.css

const Modal = ({ isOpen, onClose, title, children, size = 'medium' }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent background scroll
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className={`modal-content modal-size-${size}`} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
                    <button onClick={onClose} className="modal-close-button" aria-label="Close modal">
                        {/* <FiX /> Or a simple 'X' */} ×
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                {/* Optional: Modal Footer
        <div className="modal-footer">
          <Button onClick={onClose} variant="secondary">Close</Button>
        </div>
        */}
            </div>
        </div>,
        document.getElementById('modal-root') // Make sure you have <div id="modal-root"></div> in your public/index.html
    );
};

export default Modal;