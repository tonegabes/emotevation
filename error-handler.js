// This script helps handle the "missing required error components" error by refreshing the page
// It is injected into the HTML to handle the error before the Next.js app loads

(function() {
  // Function to check for the error message and handle it
  function checkForErrorAndHandle() {
    // If the document body contains text about missing error components
    if (document.body && 
        document.body.innerText && 
        (document.body.innerText.includes('missing required error components') || 
         document.body.innerText.includes('refreshing'))) {
      
      console.log('Detected error about missing error components, refreshing...');
      
      // Clear any cached data that might be causing issues
      if (window.sessionStorage) {
        // Don't delete everything, as it might break other functionality
        sessionStorage.removeItem('__next_error__');
      }
      
      // Force a hard reload to /emotevation/
      window.location.href = '/emotevation/';
      return true;
    }
    return false;
  }
  
  // Check immediately in case the error is already visible
  if (checkForErrorAndHandle()) {
    return;
  }
  
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
  }, 2000);
})();
