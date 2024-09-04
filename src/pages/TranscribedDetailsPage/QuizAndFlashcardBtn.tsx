import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface QuizAndFlashcardBtnProps {
  // Define props here
}

const quizAndFlashCardBtnStyle = {
  width: '100%',
  height: '94px',
  mx: 'auto',
  px: 2,
  bgcolor: '#fff',
  color: '#424A5E',
  fontWeight: 600,
  boxShadow: 3,
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none',
  border: '1px solid transparent',
  transition: 'background-color 0.2s ease-in-out, border 0.2s ease-in-out',
  '&:hover': {
    bgcolor: '#fff',
    border: '1px solid #6366f1',
  },
};

const QuizAndFlashcardBtn: React.FC<QuizAndFlashcardBtnProps> = ({}) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={2} my={4} justifyContent="space-between" sx={{ width: '100%' }}>
      <Link to="/quiz" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          sx={quizAndFlashCardBtnStyle}
          endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/take-quiz2.svg" alt="quizIcon" style={{ width: '34px', height: '34px', marginRight: '16px' }} />
            <div style={{ textAlign: 'left' }}>
              Take Quiz
              <Typography variant="body2" sx={{ color: '#777777' }}>
                Ante elit sociis et nulla turpis a. Eget tristique mattis
              </Typography>
            </div>
          </div>
        </Button>
      </Link>

      <Link to="/flashcards" style={{ textDecoration: 'none', width: '100%' }}>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
          sx={quizAndFlashCardBtnStyle}
        >
          <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Poppins' }}>
            <img
              src="/flash-card2.svg"
              alt="flashCardIcon"
              style={{ width: '34px', height: '34px', marginRight: '16px' }}
            />
            <div style={{ textAlign: 'left' }}>
              Review FlashCards
              <Typography variant="body2" sx={{ color: '#777777' }}>
                Ante elit sociis et nulla turpis a. Eget tristique mattis
              </Typography>
            </div>
          </div>
        </Button>
      </Link>
    </Stack>
  );
};

export default QuizAndFlashcardBtn;
