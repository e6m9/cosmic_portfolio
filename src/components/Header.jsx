import { useState } from 'react';
import React from 'react';
import Navigation from './Navigation';
// import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//       marginBottom: 12,
//     },
//     title: {
//       fontSize: 14,
//     },
//   });

export default function Header() {
  // const classes = useStyles();
  return (
    <Card
      sx={{
        minwidth: 275,
        marginBottom: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ fontSize: 14 }}>
          <Navigation />
        </Typography>
        hello
      </CardContent>
    </Card>
  )
}