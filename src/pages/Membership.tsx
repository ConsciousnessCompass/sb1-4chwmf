import React from 'react';
import { Check, X } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const Membership: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        "Access to basic articles",
        "Monthly newsletter",
        "Community forum access",
      ],
      notIncluded: [
        "Premium content access",
        "Live webinars",
        "Exclusive downloads",
        "1-on-1 consultations",
      ]
    },
    {
      name: "Premium",
      price: 9.99,
      features: [
        "All Free plan features",
        "Full access to premium content",
        "Participation in live webinars",
        "Exclusive downloads",
        "Discounts on workshops and events",
      ],
      notIncluded: [
        "1-on-1 consultations",
      ]
    },
    {
      name: "Ultimate",
      price: 19.99,
      features: [
        "All Premium plan features",
        "Monthly 1-on-1 consultation",
        "Early access to new research findings",
        "Personalized study recommendations",
        "VIP access to annual consciousness conference",
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Membership Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold text-purple-600 mb-6">
              ${plan.price}<span className="text-sm text-gray-500">/month</span>
            </p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="flex items-center mb-2 text-gray-400">
                  <X className="text-red-500 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
              {plan.price === 0 ? "Sign Up" : "Subscribe Now"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Become a Member?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Gain deeper insights into consciousness studies</li>
          <li>Stay up-to-date with the latest research and findings</li>
          <li>Connect with like-minded individuals and experts in the field</li>
          <li>Access exclusive content and resources</li>
          <li>Support ongoing research in consciousness studies</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Is there a commitment period?</h3>
            <p className="text-gray-600">No, all our plans are month-to-month. You can cancel your subscription at any time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Do you offer student discounts?</h3>
            <p className="text-gray-600">Yes, we offer a 20% discount for students. Please contact our support team with proof of your student status to apply for the discount.</p>
          </div>
        </div>
      </div>

      <SupportUs />
    </div>
  );
};

export default Membership;