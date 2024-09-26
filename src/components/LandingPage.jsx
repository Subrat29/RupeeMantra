import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const loanInterestRates = [
    {
      id: 1,
      loanType: "Home Loan",
      lowestRate: "6.70%",
      url: "/home-loan-interest-rates"
    },
    {
      id: 2,
      loanType: "Personal Loan",
      lowestRate: "10.55%",
      url: "/personal-loan-interest-rates"
    },
    {
      id: 3,
      loanType: "Car Loan",
      lowestRate: "9.25%",
      url: "/car-loan-interest-rates"
    },
    {
      id: 4,
      loanType: "Education Loan",
      lowestRate: "9.00%",
      url: "/education-loan-interest-rates"
    },
    {
      id: 5,
      loanType: "Gold Loan",
      lowestRate: "10.50%",
      url: "/gold-loan-interest-rates"
    },
    {
      id: 6,
      loanType: "Business Loan",
      lowestRate: "14.00%",
      url: "/business-loan-interest-rates"
    },
    {
      id: 7,
      loanType: "Loan Against Property",
      lowestRate: "9.35%",
      url: "/loan-against-property-interest-rates"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <header id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://image.khaleejtimes.com/?uuid=e588a4be-2f20-544a-a056-7efa0f069a4a&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.7799&width=1200&height=675&x=1.0E-5&y=0.11092')` }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to RupeeMantra</h1>
            <p className="mt-4 text-lg">Your trusted partner in financial growth and stability.</p>
            <a href="#features" className="mt-6 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold">Explore Features</a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">EMI Calculator</h3>
              <p>Accurately calculate your loan EMIs and plan ahead for future finances.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Easy Loan Application</h3>
              <p>Apply for loans quickly and securely with our user-friendly platform.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Dynamic Forms</h3>
              <p>Get personalized financial solutions with dynamic and responsive forms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Steps Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Check eligibility</h3>
              <p>Check your eligibility fora loan</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Submit application</h3>
              <p>Complete a 100% application form & Document Collection At Your Door Steps</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Get sanctioned</h3>
              <p>We will evaluate your application propose a fair sanction</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Receive funds</h3>
              <p>Receive your loan within 7 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lowest Loan Interest Rates Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Lowest Loan Interest Rates</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-8">Current Interest Rates</h1>
                <div className="overflow-x-auto border">
                  <table className="min-w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-yellow-600 text-white">
                        <th className="p-4 font-medium">Loan Type</th>
                        <th className="p-4 font-medium">Lowest Rate %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanInterestRates.map((loan, index) => (
                        <tr key={loan.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="p-4">
                            <Link to={loan.url} className="text-blue-600 ml-2 hover:underline">{loan.loanType}</Link>
                          </td>
                          <td className="p-4">{loan.lowestRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="max-w-2xl mx-auto text-lg">
            At RupeeMantra, we believe in empowering individuals with simple and secure financial tools. Whether it's calculating EMIs or applying for loans, we offer solutions tailored to your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
