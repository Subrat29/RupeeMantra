import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Helper function to close dropdown on outside click
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const Header = () => {
  const [isLoansOpen, setLoansOpen] = useState(false);
  const [isCalculatorsOpen, setCalculatorsOpen] = useState(false);

  const loansRef = useRef(null);
  const calculatorsRef = useRef(null);

  // Close dropdowns when clicking outside
  useOutsideClick(loansRef, () => setLoansOpen(false));
  useOutsideClick(calculatorsRef, () => setCalculatorsOpen(false));

  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">RupeeMantra</Link>

        <nav className="flex space-x-6">
          {/* Home */}
          <Link to="/" className="hover:bg-yellow-600 px-4 py-2 rounded">Home</Link>

          {/* Loans Dropdown */}
          <div className="relative" ref={loansRef}>
            <button
              onClick={() => setLoansOpen(!isLoansOpen)}
              className="hover:bg-yellow-600 px-4 py-2 rounded"
              aria-haspopup="true"
              aria-expanded={isLoansOpen}
            >
              Loans
            </button>
            {isLoansOpen && (
              <div
                className="absolute top-full mt-2 w-48 bg-white text-black shadow-lg rounded transition-all duration-200 ease-out"
                role="menu"
              >
                <Link to="/home-loan" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  Home Loan
                </Link>
                <Link to="/loan-against-property" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  Loan Against Property
                </Link>
                <Link to="/business-loan" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  Business Loan
                </Link>
                <Link to="/personal-loan" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  Personal Loan
                </Link>
              </div>
            )}
          </div>

          {/* Loan Calculator Dropdown */}
          <div className="relative" ref={calculatorsRef}>
            <button
              onClick={() => setCalculatorsOpen(!isCalculatorsOpen)}
              className="hover:bg-yellow-600 px-4 py-2 rounded"
              aria-haspopup="true"
              aria-expanded={isCalculatorsOpen}
            >
              Loan Calculator
            </button>
            {isCalculatorsOpen && (
              <div
                className="absolute top-full mt-2 w-48 bg-white text-black shadow-lg rounded transition-all duration-200 ease-out"
                role="menu"
              >
                <Link to="/emi-calculator" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  EMI Calculator
                </Link>
                <Link to="/eligibility-calculator" className="block px-4 py-2 hover:bg-gray-200" role="menuitem">
                  Eligibility Calculator
                </Link>
              </div>
            )}
          </div>

          {/* About */}
          <Link to="/about" className="hover:bg-yellow-600 px-4 py-2 rounded">About</Link>

          {/* Contact */}
          <Link to="/contact" className="hover:bg-yellow-600 px-4 py-2 rounded">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
