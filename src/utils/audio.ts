/**
 * Audio utilities for speech synthesis and sound effects
 */

/**
 * Initialize speech synthesis (browser compatibility)
 */
function getSpeechSynthesis(): SpeechSynthesis | null {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return window.speechSynthesis;
  }
  return null;
}

/**
 * Speak text using Web Speech API
 */
export function speak(text: string, muted: boolean = false): void {
  if (muted) return;

  const synth = getSpeechSynthesis();
  if (!synth) return;

  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // Slightly slower for toddlers
  utterance.pitch = 1.1; // Slightly higher pitch
  utterance.volume = 0.8;

  synth.speak(utterance);
}

/**
 * Stop any ongoing speech
 */
export function stopSpeaking(): void {
  const synth = getSpeechSynthesis();
  if (synth) {
    synth.cancel();
  }
}

/**
 * Create a simple beep sound using Web Audio API
 */
export function playBeep(frequency: number = 440, duration: number = 100): void {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
  } catch (e) {
    // Fallback silent if Web Audio API not supported
    console.warn('Web Audio API not supported');
  }
}

/**
 * Play a success sound (higher pitch beep)
 */
export function playSuccessSound(): void {
  playBeep(523.25, 150); // C5 note
}

/**
 * Play a gentle wrong answer sound (lower pitch beep)
 */
export function playWrongSound(): void {
  playBeep(349.23, 100); // F4 note
}
