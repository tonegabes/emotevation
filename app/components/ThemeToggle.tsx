"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "./Icons";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Switch
        defaultSelected={theme === "dark"}
        size="lg"
        color="secondary"
        startContent={
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: theme === "dark" ? 0 : 360 }}
            transition={{ duration: 0.5 }}
          >
            <SunIcon />
          </motion.div>
        }
        endContent={
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: theme === "dark" ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <MoonIcon />
          </motion.div>
        }
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        className="ml-auto"
      />
    </motion.div>
  );
};

export default ThemeToggle;
