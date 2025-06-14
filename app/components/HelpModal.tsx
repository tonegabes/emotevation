"use client";

import { Accordion, AccordionItem, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from 'react';

interface HelpModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      isOpen={isVisible}
      onClose={onClose}
      placement="center"
      backdrop="blur"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900/20 to-zinc-900/20 backdrop-blur-md",
        base: "border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md",
      }}
      scrollBehavior="inside"
      size="lg"
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
                Help & Tips
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-sm text-default-500"
              >
                How to get the most out of Emotevation
              </motion.p>
            </ModalHeader>
            <ModalBody>
              <Accordion>
                <AccordionItem key="1" title="Getting Started" aria-label="Getting Started">
                  <div className="space-y-2 text-sm">
                    <p>Welcome to Emotevation! Here's how to use the app:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Enter your name in the input field</li>
                      <li>Select a date (defaults to today)</li>
                      <li>Choose between "Motivational" or "Reality Check" quotes</li>
                      <li>Click "Generate Quote"</li>
                    </ol>
                    <p className="mt-2">Your personalized quote will appear below, generated uniquely based on your name and the selected date.</p>
                  </div>
                </AccordionItem>
                <AccordionItem key="3" title="Mobile Features" aria-label="Mobile Features">
                  <div className="space-y-2 text-sm">
                    <p>On mobile devices, you can use gestures:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Swipe left</strong> on a quote to share it</li>
                      <li><strong>Swipe right</strong> to view your quote history</li>
                      <li><strong>Tap</strong> on the quote to copy it to clipboard</li>
                    </ul>
                  </div>
                </AccordionItem>
                <AccordionItem key="4" title="Accessibility Features" aria-label="Accessibility Features">
                  <div className="space-y-2 text-sm">
                    <p>Emotevation is designed to be accessible:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Fully navigable by keyboard</li>
                      <li>Screen reader compatible with ARIA labels</li>
                      <li>Focus management for seamless navigation</li>
                      <li>High contrast colors and adjustable themes</li>
                      <li>Respects your system's light/dark mode preference</li>
                    </ul>
                  </div>
                </AccordionItem>
                <AccordionItem key="5" title="Privacy" aria-label="Privacy">
                  <div className="space-y-2 text-sm">
                    <p>Your privacy is important to us:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All data is stored locally in your browser</li>
                      <li>No personal information is sent to any server</li>
                      <li>Quote history is saved only on your device</li>
                      <li>You can clear your history at any time</li>
                    </ul>
                  </div>
                </AccordionItem>
              </Accordion>
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
  );
};

export default HelpModal;
