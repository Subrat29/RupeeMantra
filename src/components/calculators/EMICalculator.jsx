import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    let P = loanAmount;
    let R = interestRate / 12 / 100;
    let N = tenure * 12;

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return Math.round(EMI);
  };

  const emi = calculateEMI();
  
  const chartData = {
    labels: Array.from({ length: tenure }, (_, i) => i + 1), // X-axis labels
    datasets: [
      {
        label: 'EMI',
        data: Array(tenure).fill(emi),
        borderColor: '#4caf50',
        fill: false,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">EMI Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-2">Loan Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Tenure (years)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold">Your EMI: ₹{emi}</h3>
      </div>

      <div className="mb-6">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default EMICalculator;
