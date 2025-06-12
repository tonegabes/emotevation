"use client";

import React, { ReactNode, useRef, useEffect } from 'react';

interface SwipeHandlerProps {
  children: ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  className?: string;
}

const SwipeHandler: React.FC<SwipeHandlerProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  className = '',
}) => {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  
  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };
  
  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = e.changedTouches[0];
    const touchStart = touchStartRef.current;
    
    const xDiff = touchStart.x - touchEnd.clientX;
    const yDiff = touchStart.y - touchEnd.clientY;
    
    // Detect horizontal swipe (if horizontal movement is greater than vertical)
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (Math.abs(xDiff) > threshold) {
        if (xDiff > 0 && onSwipeLeft) {
          onSwipeLeft();
        } else if (xDiff < 0 && onSwipeRight) {
          onSwipeRight();
        }
      }
    } 
    // Detect vertical swipe
    else {
      if (Math.abs(yDiff) > threshold) {
        if (yDiff > 0 && onSwipeUp) {
          onSwipeUp();
        } else if (yDiff < 0 && onSwipeDown) {
          onSwipeDown();
        }
      }
    }
    
    touchStartRef.current = null;
  };
  
  const handleTouchCancel = () => {
    touchStartRef.current = null;
  };
  
  useEffect(() => {
    const element = document.getElementById('swipe-handler');
    
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
      element.addEventListener('touchcancel', handleTouchCancel, { passive: true });
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
        element.removeEventListener('touchcancel', handleTouchCancel);
      };
    }
  }, []);
  
  return (
    <div id="swipe-handler" className={className}>
      {children}
    </div>
  );
};

export default SwipeHandler;