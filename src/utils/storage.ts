/**
 * localStorage utilities for persistence
 */

const STORAGE_KEYS = {
  MUTE: 'typeSmile_mute',
  DIFFICULTY: 'typeSmile_difficulty',
  LAST_MODE: 'typeSmile_lastMode',
} as const;

export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameMode = 'find' | 'typing';

/**
 * Load mute state from localStorage
 */
export function loadMute(): boolean {
  const stored = localStorage.getItem(STORAGE_KEYS.MUTE);
  return stored === 'true';
}

/**
 * Save mute state to localStorage
 */
export function saveMute(muted: boolean): void {
  localStorage.setItem(STORAGE_KEYS.MUTE, String(muted));
}

/**
 * Load difficulty from localStorage
 */
export function loadDifficulty(): Difficulty {
  const stored = localStorage.getItem(STORAGE_KEYS.DIFFICULTY);
  if (stored === 'easy' || stored === 'medium' || stored === 'hard') {
    return stored;
  }
  return 'easy'; // Default
}

/**
 * Save difficulty to localStorage
 */
export function saveDifficulty(difficulty: Difficulty): void {
  localStorage.setItem(STORAGE_KEYS.DIFFICULTY, difficulty);
}

/**
 * Load last mode from localStorage
 */
export function loadLastMode(): GameMode {
  const stored = localStorage.getItem(STORAGE_KEYS.LAST_MODE);
  if (stored === 'find' || stored === 'typing') {
    return stored;
  }
  return 'find'; // Default
}

/**
 * Save last mode to localStorage
 */
export function saveLastMode(mode: GameMode): void {
  localStorage.setItem(STORAGE_KEYS.LAST_MODE, mode);
}
