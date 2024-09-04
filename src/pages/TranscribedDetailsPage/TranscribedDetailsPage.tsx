import React from 'react';
import LargeFooter from '@/components/LargeFooter';
import LargeNavbar from '@/components/LargeNavbar';
import { Box, Container } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import QuizAndFlashcardBtn from './QuizAndFlashcardBtn';
import DescriptionSection from './DescriptionSection';

interface TranscribedDetailsPageProps {
  data?: {
    videoTitle: string;
    publishedDate: string;
    videoURL?: string;
    description: {
      title: string;
      points: string[];
    };
    summary: string;
  };
}

const data = {
  videoTitle: 'What are cells | Cells | Biology | FuseSchool',
  publishedDate: 'Dec 3, 2023',
  videoURL: 'https://youtu.be/LFyjJBiltFI?si=0Rc_aKp5kpVLrz0k',
  description: {
    title: 'Understanding Cells: The Building Blocks of Life',
    points: [
      'Ultrices fermentum vel sed neque metus vel ut massa. Ac iaculis auctor aliquam suspendisse odio velit. Lorem vel netus nec facilisi montes nisl. Massa in ipsum mattis enim diam netus.',
      'Enim facilisis quam tellus ipsum facilisis cras ac. A nunc magna vulputate vitae dolor lacinia odio rhoncus lectus. Blandit ultrices nunc eget molestie ut risus fermentum gravida. ',
      'Eu accumsan tellus at turpis volutpat ultrices sit urna. Rhoncus leo eget porttitor nisi. Vestibulum scelerisque sollicitudin magna sed. Mattis ullamcorper amet dolor ultricies sagittis elementum. Eu lectus et suspendisse tincidunt arcu non nibh sit purus. ',
    ],
  },
  summary:
    'Fermentum in vel aliquam adipiscing euismod amet blandit suspendisse. A egestas amet orci risus. Sed facilisis et praesent varius sed. Aliquam ac ac phasellus vulputate eu porta sociis duis. Aliquet nunc morbi massa urna arcu nisl tellus sollicitudin. Vel habitant sed augue lacus posuere aliquam.',
};

const TranscribedDetailsPage: React.FC<TranscribedDetailsPageProps> = () => {
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
          <VideoPlayer data={data} />

          <QuizAndFlashcardBtn />

          <DescriptionSection data={data} />
        </Box>
      </Box>

      <LargeFooter />
    </Container>
  );
};

export default TranscribedDetailsPage;
