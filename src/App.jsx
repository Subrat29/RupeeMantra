import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeLoan from './components/loans/HomeLoan';
import LoanAgainstProperty from './components/loans/LoanAgainstProperty';
import BusinessLoan from './components/loans/BusinessLoan';
import PersonalLoan from './components/loans/PersonalLoan';
import EMICalculator from './components/calculators/EMICalculator';
import EligibilityCalculator from './components/calculators/EligibilityCalculator';
import LandingPage from './components/LandingPage';

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
      </Routes>
    </Router>
  );
}

export default App;
