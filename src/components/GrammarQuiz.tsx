import React, { useState } from 'react';
import { patterns } from '../data/patterns';
import { CheckCircle2, XCircle } from 'lucide-react';

interface GrammarQuizProps {
  exercise: typeof patterns[0];
  onNext: () => void;
}

const GrammarQuiz: React.FC<GrammarQuizProps> = ({ exercise, onNext }) => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [isChecking, setIsChecking] = useState(false);

  const { fullSentence, grammar } = exercise;
  const words = fullSentence.split(' ');

  const handleSelect = (index: number, val: string) => {
    if (isChecking) return;
    setSelections(prev => ({ ...prev, [index]: val }));
  };

  const isComplete = grammar.blanks.every(blank => selections[blank.index]);
  const isCorrect = grammar.blanks.every(blank => selections[blank.index] === blank.answer);

  const checkAnswer = () => {
    setIsChecking(true);
  };

  const renderSentence = () => {
    return words.map((word, idx) => {
      // Find out if this word index is a blank
      const blankDef = grammar.blanks.find(b => b.index === idx);
      
      if (!blankDef) {
        return <span key={idx}>{word} </span>;
      }

      // If it's a blank, render a select element
      const selectedVal = selections[idx] || '';
      let statusClass = '';
      if (isChecking) {
        statusClass = selectedVal === blankDef.answer ? 'correct' : 'incorrect';
      }


      return (
        <span key={idx} className="blank-slot">
          <select 
            className={`blank-select ${statusClass}`}
            value={selectedVal}
            onChange={(e) => handleSelect(idx, e.target.value)}
            disabled={isChecking}
          >
            <option value="" disabled>___</option>
            {blankDef.options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {/* We might need to render punctuation here if we split poorly, but this is fine for now */}
        </span>
      );
    });
  };

  return (
    <div className="grammar-quiz">
      <div className="context-sentence">
        {renderSentence()}
      </div>

      <div className="action-bar">
        {!isChecking ? (
          <>
            <div />
            <button 
              className="btn-primary"
              onClick={checkAnswer}
              disabled={!isComplete}
            >
              Check Answer
            </button>
          </>
        ) : (
          <>
            <div className={`feedback-msg ${isCorrect ? 'success' : 'error'}`}>
              {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
              <span>{isCorrect ? "Perfect! That's correct." : "Not quite right. Try again!"}</span>
            </div>
            
            {isCorrect ? (
              <button className="btn-primary" onClick={onNext}>
                Next Pattern
              </button>
            ) : (
              <button className="btn-primary" onClick={() => setIsChecking(false)}>
                Try Again
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GrammarQuiz;
