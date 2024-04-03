import React from 'react';
import { Box, TextField, Typography, Container } from '@mui/material';

export default function ContactForm() {
    return (
        <div>
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    p: 6
                }}
            >
                <Box
                    sx={{
                        border: '2px solid lightblue',
                        width: '100%',
                        maxWidth: 500,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(55, 55, 55)',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" color="primary" gutterBottom>
                        Contact
                    </Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mt: 2, mb: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                    />
                </Box>
            </Container>
        </div>
    );
}
