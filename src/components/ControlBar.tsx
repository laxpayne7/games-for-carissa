import React from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';
import type { Difficulty } from '../utils/storage';

interface ControlBarProps {
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
  muted: boolean;
  onMuteToggle: () => void;
  onRepeat?: () => void;
  showDifficulty?: boolean;
}

/**
 * ControlBar component - difficulty, mute, and other controls
 */
export function ControlBar({
  difficulty,
  onDifficultyChange,
  muted,
  onMuteToggle,
  onRepeat,
  showDifficulty = true,
}: ControlBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
      {/* Difficulty Selector */}
      {showDifficulty && (
      <div className="flex gap-2 bg-white rounded-2xl p-2 shadow-xl">
        <button
          onClick={() => onDifficultyChange('easy')}
          className={`
            tap-target
            px-4
            py-2
            rounded-xl
            font-semibold
            transition-all
            ${difficulty === 'easy' 
              ? 'bg-warm-blue text-white' 
              : 'bg-transparent text-warm-orange'
            }
          `}
          aria-label="Easy difficulty"
        >
          Easy
        </button>
        <button
          onClick={() => onDifficultyChange('medium')}
          className={`
            tap-target
            px-4
            py-2
            rounded-xl
            font-semibold
            transition-all
            ${difficulty === 'medium' 
              ? 'bg-warm-blue text-white' 
              : 'bg-transparent text-warm-orange'
            }
          `}
          aria-label="Medium difficulty"
        >
          Medium
        </button>
        <button
          onClick={() => onDifficultyChange('hard')}
          className={`
            tap-target
            px-4
            py-2
            rounded-xl
            font-semibold
            transition-all
            ${difficulty === 'hard' 
              ? 'bg-warm-blue text-white' 
              : 'bg-transparent text-warm-orange'
            }
          `}
          aria-label="Hard difficulty"
        >
          Hard
        </button>
      </div>
      )}

      {/* Mute Toggle */}
      <button
        onClick={onMuteToggle}
        className={`
          tap-target
          p-3
          bg-white
          rounded-2xl
          shadow-xl
          transition-all
          ${muted ? 'text-gray-400' : 'text-warm-orange'}
        `}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <SpeakerXMarkIcon className="w-8 h-8" />
        ) : (
          <SpeakerWaveIcon className="w-8 h-8" />
        )}
      </button>

      {/* Repeat Button (optional) */}
      {onRepeat && (
        <button
          onClick={onRepeat}
          className={`
            tap-target
            p-3
            bg-white
            rounded-2xl
            shadow-xl
            text-warm-orange
            transition-all
          `}
          aria-label="Repeat target"
        >
          <SpeakerWaveIcon className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
