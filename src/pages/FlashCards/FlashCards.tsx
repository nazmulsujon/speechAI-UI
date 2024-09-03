import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Common/Navbar';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import BackButton from '@/components/Common/BackButton';

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

const FlashCards: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  useEffect(() => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.children[0].clientWidth;
      cardContainerRef.current.scrollTo({
        left: cardWidth * currentCardIndex,
        behavior: 'smooth',
      });
    }
  }, [currentCardIndex]);

  return (
    <div className="container-wrapper">
      <Stack className="container">
        <Navbar />
        <Divider sx={{ height: '1.5px' }} />
        <Stack my={1}>
          <BackButton path="/notes" />

          <Box
            ref={cardContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              pl: '28px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {flashcards.map((flashcard, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  cursor: 'pointer',
                  minWidth: '88%',
                  height: '300px',
                  mx: 'auto',
                  pb: 0,
                  borderRadius: '16px',
                  border: '1px solid #F2F2F2',
                  textAlign: 'center',
                  mr: '12px',
                  scrollSnapAlign: 'center',
                }}
                onClick={handleNextCard}
              >
                <Typography
                  variant="h6"
                  sx={{
                    px: '20px',
                    pt: '12px',
                    fontFamily: 'Outfit',
                    fontSize: '0.8rem !important',
                    fontWeight: 600,
                  }}
                >
                  {index + 1}/{flashcards.length}
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
                    {flashcard.title}
                  </Typography>
                  <Typography variant="caption" sx={{ fontFamily: 'Outfit', mt: '0', mb: 2 }}>
                    Tap to flip
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default FlashCards;
