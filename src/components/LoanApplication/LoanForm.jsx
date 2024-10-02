import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanForm = ({ loanType }) => {
  const navigate = useNavigate();

  const [loanDetails, setLoanDetails] = useState({
    gender: '',
    city: '',
    loanPurpose: '',
    propertyLocation: '',
    employmentType: '',
    income: '',
    loanAmount: '',
    name: '',
    email: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({});

  // Validation for form fields
  const validateForm = () => {
    const newErrors = {};
    for (let key in loanDetails) {
      if (!loanDetails[key]) {
        newErrors[key] = `${key} is required`;
      }
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'number' && value < 0) return; // Prevent negative numbers
    setLoanDetails({ ...loanDetails, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear any errors when the field is filled
  };

  const handleShowOffers = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Loan Details: ", loanDetails);
    navigate('/loan-offers');
  };

  return (
    <form className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">{loanType} Application</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Gender */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Gender</label>
          <select
            name="gender"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">City You Live In</label>
          <input
            type="text"
            name="city"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* Loan Purpose */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Purpose of Loan</label>
          <select
            name="loanPurpose"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          >
            <option value="">Select Purpose</option>
            <option value="Residential Home Loan">Residential Home Loan</option>
            <option value="Commercial/Project Loan">Commercial/Project Loan</option>
            <option value="Transfer My Existing Loan">Transfer My Existing Loan</option>
          </select>
          {errors.loanPurpose && <p className="text-red-600 text-sm mt-1">{errors.loanPurpose}</p>}
        </div>

        {/* Property Location */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">City Where Property is Located</label>
          <input
            type="text"
            name="propertyLocation"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.propertyLocation && <p className="text-red-600 text-sm mt-1">{errors.propertyLocation}</p>}
        </div>

        {/* Employment Type */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Employment Type</label>
          <select
            name="employmentType"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          >
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Self Employed Business">Self Employed Business</option>
            <option value="Self Employed Professional">Self Employed Professional</option>
          </select>
          {errors.employmentType && <p className="text-red-600 text-sm mt-1">{errors.employmentType}</p>}
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Monthly Income</label>
          <input
            type="number"
            name="income"
            min={0}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.income && <p className="text-red-600 text-sm mt-1">{errors.income}</p>}
        </div>

        {/* Loan Amount */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Required Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            min={0}
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.loanAmount && <p className="text-red-600 text-sm mt-1">{errors.loanAmount}</p>}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 text-gray-700">Your Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-2 font-semibold text-gray-600">Mobile (OTP)</label>
          <input
            type="text"
            name="mobile"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring focus:ring-yellow-300"
            onChange={handleChange}
          />
          {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
        </div>
      </div>

      {/* Show Best Offers Button */}
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          onClick={handleShowOffers}
        >
          Show Best Offers
        </button>
      </div>
    </form>
  );
};

export default LoanForm;
