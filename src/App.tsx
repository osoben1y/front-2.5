import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-200 flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">Home</Link>
        <Link to="/about" className="text-blue-600 font-semibold">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default React.memo(App);
