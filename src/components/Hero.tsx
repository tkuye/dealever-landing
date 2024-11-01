import React from 'react';
import { Zap, Battery, BarChart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing
            <span className="text-blue-500"> EV Education</span>
            <br />
            for Car Dealerships
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Empower your dealership with innovative microsite solutions that showcase your EV inventory's features and data.
          </p>
          <a
            href="mailto:hello@dealever.ca"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Transform Your Dealership Today
          </a>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-blue-500" />,
              title: "Smart EV Features",
              description: "Interactive displays of vehicle capabilities and charging specifications"
            },
            {
              icon: <Battery className="h-8 w-8 text-blue-500" />,
              title: "Range Analytics",
              description: "Real-time range calculations and charging station mapping"
            },
            {
              icon: <BarChart className="h-8 w-8 text-blue-500" />,
              title: "Performance Metrics",
              description: "Detailed performance data and comparison tools"
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