import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoansOpen, setLoansOpen] = useState(false);
  const [isCalculatorsOpen, setCalculatorsOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">RupeeMantra</Link>

        <nav className="flex space-x-6">
          {/* Home */}
          <Link to="/" className="hover:bg-yellow-600 px-4 py-2 rounded">Home</Link>

          {/* Loans Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLoansOpen(!isLoansOpen)}
              className="hover:bg-yellow-600 px-4 py-2 rounded"
            >
              Loans
            </button>
            {isLoansOpen && (
              <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded">
                <Link
                  to="/home-loan"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Home Loan
                </Link>
                <Link
                  to="/loan-against-property"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Loan Against Property
                </Link>
                <Link
                  to="/business-loan"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Business Loan
                </Link>
                <Link
                  to="/personal-loan"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Personal Loan
                </Link>
              </div>
            )}
          </div>

          {/* Loan Calculator Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCalculatorsOpen(!isCalculatorsOpen)}
              className="hover:bg-yellow-600 px-4 py-2 rounded"
            >
              Loan Calculator
            </button>
            {isCalculatorsOpen && (
              <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded">
                <Link
                  to="/emi-calculator"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  EMI Calculator
                </Link>
                <Link
                  to="/eligibility-calculator"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
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
