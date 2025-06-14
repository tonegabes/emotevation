"use client";

import { Metadata } from 'next';
import { useEffect } from 'react';

// Metadata configuration for SEO and social sharing
export const metadata: Metadata = {
  title: 'Emotevation - Personalized Daily Motivation',
  description: 'Get personalized motivational quotes or reality checks based on your name and date. Every combination creates a unique result to inspire your day.',
  keywords: 'motivation, quotes, personalized quotes, daily motivation, inspirational quotes, reality checks',
  openGraph: {
    title: 'Emotevation - Personalized Daily Motivation',
    description: 'Get personalized motivational quotes or reality checks based on your name and date.',
    url: 'https://tonegabes.github.io/emotevation/',
    siteName: 'Emotevation',
    images: [
      {
        url: '/emotevation-preview.png',
        width: 1200,
        height: 630,
        alt: 'Emotevation Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emotevation - Personalized Daily Motivation',
    description: 'Get personalized motivational quotes or reality checks based on your name and date.',
    images: ['/emotevation-preview.png'],
    creator: '@tonegabes',
  },
  authors: [{ name: 'Tone Gabes' }],
  creator: 'Tone Gabes',
  publisher: 'Tone Gabes',
  robots: 'index, follow',
};

// The MetaComponent doesn't render anything, it's just a way to add
// client-side analytics or tracking scripts if needed in the future
const MetaComponent = () => {
  useEffect(() => {
    // You could add analytics initialization here
  }, []);

  return null;
};

export default MetaComponent;
