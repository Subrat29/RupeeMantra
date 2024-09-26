import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="relative overflow-hidden py-12 bg-gray-800 text-gray-200 border-t transition-colors duration-300">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Logo and Copyright */}
                    <div className="flex flex-col justify-between">
                        <div className="text-white text-2xl font-bold">
                            RupeeMantra
                        </div>
                        <div>
                            <p className="text-sm">
                                &copy; 2024 RupeeMantra. All Rights Reserved.
                            </p>
                        </div>
                    </div>

                    {/* Home Loan Banks */}
                    <div>
                        <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                            Home Loan Banks
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    LIC HFL
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    HDFC
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    SBI
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    ICICI
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Axis Bank
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Loan Documents */}
                    <div>
                        <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                            Loan Documents
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Home Loans
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Loan Against Property
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Personal Loans
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Gold Loans
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Business Loans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                            Company
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Our Blogs
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    EMI Calculator
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Eligibility Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="tracking-wide mb-6 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                            Contact Us
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Email: rupeemantra@help.in
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Phone: +91 1234567890
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                                    Address: 123, XYZ Street, ABC City
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="mt-12 text-center">
                    <button className="rounded-full bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 px-6 py-2 transition-all duration-300">
                        <a href="#top" className="scroll-smooth">Back to Top</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Footer;