import React from 'react';
import { ArrowRight } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Consciousness Studies</h1>
        <p className="text-xl text-gray-600 mb-6">Explore the depths of human consciousness and unlock the mysteries of the mind.</p>
        <a href="/about" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
          Learn More <ArrowRight className="ml-2" />
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">The Nature of Consciousness</h3>
            <p className="text-gray-600 mb-4">Exploring the fundamental questions about consciousness and its role in human experience.</p>
            <a href="/blog/nature-of-consciousness" className="text-purple-600 hover:text-purple-800">Read more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Meditation and Brain Plasticity</h3>
            <p className="text-gray-600 mb-4">Discover how regular meditation practice can reshape your brain and enhance cognitive function.</p>
            <a href="/blog/meditation-brain-plasticity" className="text-purple-600 hover:text-purple-800">Read more</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">The Science of Lucid Dreaming</h3>
            <p className="text-gray-600 mb-4">Uncover the latest research on lucid dreaming and its potential for personal growth and self-discovery.</p>
            <a href="/blog/science-lucid-dreaming" className="text-purple-600 hover:text-purple-800">Read more</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Consciousness and Quantum Physics Symposium</h3>
          <p className="text-gray-600 mb-4">Join leading researchers and thinkers for a groundbreaking exploration of consciousness and quantum mechanics.</p>
          <p className="text-sm text-gray-500">Date: June 15-17, 2024 | Location: Virtual Event</p>
          <a href="/events/quantum-consciousness-symposium" className="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">Register Now</a>
        </div>
      </section>

      <SupportUs />
    </div>
  );
};

export default Home;