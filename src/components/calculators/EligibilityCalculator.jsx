import React, { useState } from 'react';

const EligibilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [otherIncome, setOtherIncome] = useState(10000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [loanTenure, setLoanTenure] = useState(20); // in years
  const [interestRate, setInterestRate] = useState(6.4); // annual interest rate

  const calculateEligibility = () => {
    const netIncome = monthlyIncome + otherIncome;
    const maxEMI = netIncome * 0.5 - existingEMI;
    const loanTenureMonths = loanTenure * 12;
    const monthlyInterestRate = interestRate / 12 / 100;

    const eligibleLoan = maxEMI * (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1) / 
                          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths));

    return Math.round(eligibleLoan);
  };

  const eligibility = calculateEligibility();

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Loan Eligibility Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Monthly Income */}
        <div>
          <label className="block mb-2 text-gray-600">Net Income per Month</label>
          <input
            type="number"
            className="w-full p-3 border rounded text-lg"
            placeholder="₹50,000"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
          />
        </div>

        {/* Other Income */}
        <div>
          <label className="block mb-2 text-gray-600">Other Yearly Income</label>
          <input
            type="number"
            className="w-full p-3 border rounded text-lg"
            placeholder="₹10,000 (Bonuses, rent, etc.)"
            value={otherIncome}
            onChange={(e) => setOtherIncome(Number(e.target.value))}
          />
        </div>

        {/* Existing EMI */}
        <div>
          <label className="block mb-2 text-gray-600">Existing Loan EMI (per month)</label>
          <input
            type="number"
            className="w-full p-3 border rounded text-lg"
            placeholder="₹0"
            value={existingEMI}
            onChange={(e) => setExistingEMI(Number(e.target.value))}
          />
        </div>

        {/* Loan Tenure */}
        <div>
          <label className="block mb-2 text-gray-600">Loan Tenure (in years)</label>
          <input
            type="number"
            className="w-full p-3 border rounded text-lg"
            placeholder="20 years"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
          />
        </div>

        {/* Interest Rate */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-600">Rate of Interest (%)</label>
          <input
            type="number"
            step="0.1"
            className="w-full p-3 border rounded text-lg"
            placeholder="6.40%"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Result */}
      <div className="text-center bg-yellow-100 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800">You are eligible for a loan of</h3>
        <p className="text-4xl font-bold text-green-600 mt-2">₹{eligibility.toLocaleString()}</p>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={() => alert('Eligibility checked!')}
        >
          Check Eligibility
        </button>
        <button
          className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg ml-4 hover:bg-gray-400 transition"
          onClick={() => {
            setMonthlyIncome(50000);
            setOtherIncome(10000);
            setExistingEMI(0);
            setLoanTenure(20);
            setInterestRate(6.4);
          }}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default EligibilityCalculator;
