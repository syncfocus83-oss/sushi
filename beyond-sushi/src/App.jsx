import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WeekSpecials from './components/WeekSpecials';
import Products from './components/Products';
import Contact from './components/Contact'; // Import new component
import './App.css';

function App() {
  const location = useLocation();

  // Determine background class based on route
  const getPageClass = () => {
    if (location.pathname === '/') return 'page-home';
    if (location.pathname.includes('sushi')) return 'page-sushi';
    if (location.pathname.includes('wraps')) return 'page-wraps';
    if (location.pathname === '/contact') return 'page-contact'; // Orange background
    return '';
  };

  return (
    <div className="app-main-wrapper">
      <div className={`app-container ${getPageClass()}`}>
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <WeekSpecials />
                <Products viewMode="categories" /> 
              </>
            } />
            
            <Route path="/menu/sushi" element={
              <div className="menu-page-padding">
                <Products viewMode="sushi" />
              </div>
            } />
            
            <Route path="/menu/wraps-soup" element={
              <div className="menu-page-padding">
                <Products viewMode="wraps" />
              </div>
            } />

            {/* Point to the new Contact component */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;