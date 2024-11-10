// src/Components/BrowserNav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BrowserNav() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go to the previous page
    };

    const goForward = () => {
        navigate(1); // Go to the next page
    };

    return (
        <div className="fixed top-2 left-2 flex gap-2">
            <button
                onClick={goBack}
                className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-gray-700"
            >
                ← Back
            </button>
            <button
                onClick={goForward}
                className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-gray-700"
            >
                Forward →
            </button>
        </div>
    );
}

export default BrowserNav;
