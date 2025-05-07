
import React from 'react';
import { Button } from '../components/ui/button';
import WaterAnimation from './WaterAnimation';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center px-4 sm:px-6">
      <div className="absolute inset-0 z-0">
        <WaterAnimation />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 animate-float">
          <span className="inline-block">Talk.</span>{' '}
          <span className="inline-block animate-float-delay-1">Release.</span>{' '}
          <span className="inline-block animate-float-delay-2">Feel better.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Your safe space to express emotions, find clarity, and heal through gentle 
          conversation—like the soothing embrace of cool, calm waters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-water-600 hover:bg-water-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl">
            Start Talking
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-water-300 text-water-700 hover:bg-water-50 transition-all duration-300 rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
