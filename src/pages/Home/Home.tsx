import { Typography, Stack } from '@mui/material';

const Home = () => {
  return (
    <Stack className="container">
      <Typography textAlign="center" variant="h2">
        Vite-MUI-TS Template
      </Typography>
      <Typography textAlign="center" variant="subtitle1">
        React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
      </Typography>
    </Stack>
  );
};

export default Home;
