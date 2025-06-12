"use client";

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";

const QuoteCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="max-w-xl mx-auto border-none shadow-xl">
        <CardHeader className="flex gap-3 justify-center relative pb-6 md:pb-8 pt-8 md:pt-10">
          <motion.div 
            className="absolute -top-8"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Skeleton className="rounded-full w-14 h-14 md:w-16 md:h-16" />
          </motion.div>
          
          <div className="flex flex-col items-center mt-6 md:mt-8 w-full">
            <Skeleton className="h-6 w-48 rounded-lg mb-3" />
            <div className="flex flex-col items-center space-y-2 w-full">
              <Skeleton className="h-4 w-32 rounded-lg" />
              <Skeleton className="h-3 w-24 rounded-lg" />
            </div>
          </div>
        </CardHeader>
        
        <Divider />
        
        <CardBody className="px-4 md:px-8 py-6 md:py-8 flex flex-col items-center space-y-3">
          <Skeleton className="h-5 w-full rounded-lg" />
          <Skeleton className="h-5 w-5/6 rounded-lg" />
          <Skeleton className="h-5 w-11/12 rounded-lg" />
          <Skeleton className="h-5 w-3/4 rounded-lg" />
        </CardBody>
        
        <Divider />
        
        <CardFooter className="flex justify-center text-center px-4 md:px-6 py-2 md:py-3">
          <Skeleton className="h-3 w-72 rounded-lg" />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default QuoteCardSkeleton;
