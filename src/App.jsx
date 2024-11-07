

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Homepage = React.lazy(() => import('./Pages/HomePage.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;