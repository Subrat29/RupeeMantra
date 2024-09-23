import React, { useState } from 'react';

const LoanForm = () => {
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

  const handleChange = (e) => {
    setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We have received your loan application.');
    // Handle form submission logic
  };

  return (
    <form className="container mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center">Home Loan Application</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">Gender</label>
          <select name="gender" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">City You Live In</label>
          <input type="text" name="city" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2">Purpose of Loan</label>
          <select name="loanPurpose" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="">Select Purpose</option>
            <option value="New Home">New Home</option>
            <option value="Construction">Construction</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">City Where Property is Located</label>
          <input type="text" name="propertyLocation" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2">Employment Type</label>
          <select name="employmentType" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Self Employed">Self Employed</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Monthly Income</label>
          <input type="number" name="income" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2">Required Loan Amount</label>
          <input type="number" name="loanAmount" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2">Full Name</label>
          <input type="text" name="name" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2">Mobile (OTP)</label>
          <input type="text" name="mobile" className="w-full p-2 border rounded" onChange={handleChange} />
        </div>
      </div>

      <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold">Show Best Offers</button>

      {/* Confirmation message */}
      {loanDetails.name && (
        <div className="mt-8 bg-green-100 text-green-900 p-4 rounded">
          <h4 className="text-lg font-semibold">Thank you!</h4>
          <p>We have received your Loan application. Our expert will get in touch with you within 24 hours.</p>
          <p>For any further queries, contact us at:</p>
          <p>Phone: 8888900700 | Email: info@rupeemantra.com</p>
        </div>
      )}
    </form>
  );
};

export default LoanForm;
