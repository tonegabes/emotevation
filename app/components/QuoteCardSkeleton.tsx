"use client";

import { Card, CardBody, CardFooter, CardHeader, Divider, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from 'react';

const QuoteCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="max-w-xl mx-auto border-none shadow-xl">
        <CardHeader className="flex gap-3 justify-center relative pb-6 md:pb-8 pt-8 md:pt-10">
          <div className="flex flex-col items-center w-full">
            <Skeleton className="h-6 w-48 rounded-lg mb-3" />
            <div className="flex flex-col items-center space-y-2 w-full">
              <Skeleton className="h-4 w-32 rounded-lg" />
              <Skeleton className="h-3 w-24 rounded-lg" />
            </div>
          </div>
        </CardHeader>

        <Divider />

        <CardBody className="px-4 md:px-8 py-6 md:py-8 flex flex-col items-center space-y-4">
          {/* Emoji skeleton */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <Skeleton className="rounded-full w-24 h-24 md:w-28 md:h-28" />
          </motion.div>

          {/* Quote text skeleton */}
          <div className="w-full space-y-3">
            <Skeleton className="h-5 w-full rounded-lg" />
            <Skeleton className="h-5 w-5/6 rounded-lg mx-auto" />
            <Skeleton className="h-5 w-11/12 rounded-lg mx-auto" />
            <Skeleton className="h-5 w-3/4 rounded-lg mx-auto" />
          </div>
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
