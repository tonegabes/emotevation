"use client";

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { GithubIcon } from "./Icons";

const AppNavbar = () => {
  return (
    <Navbar 
      maxWidth="xl" 
      position="sticky" 
      className="bg-background/70 dark:bg-background/30 backdrop-blur-md border-b border-divider/10"
      classNames={{
        wrapper: "px-2 sm:px-6"
      }}
    >
      <NavbarBrand>
        <motion.h1 
          className="font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Emotevation
        </motion.h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ThemeToggle />
        
        <motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
          <Button 
            as={Link} 
            href="https://github.com/tonegabes/emotevation" 
            isExternal 
            isIconOnly 
            variant="light"
            size="sm"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="text-default-600" />
          </Button>
        </motion.div>
      </NavbarContent>
    </Navbar>
  );
};

export default AppNavbar;
