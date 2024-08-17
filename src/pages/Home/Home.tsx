import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '@/components/Common/Navbar';
import { Divider, Stack } from '@mui/material';
import { TabContext } from '@mui/lab';
import Record from '@/components/Record/Record';
import Transcribed from '@/components/Transcribed/Transcribed';

const Home = () => {
  const [content, setContent] = React.useState('record');

  const handleChange = (event: React.SyntheticEvent, newContent: string) => {
    if (content !== newContent) {
      setContent(newContent);
    }
  };

  return (
    <Stack className="container">
      <Navbar />
      <Divider sx={{ height: '1.5px' }} />
      <TabContext value={content}>
        <Box
          sx={{
            mt: '16px',
            width: '80%',
            height: '40px',
            mx: 'auto',
            px: '4px',
            bgcolor: '#F3F3F3',
            borderRadius: '30px',
          }}
        >
          <Tabs
            value={content}
            onChange={handleChange}
            centered
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{
              '& .MuiTabs-flexContainer': {
                height: '40px',
                alignItems: 'center',
              },
              '& .MuiTab-root': {
                minWidth: '50%',
                height: '32px',
                minHeight: '32px',
                borderRadius: '25px',
                textTransform: 'none',
                fontWeight: 500,
                transition: '0.3s',
                color: '#4A5568',
                '&.Mui-selected': {
                  bgcolor: '#FFFFFF',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                },
              },
            }}
          >
            <Tab label="Record" value="record" />
            <Tab label="Transcribed" value="transcribed" />
          </Tabs>
        </Box>
        <TabPanel value="record">
          <Record />
        </TabPanel>
        <TabPanel value="transcribed">
          <Transcribed />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default Home;
