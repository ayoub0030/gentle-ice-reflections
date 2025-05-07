
import React from 'react';
import { Droplet, MessageCircle, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12 text-water-500" />,
      title: "Express Yourself",
      description: "Share your thoughts, feelings, or struggles without judgment. Speak freely in a safe, confidential space."
    },
    {
      icon: <Droplet className="w-12 h-12 text-water-500" />,
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
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-water-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple process designed to help you process emotions and find peace, 
            inspired by modern psychology and mindfulness practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  {step.icon}
                  <span className="absolute inset-0 rounded-full bg-water-200 animate-ripple -z-10"></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
