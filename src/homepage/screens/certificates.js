import React from 'react';
import { Grid, Typography, Button, Box, Link, Card, CardMedia, CardContent, Stack } from '@mui/material';
import LaunchIcon from '@mui/icons-material/LaunchOutlined';

const MyComponent = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: '#0b0b0b',
      }}
    >
      {/* Section Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="overline"
          sx={{
            color: 'grey.400',
            letterSpacing: 2,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Latest Work
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mt: 1, color: 'white' }}
        >
          Explore My Popular{' '}
          <Box component="span" sx={{ color: '#ec390c' }}>
            Projects
          </Box>
        </Typography>
      </Box>

      {/* Project Section */}
      <Grid container spacing={6} alignItems="center">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
              },
            }}
          >
            <CardMedia
              component="img"
              image="/images/atpl.png"
              alt="Jobs in Education App"
              sx={{
                width: '100%',
                height: { xs: 220, md: 360 },
                objectFit: 'cover',
              }}
            />
          </Card>
        </Grid>

        {/* Project Details */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: '#ec390c', fontWeight: 600, mb: 1 }}
            >
              Android & iOS Application
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: 'white', mb: 2, lineHeight: 1.2 }}
            >
              Jobs in Education Application
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'grey.400',
                mb: 4,
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              A comprehensive mobile platform connecting educators, institutions,
              and job seekers to bridge the gap in the education sector through
              real-time opportunities and secure communication.
            </Typography>

            <Button
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{
                backgroundColor: '#ec390c',
                textTransform: 'none',
                px: 3,
                py: 1.2,
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#ff5023',
                  boxShadow: '0 8px 20px rgba(236, 57, 12, 0.4)',
                },
              }}
              component={Link}
              href="#"
              target="_blank"
              underline="none"
            >
              View Project
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyComponent;
