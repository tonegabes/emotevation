"use client";

import { useEffect } from 'react';

interface ScreenReaderAnnouncementProps {
  message: string;
  assertive?: boolean;
}

/**
 * Component for making screen reader announcements
 * Uses ARIA live regions for accessibility
 */
const ScreenReaderAnnouncement: React.FC<ScreenReaderAnnouncementProps> = ({ 
  message, 
  assertive = false 
}) => {
  useEffect(() => {
    // Clear and set the announcement for screen readers to properly announce it
    const timeout = setTimeout(() => {
      const liveRegion = document.getElementById(
        assertive ? 'sr-live-assertive' : 'sr-live-polite'
      );
      if (liveRegion) {
        liveRegion.textContent = '';
        // Force a reflow
        void liveRegion.offsetWidth;
        liveRegion.textContent = message;
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [message, assertive]);

  return (
    <>
      <div
        id="sr-live-assertive"
        className="sr-only"
        aria-live="assertive"
        aria-atomic="true"
      />
      <div
        id="sr-live-polite"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
};

export default ScreenReaderAnnouncement;
