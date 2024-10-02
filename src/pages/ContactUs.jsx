import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Submitted!');
        // Form submission logic goes here
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                {/* Contact Header */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
                <p className="text-center text-lg text-gray-700 mb-10">
                    Have questions or need help? Reach out to us and we'll respond within 24 hours.
                </p>

                {/* Contact Form */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold hover:bg-yellow-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                    <p className="text-lg text-gray-700">
                        <strong>Phone:</strong> 8888-900-700 <br />
                        <strong>Email:</strong> <a href="mailto:info@rupeemantra.com" className="underline text-yellow-500">info@rupeemantra.com</a>
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        123, RupeeMantra Building, Financial Hub, Mumbai, India.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
