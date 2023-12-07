import React from 'react';
import { DivBtn, Button } from './FeedbackComponent.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <DivBtn>
      {/*  */}
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </DivBtn>
  );
};
