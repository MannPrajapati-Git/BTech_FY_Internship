import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">YourLogo</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/profile" 
              className={`navbar-link ${isActive('/profile') ? 'active' : ''}`}
            >
              Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/editprofile" 
              className={`navbar-link ${isActive('/editprofile') ? 'active' : ''}`}
            >
              Edit Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/login" 
              className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
            >
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/signup" 
              className={`navbar-link navbar-cta ${isActive('/signup') ? 'active' : ''}`}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link 
                to="/" 
                className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link 
                to="/profile" 
                className={`mobile-menu-link ${isActive('/profile') ? 'active' : ''}`}
              >
                Profile
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link 
                to="/editprofile" 
                className={`mobile-menu-link ${isActive('/editprofile') ? 'active' : ''}`}
              >
                Edit Profile
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link 
                to="/signup" 
                className={`mobile-menu-link mobile-cta ${isActive('/signup') ? 'active' : ''}`}
              >
                Sign Up
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link 
                to="/login" 
                className={`mobile-menu-link mobile-cta ${isActive('/login') ? 'active' : ''}`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;