import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeLoan from './components/loans/HomeLoan';
import LoanAgainstProperty from './components/loans/LoanAgainstProperty';
import BusinessLoan from './components/loans/BusinessLoan';
import PersonalLoan from './components/loans/PersonalLoan';
import EMICalculator from './components/calculators/EMICalculator';
import EligibilityCalculator from './components/calculators/EligibilityCalculator';
import LoanOffersTable  from './components/LoanApplication/LoanOffersTable';
import HomeLoanInterestRates from './components/loanInterestRates/HomeLoanInterestRates';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/home-loan" element={<Layout><HomeLoan /></Layout>} />
        <Route path="/loan-against-property" element={<Layout><LoanAgainstProperty /></Layout>} />
        <Route path="/business-loan" element={<Layout><BusinessLoan /></Layout>} />
        <Route path="/personal-loan" element={<Layout><PersonalLoan /></Layout>} />
        <Route path="/emi-calculator" element={<Layout><EMICalculator /></Layout>} />
        <Route path="/eligibility-calculator" element={<Layout><EligibilityCalculator /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
        <Route path="/loan-offers" element={<Layout><LoanOffersTable /></Layout>} />
        <Route path="/home-loan-interest-rates" element={<Layout><HomeLoanInterestRates /></Layout>} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
