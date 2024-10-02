import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000); // Default 10 Lakh
  const [interestRate, setInterestRate] = useState(7);
  const [tenure, setTenure] = useState(10); // Tenure in years
  const [emi, setEMI] = useState(0);
  const [amortization, setAmortization] = useState([]);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  // EMI Calculation Logic
  const calculateEMI = () => {
    let P = loanAmount;
    let R = interestRate / 12 / 100; // Monthly interest
    let N = tenure * 12; // Tenure in months

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEMI(Math.round(EMI));

    // Create amortization schedule
    const amortizationData = [];
    let outstandingBalance = P;
    for (let i = 1; i <= N; i++) {
      let interestPayment = outstandingBalance * R;
      let principalPayment = EMI - interestPayment;
      outstandingBalance -= principalPayment;

      amortizationData.push({
        year: Math.ceil(i / 12),
        principal: Math.max(principalPayment, 0),
        interest: Math.max(interestPayment, 0),
        balance: Math.max(outstandingBalance, 0),
      });
    }
    setAmortization(amortizationData);
  };

  // Data for the Bar Chart (Principal + Interest Breakdown)
  const barChartData = {
    labels: amortization.map((data) => `Year ${data.year}`),
    datasets: [
      {
        label: 'Principal',
        data: amortization.map((data) => data.principal),
        backgroundColor: '#34d399', // Light Green
      },
      {
        label: 'Interest',
        data: amortization.map((data) => data.interest),
        backgroundColor: '#f87171', // Light Red
      },
    ],
  };

  // Data for the Pie Chart (Total Payment Breakdown)
  const totalInterest = amortization.reduce((acc, data) => acc + data.interest, 0);
  const totalPrincipal = loanAmount;
  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [totalPrincipal, totalInterest],
        backgroundColor: ['#34d399', '#f87171'], // Matching colors with the bar chart
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-7xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">EMI Calculator for Home Loan</h2>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Home Loan Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded shadow-sm focus:ring focus:ring-green-200"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-2 border rounded shadow-sm focus:ring focus:ring-green-200"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Tenure (years)</label>
          <input
            type="number"
            className="w-full p-2 border rounded shadow-sm focus:ring focus:ring-green-200"
            value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
          />
        </div>
      </div>

      {/* EMI Display */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Your EMI: ₹{emi}</h3>
        <p className="text-gray-500">Total Payment (Principal + Interest): ₹{emi * tenure * 12}</p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Bar Chart */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-center text-gray-600">EMI Breakdown (Principal & Interest)</h4>
          <div className="h-64">
            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-center text-gray-600">Total Payment Breakdown</h4>
          <div className="h-64">
            <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Amortization Table */}
      <div className="overflow-x-auto bg-gray-50 p-4 rounded-lg shadow-sm">
        <h4 className="text-lg font-semibold mb-2 text-center text-gray-600">Amortization Schedule</h4>
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="text-gray-700">
              <th className="p-2 border">Year</th>
              <th className="p-2 border">Principal (₹)</th>
              <th className="p-2 border">Interest (₹)</th>
              <th className="p-2 border">Total Payment (₹)</th>
              <th className="p-2 border">Balance (₹)</th>
              <th className="p-2 border">Loan Paid To Date (%)</th>
            </tr>
          </thead>
          <tbody>
            {amortization.map((data, index) => (
              <tr key={index} className="text-gray-600">
                <td className="p-2 border">{data.year}</td>
                <td className="p-2 border">{Math.round(data.principal)}</td>
                <td className="p-2 border">{Math.round(data.interest)}</td>
                <td className="p-2 border">{Math.round(data.principal + data.interest)}</td>
                <td className="p-2 border">{Math.round(data.balance)}</td>
                <td className="p-2 border">{(((loanAmount - data.balance) / loanAmount) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EMICalculator;
