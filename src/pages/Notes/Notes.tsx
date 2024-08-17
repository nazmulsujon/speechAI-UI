import Navbar from '@/components/Common/Navbar';
import { Button, Divider, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const quizAndFlashCardBtnStyle = {
  width: '88%',
  height: '52px',
  mx: 'auto',
  px: 2,
  bgcolor: '#F2F2F2',
  color: '#424A5E',
  fontWeight: 600,
  border: 'none',
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none',
  '&:hover': {
    bgcolor: '#E0E0E0',
    border: 'none',
  },
};

const Notes = () => {
  return (
    <Stack className="container">
      <Navbar />

      <Divider sx={{ height: '1.5px' }} />

      <Link to="/transcribed">
        <Button
          variant="text"
          startIcon={<ArrowBackIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
          sx={{ maxWidth: '180px', mx: 3, my: 1, textTransform: 'none', color: '#424A5E' }}
        >
          My Transcribed
        </Button>
      </Link>

      <Stack gap={2}>
        <Button
          sx={quizAndFlashCardBtnStyle}
          endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/take-quiz.svg" alt="quizIcon" style={{ width: '28px', marginRight: '16px' }} />
            Take Quiz
          </div>
        </Button>

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
      </Stack>
    </Stack>
  );
};

export default Notes;
