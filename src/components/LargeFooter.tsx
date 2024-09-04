import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const menuItems: { title: string; href: string }[] = [
  { title: 'About', href: '/about' },
  { title: 'SpeechAi', href: '/speechai' },
  { title: 'Chrome Extension', href: '/chrome-extension' },
  { title: 'Blog', href: '/blog' },
  { title: 'Support', href: '/support' },
  { title: 'Contact Us', href: '/contact-us' },
];

const socials: { name: string; icon: string; href: string }[] = [
  {
    name: 'facebook',
    icon: '/facebook.svg',
    href: '#',
  },
  {
    name: 'twitter',
    icon: '/twitter.svg',
    href: '#',
  },
  {
    name: 'linkedin',
    icon: '/linkedin.svg',
    href: '#',
  },
  {
    name: 'pinterest',
    icon: '/pinterest.svg',
    href: '#',
  },
];

const policies: { title: string; href: string }[] = [
  { title: 'Terms', href: '/terms' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Cookies', href: '/cookies' },
];

export default function LargeFooter() {
  return (
    <Stack direction="column" spacing={4} py={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          my: '20px',
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{
            mb: { xs: 1, md: 0 },
          }}
        >
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

        <Stack
          sx={{
            mb: { xs: 1.5, md: 0 },
          }}
        >
          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {menuItems.map((item, index) => (
              <li style={{ listStyle: 'none', marginLeft: index !== 0 ? '0.8rem' : '0' }} key={index}>
                <Link
                  style={{ color: '#0D0C22', textDecoration: 'none', fontWeight: 500, fontSize: '0.75rem' }}
                  to={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Stack>

        <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {socials.map((item, index) => (
            <li
              style={{
                listStyle: 'none',
                marginLeft: index !== 0 ? '0.8rem' : '0',
                backgroundColor: 'lightgray',
                height: '32px',
                width: '32px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
              }}
              key={index}
            >
              <Link
                style={{ color: '#0D0C22', textDecoration: 'none', fontWeight: 500, fontSize: '0.75rem' }}
                to={item.href}
              >
                <img
                  style={{ height: '12px', width: '12px', display: 'block', margin: 'auto' }}
                  src={item.icon}
                  alt={item.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#777777', fontWeight: 500, fontSize: '0.7rem' }}>
          &#169; 2024 Speech AI
        </Typography>

        <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {policies.map((item, index) => (
            <li style={{ listStyle: 'none', marginLeft: index !== 0 ? '0.8rem' : '0' }} key={index}>
              <Link
                style={{ color: '#777777', textDecoration: 'none', fontWeight: 500, fontSize: '0.7rem' }}
                to={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Stack>
  );
}
