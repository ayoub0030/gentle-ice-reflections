
import React from 'react';
import { Droplets } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-water-800 text-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Droplets className="h-10 w-10 text-water-300 mr-3" />
            <span className="text-2xl font-bold text-white">WaterTalk</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-water-200 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-water-200 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-water-200 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-water-200 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-water-700 pt-8 mt-8 text-center text-water-300 text-sm">
          <p>&copy; {new Date().getFullYear()} WaterTalk. All rights reserved.</p>
          <p className="mt-2">Your space to feel, reflect, and heal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
