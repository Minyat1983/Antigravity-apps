import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface WordPillProps {
  id: string;
  word: string;
  isCorrect?: boolean | null;
}

const WordPill: React.FC<WordPillProps> = ({ id, word, isCorrect }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({ id });

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.6 : 1,
    zIndex: isDragging ? 50 : 1,
  } : undefined;

  let feedbackClass = '';
  if (isCorrect === true) feedbackClass = 'correct';
  if (isCorrect === false) feedbackClass = 'incorrect';

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`word-pill ${isDragging ? 'dragging' : ''} ${feedbackClass}`}
      {...attributes}
      {...listeners}
    >
      {word}
    </div>
  );
};

export default WordPill;
