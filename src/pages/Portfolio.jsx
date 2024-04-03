import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';

// Example project data
const projects = [
  {
    title: "Project 1",
    imageUrl: "/path/to/project1/image.jpg",
    deployedUrl: "https://example.com/project1",
    githubUrl: "https://github.com/yourusername/project1"
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardActionArea component="a" href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Link href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</Link>
                {' | '}
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
