import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/LaunchOutlined';


const Project2 = () => {
  return (
    <Box
      sx={{
        padding: '20px',
      }}
    >
   
      <Grid container mt={10}>
        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" p={3}>
          <Typography variant="h6" component="div" gutterBottom sx={{ color: '#ec390c', textAlign: 'left' }}>
            Android & Ios application
          </Typography>
          <Typography variant="h3" paragraph sx={{ color: 'white', textAlign: 'left' }}>
            Aseztak Wholesale Online App
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: 'grey', textAlign: 'left' }}>
            B2B E-COMMERCE APPLICATION
          </Typography>
          <Button endIcon={<LaunchIcon/>}  variant="contained" sx={{ backgroundColor: '#ec390c', color: 'white', textAlign: 'left', mt: 2 }}>
            Project Link
          </Button>
        </Grid>
        <Grid item xs={12} md={6} p={3}>
          <Box
            component="img"
            src="/images/aseztak.png"
            alt="Image Placeholder"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.5)', // Add a stronger shadow for floating effect
              borderRadius: '10px', // Add some border radius for a smoother look
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project2;
