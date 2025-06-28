# URL Parameters Feature

## Overview

The Emotevation app now supports URL parameters to automatically generate quotes when a name is provided in the URL, making it perfect for sharing direct links to personalized quotes.

## Usage

### Basic Usage

To automatically generate a quote for someone, add the `name` parameter to the URL:

```
https://your-domain.com/?name=John
https://your-domain.com/?name=Maria
```

When users visit these links, the quote will be automatically generated without requiring any user interaction.

### Special Characters

The feature properly handles special characters and spaces:

```
https://your-domain.com/?name=João%20Silva
https://your-domain.com/?name=José%20María
```

### URL Encoding

Names with special characters are automatically URL-encoded when the user types in the input field, and URL-decoded when reading from the URL parameters.

## Implementation Details

### Features

1. **Automatic Quote Generation**: On page load, the app checks for the `name` parameter and automatically generates a quote
2. **Real-time URL Updates**: When users type in the name field, the URL is automatically updated (with 500ms debouncing)
3. **Proper Encoding**: Special characters are properly encoded/decoded using `encodeURIComponent` and `decodeURIComponent`
4. **Error Handling**: Graceful error handling for invalid URL parameters
5. **Smart State Management**: Prevents duplicate auto-generations and ensures proper initialization order

### Technical Implementation

- Uses `URLSearchParams` API for parsing URL parameters
- Implements debouncing to prevent excessive URL updates while typing
- Uses `window.history.replaceState()` to update URL without page reload
- Includes proper error handling for edge cases

### Benefits

- **Instant Quotes**: Users get immediate results when visiting shared links
- **Zero Friction**: No user interaction required - quotes appear automatically
- **Perfect for Sharing**: Ideal for social media, messaging, and email sharing
- **SEO Friendly**: URLs remain clean and readable
- **Accessibility**: Screen readers can announce generated content immediately

## Examples

### Sharing a Personalized Link

```javascript
// Generate a shareable link
const shareableLink = `${window.location.origin}/?name=${encodeURIComponent('John Doe')}`;
```

### Deep Linking from Other Apps

```html
<a href="https://emotevation.app/?name=Sarah">Get Sarah's daily quote</a>
```
