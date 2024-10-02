import React from 'react';

const BankModal = ({ bank, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg">
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-4 text-yellow-600">{bank.bankName} - Loan Details</h2>

                <div className="space-y-6">
                    {/* Special Features Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Special Features</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Check your eligibility by entering a few of your details</li>
                            <li>Attractive interest rates</li>
                            <li>Concessional rates for women</li>
                            <li>No hidden charges</li>
                            <li>Quick processing and easy documentation</li>
                            <li>Flexible repayment schedules</li>
                        </ul>
                    </div>

                    {/* KYC Documents Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">KYC Documents</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Copy of PAN card</li>
                            <li>Copy of Passport/Aadhaar/Voter ID/Driving license</li>
                            <li>Copy of latest residence address proof</li>
                        </ul>
                    </div>

                    {/* Property Documents Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">Financial Documents - Property Documents</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Copy of complete chain of property documents with sanction map</li>
                        </ul>
                    </div>
                </div>

                {/* Close Button (bottom) */}
                <button
                    onClick={onClose}
                    className="mt-6 w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200 ease-in-out"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BankModal;
