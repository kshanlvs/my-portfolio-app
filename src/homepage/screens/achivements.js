import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Link,
  Container,
} from "@mui/material";

import awsCert from "../../assets/aws_certificate.png";
import jiraCert from "../../assets/jira_certificate.png";

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
];

function AchievementsSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0e0e11, #15151c)",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            sx={{ color: "#FFA500", letterSpacing: 2, fontWeight: 600 }}
          >
            Achievements
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "white", mt: 1 }}
          >
            Certificates &{" "}
            <Box component="span" sx={{ color: "#FFA500" }}>
              Badges
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#bdbdbd",
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.05rem",
            }}
          >
            Industry-recognized certifications that reflect my commitment to
            scalable systems, modern tooling, and continuous learning.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={5} justifyContent="center">
          {certificates.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <Link href={cert.link} target="_blank" underline="none">
                <Card
                  sx={{
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 45px rgba(255,165,0,0.25)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={cert.image}
                    alt="Certificate"
                    loading="lazy"
                    sx={{
                      height: 240,
                      objectFit: "contain",
                      p: 2,
                      backgroundColor: "#0b0b0f",
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
