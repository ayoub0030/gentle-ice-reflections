
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-water-500/10 to-water-600/20 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZWE1ZTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 -z-10"></div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10 bg-white/30 backdrop-blur-sm p-10 sm:p-16 rounded-3xl shadow-lg border border-white/30">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-water-500 rounded-full p-3 shadow-lg">
          <MessageCircle size={32} className="text-white" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready to experience <span className="text-water-600">emotional clarity</span>?
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Take a moment for yourself. Start a conversation that could change how you feel today.
        </p>
        
        <Button size="lg" className="text-lg px-10 py-7 bg-water-600 hover:bg-water-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]">
          Start Talking Now
        </Button>
        
        <div className="mt-8">
          <Link to="/about" className="text-water-600 hover:text-water-700 font-medium inline-flex items-center group">
            Learn more about how WaterTalk works 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
