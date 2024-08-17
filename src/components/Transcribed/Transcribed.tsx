import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { useState } from 'react';

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
  const [isPlay, setIsPlay] = useState(true);

  return (
    <Stack gap={2} sx={{ maxHeight: '500px', overflowY: 'auto', scrollbarWidth: 'thin', pr: '6px' }}>
      {recordings.map((recording, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ maxWidth: 345, minHeight: 110, borderRadius: '16px', border: '1px solid #F2F2F2' }}
        >
          <CardHeader
            sx={{ pb: '8px', pt: '12px' }}
            avatar={
              isPlay ? (
                <IconButton onClick={() => setIsPlay(false)} sx={{ cursor: 'pointer' }} aria-label="pause">
                  <img src="/pause-icon.svg" alt="pause" />
                </IconButton>
              ) : (
                <IconButton onClick={() => setIsPlay(true)} sx={{ cursor: 'pointer' }} aria-label="play">
                  <img src="/play-icon.svg" alt="play" />
                </IconButton>
              )
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={recording.title}
          />

          <CardContent sx={{ pt: 0, maxHeight: '70px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
            <Typography variant="body2" color="text.secondary">
              {recording.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
