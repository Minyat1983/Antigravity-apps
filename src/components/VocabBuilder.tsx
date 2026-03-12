import React, { useState } from 'react';
import { patterns } from '../data/patterns';
import { CheckCircle2, XCircle } from 'lucide-react';

interface VocabBuilderProps {
  exercise: typeof patterns[0];
  onNext: () => void;
}

const VocabBuilder: React.FC<VocabBuilderProps> = ({ exercise, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const { fullSentence, vocabulary } = exercise;
  const words = fullSentence.split(' ');
  
  // Construct a sentence where the vocabulary word is blanked out to test matching
  const sentenceWithBlank = words.map((w, i) => i === vocabulary.contextIndex ? "_______" : w).join(' ');

  // Generate false options from other exercises
  const generateOptions = () => {
    let options = [vocabulary.focusWord];
    while(options.length < 4) {
      let rand = patterns[Math.floor(Math.random() * patterns.length)].vocabulary.focusWord;
      if (!options.includes(rand)) {
        options.push(rand);
      }
    }
    return options.sort(() => 0.5 - Math.random());
  };

  const [options] = useState(generateOptions());

  const isCorrect = selectedOption === vocabulary.focusWord;

  return (
    <div className="vocab-card">
      <div className="context-sentence" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        "{sentenceWithBlank}"
      </div>
      
      <div className="vocab-options">
        {options.map((opt, idx) => {
          let extraClass = '';
          if (selectedOption === opt) extraClass += ' selected ';
          if (isChecking) {
            if (opt === vocabulary.focusWord) extraClass += ' correct ';
            else if (selectedOption === opt) extraClass += ' incorrect ';
          }

          return (
            <button 
              key={idx}
              className={`vocab-option ${extraClass}`}
              onClick={() => !isChecking && setSelectedOption(opt)}
              disabled={isChecking}
            >
              {opt}
            </button>
          )
        })}
      </div>

      <div className="action-bar" style={{ marginTop: '2rem' }}>
        {!isChecking ? (
          <>
            <div />
            <button 
              className="btn-primary"
              onClick={() => setIsChecking(true)}
              disabled={!selectedOption}
            >
              Check Answer
            </button>
          </>
        ) : (
          <>
            <div className={`feedback-msg ${isCorrect ? 'success' : 'error'}`}>
              {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
              <span>{isCorrect ? "Excellent!" : "Not quite right."}</span>
            </div>
            
            {isCorrect ? (
              <button className="btn-primary" onClick={onNext}>
                Next Word
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

export default VocabBuilder;
