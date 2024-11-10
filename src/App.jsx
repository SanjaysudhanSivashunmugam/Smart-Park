import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OurPresences from './Pages/OurPresences';
import Booking from './Pages/Booking';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/presences" element={<OurPresences />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </Router>
    );
}

export default App;
