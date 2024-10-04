import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineChevronDown } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoansOpen, setLoansOpen] = useState(false);
  const [isCalculatorsOpen, setCalculatorsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close both the dropdowns and mobile menu when a link is clicked
    setMenuOpen(false);
    setLoansOpen(false);
    setCalculatorsOpen(false);
  };

  return (
    <header className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-extrabold tracking-wider" onClick={handleLinkClick}>
          RupeeMantra
        </Link>

        {/* Desktop Menu - Hidden on small screens */}
        <nav className="hidden md:flex space-x-8 text-white font-semibold">
          <Link to="/" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Home</Link>
          
          {/* Loans Dropdown */}
          <div className="relative">
            <button
              className="flex items-center hover:text-yellow-400 transition duration-300"
              onClick={() => setLoansOpen(!isLoansOpen)}
            >
              Loans <HiOutlineChevronDown className="ml-1" />
            </button>
            {isLoansOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-md rounded">
                <Link to="/home-loan" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>Home Loan</Link>
                <Link to="/loan-against-property" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>Loan Against Property</Link>
                <Link to="/business-loan" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>Business Loan</Link>
                <Link to="/personal-loan" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>Personal Loan</Link>
              </div>
            )}
          </div>

          {/* Loan Calculator Dropdown */}
          <div className="relative">
            <button
              className="flex items-center hover:text-yellow-400 transition duration-300"
              onClick={() => setCalculatorsOpen(!isCalculatorsOpen)}
            >
              Loan Calculator <HiOutlineChevronDown className="ml-1" />
            </button>
            {isCalculatorsOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-md rounded">
                <Link to="/emi-calculator" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>EMI Calculator</Link>
                <Link to="/eligibility-calculator" className="block px-4 py-2 hover:bg-gray-100 transition duration-200" onClick={handleLinkClick}>Eligibility Calculator</Link>
              </div>
            )}
          </div>

          <Link to="/about-us" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>About</Link>
          <Link to="/contact-us" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Contact</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu - Visible on small screens */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-start bg-gray-800 text-white space-y-2 p-4 rounded-md shadow-lg">
          <Link to="/" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Home</Link>
          
          {/* Loans Toggle Dropdown in Mobile */}
          <button
            onClick={() => setLoansOpen(!isLoansOpen)}
            className="flex items-center hover:text-yellow-400 transition duration-300"
          >
            Loans <HiOutlineChevronDown className="ml-1" />
          </button>
          {isLoansOpen && (
            <div className="flex flex-col space-y-2 pl-4">
              <Link to="/home-loan" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Home Loan</Link>
              <Link to="/loan-against-property" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Loan Against Property</Link>
              <Link to="/business-loan" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Business Loan</Link>
              <Link to="/personal-loan" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Personal Loan</Link>
            </div>
          )}

          {/* Loan Calculator Toggle Dropdown in Mobile */}
          <button
            onClick={() => setCalculatorsOpen(!isCalculatorsOpen)}
            className="flex items-center hover:text-yellow-400 transition duration-300"
          >
            Loan Calculator <HiOutlineChevronDown className="ml-1" />
          </button>
          {isCalculatorsOpen && (
            <div className="flex flex-col space-y-2 pl-4">
              <Link to="/emi-calculator" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>EMI Calculator</Link>
              <Link to="/eligibility-calculator" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Eligibility Calculator</Link>
            </div>
          )}

          <Link to="/about-us" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>About</Link>
          <Link to="/contact-us" className="hover:text-yellow-400 transition duration-300" onClick={handleLinkClick}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
