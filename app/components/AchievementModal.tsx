"use client";

import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievement: {
    title: string;
    description: string;
    icon: string;
    level: 'bronze' | 'silver' | 'gold' | 'platinum';
  };
}

const AchievementModal: React.FC<AchievementModalProps> = ({ 
  isOpen, 
  onClose, 
  achievement 
}) => {
  // Get background gradient based on achievement level
  const getBgGradient = () => {
    switch (achievement.level) {
      case 'bronze':
        return 'from-amber-500 to-amber-700';
      case 'silver':
        return 'from-slate-300 to-slate-500';
      case 'gold':
        return 'from-yellow-300 to-amber-500';
      case 'platinum':
        return 'from-slate-100 via-purple-300 to-slate-300';
      default:
        return 'from-purple-500 to-blue-500';
    }
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900/20 to-zinc-900/20 backdrop-blur-md",
        base: "border border-zinc-200 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.6
                }}
                className="text-center py-2"
              >
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
                  Achievement Unlocked!
                </div>
              </motion.div>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${getBgGradient()} flex items-center justify-center shadow-lg p-1`}
                >
                  <div className="bg-white/90 dark:bg-zinc-900/90 w-full h-full rounded-full flex items-center justify-center">
                    <span className="text-3xl">{achievement.icon}</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-default-500 mt-1">{achievement.description}</p>
                </motion.div>
                
                <Divider className="my-2" />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-full text-center text-sm text-default-500"
                >
                  Keep using Emotevation to unlock more achievements!
                </motion.div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose} className="w-full">
                Awesome!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AchievementModal;
