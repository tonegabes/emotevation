'use client';

import { useEffect } from 'react';
import { Button } from '@nextui-org/react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-600">Something went wrong</h2>
      <p className="mb-6 text-default-600 max-w-md">
        Sorry, we encountered an unexpected error. You can try refreshing the page or reset the application.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          color="secondary" 
          variant="solid"
          onPress={reset}
        >
          Try again
        </Button>
        <Button
          color="default"
          variant="flat"
          onPress={() => window.location.href = '/emotevation/'}
        >
          Go to home page
        </Button>
      </div>
    </div>
  );
}
