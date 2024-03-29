import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function Navigation() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" color="inherit" underline="always">
        {'color="inherit"'} 
        {/* color="primary", color="body2", variant="inherit" */}
        <About />
      </Link>
      <Link href="#" color="inherit" underline="always">
        {'color="inherit"'} 
        {/* color="primary", color="body2", variant="inherit" */}
        <Portfolio />
      </Link>
      <Link href="#" color="inherit" underline="always">
        {'color="inherit"'} 
        {/* color="primary", color="body2", variant="inherit" */}
        <Contact />
      </Link>
      <Link href="#" color="inherit" underline="always">
        {'color="inherit"'} 
        {/* color="primary", color="body2", variant="inherit" */}
        <Resume />
      </Link>
    </Box>
  );
}