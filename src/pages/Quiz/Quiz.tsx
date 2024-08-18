import React, { useState } from 'react';
import { Card, Typography, Button, Alert, Box } from '@mui/material';

const quizData = [
  {
    question: 'What is the primary goal of a business?',
    options: ['To provide employment', 'To sell goods or services', 'To earn a profit', 'To innovate'],
    correctAnswerIndex: 2,
  },
  {
    question: 'Which of the following is a programming language?',
    options: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    correctAnswerIndex: 2,
  },
  {
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    correctAnswerIndex: 1,
  },
  {
    question: 'Which company developed the React library?',
    options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
    correctAnswerIndex: 1,
  },
  {
    question: 'What does HTTP stand for?',
    options: [
      'HyperText Transfer Protocol',
      'HyperText Transmission Protocol',
      'HyperText Transfer Package',
      'HyperText Transmission Package',
    ],
    correctAnswerIndex: 0,
  },
];

const Quiz: React.FC = () => {
  return <div></div>;
};

export default Quiz;
