import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

type BackButtonProps = {
  path: string;
};

const BackButton: React.FC<BackButtonProps> = ({ path }) => {
  return (
    <Link to={path} style={{ maxWidth: '84px' }}>
      <Button
        variant="text"
        size="small"
        startIcon={<ArrowBackIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
        sx={{ width: '84px', mx: '28px', my: 1, px: '12px', textTransform: 'none', color: '#424A5E' }}
      >
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
