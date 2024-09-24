import React, { useState } from 'react';
import BankModal from './BankModal'; // Modal component for bank details
import { useNavigate } from 'react-router-dom'; // For navigation to thank-you page

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Best Loan Offers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 font-medium">Bank Name</th>
              <th className="p-4 font-medium">Loan Amount</th>
              <th className="p-4 font-medium">EMI (Per Month)</th>
              <th className="p-4 font-medium">Interest Rate</th>
              <th className="p-4 font-medium">Processing Fee</th>
              <th className="p-4 font-medium">Tenure</th>
              <th className="p-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {loanOffers.map((offer, index) => (
              <tr key={offer.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="p-4 flex items-center space-x-4">
                  <img src={offer.logo} alt={offer.bankName} className="w-16 h-16" />
                  <span>{offer.bankName}</span>
                </td>
                <td className="p-4">{offer.loanAmount}</td>
                <td className="p-4">{offer.emi}</td>
                <td className="p-4">{offer.interestRate}</td>
                <td className="p-4">{offer.processingFee}</td>
                <td className="p-4">{offer.tenure}</td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => openModal(offer)}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                  <button
                    onClick={handleApply}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md"
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
