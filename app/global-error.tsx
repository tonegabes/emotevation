'use client';
 
import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);
 
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-r from-pink-50 to-violet-50 dark:from-gray-900 dark:to-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Something went wrong
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-md">
            Sorry, we encountered a critical error. Please try refreshing the page or reset the application.
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
      </body>
    </html>
  );
}
