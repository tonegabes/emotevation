import React from 'react';

interface QuoteCardProps {
  name: string;
  date: string;
  quote: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ name, date, quote }) => {
  return (
    <div className="w-full max-w-xl p-8 mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 transform transition-all hover:scale-[1.01] relative mt-10">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg border-4 border-white/20">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12.9C16 11.9 15.19 11.07 14.2 11C14.08 10.99 13.96 10.99 13.84 11C12.94 11.07 12.18 11.9 12.18 12.81C12.18 13.67 12.81 14.4 13.66 14.57V15.55C13.66 16.01 14.04 16.4 14.5 16.4C14.96 16.4 15.34 16.02 15.34 15.56V14.58C16.2 14.4 16.82 13.67 16.82 12.81C16.82 12.8 16.81 12.8 16.81 12.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 8.8V9.35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.5 17.45V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 16.4C7.1 16.4 6 15.3 6 13.9V12.4C6 11 7.1 9.90002 8.5 9.90002C9.9 9.90002 11 11 11 12.4V13.9C11 15.3 9.9 16.4 8.5 16.4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 16.4V18.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 9.90001V8.10001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-2 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Your Quote for Today
        </h2>
        
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
        
        <div className="text-center">
          <p className="text-sm font-semibold mb-1">For {name}</p>
          <p className="text-xs opacity-75 mb-6">{date}</p>
        </div>
        
        <blockquote className="text-xl italic text-center mb-6 font-light leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        <div className="w-full pt-4 border-t border-white/10">
          <p className="text-xs text-center text-white/60">
            This quote is uniquely generated for you based on your name and this date
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
