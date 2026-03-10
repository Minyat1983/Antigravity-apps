
import React, { useState } from 'react';
import './index.css';
import { geneticsWords, geneticsQuiz, WordEntry, QuizItem } from './data';

type ViewMode = 'overview' | 'flashcards' | 'quiz';

function App() {
  const [view, setView] = useState<ViewMode>('overview');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [fitbValue, setFitbValue] = useState("");

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % geneticsWords.length);
    }, 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev - 1 + geneticsWords.length) % geneticsWords.length);
    }, 150);
  };

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);
    if (quizIndex < geneticsQuiz.length - 1) {
      setQuizIndex(quizIndex + 1);
      setFitbValue("");
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setUserAnswers([]);
    setShowScore(false);
    setFitbValue("");
  };

  const calculateScore = () => {
    return userAnswers.reduce((acc, curr, idx) => {
      return curr.toLowerCase().trim() === geneticsQuiz[idx].answer.toLowerCase().trim() ? acc + 1 : acc;
    }, 0);
  };

  const renderOverview = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Type</th>
            <th>Contextual Definition</th>
            <th>Academic Sentence</th>
          </tr>
        </thead>
        <tbody>
          {geneticsWords.map((word, idx) => (
            <tr key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
              <td style={{ fontWeight: '700', color: 'var(--primary)' }}>{word.word}</td>
              <td><span className="pos-tag">{word.pos}</span></td>
              <td>{word.definition}</td>
              <td style={{ fontStyle: 'italic', opacity: 0.8 }}>{word.sentence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderFlashcards = () => {
    const current = geneticsWords[currentCardIndex];
    return (
      <div className="flashcards-container">
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div className="card-inner">
            <div className="card-front">
              <span className="card-label">Genetic Vocabulary</span>
              <h2 className="card-word">{current.word}</h2>
              <p style={{ color: 'var(--text-dim)' }}>Click to reveal definition</p>
            </div>
            <div className="card-back">
              <div className="card-info">
                <span className="card-label">Part of Speech</span>
                <p><span className="pos-tag">{current.pos}</span></p>
              </div>
              <div className="card-info">
                <span className="card-label">Definition</span>
                <p>{current.definition}</p>
              </div>
              <div className="card-info">
                <span className="card-label">Usage in Lab</span>
                <p style={{ fontStyle: 'italic' }}>"{current.sentence}"</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-controls">
          <button className="nav-btn" onClick={(e) => { e.stopPropagation(); handlePrevCard(); }}>Previous</button>
          <span style={{ margin: '0 20px', alignSelf: 'center' }}>{currentCardIndex + 1} / {geneticsWords.length}</span>
          <button className="nav-btn" onClick={(e) => { e.stopPropagation(); handleNextCard(); }}>Next</button>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (showScore) {
      const score = calculateScore();
      return (
        <div className="score-container">
          <h2>Quiz Completed!</h2>
          <div className="score-circle">{score}/{geneticsQuiz.length}</div>
          <p className="subtitle">Outstanding effort! Mastery of genetics vocabulary is key to academic success.</p>
          <button className="btn-primary" onClick={resetQuiz}>Retake Quiz</button>
        </div>
      );
    }

    const currentQ = geneticsQuiz[quizIndex];
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <span>Question {quizIndex + 1} of {geneticsQuiz.length}</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((quizIndex + 1) / geneticsQuiz.length) * 100}%` }}></div>
          </div>
        </div>
        <h3 className="question-text">{currentQ.question}</h3>
        
        {currentQ.type === 'mcq' ? (
          <div className="options-grid">
            {currentQ.options?.map((opt, idx) => (
              <button 
                key={idx} 
                className="option-btn"
                onClick={() => handleQuizAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <div className="input-area">
            <input 
              type="text" 
              placeholder="Type your answer here..." 
              value={fitbValue}
              onChange={(e) => setFitbValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fitbValue.trim() && handleQuizAnswer(fitbValue)}
              autoFocus
            />
            <button 
              className="btn-primary" 
              onClick={() => fitbValue.trim() && handleQuizAnswer(fitbValue)}
              disabled={!fitbValue.trim()}
            >
              Submit Answer
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>B2 Genetics</h1>
        <p className="subtitle">Academic Word List & Mastery Hub</p>
      </header>

      <nav>
        <button className={`nav-btn ${view === 'overview' ? 'active' : ''}`} onClick={() => setView('overview')}>Overview</button>
        <button className={`nav-btn ${view === 'flashcards' ? 'active' : ''}`} onClick={() => setView('flashcards')}>Flashcards</button>
        <button className={`nav-btn ${view === 'quiz' ? 'active' : ''}`} onClick={() => setView('quiz')}>Quiz</button>
      </nav>

      <main className="content-area">
        {view === 'overview' && renderOverview()}
        {view === 'flashcards' && renderFlashcards()}
        {view === 'quiz' && renderQuiz()}
      </main>
    </div>
  );
}

export default App;
