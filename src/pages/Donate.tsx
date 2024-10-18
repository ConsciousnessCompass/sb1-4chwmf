import React, { useState } from 'react';
import { DollarSign, Heart } from 'lucide-react';

const Donate: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Processing donation of $${amount || customAmount}`);
    setAmount('');
    setCustomAmount('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Support Our Research</h1>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-600 mb-6">
          Your donation helps us continue our groundbreaking research into consciousness and supports our educational programs.
        </p>

        <form onSubmit={handleDonation} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Select an amount:</label>
            <div className="grid grid-cols-3 gap-4">
              {['10', '25', '50', '100'].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`py-2 px-4 rounded-md ${
                    amount === value ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount('');
                  }}
                >
                  ${value}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount('');
                }}
                className="col-span-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Name (optional)</label>
            <input
              type="text"
              id="name"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email (optional)</label>
            <input
              type="email"
              id="email"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
          >
            <Heart className="mr-2" size={20} />
            Donate Now
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Ways to Support Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.patreon.com/" target="_blank" rel="noopener noreferrer" className="bg-[#FF424D] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 text-center">
              Support us on Patreon
            </a>
            <a href="https://www.gofundme.com/" target="_blank" rel="noopener noreferrer" className="bg-[#00B964] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 text-center">
              Donate via GoFundMe
            </a>
            <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer" className="bg-[#003087] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 text-center">
              Donate with PayPal
            </a>
            <a href="https://www.buymeacoffee.com/" target="_blank" rel="noopener noreferrer" className="bg-[#FFDD00] text-gray-800 py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 text-center">
              Buy us a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;