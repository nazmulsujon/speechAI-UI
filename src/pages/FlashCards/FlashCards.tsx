import Navbar from '@/components/Common/Navbar';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

const flashcards = [
  {
    title: 'What is the primary goal of a business?',
    date: '15 Jul, 2024',
  },
  {
    title: 'Which of the following is a programming language?',
    date: '15 Jul, 2024',
  },
  {
    title: 'What does CSS stand for?',
    date: '15 Jul, 2024',
  },
  {
    title: 'Which company developed the React library?',
    date: '15 Jul, 2024',
  },
  {
    title: 'What does HTTP stand for?',
    date: '15 Jul, 2024',
  },
];

const FlashCards: React.FC = ({}) => {
  return (
    <Stack className="container">
      <Navbar />
      <Divider sx={{ height: '1.5px' }} />
      <Stack my={1}>
        <Stack gap="0.1rem" px="28px" my={1}>
          <Typography
            variant="caption"
            sx={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 600, color: '#146bff' }}
          >
            Flashcards for:
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 600 }}>
            This will be the title // title
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: 'Outfit' }}>
            Jul 5, 2024 //date
          </Typography>
        </Stack>

        <Card
          variant="outlined"
          sx={{
            width: '88%',
            height: '300px',
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
            1/5 // currentCard/totalCardLength
          </Typography>

          <CardContent
            sx={{
              pt: '8px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h6"
              sx={{ px: '20px', fontFamily: 'Outfit', fontSize: '1rem !important', fontWeight: 600 }}
            >
              hello 1
            </Typography>
            <Typography variant="caption" sx={{ fontFamily: 'Outfit', mt: '0', mb: 2 }}>
              Tap to flip
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default FlashCards;
