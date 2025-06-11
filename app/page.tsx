"use client";

import { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import { generateQuote, formatDate } from './utils/quoteGenerator';

export default function Home() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [isUnmotivational, setIsUnmotivational] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Set the current date on component mount
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, []);

  const handleGenerateQuote = () => {
    if (name.trim() === "") return;
    
    setIsGenerating(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const result = generateQuote(name, currentDate);
      setQuote(result.text);
      setIsUnmotivational(result.isUnmotivational);
      setHasGenerated(true);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Daily Motivation
          </h1>
          <p className="text-lg text-white/80">Get your personalized motivational quote for the day</p>
        </header>
        
        <main className="w-full max-w-md mx-auto flex flex-col items-center space-y-8">
          <div className="w-full space-y-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm transition"
              />
            </div>
            
            <button
              onClick={handleGenerateQuote}
              disabled={!name.trim() || isGenerating}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Your Quote"
              )}
            </button>
          </div>
          
          {hasGenerated && (
            <div className="mt-12 w-full animate-fade-in relative">
              <QuoteCard 
                name={name} 
                date={currentDate} 
                quote={quote} 
                isUnmotivational={isUnmotivational}
              />
            </div>
          )}
        </main>
        
        <footer className="mt-16 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Daily Motivation Generator</p>
          <p className="mt-2 text-xs opacity-60">Every name and date produces a unique quote</p>
        </footer>
      </div>
    </div>
  );
}
