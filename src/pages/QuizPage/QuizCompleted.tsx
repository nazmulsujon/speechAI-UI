import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography, Stack, Box, Container, Button } from '@mui/material';
import LargeNavbar from '@/components/LargeNavbar';
import LargeFooter from '@/components/LargeFooter';

interface QuizCompletedProps {
  quizData: { question: string; options: string[]; correctAnswerIndex: number }[];
  score: number;
  resetQuiz: () => void;
}

const QuizCompleted: React.FC<QuizCompletedProps> = ({ score, quizData, resetQuiz }) => {
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
          <Button
            onClick={() => resetQuiz()}
            variant="text"
            size="small"
            startIcon={<ArrowBackIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
            sx={{
              width: '84px',
              my: 1,
              px: '12px',
              textTransform: 'none',
              color: '#424A5E',
              borderRadius: '20px',
              '&:hover': {
                bgcolor: 'transparent',
              },
            }}
          >
            Back
          </Button>

          <Stack my={1} textAlign="center" pt={5}>
            <Typography variant="h4" sx={{ fontFamily: 'Outfit', fontWeight: 600 }}>
              Quiz Completed
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600 }}>
              Your Score: {score} out of {quizData.length}
            </Typography>
          </Stack>
        </Box>
      </Box>

      <LargeFooter />
    </Container>
  );
};

export default QuizCompleted;
