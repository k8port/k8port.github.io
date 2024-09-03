import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<AppBar position="static"
						sx={{
								backgroundColor: 'rgba(240, 255, 255, 0.5)',
								bottomBorder: '1px solid #ccc',
								padding: '0.5rem 0',
								boxShadow: '0 4px 13px rgba(0, 0, 0, 0.41333)',
						}}>:
			<Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
				<Typography variant="h6" sx={{ flexGrow: 0, textAlign: 'left', color: '#000' }}>
					@k8port Portfolio
				</Typography>
  
				<Box sx={{ display: 'flex', gap: 2 }}>
					<Link to="/" style={{ color: '#000', textDecoration: 'none', fontSize: '1.1rem' }}>About Me</Link>
					<Link to="/projects" style={{ color: '#000', textDecoration: 'none', fontSize: '1.1rem' }}>Projects</Link>
					<Link to="/contact" style={{ color: '#000', textDecoration: 'none', fontSize: '1.1rem' }}>Contact</Link>
	    	</Box> 

			</Toolbar>
		</AppBar>
	);
}

export default Header;
