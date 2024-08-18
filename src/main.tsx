import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './main.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  direction: 'rtl',
  // Add more theme customization here if needed
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
