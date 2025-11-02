import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ControlBar } from './ControlBar';
import { getPhonic, getPhonicData, getEmoji, isNumber } from '../utils/phonics';
import { speak } from '../utils/audio';
import type { Difficulty } from '../utils/storage';

interface TypedChar {
  id: number;
  char: string;
  color: string;
  animation: 'pop' | 'wiggle' | 'float';
  emoji: string;
}

const COLORS = [
  'text-warm-orange',
  'text-warm-blue',
  'text-warm-purple',
  'text-warm-pink',
  'text-warm-green',
];

/**
 * FreeTypingMode component - creative mode where child types freely with animated letters
 */
export function FreeTypingMode({ difficulty, muted, onMuteToggle }: { difficulty: Difficulty; muted: boolean; onMuteToggle: () => void }) {
  const [typedChars, setTypedChars] = useState<TypedChar[]>([]);
  const [randomStyle, setRandomStyle] = useState(false);
  const charIdRef = useRef(0);
  const styleCounterRef = useRef(0);

  const handleChar = useCallback(
    (char: string) => {
      const phonicData = getPhonicData(char);
      const isValid =
        phonicData ||
        (difficulty === 'hard' && /^[0-9]$/.test(char));

      if (!isValid) return;

      // Determine animation style
      let animation: 'pop' | 'wiggle' | 'float' = 'pop';
      if (randomStyle) {
        styleCounterRef.current++;
        if (styleCounterRef.current % 8 === 0) {
          const styles: Array<'pop' | 'wiggle' | 'float'> = ['pop', 'wiggle', 'float'];
          animation = styles[Math.floor(Math.random() * styles.length)];
        }
      }

      const newChar: TypedChar = {
        id: charIdRef.current++,
        char,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        animation,
        emoji: getEmoji(char),
      };

      setTypedChars((prev) => [...prev, newChar]);

      // Speak the character
      if (!muted) {
        const phonic = getPhonic(char);
        speak(phonic, muted);
      }
    },
    [muted, difficulty, randomStyle]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        handleChar(e.key);
      } else if (e.key === 'Backspace') {
        setTypedChars((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleChar]);

  const handleClear = () => {
    setTypedChars([]);
    charIdRef.current = 0;
  };

  const handleUndo = () => {
    setTypedChars((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Control Bar - no difficulty selector in free typing */}
      <ControlBar
        difficulty={difficulty}
        onDifficultyChange={(newDiff) => {
          // Difficulty doesn't affect free typing mode
        }}
        muted={muted}
        onMuteToggle={onMuteToggle}
        showDifficulty={false}
      />

      {/* Random Style Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setRandomStyle(!randomStyle)}
          className={`
            tap-target
            px-6
            py-3
            rounded-2xl
            font-bold
            text-lg
            transition-all
            shadow-xl
            ${randomStyle 
              ? 'bg-warm-purple text-white' 
              : 'bg-white text-warm-orange'
            }
          `}
          aria-label="Toggle random style"
        >
          Random Style {randomStyle ? '✨' : ''}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleClear}
          className="tap-target px-6 py-3 bg-white rounded-2xl font-bold text-lg text-warm-orange shadow-xl transition-all active:scale-95"
          aria-label="Clear all"
        >
          Clear
        </button>
        <button
          onClick={handleUndo}
          className="tap-target px-6 py-3 bg-white rounded-2xl font-bold text-lg text-warm-orange shadow-xl transition-all active:scale-95"
          aria-label="Undo last character"
        >
          Undo
        </button>
      </div>

      {/* Typed Characters Canvas */}
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl min-h-[400px] p-8 bg-white/20 rounded-3xl backdrop-blur-sm">
        {typedChars.length === 0 ? (
          <div className="text-3xl text-white/60 font-bold">Start typing...</div>
        ) : (
          typedChars.map((item) => {
            const animationClass = 
              item.animation === 'pop' ? 'animate-pop' :
              item.animation === 'wiggle' ? 'animate-wiggle' :
              'animate-float';
            
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={`
                    text-8xl
                    md:text-9xl
                    font-bold
                    ${animationClass}
                    ${item.color}
                    inline-block
                  `}
                >
                  {item.char}
                </span>
                {item.emoji && !isNumber(item.char) && (
                  <span className="text-6xl md:text-7xl animate-pop" role="img">
                    {item.emoji}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
