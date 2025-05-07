
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
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
    <section id="faq" className="py-20 px-4 sm:px-6 bg-water-50">
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
  );
};

export default FAQ;
