
import React from 'react';
import { MessageCircle, Droplets, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12 text-water-500" />,
      title: "Express Yourself",
      description: "Share your thoughts, feelings, or struggles without judgment. Speak freely in a safe, confidential space."
    },
    {
      icon: <Droplets className="w-12 h-12 text-water-500" />,
      title: "Find Clarity",
      description: "Through gentle conversation and prompts, discover insights and perspectives that bring clarity to your emotions."
    },
    {
      icon: <Heart className="w-12 h-12 text-water-500" />,
      title: "Heal & Grow",
      description: "Experience emotional release, develop coping strategies, and cultivate inner peace and resilience."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-water-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-water-100 text-water-700 rounded-full text-sm font-medium mb-4">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">How It <span className="text-water-600">Works</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple process designed to help you process emotions and find peace, 
            inspired by modern psychology and mindfulness practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-water-100 hover:border-water-300 transform hover:translate-y-[-5px]"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative p-4 bg-water-50 rounded-2xl">
                  {step.icon}
                  <span className="absolute inset-0 rounded-2xl bg-water-200/50 animate-ripple -z-10"></span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
