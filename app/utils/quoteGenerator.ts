import { quotes } from '../data/quotes';
import { unmotivationalQuotes } from '../data/unmotivationalQuotes';

/**
 * Generates a seeded random number based on a string input
 * @param seed String to use as seed
 * @returns A number between 0 and 1
 */
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Create a decimal between 0 and 1
  const random = Math.abs(Math.sin(hash) * 10000) % 1;
  return random;
}

/**
 * Formats a date into a string (YYYY-MM-DD)
 * @param date Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Generates a quote based on name and date
 * @param name User's name
 * @param date Current date
 * @param forceUnmotivational Optional parameter to force unmotivational quotes
 * @returns An object containing the quote and whether it's unmotivational
 */
export function generateQuote(name: string, date: string, forceUnmotivational?: boolean): { text: string; isUnmotivational: boolean } {
  // Create a seed from the name and date
  const seed = `${name.toLowerCase()}-${date}`;
  
  // Determine whether to use motivational or unmotivational quotes
  let isUnmotivational = forceUnmotivational;
  
  // If not forced, determine randomly based on seed
  if (isUnmotivational === undefined) {
    // Using a separate seed for this decision to ensure it's random but consistent for the same name/date
    const quoteTypeSeed = `${seed}-type`;
    isUnmotivational = seededRandom(quoteTypeSeed) > 0.7; // 30% chance for unmotivational quotes
  }
  
  // Select the appropriate quote collection
  const quoteCollection = isUnmotivational ? unmotivationalQuotes : quotes;
  
  // Get a random index based on the seed
  const randomIndex = Math.floor(seededRandom(seed) * quoteCollection.length);
  
  // Return the quote at that index along with its type
  return {
    text: quoteCollection[randomIndex],
    isUnmotivational
  };
}
