import React from 'react';

const BankModal = ({ bank, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">{bank.bankName} - Loan Details</h2>
                <h3 className="font-bold mt-4">Special Features</h3>
                <ul className="list-disc list-inside">
                    <li>Check your eligibility by entering few of your details</li>
                    <li>Attractive interest rates</li>
                    <li>Concessional rates to women</li>
                    <li>No hidden charges</li>
                    <li>Quick processing and easy documentation</li>
                    <li>Flexible repayment schedules</li>
                </ul>
                <h3 className="font-bold mt-4">KYC Documents</h3>
                <ul className="list-disc list-inside">
                    <li>Copy of Pan card</li>
                    <li>Copy of Passport/Aadhaar/Voter ID/Driving license</li>
                    <li>Copy of latest residence address proof</li>
                </ul>
                <h3 className="font-bold mt-4">Financial Documents - Property documents</h3>
                <ul className="list-disc list-inside">
                    <li>Copy of complete chain of property documents with sanction map.</li>
                </ul>
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default BankModal;
