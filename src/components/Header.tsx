import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Consciousness Studies</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-purple-600">Shop</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-purple-600">Donate</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
              <li><Link to="/membership" className="text-gray-600 hover:text-purple-600">Membership</Link></li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 bg-white">
            <ul className="space-y-2">
              <li><Link to="/" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/blog" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/shop" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
              <li><Link to="/donate" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Donate</Link></li>
              <li><Link to="/about" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/membership" className="block text-gray-600 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Membership</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;