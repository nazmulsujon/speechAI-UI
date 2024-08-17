import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Box, Button, Stack, Typography } from '@mui/material';

import Divider from '@mui/material/Divider';

const Record = () => {
  return (
    <Stack gap={1} direction="column" alignItems="center" justifyContent="">
      <Box textAlign="center">
        <Typography variant="h6">You’re ready to go!</Typography>
        <Typography variant="subtitle2" sx={{ fontSize: '13px', color: '#424A5E' }}>
          Record meetings
        </Typography>
      </Box>
      <Box sx={{ width: '200px', height: '200px', bgcolor: 'lightgray' }}>audio lottie</Box>

      <Divider sx={{ width: '100%', fontSize: '12px' }}>OR</Divider>
      <Button
        variant="outlined"
        startIcon={<ContentPasteIcon fontSize="small" />}
        sx={{
          bgcolor: '#F2F2F2',
          color: '#424A5E',
          border: 'none',
          textTransform: 'capitalize',
          '&:hover': {
            bgcolor: '#E0E0E0',
            border: 'none',
          },
        }}
      >
        Paste Audio
      </Button>
    </Stack>
  );
};

export default Record;
