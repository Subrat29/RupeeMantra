import React, { useState } from 'react';

const PersonalLoanPage = () => {
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
                    Personal Loan
                </h1>
                <p className="text-center text-lg text-gray-700 mb-10">
                    Achieve Your Dreams with Flexible Personal Loans
                </p>

                {/* Application Form */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Apply For Personal Loan
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
                                I authorize RupeeMantra and its partners to contact me. This overrides my number being in the NDNC registry.
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Personal Loan</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Personal loans offer a quick, hassle-free way to finance various personal needs, from weddings and travel to debt consolidation. At RupeeMantra, we provide a range of loan products tailored to your financial requirements, with flexible repayment options and competitive interest rates.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Eligibility Criteria:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Age: 21 to 60 years</li>
                        <li>Employment Type: Salaried or self-employed</li>
                        <li>Minimum monthly income: ₹20,000</li>
                        <li>Credit Score: 700 or above preferred</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Documents Required:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Identity Proof: Aadhaar, PAN, or Passport</li>
                        <li>Address Proof: Utility bills, rental agreement, etc.</li>
                        <li>Income Proof: Salary slips or bank statements</li>
                        <li>Photograph: Passport-sized</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">How to Apply:</h3>
                    <ol className="list-decimal list-inside text-gray-700 mb-6">
                        <li>Fill out the online application form.</li>
                        <li>Upload the required documents.</li>
                        <li>Get approval within 24 hours.</li>
                        <li>Loan amount will be credited directly to your bank account.</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Frequently Asked Questions:</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>1. What is a personal loan?</strong> <br />
                        A personal loan is an unsecured loan that can be used for various personal needs.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>2. How much can I borrow?</strong> <br />
                        You can borrow up to ₹25 lakhs, based on your eligibility.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>3. How do I repay the loan?</strong> <br />
                        The loan can be repaid in easy EMIs over 12 to 60 months.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonalLoanPage;
