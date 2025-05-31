import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Box sx={{ pb: 8 }}>
      <Navbar />
      <Box sx={{ mt: 8 }}>
        <Home />
      </Box>
    </Box>
  );
}

export default App; 