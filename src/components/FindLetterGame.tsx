import React, { useEffect, useState, useCallback } from 'react';
import { LetterCard } from './LetterCard';
import { BigKey } from './BigKey';
import { ControlBar } from './ControlBar';
import { ConfettiStars } from './ConfettiStars';
import { getPhonic, getLettersForDifficulty, getPhonicData } from '../utils/phonics';
import { speak, playSuccessSound, playWrongSound, stopSpeaking } from '../utils/audio';
import type { Difficulty } from '../utils/storage';

interface FindLetterGameProps {
  difficulty: Difficulty;
  muted: boolean;
  onMuteToggle: () => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

/**
 * FindLetterGame component - main game mode where child finds the target letter
 */
export function FindLetterGame({ difficulty, muted, onMuteToggle, onDifficultyChange }: FindLetterGameProps) {
  const [targetLetter, setTargetLetter] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateNewTarget = useCallback(() => {
    const availableLetters = getLettersForDifficulty(difficulty);
    const newTarget = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    setTargetLetter(newTarget);

    // Generate options (distractors + target)
    const numOptions = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 6 : 7;
    const distractors = availableLetters
      .filter((l) => l !== newTarget)
      .sort(() => Math.random() - 0.5)
      .slice(0, numOptions - 1);
    const shuffled = [...distractors, newTarget].sort(() => Math.random() - 0.5);
    setOptions(shuffled);
  }, [difficulty]);

  useEffect(() => {
    generateNewTarget();
  }, [generateNewTarget]);

  useEffect(() => {
    if (targetLetter) {
      const phonic = getPhonic(targetLetter);
      speak(phonic, muted);
    }
  }, [targetLetter, muted]);

  const handleKeyPress = useCallback(
    (key: string) => {
      if (isProcessing) return;

      const normalizedKey = key.toUpperCase() === targetLetter.toUpperCase() 
        ? targetLetter 
        : key;

      if (normalizedKey === targetLetter) {
        // Correct!
        setIsProcessing(true);
        stopSpeaking();
        if (!muted) {
          playSuccessSound();
          const phonic = getPhonic(targetLetter);
          speak(phonic, muted);
        }
        setShowConfetti(true);
        setStreak((s) => s + 1);

        setTimeout(() => {
          setShowConfetti(false);
          generateNewTarget();
          setIsProcessing(false);
        }, 1500);
      } else {
        // Wrong
        playWrongSound();
        setStreak(0);
      }
    },
    [targetLetter, muted, isProcessing, generateNewTarget]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        const phonicData = getPhonicData(e.key);
        if (phonicData || (difficulty === 'hard' && /^[0-9]$/.test(e.key))) {
          handleKeyPress(e.key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress, difficulty]);

  const handleRepeat = () => {
    if (targetLetter) {
      stopSpeaking();
      const phonic = getPhonic(targetLetter);
      speak(phonic, muted);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {showConfetti && <ConfettiStars />}

      {/* Streak Counter */}
      {streak > 0 && (
        <div className="mb-4 text-3xl font-bold text-white drop-shadow-lg">
          ⭐ {streak}
        </div>
      )}

      {/* Target Letter Card */}
      <div className="mb-8">
        <div className="text-center mb-4 text-2xl font-bold text-white drop-shadow-lg">
          Find:
        </div>
        <LetterCard letter={targetLetter} size="large" />
      </div>

      {/* Control Bar */}
      <ControlBar
        difficulty={difficulty}
        onDifficultyChange={(newDiff) => {
          setStreak(0);
          onDifficultyChange(newDiff);
        }}
        muted={muted}
        onMuteToggle={onMuteToggle}
        onRepeat={handleRepeat}
      />

      {/* Option Buttons */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl">
        {options.map((letter, idx) => (
          <BigKey
            key={`${letter}-${idx}`}
            letter={letter}
            onClick={() => handleKeyPress(letter)}
            isTarget={letter === targetLetter}
          />
        ))}
      </div>
    </div>
  );
}
