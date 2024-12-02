import React from 'react';
import { MessageSquare, Shield, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Making EV Shopping
            <span className="text-blue-500"> Simple & Honest</span>
            <br />
            Through AI
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            Your trusted AI assistant for transparent EV information, helping you make confident decisions without the traditional sales pressure.
          </p>
          
          <a
            href="mailto:hello@dealever.ca"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Start Your EV Journey Today
          </a>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
              title: "AI-Powered Assistant",
              description: "Natural conversations with an AI trained on millions of EV data points to answer all your questions"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-500" />,
              title: "Unbiased Guidance",
              description: "Transparent, pressure-free advice to help you find the perfect EV for your needs"
            },
            {
              icon: <Calculator className="h-8 w-8 text-blue-500" />,
              title: "Complete Cost Analysis",
              description: "Get electric rates, charging installation quotes, and total ownership costs upfront"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}