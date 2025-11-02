import { getEmoji } from '../utils/phonics';

interface LetterCardProps {
  letter: string;
  size?: 'large' | 'medium';
}

/**
 * LetterCard component - displays a large letter card with emoji
 */
export function LetterCard({ letter, size = 'large' }: LetterCardProps) {
  const sizeClasses = size === 'large' ? 'text-9xl md:text-[12rem]' : 'text-6xl md:text-8xl';
  const emojiSize = size === 'large' ? 'text-8xl md:text-9xl' : 'text-5xl md:text-7xl';
  const emoji = getEmoji(letter);

  return (
    <div
      className={`
        font-bold
        text-center
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
        md:p-12
        min-h-[200px]
        min-w-[200px]
        flex
        flex-col
        items-center
        justify-center
        gap-4
        border-4
        border-warm-orange
      `}
    >
      <div className={sizeClasses}>{letter}</div>
      {emoji && (
        <div className={emojiSize} role="img" aria-label={letter}>
          {emoji}
        </div>
      )}
    </div>
  );
}
