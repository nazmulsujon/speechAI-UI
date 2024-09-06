import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';

type BackButtonProps = {
  path: string;
  btnText?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ path, btnText }) => {
  return (
    <Link to={path} style={{ maxWidth: '104px' }}>
      <Button
        variant="text"
        size="small"
        startIcon={<ArrowBackIosIcon sx={{ color: '#424A5E', width: '0.8em' }} />}
        sx={{
          width: '104px',
          my: 1,
          px: '12px',
          textTransform: 'none',
          color: '#424A5E',
          borderRadius: '20px',
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
      >
        {btnText ? btnText : 'Back'}
      </Button>
    </Link>
  );
};

export default BackButton;
