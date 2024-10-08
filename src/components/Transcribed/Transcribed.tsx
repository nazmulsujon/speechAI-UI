import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const recordings = [
  {
    title: 'Recordings 01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: 'Recordings 02',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, just suscipit nulla, eu scelerisque dolor eros et elit.',
  },
  {
    title: 'Recordings 03',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar, ipsum eu tempus commodo, just suscipit nulla, eu scelerisque dolor eros et elit.',
  },
  {
    title: 'Recordings 04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Recordings 05',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Transcribed() {
  const navigate = useNavigate();
  const [playStates, setPlayStates] = useState(recordings.map(() => false));

  const togglePlayState = (index: number) => {
    setPlayStates((prevState) => prevState.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <Stack gap={2} sx={{ maxHeight: '486px', overflowY: 'auto', scrollbarWidth: 'thin', pr: '6px' }}>
      {recordings.map((recording, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ maxWidth: 345, minHeight: 110, borderRadius: '16px', border: '1px solid #F2F2F2', cursor: 'pointer' }}
          onClick={() => {
            navigate('/notes');
          }}
        >
          <CardHeader
            sx={{ pb: '8px', pt: '12px' }}
            avatar={
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  togglePlayState(index);
                }}
                aria-label={playStates[index] ? 'pause' : 'play'}
              >
                <img
                  src={playStates[index] ? '/pause-icon.svg' : '/play-icon.svg'}
                  alt={playStates[index] ? 'pause' : 'play'}
                  style={{ width: '24px' }}
                />
              </IconButton>
            }
            action={
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                }}
                aria-label="settings"
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={recording.title}
          />

          <CardContent sx={{ pt: 0 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',
              }}
            >
              {recording.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
