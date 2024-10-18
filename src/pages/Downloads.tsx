import React, { useState } from 'react';
import { Download, Lock } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const Downloads: React.FC = () => {
  const [activeTab, setActiveTab] = useState('free');

  const freeDownloads = [
    { id: 1, name: "Introduction to Consciousness Studies", type: "PDF", size: "2.5 MB" },
    { id: 2, name: "Meditation Basics Guide", type: "PDF", size: "1.8 MB" },
    { id: 3, name: "Consciousness Research Bibliography", type: "PDF", size: "3.2 MB" },
  ];

  const paidDownloads = [
    { id: 1, name: "Advanced Consciousness Exploration Techniques", type: "Video Course", size: "1.2 GB", price: 49.99 },
    { id: 2, name: "The Neuroscience of Altered States", type: "eBook", size: "5.6 MB", price: 19.99 },
    { id: 3, name: "Lucid Dreaming Mastery Program", type: "Audio Course", size: "800 MB", price: 39.99 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Downloads</h1>

      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === 'free'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('free')}
          >
            Free Downloads
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === 'paid'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('paid')}
          >
            Paid Downloads
          </button>
        </div>
      </div>

      {activeTab === 'free' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeDownloads.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">Type: {item.type} | Size: {item.size}</p>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center">
                <Download className="mr-2" size={20} />
                Download
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'paid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidDownloads.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">Type: {item.type} | Size: {item.size}</p>
              <p className="text-purple-600 font-semibold mb-4">${item.price.toFixed(2)}</p>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center">
                <Lock className="mr-2" size={20} />
                Purchase
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Membership Benefits</h2>
        <p className="text-gray-600 mb-4">
          Upgrade to a premium membership to get access to all paid downloads and exclusive content!
        </p>
        <a href="/membership" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
          Learn More About Membership
        </a>
      </div>

      <SupportUs />
    </div>
  );
};

export default Downloads;