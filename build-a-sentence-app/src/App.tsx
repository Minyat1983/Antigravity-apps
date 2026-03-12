import { useState } from 'react';
import { exercises } from './data/exercises';
import Exercise from './components/Exercise';
import './App.css';

function App() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentExerciseIndex(0);
    setIsCompleted(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Build a Sentence</h1>
        <p>Premium Practice Application</p>
      </header>

      <main className="app-main">
        {!isCompleted ? (
          <div className="exercise-card fade-in">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentExerciseIndex) / exercises.length) * 100}%` }}
              />
            </div>
            <div className="exercise-header">
              <span className="exercise-number">
                Exercise 
                <select 
                  className="exercise-selector"
                  value={currentExerciseIndex}
                  onChange={(e) => {
                    setCurrentExerciseIndex(Number(e.target.value));
                    setIsCompleted(false);
                  }}
                >
                  {exercises.map((_, index) => (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                of {exercises.length}
              </span>
            </div>
            
            <Exercise 
              exercise={exercises[currentExerciseIndex]} 
              onNext={handleNext} 
              key={exercises[currentExerciseIndex].id} 
            />
          </div>
        ) : (
          <div className="completion-card scale-in">
            <h2>Congratulations!</h2>
            <p>You have successfully completed all the exercises.</p>
            <button className="btn-primary" onClick={handleRestart}>
              Practice Again
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
