import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* About Section */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About RupeeMantra</h1>
                <p className="text-center text-lg text-gray-700 mb-10">
                    At RupeeMantra, we are committed to providing simplified and personalized financial solutions to individuals and businesses across India.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Mission Statement */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to empower every Indian to make smarter financial decisions. We aim to bridge the gap between financial providers and customers, offering a platform that ensures transparency, simplicity, and the best available rates.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To become India’s most trusted financial marketplace, helping millions achieve their financial goals with ease and confidence.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency</h3>
                            <p className="text-gray-700">We believe in being open and transparent in every transaction, ensuring trust and clarity for our customers.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                            <p className="text-gray-700">Honesty is at the heart of everything we do, ensuring ethical practices for long-term customer relationships.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Focus</h3>
                            <p className="text-gray-700">Our customers are our priority, and we are dedicated to providing solutions tailored to their financial needs.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Our team of experienced financial experts and customer care professionals is always ready to assist you.
                    </p>
                    <p className="text-lg text-gray-700">Together, we work tirelessly to make RupeeMantra the go-to platform for financial solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
