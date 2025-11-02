import React from 'react';

export type GameMode = 'find' | 'typing';

interface ModeToggleProps {
  mode: GameMode;
  onModeChange: (mode: GameMode) => void;
}

/**
 * ModeToggle component - switches between Find Letter and Free Typing modes
 */
export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onModeChange('find')}
        className={`
          tap-target
          px-6
          py-3
          rounded-2xl
          font-bold
          text-lg
          transition-all
          shadow-xl
          ${mode === 'find' 
            ? 'bg-warm-orange text-white' 
            : 'bg-white text-warm-orange'
          }
        `}
        aria-label="Find the Letter mode"
      >
        Find Letter
      </button>
      <button
        onClick={() => onModeChange('typing')}
        className={`
          tap-target
          px-6
          py-3
          rounded-2xl
          font-bold
          text-lg
          transition-all
          shadow-xl
          ${mode === 'typing' 
            ? 'bg-warm-orange text-white' 
            : 'bg-white text-warm-orange'
          }
        `}
        aria-label="Free Typing mode"
      >
        Free Typing
      </button>
    </div>
  );
}
