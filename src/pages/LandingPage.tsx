import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Unlock the Mysteries of Consciousness</h1>
          <p className="text-xl">Join our community of researchers, practitioners, and enthusiasts exploring the frontiers of human awareness.</p>
        </header>

        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random/800x600?meditation" alt="Meditation" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Limited Time Offer</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Get 50% off our "Consciousness Explorer's Kit"</a>
              <p className="mt-2 text-gray-500">Dive deep into consciousness studies with our curated collection of resources, guided meditations, and exclusive research insights.</p>
            </div>
          </div>
        </div>

        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Gain</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Access to cutting-edge research",
              "Practical techniques for consciousness exploration",
              "Connection with a global community of seekers",
              "Personalized guidance from experts",
              "Exclusive webinars and online events",
              "Comprehensive resource library"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check className="text-green-400 mr-2" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-r-md hover:bg-yellow-600 transition duration-300 flex items-center"
              >
                Join Now
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </form>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Sarah Thompson",
                role: "Neuroscientist",
                quote: "The resources and community here have been invaluable for my research. It's truly a hub of innovation in consciousness studies."
              },
              {
                name: "Michael Chen",
                role: "Meditation Practitioner",
                quote: "I've experienced profound personal growth through the techniques I've learned here. It's opened up new dimensions of awareness for me."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <a href="/membership" className="inline-block px-8 py-3 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600 transition duration-300 text-lg font-semibold">
            Explore Membership Options
          </a>
        </div>

        <SupportUs />
      </div>
    </div>
  );
};

export default LandingPage;