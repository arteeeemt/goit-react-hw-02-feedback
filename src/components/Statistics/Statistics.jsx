import React from 'react';
import { Ul } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <Ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv feedback: {feedback}%</li>
    </Ul>
  );
};
