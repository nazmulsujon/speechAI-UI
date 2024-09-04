import React from 'react';
import { Box, Container } from '@mui/material';
import LargeNavbar from '@/components/LargeNavbar';
import LargeFooter from '@/components/LargeFooter';
import BackButton from '@/components/BackButton';

interface QuizPageProps {
  //
}

const QuizPage: React.FC<QuizPageProps> = () => {
  return (
    <Container
      sx={{
        maxWidth: '1080px !important',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <LargeNavbar />

        <Box>
          <BackButton path="/quiz" />

          {/* <QuizAndFlashcardBtn />

          <DescriptionSection data={data} />  */}
        </Box>
      </Box>

      <LargeFooter />
    </Container>
  );
};

export default QuizPage;
