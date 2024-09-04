import React from 'react';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';
import { Typography, Stack, Divider } from '@mui/material';

interface QuizCompletedProps {
  quizData: { question: string; options: string[]; correctAnswerIndex: number }[];
  score: number;
}

const QuizCompleted: React.FC<QuizCompletedProps> = ({ score, quizData }) => {
  return (
    <div className="container-wrapper">
      <Stack className="container" textAlign="center">
        <Navbar />
        <Divider sx={{ height: '1.5px' }} />

        <Stack>
          <BackButton path="/notes" />

          <Stack my={3} px="28px">
            <Typography variant="h4" sx={{ fontFamily: 'Outfit', fontWeight: 600 }}>
              Quiz Completed
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600 }}>
              Your Score: {score} out of {quizData.length}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default QuizCompleted;
