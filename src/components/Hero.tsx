import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4">
            <span className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              GG Corporation
            </span>
          </h1>
          <h2 className="text-4xl font-bold mb-6">
            Transforming Industries Through Innovation
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Leading the future with cutting-edge solutions across multiple sectors. We help businesses innovate, grow, and succeed in the digital age.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-400 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}