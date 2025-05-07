
import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-4 sm:px-6 bg-background/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-water-500 mr-2" />
            <span className="text-xl font-bold text-foreground">WaterTalk</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-water-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-water-600 transition-colors">About</Link>
            <a href="#how-it-works" className="text-foreground hover:text-water-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-water-600 transition-colors">Testimonials</a>
          </nav>
          <button className="text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-full hover:bg-water-200 transition-colors">
            Sign In
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
