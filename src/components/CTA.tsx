import React from 'react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-t from-blue-500 to-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-20 md:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to revolutionize your EV sales?
            </h2>
            <p className="sm:text-xl text-lg text-blue-50 font-medium mb-8 max-w-2xl mx-auto">
              Join the future of automotive retail with our cutting-edge EV solutions.
            </p>
            <a
              href="mailto:hello@dealever.ca"
              className="inline-flex items-center px-7 py-2.5 border-2 border-white text-lg font-semibold rounded-lg bg-white text-blue-500 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}