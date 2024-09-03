import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Projects() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Paper
					elevation={3} 
					sx={{
							padding: '2rem',
							width: '100%',
							backgroundColor: 'rgba(255, 255, 255, 0.85)',
					}}
		>
        <Typography variant="h4" component="h1" gutterBottom>
          My Projects
        </Typography>
        {/* Add project details or cards here */}
        <Typography variant="body1">
          Project details coming soon...
        </Typography>
      </Paper>
    </Container>
  );
}

export default Projects;

