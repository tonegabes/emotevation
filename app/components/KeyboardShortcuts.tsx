"use client";

import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Kbd } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

interface ShortcutItem {
  keys: string[];
  description: string;
}

interface KeyboardShortcutsProps {
  isVisible: boolean;
  onClose: () => void;
}

const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ isVisible, onClose }) => {
  const shortcuts: ShortcutItem[] = [
    { keys: ['Ctrl', 'Enter'], description: 'Generate a new quote' },
    { keys: ['Ctrl', 'S'], description: 'Share the current quote' },
    { keys: ['Ctrl', 'C'], description: 'Copy the current quote' },
    { keys: ['Ctrl', 'H'], description: 'Show/hide quote history' },
    { keys: ['Ctrl', 'K'], description: 'Show keyboard shortcuts' },
    { keys: ['Alt', 'Q'], description: 'Dismiss notifications' },
    { keys: ['Esc'], description: 'Close dialogs and panels' },
    { keys: ['Tab'], description: 'Navigate through interactive elements' },
    { keys: ['Shift', 'Tab'], description: 'Navigate backwards' },
    { keys: ['Space'], description: 'Activate buttons and controls' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <Modal 
          isOpen={isVisible} 
          onClose={onClose}
          placement="center"
          backdrop="blur"
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900/20 to-zinc-900/20 backdrop-blur-md",
            base: "border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md",
          }}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            }
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold"
                  >
                    Keyboard Shortcuts
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-sm text-default-500"
                  >
                    Enhance your experience with these keyboard shortcuts
                  </motion.p>
                </ModalHeader>
                <ModalBody>
                  <div className="grid gap-3">
                    {shortcuts.map((shortcut, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{shortcut.description}</span>
                        <div className="flex items-center gap-1">
                          {shortcut.keys.map((key, keyIndex) => (
                            <React.Fragment key={keyIndex}>
                              <Kbd className="px-2 py-1 text-xs">{key}</Kbd>
                              {keyIndex < shortcut.keys.length - 1 && <span className="text-default-400">+</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default KeyboardShortcuts;