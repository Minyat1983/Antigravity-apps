import { useState } from 'react';
import { patterns } from './data/patterns';
import GrammarQuiz from './components/GrammarQuiz';
import VocabBuilder from './components/VocabBuilder';
import { BookOpen, Puzzle } from 'lucide-react';
import './App.css';

type AppMode = 'grammar' | 'vocab';

function App() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [mode, setMode] = useState<AppMode>('grammar');

  const handleNext = () => {
    if (currentExerciseIndex < patterns.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setCurrentExerciseIndex(0); // loop around for endless practice
    }
  };

  const currentExercise = patterns[currentExerciseIndex];

  return (
    <div className="app-container fade-in">
      <header className="app-header">
        <h1>Sentence Patterns</h1>
        <p>Advanced Grammar & Vocabulary Builder</p>
      </header>

      <div className="mode-selector">
        <button 
          className={`mode-btn ${mode === 'grammar' ? 'active' : ''}`}
          onClick={() => setMode('grammar')}
        >
          <Puzzle size={20} />
          Grammar Patterns
        </button>
        <button 
          className={`mode-btn ${mode === 'vocab' ? 'active' : ''}`}
          onClick={() => setMode('vocab')}
        >
          <BookOpen size={20} />
          Vocabulary Focus
        </button>
      </div>

      <main className="app-main">
        <div className="exercise-card fade-in" key={`${mode}-${currentExercise.id}`}>
          <div className="exercise-header" style={{ marginBottom: '2rem' }}>
            <span className="exercise-number">
              Pattern 
              <select 
                className="exercise-selector"
                value={currentExerciseIndex}
                onChange={(e) => setCurrentExerciseIndex(Number(e.target.value))}
                style={{ color: 'var(--primary-color)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                {patterns.map((_, index) => (
                  <option key={index} value={index}>
                    {index + 1}
                  </option>
                ))}
              </select>
              of {patterns.length}
            </span>
          </div>
          
          {mode === 'grammar' ? (
            <GrammarQuiz exercise={currentExercise} onNext={handleNext} />
          ) : (
            <VocabBuilder exercise={currentExercise} onNext={handleNext} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
