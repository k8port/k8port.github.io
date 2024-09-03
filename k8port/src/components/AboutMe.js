// src/components/AboutMe.js

import React from 'react';
import { Container, Typography, Button, Paper, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutMe = () => {
    return (
        <Container 
						maxWidth="md" 
						sx={{ 
							  display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								minHeight: '100vh',
								textAlign: 'center',
								padding: '2rem', 
						}}
			>
      	  <Typography
							variant="h2" 
							component="h2" 
							sx={{
									textAlign: 'center',
									color: '#f9f6f6'
							}}
							gutterBottom
					>
               Kate Portalatin
          </Typography>
          
					<Paper 
						elevation={3} 
						sx={{ 
								padding: '2rem', 
								backgroundColor: 'rgba(255, 255, 255, 0.85)',
						}}
			>
							<Typography variant="body1" paragraph>
									I bring a fresh perspective to a field often dominated by black-and-white thinking, and one that values both the precision of engineering and the ambiguity of innovation. I’ve found that the most elegant solutions emerge when we embrace uncertainty, question assumptions, and allow ourselves to explore paths that otherwise might be overlooked.
							</Typography>
							<Typography variant="body1" paragraph>
								This approach has been integral to my success in roles where I’ve had to not only implement technical solutions but also anticipate potential challenges and adapt to changing requirements. I believe in the power of strong processes and teamwork to achieve exceptional results, and am determined to continue advocating for these values wherever I go.
							</Typography>
							<Typography variant="body1" paragraph>
									Ultimately, I see my role as not just solving problems but pushing the boundaries of what’s possible—both technically and culturally. I’m excited to bring this perspective to new challenges, where I can continue to learn, grow, and contribute in ways that align with both my technical expertise and my passion for the exploration of ideas and the advancement of developer productivity.
             </Typography>
           
						<Grid container justifyContent="center">
             		<Button 
                    variant="contained"
										sx={{
											  backgroundColor: '#fff0f5',
												color: '#000',
												'&:hover': {
													backgroundColor: '##faeaf',
												},
										}}
                    href="/resume_0924.pdf" // Replace with the actual path to your resume
                    target="_blank"
								>
                        Download Resume
                </Button>
              </Grid>
            </Paper>

        </Container>
    );
}

export default AboutMe;
