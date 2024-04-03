import { useState } from 'react';
import React from 'react';
import Navigation from './Navigation';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Card
      sx={{
        width: '100%',
        height: 'flex 25vh',
        backgroundColor: 'teal',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        boxShadow: 3,
        // marginBottom: '1rem',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1, px: 2,
          alignItems: 'center',
          justifyContent: 'flex-start',
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Typography variant="h4" component={Link}
          to='/'
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '4rem', md: '6rem', lg: '8rem' },
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              color: 'white',
              textDecoration: 'none',
            },
            textAlign: 'left',
          }}
        >
          Cosmic Cry
        </Typography>
        <Navigation />
      </CardContent>
    </Card>
  )
}