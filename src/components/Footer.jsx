import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <p>Email: support@rupeemantra.com</p>
                <p>Phone: +91-1234-567890</p>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6">
                <p>© 2024 RupeeMantra. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
