import React from 'react';

interface BigKeyProps {
  letter: string;
  onClick: () => void;
  isTarget?: boolean;
  className?: string;
}

/**
 * BigKey component - large bubble button for letter selection
 */
export function BigKey({ letter, onClick, isTarget = false, className = '' }: BigKeyProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bubble-button
        ${isTarget ? 'bg-warm-green' : 'bg-white'}
        ${isTarget ? 'text-white' : 'text-warm-orange'}
        text-4xl
        md:text-5xl
        font-bold
        p-4
        md:p-6
        ${className}
      `}
      aria-label={`Select ${letter}`}
    >
      {letter}
    </button>
  );
}
