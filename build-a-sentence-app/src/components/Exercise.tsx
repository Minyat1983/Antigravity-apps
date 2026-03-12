import { useState, useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import WordPill from './WordPill';
import type { Exercise as ExerciseType } from '../data/exercises';
import { CheckCircle2, XCircle } from 'lucide-react';

const Slot: React.FC<{ id: string; children?: React.ReactNode }> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className={`slot ${isOver ? 'slot-over' : ''} ${children ? 'filled' : ''}`}>
      {children}
    </div>
  );
};

const WordBank: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({ id: 'bank' });
  return (
    <div ref={setNodeRef} className={`word-bank ${isOver ? 'bank-over' : ''}`}>
      {children}
    </div>
  );
};

interface ExerciseProps {
  exercise: ExerciseType;
  onNext: () => void;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise, onNext }) => {
  const [items, setItems] = useState<{ id: string; word: string }[]>([]);
  const [positions, setPositions] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Initialize items with unique IDs
    const initialItems = exercise.jumbledWords.map((word, index) => ({
      id: `word-${index}-${word}`,
      word,
    }));
    setItems(initialItems);
    
    // All items start in the word bank
    const initialPositions: Record<string, string> = {};
    initialItems.forEach(item => {
      initialPositions[item.id] = 'bank';
    });
    setPositions(initialPositions);

    setIsChecked(false);
    setIsCorrect(false);
  }, [exercise]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return; // Dropped outside any droppable

    const wordId = active.id as string;
    const targetId = over.id as string;

    setPositions(prev => {
      const newPositions = { ...prev };
      
      // If dropping into a slot that already has a word, swap them
      if (targetId.startsWith('slot-')) {
        const existingWordId = Object.keys(newPositions).find(id => newPositions[id] === targetId);
        if (existingWordId && existingWordId !== wordId) {
          // Send existing word to where the dragged word came from
          newPositions[existingWordId] = newPositions[wordId];
        }
      }
      
      newPositions[wordId] = targetId;
      return newPositions;
    });
  };

  const slots = Array.from({ length: items.length }, (_, i) => `slot-${i}`);
  const isReadyToCheck = slots.every(slotId => Object.values(positions).includes(slotId));

  const handleCheck = () => {
    const currentSentence = slots.map(slotId => {
      const wordId = Object.keys(positions).find(id => positions[id] === slotId);
      if (wordId) {
        return items.find(i => i.id === wordId)?.word || '';
      }
      return '';
    }).join(' ');

    const isAnsCorrect = currentSentence.toLowerCase() === exercise.correctSentence.toLowerCase();
    setIsCorrect(isAnsCorrect);
    setIsChecked(true);
  };

  // Split context to insert the drop zone
  const [prefix, suffix] = exercise.context.split('_________________________________');

  return (
    <div className="exercise-container">
      <div className="context-prefix">
        {prefix}
      </div>

      <div className="dnd-area">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="sentence-slots-container">
            {slots.map(slotId => {
              const wordId = Object.keys(positions).find(id => positions[id] === slotId);
              const item = wordId ? items.find(i => i.id === wordId) : null;
              
              return (
                <Slot key={slotId} id={slotId}>
                  {item && (
                    <WordPill 
                      id={item.id} 
                      word={item.word} 
                      isCorrect={isChecked ? isCorrect : null}
                    />
                  )}
                </Slot>
              );
            })}
            {suffix && <span className="context-suffix">{suffix}</span>}
          </div>

          <div className="word-bank-container">
            <p className="instruction-text">Drag words to the underscores above:</p>
            <WordBank>
              {items.filter(item => positions[item.id] === 'bank').map(item => (
                <WordPill key={item.id} id={item.id} word={item.word} />
              ))}
            </WordBank>
          </div>
        </DndContext>
      </div>

      <div className="action-area">
        {!isChecked ? (
          <button className="btn-primary check-btn" onClick={handleCheck} disabled={!isReadyToCheck}>
            Check Answer
          </button>
        ) : (
          <div className={`feedback-section ${isCorrect ? 'is-correct' : 'is-incorrect'}`}>
            <div className="feedback-message">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="icon success-icon" />
                  <span>Excellent! That's correct.</span>
                </>
              ) : (
                <>
                  <XCircle className="icon error-icon" />
                  <span>Not quite right. Try again!</span>
                </>
              )}
            </div>
            
            {isCorrect ? (
              <button className="btn-primary next-btn" onClick={onNext}>
                Next Exercise
              </button>
            ) : (
              <button className="btn-secondary retry-btn" onClick={() => setIsChecked(false)}>
                Try Again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
