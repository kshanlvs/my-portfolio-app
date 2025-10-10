import React from 'react';
import { Box, Card, CardMedia, Grid, Typography, Link, Container } from '@mui/material';

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

const Achievements = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography
          variant="overline"
          sx={{ color: '#ec390c', letterSpacing: 2, fontWeight: 600 }}
        >
          Achievements
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            mt: 1,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Certificates & <Box component="span" sx={{ color: '#ec390c' }}>Badges</Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#e0e0e0', maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
        >
          I have earned several certifications that showcase my expertise in modern web and mobile technologies. Each certificate represents a milestone in my learning journey.
        </Typography>
      </Box>

      {/* Certificates Grid */}
      <Grid container spacing={6} justifyContent="center">
        {certificates.map((certificate) => (
          <Grid item xs={12} sm={6} md={4} key={certificate.id}>
            <Link href={certificate.link} target="_blank" underline="none">
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.05)',
                    boxShadow: '0 20px 60px rgba(236,57,12,0.5)',
                  },
                  cursor: 'pointer',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={certificate.imageUrl}
                    alt={`Certificate ${certificate.id}`}
                    sx={{
                      width: '100%',
                      height: { xs: 220, md: 260 },
                      objectFit: 'cover',
                      filter: 'brightness(0.9)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(to top, rgba(236,57,12,0.05), rgba(0,0,0,0.2))',
                    }}
                  />
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Wrapper Component with Gradient Background
const AchievementsSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      color: 'white',
      py: 12,
    }}
  >
    <Container maxWidth="lg">
      <Achievements />
    </Container>
  </Box>
);

export default AchievementsSection;
