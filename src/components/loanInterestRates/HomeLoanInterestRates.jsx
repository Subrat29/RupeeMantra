import React, { useEffect, useState } from 'react';
import { fetchAllBankRates } from '../../../api/apiService';  // Import the API service

const HomeLoanInterestRates = () => {
    const [loanData, setLoanData] = useState([]);  // State to hold loan data
    const [loading, setLoading] = useState(true);  // State to manage loading
    const [error, setError] = useState(null);      // State to manage error

    useEffect(() => {
        const getLoanData = async () => {
            try {
                const data = await fetchAllBankRates();
                setLoanData(data.data);
                console.log('Loan Data:', data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getLoanData();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center'>
                <div className="w-10 h-10 border-2 border-t-2 border-gray-200 text rounded-full animate-spin border-t-yellow-500"></div>
            </div>
        )
    }

    if (error) {
        return <p className="text-center text-lg text-red-600">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto px-40 my-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Home Loan Interest Rates Comparison in India</h1>

            {/* Table Section */}
            <div className="overflow-x-auto border">
                <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
                    <thead>
                        <tr className="bg-yellow-600 text-white">
                            <th className="w-1/3 py-4 px-6 text-left">Bank Name</th>
                            <th className="w-1/4 py-4 px-6 text-left">Interest Rate</th>
                            <th className="w-1/4 py-4 px-6 text-left">Processing Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanData.map((loan, index) => (
                            <tr key={loan.BankId} className="border-b">
                                <td className="py-4 px-6">{loan.BankName}</td>
                                <td className="py-4 px-6">{loan.InterestRate}</td>
                                <td className="py-4 px-6">{loan.ProcessingFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Text Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">What Affects Home Loan Interest Rates?</h2>
                <p className="mb-4">
                    Home loan interest rates in India depend on several factors. These include the Reserve Bank of India's repo rate, inflation, demand and supply in the financial market, and the financial policies set by individual banks. Additionally, the applicant’s credit score, income, loan tenure, and the amount borrowed also influence the rate of interest. A strong credit history can help borrowers secure lower interest rates, while fluctuations in the economy or housing market can lead to varying interest rates across different lenders.
                </p>
                <p className="mb-4">
                    Fixed interest rates remain constant throughout the loan tenure, while floating interest rates change depending on market fluctuations. Most banks offer both fixed and floating rate options for home loans. Borrowers should carefully consider both options and evaluate their financial situation before opting for a home loan.
                </p>

                <h2 className="text-2xl font-bold mb-4">How to Get the Best Home Loan Interest Rate?</h2>
                <p className="mb-4">
                    To get the best home loan interest rate, it is important to compare rates across various banks and financial institutions. Borrowers should also work towards improving their credit scores, maintain a stable income, and keep track of market trends. By negotiating with the lender or choosing a shorter loan tenure, it may be possible to reduce the interest rate. Finally, taking the help of loan aggregators and consultants can simplify the process and help borrowers find the best deal.
                </p>

                <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                <p>
                    Home loan interest rates in India vary widely across lenders, and it’s essential for borrowers to stay informed. Whether you’re a first-time homebuyer or refinancing an existing loan, understanding the factors that affect home loan rates and shopping around for the best deal can save you money in the long run.
                </p>
            </div>
        </div>
    );
};

export default HomeLoanInterestRates;
