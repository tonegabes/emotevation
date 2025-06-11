"use client";

import React from 'react';
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-8 px-4 mt-8 md:mt-12 text-center">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex flex-col gap-2 items-center">
          <motion.h2 
            className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            whileHover={{ scale: 1.05 }}
          >
            Emotevation
          </motion.h2>
          
          <p className="text-xs md:text-sm text-default-600 max-w-md mx-auto">
            Get your personalized motivational quote based on your name and date. Every combination generates a unique result.
          </p>
          
          <div className="flex gap-4 mt-3 md:mt-4 text-xs md:text-sm text-default-500">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="#" className="hover:text-primary">Terms</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="#" className="hover:text-primary">Privacy</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="https://github.com/tonegabes/emotevation" isExternal className="hover:text-primary">GitHub</Link>
            </motion.div>
          </div>
          
          <p className="text-xs text-default-400 mt-4 md:mt-6">
            © {new Date().getFullYear()} Emotevation. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
