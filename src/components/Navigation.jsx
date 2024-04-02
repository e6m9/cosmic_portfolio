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
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link to="/" style={{ color: "gold", textDecoration: 'underline' }}>
        {/* color="primary", color="body2", variant="inherit" */}
        About
      </Link>
      {/* <Link href="/portfolio" color="gold" underline="always">
        <Portfolio />
      </Link> */}
      {/* <Link href="/contact" color="gold" underline="always">
        <Contact />
      </Link> */}
      {/* <Link href="/resume" color="gold" underline="always">
        <Resume />
      </Link> */}
    </Box>
  );
}