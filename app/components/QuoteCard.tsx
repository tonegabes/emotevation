"use client";

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

interface QuoteCardProps {
  name: string;
  date: string;
  quote: string;
  isUnmotivational?: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ name, date, quote, isUnmotivational = false }) => {
  return (
    <motion.div
      initial={{ boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)" }}
      whileHover={{ boxShadow: "0 10px 25px 0 rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <Card className="max-w-xl mx-auto border-none shadow-xl">
        <CardHeader className="flex gap-3 justify-center relative pb-6 md:pb-8 pt-8 md:pt-10">
          <motion.div 
            className="absolute -top-8"
            initial={{ y: -10, scale: 0.8, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar 
              radius="full"
              size="lg"
              className={`w-14 h-14 md:w-16 md:h-16 text-white shadow-lg border-4 ${
                isUnmotivational
                  ? 'bg-gradient-to-br from-zinc-600 to-zinc-800 border-zinc-500/20'
                  : 'bg-gradient-to-br from-purple-600 to-pink-600 border-white/20'
              }`}
              icon={
                isUnmotivational ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12.9C16 11.9 15.19 11.07 14.2 11C14.08 10.99 13.96 10.99 13.84 11C12.94 11.07 12.18 11.9 12.18 12.81C12.18 13.67 12.81 14.4 13.66 14.57V15.55C13.66 16.01 14.04 16.4 14.5 16.4C14.96 16.4 15.34 16.02 15.34 15.56V14.58C16.2 14.4 16.82 13.67 16.82 12.81C16.82 12.8 16.81 12.8 16.81 12.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 8.8V9.35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 17.45V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 16.4C7.1 16.4 6 15.3 6 13.9V12.4C6 11 7.1 9.90002 8.5 9.90002C9.9 9.90002 11 11 11 12.4V13.9C11 15.3 9.9 16.4 8.5 16.4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 16.4V18.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 9.90001V8.10001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center mt-6 md:mt-8"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className={`text-xl font-bold ${
              isUnmotivational
                ? 'text-zinc-700 dark:text-zinc-400'
                : 'text-purple-600 dark:text-purple-400'
            }`}>
              {isUnmotivational ? 'Your Reality Check for Today' : 'Your Quote for Today'}
            </h2>
            
            <div className="flex flex-col items-center space-y-1 mt-2">
              <p className="text-sm font-semibold">For {name}</p>
              <p className="text-xs text-default-500">{date}</p>
            </div>
          </motion.div>
        </CardHeader>
        
        <Divider />
        
        <CardBody className="px-4 md:px-8 py-4 md:py-6">
          <motion.blockquote 
            className="text-lg md:text-xl italic text-center font-light leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &ldquo;{quote}&rdquo;
          </motion.blockquote>
        </CardBody>
        
        <Divider />
        
        <CardFooter className="flex justify-center text-center text-xs text-default-500 px-4 md:px-6 py-2 md:py-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {isUnmotivational 
              ? 'This reality check is uniquely generated for you based on your name and this date' 
              : 'This quote is uniquely generated for you based on your name and this date'}
          </motion.p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default QuoteCard;
