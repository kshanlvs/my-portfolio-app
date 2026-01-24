import React from "react";
import { Box, Card, CardMedia, Grid, Typography, Link, Container } from "@mui/material";
import awsCert from "../../assets/aws_certificate.png";
import jiraCert from "../../assets/jira_certificate.png";
import javaCert from "../../assets/java-certificate.jpeg";

const certificates = [
  {
    id: 1,
    image: awsCert,
    link: "https://example.com/certificate1",
  },
  {
    id: 2,
    image: jiraCert,
    link: "https://university.atlassian.com/student/award/okMNHBZvq7DWQyvCpbV5pyxi",
  },
  {
    id: 3,
    image: javaCert,
    link: "https://example.com/java-certificate",
  },
];

function AchievementsSection() {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        color: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="overline"
            sx={{
              color: "#22d3ee",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            Achievements
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#f8fafc",
              mt: 1,
            }}
          >
            Certificates &{" "}
            <Box component="span" sx={{ color: "#22d3ee" }}>
              Badges
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#cbd5e1",
              maxWidth: 650,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            These industry-recognized certifications demonstrate my expertise in
            modern web & mobile development, cloud technologies, and agile
            practices.
          </Typography>
        </Box>

        {/* Certificates Grid */}
        <Grid container spacing={6} justifyContent="center">
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Link href={cert.link} target="_blank" underline="none">
                <Card
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#0f172a", // slightly lighter than current
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.03)",
                      boxShadow: "0 20px 50px rgba(34,211,238,0.5)",
                    },
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={cert.image}
                    alt="Certificate"
                    loading="lazy"
                    sx={{
                      height: { xs: 280, md: 320 },
                      width: "100%",
                      objectFit: "cover", // show full image clearly
                    }}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AchievementsSection;
