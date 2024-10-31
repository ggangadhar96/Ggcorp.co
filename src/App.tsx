import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import IndustryCard from './components/IndustryCard';
import Footer from './components/Footer';
import { industries } from './data/industries';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming businesses across sectors with innovative solutions and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of companies already innovating with ggcorp.co</p>
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}