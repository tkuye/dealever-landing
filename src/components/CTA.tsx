import React from 'react';

export default function CTA() {
  return (
    <div className="bg-blue-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-20 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to revolutionize your EV sales?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the future of automotive retail with our cutting-edge EV solutions
            </p>
            <a
              href="mailto:hello@dealever.ca"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}