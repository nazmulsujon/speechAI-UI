import React, { useState } from 'react';
import { Box, Button, Container, IconButton, LinearProgress, Stack, Typography } from '@mui/material';
import LargeNavbar from '@/components/LargeNavbar';
import LargeFooter from '@/components/LargeFooter';
import BackButton from '@/components/BackButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import QuizCompleted from './QuizCompleted';

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

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOptionIndex === null) {
      const isAnswerCorrect = index === quizData[currentQuestionIndex].correctAnswerIndex;
      setSelectedOptionIndex(index);
      setIsCorrect(isAnswerCorrect);
      setAnswerSelected(true);
      if (isAnswerCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setSelectedOptionIndex(null);
      setIsCorrect(null);
      setAnswerSelected(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsCorrect(null);
    setAnswerSelected(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  if (isQuizCompleted) {
    return <QuizCompleted quizData={quizData} score={score} resetQuiz={resetQuiz} />;
  }

  return (
    <Container
      sx={{
        maxWidth: '1080px !important',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <LargeNavbar />

        <Box>
          <BackButton path="/quiz" />

          <Stack spacing={2} maxWidth={{ xs: '100%', md: 400 }} mx="auto" my={2}>
            <Box>
              <Typography variant="body2" sx={{ color: '#969696', fontWeight: 500, fontSize: '0.7rem' }} mb={0.5}>
                Question {currentQuestionIndex + 1} of {quizData.length}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={((currentQuestionIndex + 1) / quizData.length) * 100}
                color="success"
                sx={{ width: '92%', borderRadius: '20px', direction: 'ltr' }} // Ensure left-to-right fill
              />
            </Box>
            <Typography fontFamily="Poppins" variant="h6" mt={0.5} fontWeight={600}>
              {currentQuestion.question}
            </Typography>

            <ul style={{ paddingLeft: 0 }}>
              {currentQuestion.options.map((option, index) => (
                <li
                  style={{
                    color: '#000000',
                    fontWeight: 500,
                    fontSize: '1rem',
                    marginBottom: '0.6rem',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  key={index}
                  onClick={() => handleOptionClick(index)}
                >
                  <IconButton sx={{ marginRight: '4px' }} disabled={answerSelected}>
                    <img
                      src={
                        selectedOptionIndex === index
                          ? isCorrect
                            ? '/checked-icon.svg'
                            : '/cross-icon.svg'
                          : '/unchecked-icon.svg'
                      }
                      alt=""
                      style={{ width: '22px', height: '22px' }}
                    />
                  </IconButton>

                  <span>{option}</span>
                </li>
              ))}
            </ul>

            <Box mt={1} px={3} py={1} display="flex" justifyContent="flex-end" width="100%">
              <Button
                variant="contained"
                sx={{
                  width: '120px',
                  textTransform: 'none',
                  fontFamily: 'Outfit',
                  borderRadius: '20px',
                }}
                onClick={handleNextClick}
                endIcon={<ArrowRightAltIcon fontSize="inherit" />}
              >
                {currentQuestionIndex < quizData.length - 1 ? 'Next' : 'Finish'}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>

      <LargeFooter />
    </Container>
  );
};

export default QuizPage;
