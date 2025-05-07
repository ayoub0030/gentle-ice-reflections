
import React, { useState, useRef, useEffect } from 'react';
import { Droplets, Send, ArrowLeft, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

// Message type definition
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = () => {
  // State management
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! I\'m WaterTalk\'s AI companion. What\'s on your mind today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string>(localStorage.getItem('geminiApiKey') || '');
  const [showApiKeyModal, setShowApiKeyModal] = useState<boolean>(!localStorage.getItem('geminiApiKey'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!apiKey) {
      setShowApiKeyModal(true);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [
            ...messages.map(msg => ({
              role: msg.role === 'user' ? 'user' : 'model',
              parts: [{ text: msg.content }]
            })),
            {
              role: 'user',
              parts: [{ text: userMessage }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.candidates[0]?.content?.parts[0]?.text || "I'm having trouble responding right now. Please try again later.";
      
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast.error("Failed to get response from AI. Please check your API key and try again.");
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please check your API key or try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const saveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('geminiApiKey', apiKey);
      setShowApiKeyModal(false);
      toast.success("API key saved successfully!");
    } else {
      toast.error("Please enter a valid API key");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-water-50 to-water-100">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-water-100/30 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2 text-water-600" />
              <span className="sr-only md:not-sr-only text-water-600">Back to home</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-water-600 mr-2" />
            <span className="text-xl font-bold text-foreground">
              <span className="text-water-600">Water</span>Talk
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowApiKeyModal(true)}
              className="text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-full hover:bg-water-200 transition-colors hidden md:block"
            >
              API Key
            </button>
            
            <button 
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-water-100 animate-fade-in p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground px-4 py-2 hover:bg-water-50 hover:text-water-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => {
                  setShowApiKeyModal(true);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm font-medium px-4 py-2 bg-water-100 text-water-700 rounded-lg hover:bg-water-200 transition-colors"
              >
                API Key
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Chat container */}
      <div className="flex-grow flex flex-col max-w-3xl mx-auto w-full px-4 md:px-6 py-6 overflow-hidden">
        {/* Message area */}
        <div className="flex-grow overflow-y-auto mb-6 space-y-4 py-4">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-xl ${
                  message.role === 'user' 
                    ? 'bg-water-600 text-white ml-4 rounded-tr-none' 
                    : 'bg-white/70 backdrop-blur-sm border border-water-100 shadow-sm mr-4 rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] sm:max-w-[70%] p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-water-100 shadow-sm mr-4 rounded-tl-none">
                <div className="flex space-x-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-water-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-water-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 rounded-full bg-water-600 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSendMessage} className="relative">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-4 pr-12 resize-none rounded-xl border-water-200 focus:border-water-400 focus:ring-water-400 min-h-[100px] bg-white/80 backdrop-blur-sm shadow-md"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-3 bottom-3 bg-water-600 hover:bg-water-700 text-white p-2 rounded-full transition-all duration-200"
            size="icon"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>

      {/* API Key Modal */}
      {showApiKeyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border border-water-100 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-4">Enter Gemini API Key</h2>
            <p className="text-muted-foreground mb-6">
              To use WaterTalk's chat feature, please enter your Google Gemini API key.
              You can get one from <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-water-600 underline">Google AI Studio</a>.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                  API Key
                </label>
                <input
                  type="password"
                  id="apiKey"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-water-500 focus:border-water-500"
                  placeholder="Enter your Gemini API key"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => setShowApiKeyModal(false)}
                  className="border-water-300 text-water-700 hover:bg-water-50"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={saveApiKey}
                  className="bg-water-600 hover:bg-water-700 text-white"
                >
                  Save API Key
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
