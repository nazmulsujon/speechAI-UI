import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LargeNavbar() {
  return (
    <Box
      sx={{
        maxHeight: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        my: '20px',
      }}
    >
      <Stack alignItems="center" direction="row" spacing={1}>
        <Link to="/" style={{ width: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/logo.svg" alt="logo" style={{ width: '100%' }} />
        </Link>
        <Box>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ display: 'flex', alignItems: 'center', fontWeight: 500, fontFamily: 'Outfit' }}
          >
            SpeechAI
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          variant="text"
          sx={{
            padding: '7px 32px',
            fontSize: '0.75rem',
            borderRadius: '20px',
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: '7px 32px',
            fontSize: '0.75rem',
            borderRadius: '20px',
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
