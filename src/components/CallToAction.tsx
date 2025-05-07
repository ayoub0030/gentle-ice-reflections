
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-water-500/10 to-water-600/20 -z-10"></div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to experience emotional clarity?
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Take a moment for yourself. Start a conversation that could change how you feel today.
        </p>
        
        <Button size="lg" className="text-lg px-10 py-6 bg-water-600 hover:bg-water-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl">
          Start Talking Now
        </Button>
        
        <div className="mt-6">
          <Link to="/about" className="text-water-600 hover:text-water-700 font-medium">
            Learn more about how WaterTalk works →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
