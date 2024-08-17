import Lottie from 'lottie-react';
import microphoneAnimation from '../../assets/lottie/microphone-animation.json';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const uploadBtnStyle = {
  width: '160px',
  height: '72px',
  bgcolor: '#F2F2F2',
  color: '#fff',
  fontWeight: 500,
  fontSize: '0.79rem',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, #14DCFE , #1465FF)',
  '&:hover': {
    bgcolor: '#E0E0E0',
    border: 'none',
  },
};

const Record = () => {
  const [startRecord, setStartRecord] = useState(true);

  const handleAudioRecord = () => {
    setStartRecord(!startRecord);
  };

  return (
    <Stack gap={1} direction="column" alignItems="center">
      <Box textAlign="center">
        <Typography variant="h6">You’re ready to go!</Typography>
        <Typography variant="subtitle2" sx={{ fontSize: '13px', color: '#424A5E' }}>
          Record meetings
        </Typography>
      </Box>

      <Box sx={{ width: '180px', height: '180px' }}>
        <Lottie
          onClick={handleAudioRecord}
          animationData={microphoneAnimation}
          loop={startRecord}
          style={{ color: 'red' }}
        />
      </Box>

      <Divider sx={{ width: '100%', fontSize: '12px' }}>OR</Divider>

      <Button
        variant="outlined"
        startIcon={<ContentPasteIcon fontSize="small" />}
        sx={{
          bgcolor: '#F2F2F2',
          color: '#424A5E',
          border: 'none',
          my: '8px',
          textTransform: 'capitalize',
          '&:hover': {
            bgcolor: '#E0E0E0',
            border: 'none',
          },
        }}
      >
        Paste Audio
      </Button>
      <Stack gap={2}>
        <Stack gap={2} direction="row" alignItems="center">
          <Button variant="outlined" sx={uploadBtnStyle}>
            <img src="/public/audio-icon.svg" alt="audioIcon" style={{ width: '24px', marginBottom: '2px' }} />
            Audio
          </Button>

          <Button variant="outlined" sx={uploadBtnStyle}>
            <img src="/public/video-icon.svg" alt="vedioIcon" style={{ width: '24px', marginBottom: '2px' }} />
            Vedio
          </Button>
        </Stack>

        <Button
          variant="outlined"
          sx={{
            width: '100%',
            height: '48px',
            bgcolor: '#F2F2F2',
            color: '#fff',
            fontWeight: 500,
            fontSize: '0.79rem',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom,#F9F10B , #E8C33D)',
            alignItems: 'center',
            '&:hover': {
              bgcolor: '#E0E0E0',
              border: 'none',
            },
          }}
        >
          <img src="/public/premium-icon.svg" alt="vedioIcon" style={{ width: '24px', marginRight: '6px' }} />
          Go Premium
        </Button>
      </Stack>
    </Stack>
  );
};

export default Record;
