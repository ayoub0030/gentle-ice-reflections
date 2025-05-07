
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { Droplets, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-4 sm:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-water-100/30 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-water-600 mr-2" />
            <span className="text-xl font-bold text-foreground">
              <span className="text-water-600">Water</span>Talk
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-water-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-water-600 transition-colors">About</Link>
            <a href="#how-it-works" className="text-foreground hover:text-water-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-water-600 transition-colors">Testimonials</a>
            <a href="#faq" className="text-foreground hover:text-water-600 transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-full hover:bg-water-200 transition-colors hidden md:block">
              Sign In
            </button>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-water-100 animate-fade-in p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-water-600 font-medium px-4 py-2 hover:bg-water-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground px-4 py-2 hover:bg-water-50 hover:text-water-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="#how-it-works" 
                className="text-foreground px-4 py-2 hover:bg-water-50 hover:text-water-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground px-4 py-2 hover:bg-water-50 hover:text-water-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-foreground px-4 py-2 hover:bg-water-50 hover:text-water-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-full hover:bg-water-200 transition-colors text-left mt-2">
                Sign In
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
