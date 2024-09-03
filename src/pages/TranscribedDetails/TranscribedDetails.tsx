import LargeFooter from '@/components/Common/LargeFooter';
import LargeNavbar from '@/components/Common/LargeNavbar';
import { Container } from '@mui/material';

interface TranscribedDetailsProps {
  // Define props here
}

const TranscribedDetails: React.FC<TranscribedDetailsProps> = ({}) => {
  return (
    <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <LargeNavbar />
      <LargeFooter />
    </Container>
  );
};

export default TranscribedDetails;
