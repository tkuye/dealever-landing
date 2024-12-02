import React from 'react';
import { MessageSquare, Brain, Database, Calculator } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      title: "Natural Conversations",
      description: "Ask questions about EVs in plain English and get clear, honest answers from our AI assistant."
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "Intelligent Matching",
      description: "Our AI analyzes your needs, driving habits, and preferences to recommend the perfect EV for you."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Data",
      description: "Access millions of data points about EVs, charging networks, and real owner experiences."
    },
    {
      icon: <Calculator className="h-6 w-6 text-blue-500" />,
      title: "Complete Cost Analysis",
      description: "Get transparent pricing, utility rates, charging costs, and installation quotes all in one place."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your AI EV Guide</h2>
          <p className="mt-4 text-xl text-gray-600">Skip the sales pressure - get honest answers and make confident decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}