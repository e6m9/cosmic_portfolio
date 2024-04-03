import { useState } from 'react'
import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Navigation() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'right',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
        fontWeight: 'bold',
        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
      }}
    >
      <Link to="/">
        About
      </Link>
      <Link to="/portfolio">
        Portfolio
      </Link>
      <Link to="/contact">
        Contact
      </Link>
      <Link to="/resume">
        Resume 
      </Link>
    </Box>
  );
}