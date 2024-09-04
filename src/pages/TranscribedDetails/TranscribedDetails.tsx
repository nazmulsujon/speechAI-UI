import React from 'react';
import LargeFooter from '@/components/Common/LargeFooter';
import LargeNavbar from '@/components/Common/LargeNavbar';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TranscribedDetailsProps {
  data?: {
    videoTitle: string;
    publishedDate: string;
    videoURL?: string;
    description: {
      title: string;
      points: string[];
    };
    summary: string;
  };
}

const data = {
  videoTitle: 'What are cells | Cells | Biology | FuseSchool',
  publishedDate: 'Dec 3, 2023',
  videoURL: 'https://youtu.be/LFyjJBiltFI?si=0Rc_aKp5kpVLrz0k',
  description: {
    title: 'Understanding Cells: The Building Blocks of Life',
    points: [
      'Ultrices fermentum vel sed neque metus vel ut massa. Ac iaculis auctor aliquam suspendisse odio velit. Lorem vel netus nec facilisi montes nisl. Massa in ipsum mattis enim diam netus.',
      'Enim facilisis quam tellus ipsum facilisis cras ac. A nunc magna vulputate vitae dolor lacinia odio rhoncus lectus. Blandit ultrices nunc eget molestie ut risus fermentum gravida. ',
      'Eu accumsan tellus at turpis volutpat ultrices sit urna. Rhoncus leo eget porttitor nisi. Vestibulum scelerisque sollicitudin magna sed. Mattis ullamcorper amet dolor ultricies sagittis elementum. Eu lectus et suspendisse tincidunt arcu non nibh sit purus. ',
    ],
  },
  summary:
    'Fermentum in vel aliquam adipiscing euismod amet blandit suspendisse. A egestas amet orci risus. Sed facilisis et praesent varius sed. Aliquam ac ac phasellus vulputate eu porta sociis duis. Aliquet nunc morbi massa urna arcu nisl tellus sollicitudin. Vel habitant sed augue lacus posuere aliquam.',
};

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

const getEmbedURL = (shortUrl?: string) => {
  if (!shortUrl) return '';
  const videoId = shortUrl.split('/').pop()?.split('?')[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const TranscribedDetails: React.FC<TranscribedDetailsProps> = () => {
  const embedURL = data?.videoURL ? getEmbedURL(data.videoURL) : '';
  const navigate = useNavigate();

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
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="start" alignItems="start">
            <IconButton onClick={() => navigate(-1)} aria-label="back" size="medium" sx={{ mr: '8px' }}>
              <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
            <Box>
              <Typography fontFamily="Poppins" variant="h6" mt={0.5} fontWeight={600}>
                {data?.videoTitle}
              </Typography>
              <Typography variant="body2" sx={{ color: '#777777', fontWeight: 500, fontSize: '0.7rem' }}>
                {data?.publishedDate}
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              width: '100%',
              height: '0',
              my: 2,
              paddingBottom: { xs: '56.25%', md: '42.85%' },
              position: 'relative',
            }}
          >
            {embedURL ? (
              <iframe
                src={embedURL}
                title={data?.videoTitle}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <Typography variant="body2" sx={{ color: '#777777', fontWeight: 500, textAlign: 'center', pt: '120px' }}>
                No video available
              </Typography>
            )}
          </Box>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            gap={2}
            my={4}
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            <Link to="/quiz" style={{ textDecoration: 'none', width: '100%' }}>
              <Button
                sx={quizAndFlashCardBtnStyle}
                endIcon={<ArrowForwardIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="/take-quiz2.svg"
                    alt="quizIcon"
                    style={{ width: '34px', height: '34px', marginRight: '16px' }}
                  />
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

          <Stack spacing={2} mt={2} mb={4}>
            <Typography fontFamily="Poppins" variant="h6" fontWeight={600}>
              {data?.description?.title}
            </Typography>

            <ul style={{ marginLeft: '0.5rem' }}>
              {data?.description?.points.map((item, index) => (
                <li
                  style={{
                    color: '#969696',
                    fontWeight: 500,
                    fontSize: '0.78rem',
                    marginBottom: '0.5rem',
                    listStylePosition: 'inside',
                    textIndent: '-1.08rem',
                    paddingLeft: '0.75rem',
                  }}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>

            <Typography
              variant="body2"
              sx={{ color: '#969696', fontWeight: 500, fontSize: '0.78rem', fontFamily: 'Poppins' }}
            >
              {data?.summary}
            </Typography>
          </Stack>
        </Box>
      </Box>

      <LargeFooter />
    </Container>
  );
};

export default TranscribedDetails;
