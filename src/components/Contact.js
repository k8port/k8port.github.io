import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs configuration
		emailjs.send(
			'service_5outra8',
			'template_ahf2whi',
			formData,
			'k8portalatin@gmail.com'
		)
		.then((result) => {
			console.log('Email successfully sent!', result.text);
		})
		.catch((error) => {
			console.error('Error sending email:', error);
		});
  };

  return (
    <Container
      maxWidth="sm"
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
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
								sx={{
										'& .MuiInputLabel-root': {
											color: '#37373F',
										},
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#b0b0c4'
                      },
                    },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
								sx={{
									'& .MuiInputLabel-root': {
	                    color: '#37373f',
                  },
									'& .MuiOutlinedInput-root': {
										'&.Mui-focused fieldset': {
											borderColor: '#b0b0c4'
										},
									},
								}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
								sx={{
 										'& .MuiInputLabel-root': {
 	                     color: '#37373f',
                    },
										'& .MuiOutlinedInput-root': {
											'&.Mui-focused fieldset': {
												borderColor: '#b0b0c4'
											},
										},
								}}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
 		           	backgroundColor: '#fff0f5',
               	color: '#000',
               	'&:hover': {
 	  	          	backgroundColor: '##faeaf',
               	},
								marginTop: '1rem',
            }} 
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Contact;

