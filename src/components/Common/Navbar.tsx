import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Container
      sx={{
        maxHeight: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        my: '6px',
      }}
    >
      <Stack alignItems="center" direction="row" spacing={1}>
        <Link to="/" style={{ width: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/logo.svg" alt="logo" style={{ width: '100%' }} />
        </Link>
        <Box>
          <Typography variant="subtitle1" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            SpeechAI
          </Typography>
        </Box>
      </Stack>
      <IconButton edge="end" color="inherit" aria-label="menu">
        <img src="/cross-icon.svg" alt="logo" style={{ width: '24px' }} />
      </IconButton>
    </Container>
  );
}
