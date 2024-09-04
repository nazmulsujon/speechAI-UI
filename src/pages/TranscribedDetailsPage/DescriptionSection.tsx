import React from 'react';
import { Stack, Typography } from '@mui/material';

interface DescriptionSectionProps {
  data: {
    description: {
      title: string;
      points: string[];
    };
    summary: string;
  };
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ data }) => {
  return (
    <Stack spacing={2} mt={2} mb={4}>
      <Typography fontFamily="Poppins" variant="h6" fontWeight={600}>
        {data?.description?.title}
      </Typography>

      <ul style={{ marginLeft: '0.5rem' }}>
        {data?.description.points.map((item, index) => (
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
  );
};

export default DescriptionSection;
