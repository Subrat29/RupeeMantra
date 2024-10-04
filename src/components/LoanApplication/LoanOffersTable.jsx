import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addUserData, fetchAllBankRates } from '../../../api/apiService';
import BankModal from './BankModal';

const LoanOffersTable = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanOffers, setLoanOffers] = useState([]); // Bank offers fetched from backend
  const [loadingOfferId, setLoadingOfferId] = useState(null); // To track which apply button is loading

  const navigate = useNavigate();
  const location = useLocation();
  const initialLoanDetails = location.state?.loanDetails || {};

  const [loanAmount, setLoanAmount] = useState(initialLoanDetails.requiredLoanAmount || 1000000);
  const [tenure, setTenure] = useState(initialLoanDetails.tenure || 10);
  const [loading1, setLoading1] = useState(true);

  // Fetch bank rates from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllBankRates();
        setLoanOffers(response.data);
      } catch (error) {
        console.error('Error fetching bank rates:', error);
      } finally {
        setLoading1(false);
      }
    };
    fetchData();
  }, []);

  // Function to calculate EMI
  const calculateEMI = (amount, rate, years) => {
    const numericRate = parseFloat(rate.replace('%', '')); // Extract numeric value from interest rate string
    const monthlyRate = numericRate / 12 / 100;
    const months = years * 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  // Function to handle apply action
  const handleApply = async (bankId) => {
    setLoadingOfferId(bankId); // Set loading state for the specific bank
    try {
      const userDetails = initialLoanDetails;
      await addUserData(userDetails);
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting loan application:', error);
    } finally {
      setLoadingOfferId(null); // Reset loading state after submission
    }
  };

  const openModal = (bank) => {
    console.log('Selected Bank:', bank);
    setSelectedBank(bank);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">Best Loan Offers</h1>

      <div className="mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="w-full md:w-auto">
          <label className="font-semibold block md:inline-block">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="ml-0 md:ml-2 p-2 border rounded w-full md:w-auto"
            min={0}
          />
        </div>
        <div className="w-full md:w-auto">
          <label className="font-semibold block md:inline-block">Tenure (Years):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="ml-0 md:ml-2 p-2 border rounded w-full md:w-auto"
            min={1}
          />
        </div>
      </div>

      {loading1 ? (
        <p className="text-center text-xl">Loading loan offers...</p>
      ) : (
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
                <tr key={offer._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-4 text-gray-800">{offer.BankName}</td>
                  <td className="p-4 text-gray-800">{loanAmount}</td>
                  <td className="p-4 text-gray-800">{`₹${calculateEMI(loanAmount, offer.InterestRate, tenure)}`}</td>
                  <td className="p-4 text-gray-800">{offer.InterestRate}</td>
                  <td className="p-4 text-gray-800">{offer.ProcessingFee}</td>
                  <td className="p-4 text-gray-800">{tenure}</td>
                  <td className="p-4 flex space-x-2">
                    <button
                      onClick={() => openModal(offer.BankName)}
                      className="text-yellow-600 hover:underline"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleApply(offer._id)} // Pass the offer's unique ID
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
                    >
                      {loadingOfferId === offer._id ? (
                        <div className="w-4 h-4 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-white"></div>
                      ) : (
                        'Apply'
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && <BankModal bank={selectedBank} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LoanOffersTable;
