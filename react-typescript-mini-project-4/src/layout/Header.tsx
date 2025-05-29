import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`header ${isSticky ? 'sticky' : ''}`}
        animate={isSticky ? { boxShadow: "0 4px 12px rgba(0,0,0,0.1)", y: 0 } : { boxShadow: "none", y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container">
          <div className="innerHeader">
            <Link to="/" className="logo">
              <img src="/img/logo.png" alt="Logo" />
            </Link>

            <nav className="main-nav">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/marketing">Marketing</Link></li>
                <li><Link to="/happening">Happening</Link></li>
                <li><Link to="/learning">Learning</Link></li>
                <li className="dropdown">
                  <Link to="javascript:void(0)">My Store</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/store/option1">Option 1</Link></li>
                    <li><Link to="/store/option2">Option 2</Link></li>
                  </ul>
                </li>
              </ul>
              <button className="signup-btn">Sign Up</button>
            </nav>

            {/* Animated Hamburger Button */}
            <motion.button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                  <li><Link to="/marketing" onClick={() => setMobileMenuOpen(false)}>Marketing</Link></li>
                  <li><Link to="/happening" onClick={() => setMobileMenuOpen(false)}>Happening</Link></li>
                  <li><Link to="/learning" onClick={() => setMobileMenuOpen(false)}>Learning</Link></li>
                  <li><Link to="/store" onClick={() => setMobileMenuOpen(false)}>My Store</Link></li>
                  <li><Btn label="Sign Up" variant="white" onClick={() => alert("Sign Up")} /></li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
