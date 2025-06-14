"use client";

import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
  Spinner,
  Tab,
  Tabs,
  Tooltip
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import AchievementModal from './components/AchievementModal';
import Footer from './components/Footer';
import HelpModal from './components/HelpModal';
import { ShareIcon } from './components/Icons';
import AppNavbar from './components/Navbar';
import QuickTipsButton from './components/QuickTipsButton';
import QuoteCard from './components/QuoteCard';
import QuoteCardSkeleton from './components/QuoteCardSkeleton';
import QuoteHistory from './components/QuoteHistory';
import QuoteShareOptions from './components/QuoteShareOptions';
import ScreenReaderAnnouncement from './components/ScreenReaderAnnouncement';
import SwipeHandler from './components/SwipeHandler';
import { formatDate, generateQuote } from './utils/quoteGenerator';

interface HistoryQuote {
  id: string;
  name: string;
  date: string;
  quote: string;
  isUnmotivational: boolean;
  timestamp: number;
}

export default function Home() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [isUnmotivational, setIsUnmotivational] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selected, setSelected] = useState("motivational");
  const [quoteHistory, setQuoteHistory] = useState<HistoryQuote[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [screenReaderMessage, setScreenReaderMessage] = useState("");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState({
    title: '',
    description: '',
    icon: '',
    level: 'bronze' as 'bronze' | 'silver' | 'gold'
  });
  const [errorState, setErrorState] = useState<Error | null>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);

  // Add error boundary handling
  useEffect(() => {
    // Handle any initialization errors
    try {
      // Set the current date on component mount
      const today = new Date();
      setCurrentDate(formatDate(today));

      // Load quote history from localStorage
      const savedHistory = localStorage.getItem('quoteHistory');
      if (savedHistory) {
        try {
          const parsedHistory = JSON.parse(savedHistory);
          if (Array.isArray(parsedHistory)) {
            setQuoteHistory(parsedHistory);
          }
        } catch (error) {
          console.error('Error parsing quote history:', error);
        }
      }

      // Check if this is the first visit
      const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
      if (!hasVisitedBefore) {
        // Show the help modal on first visit after a short delay
        setTimeout(() => {
          setShowHelpModal(true);
          localStorage.setItem('hasVisitedBefore', 'true');
        }, 1500);
      }

      // Set first load to false after 3 seconds
      setTimeout(() => {
        setFirstLoad(false);
      }, 3000);
    } catch (error) {
      console.error('Error during initialization:', error);
      setErrorState(error as Error);
    }
  }, []);

  useEffect(() => {
    setIsUnmotivational(selected === "unmotivational");
  }, [selected]);

  useEffect(() => {
    // Save quote history to localStorage when it changes
    if (quoteHistory.length > 0) {
      localStorage.setItem('quoteHistory', JSON.stringify(quoteHistory));
    }
  }, [quoteHistory]);

  const handleGenerateQuote = () => {
    if (name.trim() === "") return;

    setIsGenerating(true);
    setShowSkeleton(true);

    // Hide history when generating a new quote
    if (showHistory) {
      setShowHistory(false);
    }

    // Simulate loading for better UX
    setTimeout(() => {
      const result = generateQuote(name, currentDate, isUnmotivational);
      setQuote(result.text);
      setHasGenerated(true);
      setShowSkeleton(false);

      // Set screen reader announcement
      setScreenReaderMessage(`Quote generated for ${name}: ${result.text}`);

      // Add quote to history
      const newQuoteRecord: HistoryQuote = {
        id: uuidv4(),
        name,
        date: currentDate,
        quote: result.text,
        isUnmotivational,
        timestamp: Date.now()
      };

      // Add to beginning of history array and keep only the latest 10 quotes
      setQuoteHistory(prevHistory => {
        const newHistory = [newQuoteRecord, ...prevHistory].slice(0, 10);

        // Check for achievements
        checkForAchievements(newHistory.length);

        return newHistory;
      });

      setIsGenerating(false);

      toast.success('Quote generated!', {
        description: isUnmotivational ? 'Your reality check is ready' : 'Your motivational quote is ready',
        duration: 3000,
      });
    }, 600);
  };

  // Check for achievements based on number of quotes generated
  const checkForAchievements = (quoteCount: number) => {
    // Only show one achievement at a time
    let achievementUnlocked = false;

    // Get previously unlocked achievements
    const unlockedAchievements = JSON.parse(localStorage.getItem('unlockedAchievements') || '[]');

    // First quote achievement
    if (quoteCount === 1 && !unlockedAchievements.includes('first_quote')) {
      setCurrentAchievement({
        title: 'First Steps',
        description: 'Generated your first motivational quote!',
        icon: '✨',
        level: 'bronze'
      });
      achievementUnlocked = true;
      unlockedAchievements.push('first_quote');
    }
    // 5 quotes achievement
    else if (quoteCount >= 5 && !unlockedAchievements.includes('quote_collector')) {
      setCurrentAchievement({
        title: 'Quote Collector',
        description: 'Generated 5 different quotes',
        icon: '📚',
        level: 'silver'
      });
      achievementUnlocked = true;
      unlockedAchievements.push('quote_collector');
    }
    // 10 quotes achievement (max in history)
    else if (quoteCount >= 10 && !unlockedAchievements.includes('quote_enthusiast')) {
      setCurrentAchievement({
        title: 'Quote Enthusiast',
        description: 'Generated 10 different quotes',
        icon: '🏆',
        level: 'gold'
      });
      achievementUnlocked = true;
      unlockedAchievements.push('quote_enthusiast');
    }

    // If an achievement was unlocked, save and show it
    if (achievementUnlocked) {
      localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedAchievements));

      // Delay showing the achievement until after the quote is displayed
      setTimeout(() => {
        setShowAchievement(true);
      }, 1500);
    }
  };

  const shareQuote = async () => {
    if (!quote) return;

    // Open the share options modal
    setShowShareOptions(true);

    // Log sharing attempt
    try {
      // Analytics could be added here
      console.log('User attempted to share quote');
    } catch (error) {
      console.error('Error logging share event:', error);
    }
  };

  const handleClearHistory = () => {
    setQuoteHistory([]);
    localStorage.removeItem('quoteHistory');
    toast.success('History cleared', {
      description: 'All your quote history has been removed',
    });
  };

  const handleSelectHistoryQuote = (historyItem: HistoryQuote) => {
    setName(historyItem.name);
    setCurrentDate(historyItem.date);
    setQuote(historyItem.quote);
    setIsUnmotivational(historyItem.isUnmotivational);
    setSelected(historyItem.isUnmotivational ? "unmotivational" : "motivational");
    setHasGenerated(true);
    setShowHistory(false);

    toast.info('Historical quote loaded', {
      description: `Quote from ${historyItem.date} restored`,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Quote copied to clipboard!', {
          description: 'You can now paste it anywhere',
          duration: 3000,
        });
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
        toast.error('Failed to copy to clipboard', {
          description: 'Please try again',
        });
      });
  };

  // Handle touch gestures
  const handleSwipeLeft = () => {
    // Only respond to swipes when we have a quote
    if (hasGenerated) {
      shareQuote();
    }
  };

  const handleSwipeRight = () => {
    // Toggle history on swipe right
    setShowHistory(!showHistory);
  };

  return (
    <SwipeHandler
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      className="min-h-screen flex flex-col bg-background dark:bg-[#13151a] relative overflow-hidden"
    >
      {/* Handle error state */}
      {errorState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-[#13151a] bg-opacity-90 dark:bg-opacity-90">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Something went wrong</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We encountered an error while loading the application. Please try refreshing the page.
            </p>
            <div className="flex justify-end">
              <Button
                color="secondary"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Screen reader announcements */}
      {screenReaderMessage && (
        <ScreenReaderAnnouncement message={screenReaderMessage} />
      )}

      {/* Help/Tips Button */}
      <QuickTipsButton onClick={() => setShowHelpModal(true)} />

      {/* Modals */}
      <HelpModal
        isVisible={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />

      <QuoteShareOptions
        isOpen={showShareOptions}
        onClose={() => setShowShareOptions(false)}
        quote={quote}
        name={name}
        date={currentDate}
      />

      <AchievementModal
        isOpen={showAchievement}
        onClose={() => setShowAchievement(false)}
        achievement={currentAchievement}
      />

      <AppNavbar />

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-1/5 left-10 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/10 dark:bg-pink-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 flex flex-col items-center flex-grow z-10">
        <header className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Daily Motivation
          </motion.h1>
        </header>

        <main className="w-full max-w-md mx-auto flex flex-col items-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="w-full shadow-md glass-card" radius="lg">
              <CardBody className="p-4 md:p-6 space-y-4 md:space-y-6">
                <Tabs
                  aria-label="Quote Type"
                  size="lg"
                  color={selected === "motivational" ? "secondary" : "default"}
                  variant="bordered"
                  classNames={{
                    tabList: "gap-2 md:gap-4",
                    tab: "px-2 md:px-4 h-8 md:h-10 text-sm md:text-base",
                  }}
                  selectedKey={selected}
                  onSelectionChange={(key) => setSelected(key as string)}
                >
                  <Tab key="motivational" title="Motivational" />
                  <Tab key="unmotivational" title="Reality Check" />
                </Tabs>

                <Divider />

                <div className="space-y-4">
                  <Input
                    ref={inputNameRef}
                    label="Your Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="bordered"
                    radius="lg"
                    fullWidth
                    isClearable
                    classNames={{
                      inputWrapper: "backdrop-blur-sm bg-white/20 dark:bg-black/20",
                      label: "text-sm",
                      input: "text-sm md:text-base",
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && name.trim() && !isGenerating) {
                        handleGenerateQuote();
                      }
                    }}
                  />

                  <Input
                    label="Date"
                    type="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                    variant="bordered"
                    radius="lg"
                    fullWidth
                    classNames={{
                      inputWrapper: "backdrop-blur-sm bg-white/20 dark:bg-black/20",
                      label: "text-sm",
                      input: "text-sm md:text-base",
                    }}
                  />

                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1"
                    >
                      <Button
                          color="secondary"
                          size="lg"
                          radius="lg"
                          fullWidth
                          isDisabled={!name.trim() || isGenerating}
                          isLoading={isGenerating}
                          spinner={<Spinner size="sm" color="white" />}
                          onClick={handleGenerateQuote}
                          className="font-medium text-sm md:text-base"
                        >
                          {isGenerating ? "Generating..." : "Generate Quote"}
                        </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                          color="default"
                          variant="flat"
                          size="lg"
                          radius="lg"
                          onClick={() => setShowHistory(!showHistory)}
                          className="font-medium text-sm md:text-base"
                        >
                          {showHistory ? "Hide History" : "Quote History"}
                        </Button>
                    </motion.div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Show skeleton while loading */}
          {showSkeleton && !hasGenerated && (
            <motion.div
              className="mt-8 md:mt-12 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuoteCardSkeleton />
            </motion.div>
          )}

          {/* Show the actual quote */}
          {hasGenerated && !showSkeleton && (
            <motion.div
              id="quote-section"
              className="mt-8 md:mt-12 w-full relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              <QuoteCard
                name={name}
                date={currentDate}
                quote={quote}
                isUnmotivational={isUnmotivational}
                onCopy={copyToClipboard}
              />

              <div className="flex justify-center mt-4">
                <Tooltip content="Share this quote">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      isIconOnly
                      variant="light"
                      color="secondary"
                      radius="full"
                      className="text-lg"
                      onClick={shareQuote}
                    >
                      <ShareIcon />
                    </Button>
                  </motion.div>
                </Tooltip>
              </div>
            </motion.div>
          )}

          {/* History panel */}
          <AnimatePresence>
            {showHistory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <QuoteHistory
                  history={quoteHistory}
                  onSelectQuote={handleSelectHistoryQuote}
                  onClearHistory={handleClearHistory}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </SwipeHandler>
  );
}
