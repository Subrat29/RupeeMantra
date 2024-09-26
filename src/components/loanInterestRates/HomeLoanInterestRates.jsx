import React from 'react';

const HomeLoanInterestRates = () => {
    const loanData = [
        { bank: "ICICI BANK", loanRate: "8.75%", processingFee: "0.25% of the loan amount" },
        { bank: "State Bank of India (SBI)", loanRate: "8.50%", processingFee: "NIL" },
        { bank: "LIC HFL", loanRate: "8.50%", processingFee: "0.25% + GST" },
        { bank: "HDFC Bank", loanRate: "8.60%", processingFee: "50%* Off + GST" },
        { bank: "Bank Of Baroda", loanRate: "8.40%", processingFee: "NIL" },
        { bank: "IDFC FIRST BANK", loanRate: "8.85%", processingFee: "0.20%" },
        { bank: "Union Bank", loanRate: "8.35%", processingFee: "NIL" },
        { bank: "Kotak Bank", loanRate: "8.70%", processingFee: "Up to 1% of the loan amount" },
        { bank: "Indian bank", loanRate: "8.40%", processingFee: "Up to 1.00% of the loan amount" },
        { bank: "Yes Bank", loanRate: "9.00%", processingFee: "For Salaried - Rs 10,000+GST; Self Employed - 0.5%+GST" },
        { bank: "Sundaram Home Finance", loanRate: "8.75%", processingFee: "Up to 0.75% of the loan amount with applicable GST" },
        { bank: "DCB Bank", loanRate: "9.75%", processingFee: "Up to 2% of the loan amount, subject to a minimum of Rs.5,000" },
        { bank: "Tata Capital", loanRate: "8.70%", processingFee: "Initial Processing Fees of Rs. 999 + GST" },
        { bank: "PNB Housing Finance", loanRate: "8.50%", processingFee: "Rs 10,000 + GST" },
        { bank: "Federal Bank", loanRate: "8.50%", processingFee: "Rs 10,000 + Applicable taxes" },
        { bank: "Axis Bank", loanRate: "8.75%", processingFee: "Up to 1% (Min. Rs. 10,000) + GST" },
        { bank: "Bajaj Housing Finance", loanRate: "8.50%", processingFee: "NIL" },
        { bank: "L & T Housing Finance", loanRate: "8.70%", processingFee: "0.25% + GST" },
        { bank: "Bandhan Bank", loanRate: "8.65%", processingFee: "0.25% + GST" },
        { bank: "Shriram Housing Finance Limited", loanRate: "8.90%", processingFee: "Up to 0.50% of the loan amount or Rs. 5,000 whichever is higher + GST" },
        { bank: "RBL", loanRate: "8.90%", processingFee: "Up to 1.5% of the loan amount or Rs 15,000, whichever is higher + GST" },
        { bank: "Piramal Housing Finance", loanRate: "9.50%", processingFee: "0.75% of the loan amount" },
        { bank: "Fullerton Home Loan", loanRate: "8.75%", processingFee: "Up to 3% of the loan amount" },
        { bank: "Aditya Birla Housing Finance", loanRate: "8.60%", processingFee: "Up to 1% of the loan amount + GST" },
        { bank: "Standard Chartered", loanRate: "8.40%", processingFee: "0.25% + GST" },
        { bank: "Indostar Capital Home Finance", loanRate: "12.00%", processingFee: "Up to 1.25% of the loan amount" },
        { bank: "Central Bank Of India", loanRate: "8.35%", processingFee: "NIL" },
        { bank: "IIFL", loanRate: "8.75%", processingFee: "Up to 2% of the loan amount" },
        { bank: "Edelweiss Bank", loanRate: "8.70%", processingFee: "Up to 2% of the loan amount plus applicable taxes" },
        { bank: "Bank Of India", loanRate: "8.40%", processingFee: "0.25% + GST" },
        { bank: "South Indian Bank", loanRate: "8.70%", processingFee: "0.50% of the loan amount + GST (Min. Rs 5,000; Max. Rs 10,000)" },
        { bank: "Deutsche Bank", loanRate: "8.75%", processingFee: "Up to 1% of the loan amount" },
        { bank: "Muthoot Finance", loanRate: "11.00%", processingFee: "Up to 2% of the loan amount" },
        { bank: "IndusInd Bank", loanRate: "8.40%", processingFee: "1% of loan amount or Rs 10,000 whichever is higher" },
        { bank: "IDBI Bank", loanRate: "8.45%", processingFee: "NIL" },
        { bank: "Godrej Housing Finance", loanRate: "8.55%", processingFee: "3% of the loan amount" },
        { bank: "AU Small Finance Bank", loanRate: "9.50%", processingFee: "Up to 2% of the loan amount" },
        { bank: "Aadhar Housing Finance", loanRate: "9.99%", processingFee: "0.5% - 2% of the loan amount" },
        { bank: "Hinduja Housing Finance", loanRate: "10.50%", processingFee: "Rs. 4,600 (including service tax)" },
        { bank: "Cholamandalam", loanRate: "11.50%", processingFee: "Rs 5,000 (including GST)" },
        { bank: "Hero Housing Finance", loanRate: "10.00%", processingFee: "1% of the loan amount" },
        { bank: "Shubham Housing Finance", loanRate: "9.90%", processingFee: "1% of the loan amount" },
        { bank: "India Shelter", loanRate: "10.05%", processingFee: "Up to 2.5% (excluding GST)" },
        { bank: "SVC Co-Operative Bank", loanRate: "8.50%", processingFee: "NIL" },
        { bank: "ICICI Home Finance", loanRate: "9.10%", processingFee: "0.75%-3%" },
        { bank: "Indian Overseas Bank", loanRate: "8.40%", processingFee: "NIL" },
        { bank: "Indiabulls Housing Finance", loanRate: "8.75%", processingFee: "0.50% for salaried and 1% for SENP + Applicable taxes" },
        { bank: "CSB Home Loan", loanRate: "9.69%", processingFee: "0.50% of the loan amount" },
        { bank: "Cent Bank Home Finance Limited", loanRate: "9.95%", processingFee: "As per sanction terms" },
        { bank: "Mahindra Home Finance", loanRate: "8.50%", processingFee: "1-3.5% of the sanctioned amount +GST" },
        { bank: "Bank of Maharashtra", loanRate: "8.35%", processingFee: "NIL" },
        { bank: "GIC Housing Finance", loanRate: "8.80%", processingFee: "Rs. 2500 + GST" },
        { bank: "Punjab and Sind Bank", loanRate: "8.50%", processingFee: "Up to 0.25% of the loan amount" },
        { bank: "Utkarsh Small Finance Bank", loanRate: "9.00%", processingFee: "0.25% – 1% of the loan amount plus applicable taxes" },
        { bank: "Aavas Financiers Limited", loanRate: "8.50%", processingFee: "1% to 2% of the loan amount" },
    ];

    return (
        <div className="container mx-auto px-40 my-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Home Loan Interest Rates Comparison in India</h1>

            {/* Table Section */} 
            <div className="overflow-x-auto border">
                <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
                    <thead>
                        <tr className="bg-yellow-600 text-white">
                            <th className="w-1/3 py-4 px-6 text-left">Bank</th>
                            <th className="w-1/4 py-4 px-6 text-left">Loan Rate</th>
                            <th className="w-1/4 py-4 px-6 text-left">Processing Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanData.map((loan, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-4 px-6">{loan.bank}</td>
                                <td className="py-4 px-6">{loan.loanRate}</td>
                                <td className="py-4 px-6">{loan.processingFee}</td>
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
