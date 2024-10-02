import React, { useState } from 'react';

const BusinessLoanPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        city: '',
        monthlyIncome: '',
        loanAmount: '',
        authorization: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
        // Logic to handle form submission goes here
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
                                <label className="block text-gray-700">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
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
                                <label className="block text-gray-700">Loan Amount</label>
                                <input
                                    type="number"
                                    name="loanAmount"
                                    value={formData.loanAmount}
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
                                checked={formData.authorization}
                                onChange={handleChange}
                                className="w-4 h-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                                required
                            />
                            <label className="ml-2 text-gray-600">
                                I authorize Apnarupee and its partners to contact me. This overrides my number being in the NDNC registry.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold hover:bg-yellow-500"
                        >
                            Apply
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

                    {/* Additional content for business loan types, factors affecting interest rates, etc. */}
                    <p className="text-gray-700">
                        {/* Further sections will go here */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusinessLoanPage;
