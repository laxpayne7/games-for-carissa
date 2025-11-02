import React, { useEffect, useState } from 'react';

/**
 * ConfettiStars component - displays animated stars on success
 */
export function ConfettiStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random star positions
    const newStars = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setStars(newStars);

    // Clear stars after animation
    const timer = setTimeout(() => setStars([]), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute text-4xl animate-confetti"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          ⭐
        </div>
      ))}
    </div>
  );
}
