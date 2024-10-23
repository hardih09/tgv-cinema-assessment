import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Enquiries from './pages/Enquiries';

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <div className="sidebar-body">
            <Navbar />
          </div>
          <div className="content-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/enquiries" element={<Enquiries />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
