import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Consciousness Studies</h3>
            <p className="text-sm">Exploring the depths of human consciousness.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
              <li><a href="/membership" className="hover:text-purple-400">Membership</a></li>
              <li><a href="/downloads" className="hover:text-purple-400">Downloads</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook /></a>
              <a href="#" className="hover:text-purple-400"><Twitter /></a>
              <a href="#" className="hover:text-purple-400"><Instagram /></a>
              <a href="#" className="hover:text-purple-400"><Youtube /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <form className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-700 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Consciousness Studies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;