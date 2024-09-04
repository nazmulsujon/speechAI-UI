import { Button, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

interface QuizAndFlashcardBtnProps {
  // Define props here
}

const quizAndFlashCardBtnStyle = {
  width: '88%',
  height: '52px',
  mx: 'auto',
  px: 2,
  bgcolor: '#F2F2F2',
  color: '#424A5E',
  fontWeight: 600,
  border: '1px solid transparent',
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none',
  transition: 'background-color 0.2s ease-in-out, border 0.2s ease-in-out',
  '&:hover': {
    bgcolor: '#F2F2F2',
    border: '1px solid #6366f1',
  },
};

const QuizAndFlashcardBtn: React.FC<QuizAndFlashcardBtnProps> = ({}) => {
  return (
    <Stack gap={2}>
      <Link to="/quiz" style={{ textDecoration: 'none' }}>
        <Button
          sx={quizAndFlashCardBtnStyle}
          endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/take-quiz.svg" alt="quizIcon" style={{ width: '28px', marginRight: '16px' }} />
            Take Quiz
          </div>
        </Button>
      </Link>

      <Link to="/flashcards" style={{ textDecoration: 'none' }}>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
          sx={quizAndFlashCardBtnStyle}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/flash-card.svg" alt="flashCardIcon" style={{ width: '28px', marginRight: '16px' }} />
            Review FlashCards
          </div>
        </Button>
      </Link>
    </Stack>
  );
};

export default QuizAndFlashcardBtn;
