import React, { useState } from 'react';
import BankModal from './BankModal';
import { useNavigate } from 'react-router-dom';

const LoanOffersTable = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const loanOffers = [
    {
      id: 1,
      bankName: "HDFC Bank",
      logo: "/path/to/hdfc-logo.png",
      loanAmount: "₹9,326,180",
      emi: "₹81,156",
      interestRate: "9.90% (Floating)",
      processingFee: "0.75% + GST",
      tenure: "30 Years",
      details: "Special Features: Attractive interest rates, No hidden charges...",
    },
    {
      id: 2,
      bankName: "LIC HFL",
      logo: "/path/to/lic-logo.png",
      loanAmount: "₹9,326,180",
      emi: "₹73,702",
      interestRate: "8.80% (Floating)",
      processingFee: "0.25% (max ₹10,000)",
      tenure: "30 Years",
      details: "Special Features: Concessional rates to women, Flexible repayment...",
    },
    {
      id: 3,
      bankName: "ICICI Home Finance",
      logo: "/path/to/icici-logo.png",
      loanAmount: "₹9,326,180",
      emi: "₹76,724",
      interestRate: "9.25% (Floating)",
      processingFee: "0.50% + GST",
      tenure: "30 Years",
      details: "Special Features: Quick processing, Easy documentation...",
    },
  ];

  const handleApply = () => {
    navigate('/thank-you');
  };

  const openModal = (bank) => {
    setSelectedBank(bank);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">Best Loan Offers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 font-semibold text-gray-700">Bank Name</th>
              <th className="p-4 font-semibold text-gray-700">Loan Amount</th>
              <th className="p-4 font-semibold text-gray-700">EMI (Per Month)</th>
              <th className="p-4 font-semibold text-gray-700">Interest Rate</th>
              <th className="p-4 font-semibold text-gray-700">Processing Fee</th>
              <th className="p-4 font-semibold text-gray-700">Tenure</th>
              <th className="p-4 font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {loanOffers.map((offer, index) => (
              <tr key={offer.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="p-4 flex items-center space-x-4">
                  <img src={offer.logo} alt={offer.bankName} className="w-16 h-16" />
                  <span className="text-gray-800">{offer.bankName}</span>
                </td>
                <td className="p-4 text-gray-800">{offer.loanAmount}</td>
                <td className="p-4 text-gray-800">{offer.emi}</td>
                <td className="p-4 text-gray-800">{offer.interestRate}</td>
                <td className="p-4 text-gray-800">{offer.processingFee}</td>
                <td className="p-4 text-gray-800">{offer.tenure}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => openModal(offer)}
                    className="text-yellow-600 hover:underline"
                  >
                    View Details
                  </button>
                  <button
                    onClick={handleApply}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <BankModal bank={selectedBank} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LoanOffersTable;
