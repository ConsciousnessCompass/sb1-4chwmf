import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const Blog: React.FC = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  // Simulated blog posts
  const blogPosts = [
    { id: 1, title: "The Nature of Consciousness", category: "Philosophy", excerpt: "Exploring the fundamental questions about consciousness..." },
    { id: 2, title: "Meditation and Brain Plasticity", category: "Neuroscience", excerpt: "Discover how regular meditation practice can reshape your brain..." },
    { id: 3, title: "The Science of Lucid Dreaming", category: "Sleep Science", excerpt: "Uncover the latest research on lucid dreaming and its potential..." },
    // Add more blog posts here
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowEmailPopup(true), 10000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog & Articles</h1>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/800x600?${post.category.toLowerCase()}`} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-purple-600 font-semibold">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-800">Read more</a>
            </div>
          </div>
        ))}
      </div>

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Get Our Free E-Book!</h2>
            <p className="mb-4">Sign up for our newsletter and receive a free e-book on "Introduction to Consciousness Studies".</p>
            <form className="space-y-4">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">Get My Free E-Book</button>
            </form>
            <button onClick={() => setShowEmailPopup(false)} className="mt-4 text-sm text-gray-600 hover:text-gray-800">No thanks, I'll pass</button>
          </div>
        </div>
      )}

      <SupportUs />
    </div>
  );
};

export default Blog;