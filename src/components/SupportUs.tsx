import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const SupportUs: React.FC = () => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md my-8">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Support Our Research</h3>
      <p className="text-gray-700 mb-4">Your contribution helps us continue our groundbreaking work in consciousness studies.</p>
      <Link to="/donate" className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
        <Heart className="mr-2" size={18} />
        Support Us
      </Link>
    </div>
  );
};

export default SupportUs;