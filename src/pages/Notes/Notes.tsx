import Navbar from '@/components/Common/Navbar';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const transcription = [
  {
    scenario:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
  },
  {
    scenario:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
  },
  {
    scenario:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
  },
  {
    scenario:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, justo nisi suscipit nulla, eu scelerisque dolor eros et elit.',
  },
];

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

      <Link to="/" state={{ content: 'transcribed' }} style={{ maxWidth: '220px' }}>
        <Button
          variant="text"
          size="small"
          startIcon={<ArrowBackIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
          sx={{ maxWidth: '180px', mx: 3, my: 1, px: '12px', textTransform: 'none', color: '#424A5E' }}
        >
          My Transcribed
        </Button>
      </Link>

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

      <Stack gap={1} mx={2} px={1} my={2} sx={{ maxHeight: '480px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '1rem' }}>
          Speech to text Transcription
        </Typography>
        {transcription.map((item, index) => (
          <Box key={index}>
            <Typography variant="body2" gutterBottom sx={{ fontFamily: 'Outfit' }}>
              <span style={{ fontWeight: 600 }}>Scenario:</span> {item.scenario}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Outfit' }}>
              <span style={{ fontWeight: 600 }}>Value:</span> {item.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Notes;
