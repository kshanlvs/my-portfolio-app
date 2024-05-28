import React from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

const certificates = [
  {
    id: 1,
    imageUrl: '/images/aws_certificate.png',
    link: 'https://example.com/certificate1',
  },
  {
    id: 2,
    imageUrl: '/images/jira_certificate.png',
    link: 'https://university.atlassian.com/student/award/okMNHBZvq7DWQyvCpbV5pyxi',
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/achivements.jpg')", // Replace with the actual path to your background image file
        backgroundSize: "cover", // Adjust the size of the background image
        backgroundPosition: "center", // Center the background image
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       // Ensure it takes the full viewport height
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <Typography variant="h3" component="div" gutterBottom sx={{ textAlign: 'center', color: '#002147', fontWeight:"bold", paddingBottom:"10px" }}>
        Certificates & <span style={{ color: '#ec390c' }}>Badges</span>
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {certificates.map((certificate) => (
          <Grid item xs={12} sm={6} md={4} key={certificate.id}>
            <Card >
              <CardMedia
                component="img"
                image={certificate.imageUrl}
                alt={`Certificate ${certificate.id}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;
