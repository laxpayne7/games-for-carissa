import { useState, useEffect } from 'react';
import { ModeToggle, type GameMode } from './components/ModeToggle';
import { FindLetterGame } from './components/FindLetterGame';
import { FreeTypingMode } from './components/FreeTypingMode';
import {
  loadMute,
  saveMute,
  loadDifficulty,
  saveDifficulty,
  loadLastMode,
  saveLastMode,
  type Difficulty,
} from './utils/storage';

/**
 * Main App component
 */
function App() {
  const [mode, setMode] = useState<GameMode>(loadLastMode());
  const [difficulty, setDifficulty] = useState<Difficulty>(loadDifficulty());
  const [muted, setMuted] = useState(loadMute());

  useEffect(() => {
    saveLastMode(mode);
  }, [mode]);

  useEffect(() => {
    saveDifficulty(difficulty);
  }, [difficulty]);

  const handleMuteToggle = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    saveMute(newMuted);
  };

  const handleDifficultyChange = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    saveDifficulty(newDifficulty);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center mb-6">
          <ModeToggle mode={mode} onModeChange={setMode} />
        </div>

        {mode === 'find' ? (
          <FindLetterGame
            difficulty={difficulty}
            muted={muted}
            onMuteToggle={handleMuteToggle}
            onDifficultyChange={handleDifficultyChange}
          />
        ) : (
          <FreeTypingMode
            difficulty={difficulty}
            muted={muted}
            onMuteToggle={handleMuteToggle}
          />
        )}
      </div>
    </div>
  );
}

export default App;
