import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'flex 6vh', 
        backgroundColor: 'teal',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '2rem' }, 
          color: 'white',
          '& span': {
            fontWeight: 'bold',
          },
          '& .blue': {
            color: 'lightblue',
          },
          '& .pink': {
            color: 'pink',
          },
        }}
      >
        <span className="blue">trans</span> <span className="pink">rights</span> <span>are</span> <span className="pink">human</span> <span className="blue">rights</span>
      </Typography>
    </Box>
  );
}
