import React from 'react';
import { Monitor, Users, Lightbulb, Gauge } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      title: "Interactive Microsites",
      description: "Custom-built digital showrooms that showcase your EV inventory with engaging, interactive features."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Staff Training",
      description: "Comprehensive EV education programs to empower your sales team with expert knowledge."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      title: "Consumer Education",
      description: "Easy-to-understand resources that help customers make informed decisions about EV adoption."
    },
    {
      icon: <Gauge className="h-6 w-6 text-blue-500" />,
      title: "Performance Tracking",
      description: "Advanced analytics to monitor engagement and optimize your EV sales strategy."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive EV Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to succeed in the electric vehicle market</p>
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