import React, { useState } from 'react';
import { addUserData } from '../../../api/apiService'; // Import the API function
import { useNavigate } from 'react-router-dom';

const BusinessLoanPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        cityYouLiveIn: '',
        monthlyIncome: '',
        requiredLoanAmount: '',
        email: '' 
    });

    const [loading, setLoading] = useState(false);  // For submit button loading state
    const [error, setError] = useState(null);  // To handle errors

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log("Form Data: ", formData)
        
        try {
            // Send form data to the backend
            await addUserData(formData);
            // Navigate to the thank-you page after successful submission
            navigate('/thank-you');
        } catch (err) {
            console.error('Error submitting business loan data:', err);
            setError('There was an error submitting your data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header Section */}
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Business Loan
                </h1>
                <p className="text-center text-lg text-gray-700 mb-10">
                    Best Business Loan with low interest rates provider
                </p>

                {/* Application Form */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Apply For Business Loan
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Mobile</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">City You Live In</label>
                                <input
                                    type="text"
                                    name="cityYouLiveIn"
                                    value={formData.cityYouLiveIn}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Monthly Income</label>
                                <input
                                    type="number"
                                    name="monthlyIncome"
                                    value={formData.monthlyIncome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Required Loan Amount</label>
                                <input
                                    type="number"
                                    name="requiredLoanAmount"
                                    value={formData.requiredLoanAmount}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="authorization"
                                // checked={formData.authorization}
                                onChange={handleChange}
                                className="w-4 h-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                                required
                            />
                            <label className="ml-2 text-gray-600">
                                I authorize Apnarupee and its partners to contact me. This overrides my number being in the NDNC registry.
                            </label>
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold hover:bg-yellow-500 flex items-center justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-white"></div>
                            ) : (
                                'Apply'
                            )}
                        </button>
                    </form>
                </div>

                {/* Content Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Loan</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        A business loan is one type of a loan that is applied for by people who aim to establish, expand, or buy equipment for their businesses.
                        Entrepreneurs who look for capital to begin their businesses also apply for business loans. These loans are perfect for small businesses in India.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">1. Secured Business Loans:</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        These Loans are those which are taken against some type of personal guarantee or any valuable asset as collateral...
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">2. Unsecured Business Loans:</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        An unsecured business loan is when the loan amount is given without any collateral...
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Benefits of Business Loan:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Flexible Tenures</li>
                        <li>Minimal Documentation</li>
                        <li>Multiple loan options</li>
                        <li>Good Loan amount</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BusinessLoanPage;
