// This script handles GitHub Pages routing
// It will be added to the index.html during build
// Adapted from https://github.com/rafgraph/spa-github-pages

(function() {
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script checks to see if a redirect is present in the query string,
  // converts it back into the correct url and adds it to the
  // browser's history using window.history.replaceState(...),
  // which won't cause the browser to attempt to load the new url.
  // When the single page app is loaded further down in this file,
  // the correct url will be waiting in the browser's history for
  // the single page app to route accordingly.
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location));
  
  // This ensures that all internal links on the GitHub Pages site work correctly
  document.addEventListener('click', function(event) {
    // Find closest anchor element
    let anchor = event.target.closest('a');
    
    // If it's not an anchor or it's an external link, don't handle it
    if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download') || 
        anchor.getAttribute('rel') === 'external') {
      return;
    }
    
    let href = anchor.getAttribute('href');
    
    // If it's a relative link within our app
    if (href && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/emotevation/api/')) {
      // Prevent default behavior
      event.preventDefault();
      
      // Make sure the link starts with /emotevation
      if (!href.startsWith('/emotevation')) {
        href = '/emotevation' + href;
      }
      
      // Use pushState to change the URL
      history.pushState(null, null, href);
      
      // Create a navigation event for Next.js router
      window.dispatchEvent(new PopStateEvent('popstate'));
      
      return false;
    }
  });
  
  // Ensure popstate events are properly handled
  window.addEventListener('popstate', function(event) {
    // We don't need any special handling here as Next.js will react to the popstate event
    console.log('Navigation event handled by the router');
  });
  
  // If we loaded on a path other than the root, ensure Next.js router gets triggered
  if (window.location.pathname !== '/' && window.location.pathname !== '/emotevation/') {
    // Trigger routing system
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
})();
