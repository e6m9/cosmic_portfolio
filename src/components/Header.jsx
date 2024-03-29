import { useState } from 'react';
import React from 'react';
import Navigation from './Navigation';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 12,
    },
    title: {
      fontSize: 14,
    },
  });

export default function Header() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Navigation />
          </Typography>
          {/* Add more content or navigation links here */}
        </CardContent>
      </Card>
    )
}