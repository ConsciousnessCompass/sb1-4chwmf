import React from 'react';
import { Users, BookOpen, Award } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At Consciousness Studies, we are dedicated to exploring the frontiers of human consciousness through rigorous scientific research, innovative educational programs, and collaborative initiatives. Our mission is to deepen our understanding of consciousness and its role in human experience, fostering personal growth and societal transformation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Dr. Emily Chen", role: "Neuroscientist", bio: "Specializes in the neural correlates of consciousness." },
            { name: "Prof. Michael Johnson", role: "Philosopher", bio: "Explores the philosophical implications of consciousness research." },
            { name: "Dr. Sarah Thompson", role: "Psychologist", bio: "Focuses on altered states of consciousness and their therapeutic potential." },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={`https://source.unsplash.com/random/150x150?portrait&${index}`} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-purple-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Users className="text-purple-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Interdisciplinary Collaboration</h3>
            <p className="text-gray-600">We bring together experts from neuroscience, psychology, philosophy, and other fields to gain a comprehensive understanding of consciousness.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <BookOpen className="text-purple-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Research</h3>
            <p className="text-gray-600">Our team conducts pioneering studies using advanced neuroimaging techniques and innovative experimental paradigms.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <Award className="text-purple-600 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Education and Outreach</h3>
            <p className="text-gray-600">We offer workshops, online courses, and public lectures to share our findings and promote consciousness literacy.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-600 mb-4">
          We welcome collaboration from researchers, students, and consciousness enthusiasts. If you're interested in contributing to our work or participating in our studies, please get in touch.
        </p>
        <a href="/contact" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">Contact Us</a>
      </section>

      <SupportUs />
    </div>
  );
};

export default About;