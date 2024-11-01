import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="h-5 w-5 text-white" />
            <a href="mailto:hello@dealever.ca" className="text-white transition-colors">
              hello@dealever.ca
            </a>
          </div>
          <p className="text-gray-100 text-sm">
            © {new Date().getFullYear()} Dealever. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}