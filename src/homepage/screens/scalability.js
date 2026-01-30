import React from "react";
import { Box, Grid, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// Sample principles data
const principles = [
  {
    id: 1,
    title: "SOLID Principles",
    description:
      "I follow SOLID principles to ensure that my code is maintainable, flexible, and scalable. Each module has a single responsibility, making it easier to extend features without breaking existing functionality.",
  },
  {
    id: 2,
    title: "Clean Architecture",
    description:
      "Using Clean Architecture, I separate concerns between layers, keeping business logic independent from UI and frameworks. This ensures the application is easy to test, maintain, and scale as the project grows.",
  },
  {
    id: 3,
    title: "Reusable Components",
    description:
      "I design reusable components and modular services to reduce duplication and speed up development, making scaling teams and projects smoother.",
  },
];

const ScalabilitySection = () => {

  return (
    <Box
      id="scalability"
      sx={{
        color: "white",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "grey.400",
              letterSpacing: { xs: 1, sm: 1.5, md: 2 },
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              display: 'block',
              mb: 1,
            }}
          >
            Software Architecture
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#f8fafc",
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
              lineHeight: 1.2,
              px: { xs: 1, sm: 0 },
            }}
          >
            How I Ensure{" "}
            <Box component="span" sx={{ color: "#22d3ee" }}>
              Scalability & Maintainability
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#cbd5e1",
              maxWidth: 700,
              mx: "auto",
              px: { xs: 2, sm: 3, md: 0 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            I design applications keeping scalability, modularity, and maintainability in mind using best practices like SOLID and Clean Architecture.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 4, sm: 6, md: 8 }}
          justifyContent="center"
        >
          {principles.map((item) => (
            <Grid item xs={12} sm={10} md={6} lg={4} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: item.id * 0.1,
                  ease: "easeOut" 
                }}
              >
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    p: { xs: 3, sm: 4, md: 5 },
                    textAlign: { xs: 'center', sm: 'left' },
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&:hover": {
                      transform: { xs: "translateY(-5px)", sm: "translateY(-8px)" },
                      boxShadow: "0 10px 30px rgba(34,211,238,0.3)",
                      borderColor: "rgba(34,211,238,0.3)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#22d3ee",
                      mb: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#cbd5e1",
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ScalabilitySection;