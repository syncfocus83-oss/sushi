import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuHover, setMenuHover] = useState(false);
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isContactActive = location.pathname === '/contact';
  const isMenuActive = location.pathname.includes('/menu') || menuHover;

  return (
    <header className="header">
      <div className="brand">
        <Link to="/">Beyond Sushi</Link>
      </div>
      <nav className="navbar">
        <Link 
          to="/" 
          className={`nav-link ${isHomeActive ? 'active-white' : ''}`}
        >
          Home
        </Link>
        
        <div 
          className="nav-dropdown-wrapper"
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
        >
          <div className={`nav-link ${isMenuActive ? 'active-white' : ''}`}>
            Menu <span className="arrow">▼</span>
          </div>
          
          {menuHover && (
            <div className="dropdown-content">
              <Link to="/menu/sushi" className="dropdown-item">Sushi</Link>
              <Link to="/menu/wraps-soup" className="dropdown-item">wraps en soep</Link>
            </div>
          )}
        </div>

        <Link 
          to="/contact" 
          className={`nav-link ${isContactActive ? 'active-white' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;