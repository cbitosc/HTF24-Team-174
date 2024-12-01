import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="w-8 h-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">Tech Innovators</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/learn-more">Learn More</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/feedback">Feedback</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/learn-more">Learn More</MobileNavLink>
            <MobileNavLink to="/register">Register</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <MobileNavLink to="/feedback">Feedback</MobileNavLink>
            <MobileNavLink to="/login">Login</MobileNavLink>
            <MobileNavLink to="/signup" className="bg-purple-600">Sign Up</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, className = '' }) => (
  <Link
    to={to}
    className={`text-gray-300 hover:text-white transition-colors ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, className = '' }) => (
  <Link
    to={to}
    className={`block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;