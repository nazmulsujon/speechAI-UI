import Navbar from '@/components/Navbar';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import QuizAndFlashcardBtn from './QuizAndFlashcardBtn';

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

const Notes = () => {
  return (
    <div className="container-wrapper">
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

        <QuizAndFlashcardBtn />

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
    </div>
  );
};

export default Notes;
