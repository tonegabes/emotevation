// This script helps handle the "missing required error components" error by refreshing the page
// It is injected into the HTML to handle the error before the Next.js app loads

(function() {
  // Create a variable to track if we've already handled an error
  let errorHandled = false;
  
  // Known error messages that we should intercept
  const errorPatterns = [
    'missing required error components',
    'refreshing',
    'Error: Failed to initialize page',
    'Error: Error loading page',
    'Error: Application error',
    'Error: A client-side exception has occurred',
    'Failed to load resource',
    'Uncaught Error'
  ];
  
  // Function to check for the error message and handle it
  function checkForErrorAndHandle() {
    // Don't handle errors multiple times
    if (errorHandled) return false;
    
    // If the document body contains text about missing error components
    if (document.body && document.body.innerText) {
      for (const pattern of errorPatterns) {
        if (document.body.innerText.includes(pattern)) {
          console.log(`Detected error: "${pattern}", handling...`);
          
          // Mark as handled to prevent multiple refreshes
          errorHandled = true;
          
          // Clear any cached data that might be causing issues
          try {
            if (window.sessionStorage) {
              // Clear Next.js related caches but preserve other data
              for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                if (key && (key.startsWith('__next') || key.includes('error'))) {
                  sessionStorage.removeItem(key);
                }
              }
            }
            
            if (window.localStorage) {
              // Only clear Next.js error related items
              const errorKeys = ['__NEXT_ERROR__', '__NEXT_ROUTER_STATE__'];
              errorKeys.forEach(key => localStorage.removeItem(key));
            }
          } catch (e) {
            console.error('Error clearing storage:', e);
          }
          
          // Create a better user experience by showing a loading message
          document.body.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
              <div style="border: 5px solid #f3f3f3; border-top: 5px solid #7928ca; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin-bottom: 20px;"></div>
              <h1 style="color: #333; margin-bottom: 10px;">Repairing Application</h1>
              <p style="color: #666; margin-bottom: 20px;">Please wait, we're fixing the issue...</p>
              <style>
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              </style>
            </div>
          `;
          
          // Add a delay before refreshing to allow the browser to clear caches
          setTimeout(function() {
            // Force a hard reload to /emotevation/ with a cache-busting parameter
            const cacheBuster = '?cb=' + Date.now();
            window.location.href = '/emotevation/' + cacheBuster;
          }, 1500);
          
          return true;
        }
      }
    }
    return false;
  }
  
  // Function to handle window errors
  function handleWindowErrors() {
    window.onerror = function(message, source, lineno, colno, error) {
      console.error('Global error caught:', message);
      
      // Check if the error is related to Next.js
      if (typeof message === 'string' && 
          (message.includes('next') || message.includes('chunk') || message.includes('component'))) {
        if (!errorHandled) {
          console.log('Handling Next.js related error');
          errorHandled = true;
          
          // Redirect after a short delay
          setTimeout(function() {
            window.location.href = '/emotevation/?reload=' + Date.now();
          }, 1000);
          
          return true; // Prevents the error from being shown in console
        }
      }
      
      return false; // Let other errors be handled normally
    };
  }
  
  // Check immediately in case the error is already visible
  if (checkForErrorAndHandle()) {
    return;
  }
  
  // Set up error handlers
  handleWindowErrors();
  
  // Set up a mutation observer to detect when the error message appears
  // This is needed because Next.js might render the error after the page loads
  const observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        if (checkForErrorAndHandle()) {
          observer.disconnect();
          return;
        }
      }
    }
  });
  
  // Start observing the document body for changes
  observer.observe(document.body, { 
    childList: true,
    characterData: true,
    subtree: true
  });
  
  // Also set a timeout to check again in case the observer misses it
  setTimeout(function() {
    checkForErrorAndHandle();
  }, 1000);
  
  // Final check after everything has loaded
  window.addEventListener('load', function() {
    setTimeout(checkForErrorAndHandle, 500);
  });
})();
