
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I didn't know I needed this until I tried. It felt like the mental equivalent of stepping into a cool stream on a hot day.",
      author: "Sarah, 34"
    },
    {
      quote: "In just five minutes of conversation, I felt a weight lift that I'd been carrying for weeks.",
      author: "Michael, 29"
    },
    {
      quote: "It's not therapy, it's not a friend, it's something completely unique—and exactly what I needed.",
      author: "Jamie, 42"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-water-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-water-100 text-water-700 rounded-full text-sm font-medium mb-4">Real Experiences</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">Voices of <span className="text-water-600">Healing</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who found clarity and emotional release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card relative group"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${0.8 + index * 0.05})`,
                transform: `translateY(${index * 5}px)`
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-water-300 via-water-500 to-water-300"></div>
              <div className="absolute -top-3 -left-3 bg-water-100 p-2 rounded-full shadow-md group-hover:bg-water-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-water-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.48.11-.894.335-1.24.673l-.673-.673c.237-.332.75-.667 1.54-1.007.8-.34 1.74-.51 2.82-.51 1.197 0 2.203.28 3.017.84.813.56 1.22 1.51 1.22 2.858 0 1.01-.33 1.86-.99 2.527-.67.678-1.73 1.17-3.17 1.477l-.4-1.022c.89-.22 1.55-.54 2.01-.97.46-.42.69-.99.69-1.7zM21.97 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.813-.56-.117-1.09-.12-1.57-.007-.48.12-.893.34-1.22.68l-.68-.683c.236-.332.75-.667 1.54-1.007.8-.34 1.74-.51 2.82-.51 1.197 0 2.206.28 3.02.84.82.56 1.22 1.51 1.22 2.858 0 1.01-.33 1.86-.99 2.527-.67.678-1.73 1.17-3.17 1.477l-.4-1.022c.89-.22 1.55-.54 2-97.46-.42.69-.99.69-1.7z"/>
                </svg>
              </div>
              <div className="pt-6">
                <p className="text-xl mb-6 text-foreground italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center justify-end">
                  <div className="w-10 h-1 bg-water-200 mr-3 rounded-full"></div>
                  <p className="text-water-700 font-medium">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
