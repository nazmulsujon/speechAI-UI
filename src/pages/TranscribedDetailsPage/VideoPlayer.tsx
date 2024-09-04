import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

interface VideoPlayerProps {
  data: {
    videoTitle: string;
    publishedDate: string;
    videoURL?: string;
  };
}

const getEmbedURL = (shortUrl?: string) => {
  if (!shortUrl) return '';
  const videoId = shortUrl.split('/').pop()?.split('?')[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ data }) => {
  const embedURL = data?.videoURL ? getEmbedURL(data.videoURL) : '';
  const navigate = useNavigate();

  return (
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
    </Box>
  );
};

export default VideoPlayer;
