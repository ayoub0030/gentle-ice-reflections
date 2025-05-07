
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import Footer from '../components/Footer';
import { Droplets, MessageCircle, Heart, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

const About = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-16 h-16 text-water-500" />,
      title: "Express Yourself",
      description: "Share your thoughts, feelings, or struggles without judgment. Speak freely in a safe, confidential space where your emotions are acknowledged and validated."
    },
    {
      icon: <Droplets className="w-16 h-16 text-water-500" />,
      title: "Find Clarity",
      description: "Through gentle conversation and thoughtful prompts, discover insights and perspectives that bring clarity to your emotions and help you understand yourself better."
    },
    {
      icon: <Heart className="w-16 h-16 text-water-500" />,
      title: "Heal & Grow",
      description: "Experience emotional release, develop healthy coping strategies, and cultivate inner peace and resilience that stays with you beyond each conversation."
    }
  ];

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
    },
    {
      quote: "I use WaterTalk whenever I'm feeling overwhelmed. It helps me sort through my thoughts in a way nothing else can.",
      author: "Alex, 27"
    },
    {
      quote: "The simplicity is what makes it powerful. No judgment, just a chance to express myself and find clarity.",
      author: "Dana, 38"
    }
  ];

  const faqs = [
    {
      question: "Is WaterTalk a replacement for therapy?",
      answer: "No, WaterTalk is not a replacement for professional mental health services. While many users report feeling better after conversations, we recommend seeking professional help for serious mental health concerns."
    },
    {
      question: "How does WaterTalk protect my privacy?",
      answer: "Your conversations are private and encrypted. We don't store the content of your conversations long-term, and your personal data is never sold to third parties."
    },
    {
      question: "Can I use WaterTalk on any device?",
      answer: "Yes! WaterTalk is designed to work on smartphones, tablets, and desktop computers, allowing you to connect whenever you need emotional support."
    },
    {
      question: "How often can I talk to WaterTalk?",
      answer: "As often as you need. There are no session limits, and you can start a new conversation anytime you're feeling overwhelmed or need to process your emotions."
    },
    {
      question: "Is there a cost to use WaterTalk?",
      answer: "WaterTalk offers both free and premium options. The free version provides access to basic conversations, while premium subscriptions offer extended features and personalized experiences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-4 sm:px-6 bg-background/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-water-500 mr-2" />
            <span className="text-xl font-bold text-foreground">WaterTalk</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground hover:text-water-600 transition-colors">Home</a>
            <a href="/about" className="text-water-600 font-medium transition-colors">About</a>
            <a href="#how-it-works" className="text-foreground hover:text-water-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-water-600 transition-colors">Testimonials</a>
          </nav>
          <button className="text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-full hover:bg-water-200 transition-colors">
            Sign In
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* About Hero Section */}
        <section className="py-20 px-4 sm:px-6 bg-water-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">About WaterTalk</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              WaterTalk was created with a simple mission: to provide a space where people can express themselves freely and find emotional clarity through conversation.
            </p>
            <div className="flex justify-center">
              <Users className="h-20 w-20 text-water-400" />
            </div>
          </div>
        </section>

        {/* How It Works Section (Enhanced) */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-water-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple process designed to help you process emotions and find peace, 
                inspired by modern psychology and mindfulness practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our approach combines emotional intelligence with a safe, judgment-free environment, allowing you to explore your feelings at your own pace.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-water-600 hover:bg-water-700 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl">
                Experience It Now
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 bg-water-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Voices of Healing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from people who found clarity and emotional release using WaterTalk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <svg className="w-10 h-10 text-water-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.48.11-.894.335-1.24.673l-.673-.673c.237-.332.75-.667 1.54-1.007.8-.34 1.74-.51 2.82-.51 1.197 0 2.203.28 3.017.84.813.56 1.22 1.51 1.22 2.858 0 1.01-.33 1.86-.99 2.527-.67.678-1.73 1.17-3.17 1.477l-.4-1.022c.89-.22 1.55-.54 2.01-.97.46-.42.69-.99.69-1.7zM21.97 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.813-.56-.117-1.09-.12-1.57-.007-.48.12-.893.34-1.22.68l-.68-.683c.236-.332.75-.667 1.54-1.007.8-.34 1.74-.51 2.82-.51 1.197 0 2.206.28 3.02.84.82.56 1.22 1.51 1.22 2.858 0 1.01-.33 1.86-.99 2.527-.67.678-1.73 1.17-3.17 1.477l-.4-1.022c.89-.22 1.55-.54 2-97.46-.42.69-.99.69-1.7z"/>
                  </svg>
                  <p className="text-lg mb-4 text-foreground italic">{testimonial.quote}</p>
                  <p className="text-water-700 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about WaterTalk and how it can help you.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
