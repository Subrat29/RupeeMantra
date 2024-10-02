import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Thank You!</h1>
        <p className="text-lg">
          We have received your loan application. Our expert will get in touch with you within 24 hours.
        </p>
        <p className="mt-4">
          For further queries, contact us at: <br />
          <strong>8888900700</strong> | <a href="mailto:info@rupeemantra.com" className="underline text-green-500">info@rupeemantra.com</a>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
