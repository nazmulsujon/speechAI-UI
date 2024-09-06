import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import LargeNavbar from '@/components/LargeNavbar';
import BackButton from '@/components/BackButton';
import SearchBar from '@/components/SearchBar';

const flashcards = [
  {
    user_name: 'User_name',
    avatar: '',
    description: 'Porttitor arcu eget cursus ut tellus.',
    cover_photo: '',
  },
  {
    user_name: 'User_name',
    avatar: '',
    description: 'Porttitor arcu eget cursus ut tellus.',
    cover_photo: '',
  },
  {
    user_name: 'User_name',
    avatar: '',
    description: 'Porttitor arcu eget cursus ut tellus.',
    cover_photo: '',
  },
];

const FlashCardsPage: React.FC = () => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search query:', event.target.value);
  };

  return (
    <Container
      sx={{
        maxWidth: '1080px !important',
        height: '100vh',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <LargeNavbar />

        <Stack
          mt={3}
          width="100%"
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'start', md: 'space-between' }}
        >
          <BackButton btnText="Flashcard" path="/flashcards" />

          <Box mt={1}>
            <SearchBar placeholder="Search" onSearchChange={handleSearchChange} />
          </Box>
        </Stack>

        <Box
          sx={{
            mt: 2,
            maxWidth: { xs: '100%', md: 400 },
            mx: 'auto',
            overflowY: 'auto',
            flex: 1,
            height: 0,
            scrollbarWidth: 'none',
          }}
        >
          <Stack spacing={1} direction="column" sx={{ height: '100%' }}>
            {flashcards.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mx: 'auto',
                  bgcolor: 'transparent',
                  border: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <img
                  src={item.cover_photo ? item.cover_photo : '/astro-img.png'}
                  alt={item.user_name}
                  style={{
                    height: '31.25rem',
                    width: '100%',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default FlashCardsPage;
