import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="container bg-green-100 text-green-900 mx-auto text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg">
        We have received your loan application. Our expert will get in touch with you within 24 hours.
      </p>
      <p className="mt-4">
        For further queries, contact us at: <br />
        <strong>8888900700</strong> | <a href="mailto:info@rupeemantra.com" className="underline">info@rupeemantra.com</a>
      </p>
    </div>
  );
};

export default ThankYouPage;
