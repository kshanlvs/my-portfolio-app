import React from 'react';
import { Grid, Typography, Button, Box, Link, Card, CardMedia, CardContent } from '@mui/material';
import LaunchIcon from '@mui/icons-material/LaunchOutlined';

const MyComponent = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        backgroundColor: '#0b0b0b',
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={10}>
        <Typography
          variant="overline"
          sx={{
            color: 'grey.500',
            letterSpacing: 3,
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Latest Work
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mt: 2,
            color: 'white',
            textShadow: '0 0 20px rgba(236,57,12,0.15)',
          }}
        >
          Explore My Popular{' '}
          <Box component="span" sx={{ color: '#ec390c' }}>
            Projects
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'grey.400',
            mt: 2,
            maxWidth: 700,
            mx: 'auto',
            lineHeight: 1.7,
          }}
        >
          A showcase of my work across mobile and web platforms — crafted with precision,
          performance, and modern design principles.
        </Typography>
      </Box>

      {/* Project Section */}
      <Grid container spacing={8} alignItems="center">
        {/* Image Side */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 240, md: 380 },
              }}
            >
              <CardMedia
                component="img"
                image="/images/atpl.png"
                alt="Jobs in Education App"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                  transition: 'all 0.4s ease',
                }}
              />
              {/* Overlay for glass effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to top, rgba(236,57,12,0.2) 0%, rgba(0,0,0,0.3) 100%)',
                }}
              />
            </Box>
          </Card>
        </Grid>

        {/* Text Side */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#ec390c',
                fontWeight: 700,
                mb: 1,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              Android & iOS Application
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: 'white',
                mb: 2,
                lineHeight: 1.3,
                textShadow: '0 0 10px rgba(255,255,255,0.1)',
              }}
            >
              Jobs in Education Application
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'grey.400',
                mb: 4,
                maxWidth: 520,
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              A cross-platform mobile app built with Flutter and Firebase. It
              connects educators and institutions with job seekers, offering
              real-time listings, smart filters, and secure communication.
            </Typography>

            <Button
              variant="contained"
              endIcon={<LaunchIcon />}
              component={Link}
              href="#"
              target="_blank"
              sx={{
                background: 'linear-gradient(90deg, #ec390c 0%, #ff5c33 100%)',
                textTransform: 'none',
                px: 3.5,
                py: 1.4,
                fontWeight: 600,
                borderRadius: 2,
                fontSize: '1rem',
                '&:hover': {
                  background: 'linear-gradient(90deg, #ff5c33 0%, #ec390c 100%)',
                  boxShadow: '0 8px 20px rgba(236, 57, 12, 0.5)',
                },
              }}
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
