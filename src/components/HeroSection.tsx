
import React from 'react';
import { Button } from '../components/ui/button';
import WaterAnimation from './WaterAnimation';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <WaterAnimation />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/5 p-8 sm:p-12 rounded-3xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-8 animate-float">
          <span className="inline-block bg-gradient-to-r from-water-600 to-water-400 bg-clip-text text-transparent">Talk.</span>{' '}
          <span className="inline-block animate-float-delay-1 bg-gradient-to-r from-water-500 to-water-300 bg-clip-text text-transparent">Release.</span>{' '}
          <span className="inline-block animate-float-delay-2 bg-gradient-to-r from-water-400 to-water-200 bg-clip-text text-transparent">Feel better.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Your safe space to express emotions, find clarity, and heal through gentle 
          conversation—like the soothing embrace of cool, calm waters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/chat">
            <Button size="lg" className="text-lg px-8 py-6 bg-water-600 hover:bg-water-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
              Start Talking
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-water-300 text-water-700 hover:bg-water-50 transition-all duration-300 rounded-full hover:translate-y-[-2px]">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
