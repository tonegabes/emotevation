"use client";

import React from 'react';
import { Card, CardBody, Button, ScrollShadow, Chip } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

interface HistoryQuote {
  id: string;
  name: string;
  date: string;
  quote: string;
  isUnmotivational: boolean;
  timestamp: number;
}

interface QuoteHistoryProps {
  history: HistoryQuote[];
  onSelectQuote: (quote: HistoryQuote) => void;
  onClearHistory: () => void;
}

const QuoteHistory: React.FC<QuoteHistoryProps> = ({ 
  history, 
  onSelectQuote,
  onClearHistory
}) => {
  return (
    <Card className="w-full shadow-md glass-card" radius="lg">
      <CardBody className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-md font-semibold">Quote History</h3>
          {history.length > 0 && (
            <Button 
              size="sm" 
              variant="light" 
              color="danger"
              onClick={onClearHistory}
            >
              Clear All
            </Button>
          )}
        </div>
        
        <ScrollShadow className="max-h-48">
          {history.length === 0 ? (
            <div className="text-center py-4 text-default-400 text-sm">
              No quotes in history yet
            </div>
          ) : (
            <AnimatePresence>
              {history.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="mb-2"
                >
                  <Card 
                    isPressable 
                    radius="sm" 
                    className="bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all"
                    onClick={() => onSelectQuote(item)}
                  >
                    <CardBody className="p-2 px-3">
                      <div className="flex justify-between items-center">
                        <div className="truncate flex-1">
                          <div className="font-medium text-sm truncate">
                            {item.name} - {item.date}
                          </div>
                          <div className="text-xs text-default-500 truncate">
                            &ldquo;{item.quote.substring(0, 40)}...&rdquo;
                          </div>
                        </div>
                        <Chip 
                          size="sm" 
                          variant="flat" 
                          color={item.isUnmotivational ? "default" : "secondary"}
                          className="ml-2"
                        >
                          {item.isUnmotivational ? "Reality" : "Motivational"}
                        </Chip>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

export default QuoteHistory;
