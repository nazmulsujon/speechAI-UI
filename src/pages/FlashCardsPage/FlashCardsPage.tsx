import React from 'react';
import { Avatar, Box, Container, IconButton, Stack, Typography } from '@mui/material';
import LargeNavbar from '@/components/LargeNavbar';
import BackButton from '@/components/BackButton';
import SearchBar from '@/components/SearchBar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import MessageIcon from '@mui/icons-material/Message';

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
        p: { md: 0 },
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
                  width: { xs: '100%', md: 420 },
                  position: 'relative',
                }}
              >
                <img
                  src={item.cover_photo ? item.cover_photo : '/astro-img.png'}
                  alt={item.user_name}
                  style={{
                    height: '31.25rem',
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '-20px',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '68px',
                    left: '44px',
                  }}
                >
                  <Stack direction="row" alignItems="start">
                    <Avatar
                      sx={{ width: 48, height: 48, marginRight: '8px' }}
                      alt={`avatar of ${item.user_name}`}
                      src={item.avatar ? item.avatar : '/avatar.png'}
                    />

                    <Stack spacing={0.5} mt={0.5}>
                      <Typography
                        variant="h6"
                        sx={{ color: '#fff', fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins' }}
                      >
                        {item.user_name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#969696', fontSize: '12px', fontFamily: 'Poppins' }}>
                        {item.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Stack direction="row" justifyContent="space-between" alignItems="center" px={3} mb={1}>
                  <Stack direction="row" alignItems="center" columnGap={3}>
                    <IconButton>
                      <ThumbUpIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <IconButton>
                      <ThumbDownAltIcon sx={{ color: '#000000' }} />
                    </IconButton>
                  </Stack>

                  <Stack direction="row" alignItems="center" columnGap={3}>
                    <IconButton>
                      <MessageIcon sx={{ color: '#000000' }} />
                    </IconButton>
                    <IconButton>
                      <img src="/share.svg" alt="share-icon" style={{ width: '24px', height: '20px' }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default FlashCardsPage;
