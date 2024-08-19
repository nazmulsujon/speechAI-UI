import React, { useState } from 'react';
import { Card, Typography, Button, Alert, Box, Stack, Divider, CardContent } from '@mui/material';
import Navbar from '@/components/Common/Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import BackButton from '@/components/Common/BackButton';

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOptionIndex === null) {
      const isAnswerCorrect = index === quizData[currentQuestionIndex].correctAnswerIndex;
      setSelectedOptionIndex(index);
      setIsCorrect(isAnswerCorrect);
      if (isAnswerCorrect) {
        setScore((prevScore) => (prevScore += 1));
      }
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setSelectedOptionIndex(null);
      setIsCorrect(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];

  if (isQuizCompleted) {
    return (
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
    );
  }

  return (
    <Stack className="container">
      <Navbar />
      <Divider sx={{ height: '1.5px' }} />

      <Stack>
        <BackButton path="/notes" />
        <Stack gap="0.1rem" px="28px" mb={1}>
          <Typography
            variant="caption"
            sx={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 600, color: '#146bff' }}
          >
            Quiz for:
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600 }}>
            This will be the topic name of all quiz.
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: 'Outfit' }}>
            Jul 5, 2024
          </Typography>
        </Stack>

        <Card
          variant="outlined"
          sx={{
            width: '88%',
            mx: 'auto',
            pb: 0,
            borderRadius: '16px',
            border: '1px solid #F2F2F2',
          }}
        >
          <Typography
            variant="h6"
            sx={{ px: '20px', pt: '12px', fontFamily: 'Outfit', fontSize: '0.8rem !important', fontWeight: 600 }}
          >
            {currentQuestionIndex + 1}/{quizData.length}
          </Typography>
          <Typography
            variant="h6"
            sx={{ px: '20px', py: '8px', fontFamily: 'Outfit', fontSize: '1rem !important', fontWeight: 600 }}
          >
            {currentQuestion.question}
          </Typography>
          <CardContent
            sx={{
              pt: '8px',
              pb: '16px !important',
              '& > * + *': {
                marginTop: 2,
              },
            }}
          >
            {currentQuestion.options.map((option, index) => (
              <Alert
                key={index}
                icon={
                  selectedOptionIndex === index && isCorrect !== null ? (
                    isCorrect ? (
                      <CheckCircleIcon fontSize="inherit" sx={{ ml: '6px' }} />
                    ) : (
                      <CancelIcon fontSize="inherit" sx={{ ml: '6px' }} />
                    )
                  ) : (
                    false
                  )
                }
                severity={
                  selectedOptionIndex === index && isCorrect !== null ? (isCorrect ? 'success' : 'error') : 'info'
                }
                sx={{
                  cursor: selectedOptionIndex === null ? 'pointer' : 'default',
                  backgroundColor:
                    selectedOptionIndex === index && isCorrect !== null
                      ? isCorrect
                        ? '#adeeca'
                        : '#f443366e'
                      : '#F2F2F2',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '& .MuiAlert-icon': {
                    order: 1,
                    marginLeft: 'auto',
                    marginRight: '0',
                  },
                  fontFamily: 'Outfit',
                }}
                onClick={() => handleOptionClick(index)}
              >
                {option}
              </Alert>
            ))}
          </CardContent>
        </Card>
      </Stack>

      <Box px={3} py={1} display="flex" justifyContent="flex-end" width="100%">
        <Button
          variant="contained"
          sx={{
            width: '120px',
            textTransform: 'none',
            fontFamily: 'Outfit',
            background: 'linear-gradient(to bottom, #14DCFE , #1465FF)',
          }}
          onClick={handleNextClick}
        >
          {currentQuestionIndex < quizData.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </Box>
    </Stack>
  );
};

export default Quiz;
