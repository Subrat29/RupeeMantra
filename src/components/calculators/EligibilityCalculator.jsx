import React, { useState } from 'react';

const EligibilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [loanAmount, setLoanAmount] = useState(1000000);

  const calculateEligibility = () => {
    const maxEMI = monthlyIncome * 0.5 - existingEMI;
    const loanTenure = 20 * 12; // in months
    const interestRate = 0.0075; // monthly interest

    const eligibleLoan = maxEMI * (Math.pow(1 + interestRate, loanTenure) - 1) / (interestRate * Math.pow(1 + interestRate, loanTenure));

    return Math.round(eligibleLoan);
  };

  const eligibility = calculateEligibility();

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Eligibility Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-2">Monthly Income</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Existing EMI</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={existingEMI}
            onChange={(e) => setExistingEMI(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Loan Amount Required</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold">You are eligible for a loan of ₹{eligibility}</h3>
      </div>
    </div>
  );
};

export default EligibilityCalculator;
