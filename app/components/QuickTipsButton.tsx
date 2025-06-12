"use client";

import React from 'react';
import { Button, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

interface QuickTipsButtonProps {
  onClick: () => void;
}

const QuickTipsButton: React.FC<QuickTipsButtonProps> = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Tooltip content="Tips & Help" placement="left">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
          size="lg"
          isIconOnly
          onClick={onClick}
          aria-label="Show help and tips"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M12 16.5V12.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M12 8.5C11.9 8.5 11.8 8.5 11.75 8.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Tooltip>
    </motion.div>
  );
};

export default QuickTipsButton;
