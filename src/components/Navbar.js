import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(11, 6, 20, 0.95)' : 'transparent',
          backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(12px)' : 'none',
          borderBottom: isScrolled || isMobileMenuOpen ? '1px solid rgba(45, 38, 84, 0.5)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="navbar-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2px', 
              textDecoration: 'none',
            }}>
              <div className="logo-wrapper" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div className="logo-glow" style={{
                  position: 'absolute',
                  background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(8px)',
                }} />
                <img 
                  src={logo} 
                  alt="Prodynix Logo" 
                  className="logo-img"
                  style={{ 
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 2px 8px rgba(79, 70, 229, 0.3))',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <span className="brand-text" style={{ 
                  fontWeight: 700, 
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>Prodynix</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '4px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive(link.path) ? '#6366F1' : '#D1D5DB',
                    backgroundColor: isActive(link.path) ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="desktop-cta" style={{ display: 'none' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#4F46E5',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="mobile-menu-btn"
              style={{
                padding: '10px',
                marginRight: '-8px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                color: '#E5E7EB',
              }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-overlay"
        onClick={closeMenu}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1001,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.25s ease, visibility 0.25s ease',
        }}
      />

      {/* Mobile Side Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '80%',
          maxWidth: '320px',
          backgroundColor: '#0B0614',
          zIndex: 1002,
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease-out',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow: isMobileMenuOpen ? '4px 0 24px rgba(0, 0, 0, 0.4)' : 'none',
          borderRight: '1px solid rgba(45, 38, 84, 0.5)',
        }}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
          borderBottom: '1px solid rgba(45, 38, 84, 0.5)',
        }}>
          <Link to="/" onClick={closeMenu} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2px', 
            textDecoration: 'none' 
          }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                width: '64px',
                height: '64px',
                background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(6px)',
              }} />
              <img 
                src={logo} 
                alt="Prodynix Logo" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 2px 6px rgba(79, 70, 229, 0.25))',
                }}
              />
            </div>
            <span style={{ 
              fontSize: '26px', 
              fontWeight: 700, 
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}>Prodynix</span>
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#9CA3AF',
            }}
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '20px 16px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              style={{
                display: 'block',
                padding: '14px 16px',
                marginBottom: '4px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 500,
                color: isActive(link.path) ? '#6366F1' : '#FFFFFF',
                backgroundColor: isActive(link.path) ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{ padding: '0 16px 24px 16px' }}>
          <Link
            to="/contact"
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px 16px',
              backgroundColor: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 500,
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            Get Started
            <svg
              style={{ marginLeft: '8px', width: '18px', height: '18px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        /* Navbar base styles */
        .navbar-inner {
          height: 72px;
        }
        .logo-img {
          width: 68px;
          height: 68px;
        }
        .logo-glow {
          width: 76px;
          height: 76px;
        }
        .brand-text {
          font-size: 30px;
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .navbar-container {
            padding: 0 16px !important;
          }
          .navbar-inner {
            height: 64px !important;
          }
          .navbar-logo {
            gap: 4px !important;
          }
          .logo-img {
            width: 44px !important;
            height: 44px !important;
          }
          .logo-glow {
            width: 52px !important;
            height: 52px !important;
          }
          .brand-text {
            font-size: 22px !important;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .navbar-inner {
            height: 68px !important;
          }
          .logo-img {
            width: 56px !important;
            height: 56px !important;
          }
          .logo-glow {
            width: 64px !important;
            height: 64px !important;
          }
          .brand-text {
            font-size: 26px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
          .mobile-overlay { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-drawer {
            width: 65% !important;
            max-width: 400px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mobile-drawer,
          .mobile-overlay {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
