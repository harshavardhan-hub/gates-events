import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ExploreEvents from './pages/ExploreEvents.jsx';
import EventDetail from './pages/EventDetail.jsx';
import './styles/index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          {/* Scroll to top on route change */}
          <ScrollToTop />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/explore" element={<ExploreEvents />} />
              <Route path="/events/:id" element={<EventDetail />} />
              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
