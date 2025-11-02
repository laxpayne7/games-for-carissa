/**
 * Phonics mappings for A-Z and 0-9 with simple, consistent cues
 * Designed to be toddler-friendly and neutral accent
 */

export interface PhonicData {
  name: string;
  sound: string;
  cue: string;
  emoji: string;
}

const phonicsMap: Record<string, PhonicData> = {
  A: { name: 'A', sound: 'a', cue: 'apple', emoji: '🍎' },
  a: { name: 'A', sound: 'a', cue: 'apple', emoji: '🍎' },
  B: { name: 'B', sound: 'buh', cue: 'ball', emoji: '⚽' },
  b: { name: 'B', sound: 'buh', cue: 'ball', emoji: '⚽' },
  C: { name: 'C', sound: 'kuh', cue: 'cat', emoji: '🐱' },
  c: { name: 'C', sound: 'kuh', cue: 'cat', emoji: '🐱' },
  D: { name: 'D', sound: 'duh', cue: 'dog', emoji: '🐶' },
  d: { name: 'D', sound: 'duh', cue: 'dog', emoji: '🐶' },
  E: { name: 'E', sound: 'eh', cue: 'egg', emoji: '🥚' },
  e: { name: 'E', sound: 'eh', cue: 'egg', emoji: '🥚' },
  F: { name: 'F', sound: 'fuh', cue: 'fish', emoji: '🐟' },
  f: { name: 'F', sound: 'fuh', cue: 'fish', emoji: '🐟' },
  G: { name: 'G', sound: 'guh', cue: 'goat', emoji: '🐐' },
  g: { name: 'G', sound: 'guh', cue: 'goat', emoji: '🐐' },
  H: { name: 'H', sound: 'huh', cue: 'hat', emoji: '🎩' },
  h: { name: 'H', sound: 'huh', cue: 'hat', emoji: '🎩' },
  I: { name: 'I', sound: 'ih', cue: 'igloo', emoji: '🏠' },
  i: { name: 'I', sound: 'ih', cue: 'igloo', emoji: '🏠' },
  J: { name: 'J', sound: 'juh', cue: 'jam', emoji: '🍇' },
  j: { name: 'J', sound: 'juh', cue: 'jam', emoji: '🍇' },
  K: { name: 'K', sound: 'kuh', cue: 'kite', emoji: '🪁' },
  k: { name: 'K', sound: 'kuh', cue: 'kite', emoji: '🪁' },
  L: { name: 'L', sound: 'luh', cue: 'lion', emoji: '🦁' },
  l: { name: 'L', sound: 'luh', cue: 'lion', emoji: '🦁' },
  M: { name: 'M', sound: 'muh', cue: 'moon', emoji: '🌙' },
  m: { name: 'M', sound: 'muh', cue: 'moon', emoji: '🌙' },
  N: { name: 'N', sound: 'nuh', cue: 'nest', emoji: '🐦' },
  n: { name: 'N', sound: 'nuh', cue: 'nest', emoji: '🐦' },
  O: { name: 'O', sound: 'oh', cue: 'octopus', emoji: '🐙' },
  o: { name: 'O', sound: 'oh', cue: 'octopus', emoji: '🐙' },
  P: { name: 'P', sound: 'puh', cue: 'pig', emoji: '🐷' },
  p: { name: 'P', sound: 'puh', cue: 'pig', emoji: '🐷' },
  Q: { name: 'Q', sound: 'kwuh', cue: 'queen', emoji: '👑' },
  q: { name: 'Q', sound: 'kwuh', cue: 'queen', emoji: '👑' },
  R: { name: 'R', sound: 'ruh', cue: 'rabbit', emoji: '🐰' },
  r: { name: 'R', sound: 'ruh', cue: 'rabbit', emoji: '🐰' },
  S: { name: 'S', sound: 'sss', cue: 'sun', emoji: '☀️' },
  s: { name: 'S', sound: 'sss', cue: 'sun', emoji: '☀️' },
  T: { name: 'T', sound: 'tuh', cue: 'tiger', emoji: '🐯' },
  t: { name: 'T', sound: 'tuh', cue: 'tiger', emoji: '🐯' },
  U: { name: 'U', sound: 'uh', cue: 'umbrella', emoji: '☂️' },
  u: { name: 'U', sound: 'uh', cue: 'umbrella', emoji: '☂️' },
  V: { name: 'V', sound: 'vuh', cue: 'van', emoji: '🚐' },
  v: { name: 'V', sound: 'vuh', cue: 'van', emoji: '🚐' },
  W: { name: 'W', sound: 'wuh', cue: 'whale', emoji: '🐋' },
  w: { name: 'W', sound: 'wuh', cue: 'whale', emoji: '🐋' },
  X: { name: 'X', sound: 'ks', cue: 'x-ray', emoji: '🩻' },
  x: { name: 'X', sound: 'ks', cue: 'x-ray', emoji: '🩻' },
  Y: { name: 'Y', sound: 'yuh', cue: 'yak', emoji: '🐃' },
  y: { name: 'Y', sound: 'yuh', cue: 'yak', emoji: '🐃' },
  Z: { name: 'Z', sound: 'zzz', cue: 'zebra', emoji: '🦓' },
  z: { name: 'Z', sound: 'zzz', cue: 'zebra', emoji: '🦓' },
  '0': { name: 'Zero', sound: 'zero', cue: 'zero', emoji: '0️⃣' },
  '1': { name: 'One', sound: 'one', cue: 'one', emoji: '1️⃣' },
  '2': { name: 'Two', sound: 'two', cue: 'two', emoji: '2️⃣' },
  '3': { name: 'Three', sound: 'three', cue: 'three', emoji: '3️⃣' },
  '4': { name: 'Four', sound: 'four', cue: 'four', emoji: '4️⃣' },
  '5': { name: 'Five', sound: 'five', cue: 'five', emoji: '5️⃣' },
  '6': { name: 'Six', sound: 'six', cue: 'six', emoji: '6️⃣' },
  '7': { name: 'Seven', sound: 'seven', cue: 'seven', emoji: '7️⃣' },
  '8': { name: 'Eight', sound: 'eight', cue: 'eight', emoji: '8️⃣' },
  '9': { name: 'Nine', sound: 'nine', cue: 'nine', emoji: '9️⃣' },
};

/**
 * Get phonics data for a character
 */
export function getPhonicData(char: string): PhonicData | null {
  return phonicsMap[char] || null;
}

/**
 * Get formatted phonics string for speech
 * For letters: "A apple" (just character and object)
 * For numbers: "Four" (just the number name, no object)
 */
export function getPhonic(char: string): string {
  const data = getPhonicData(char);
  if (!data) return char;
  
  // For numbers, just return the name
  if (isNumber(char)) {
    return data.name;
  }
  
  // For letters, return "Letter object" format
  return `${data.name} ${data.cue}`;
}

/**
 * Get emoji for a character
 */
export function getEmoji(char: string): string {
  const data = getPhonicData(char);
  return data?.emoji || '';
}

/**
 * Get all letters available for a difficulty level
 */
export function getLettersForDifficulty(difficulty: 'easy' | 'medium' | 'hard'): string[] {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = '0123456789'.split('');

  switch (difficulty) {
    case 'easy':
      return uppercase;
    case 'medium':
      return [...uppercase, ...lowercase];
    case 'hard':
      return [...uppercase, ...lowercase, ...numbers];
  }
}

/**
 * Check if a character is a letter (A-Z, a-z)
 */
export function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}

/**
 * Check if a character is a number (0-9)
 */
export function isNumber(char: string): boolean {
  return /^[0-9]$/.test(char);
}
