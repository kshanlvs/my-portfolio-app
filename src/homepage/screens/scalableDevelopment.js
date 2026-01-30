import React from "react";
import { Box, Typography, Grid, Container, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";
import ArchitectureIcon from "@mui/icons-material/Apartment";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TimelineIcon from "@mui/icons-material/Timeline";

// Scalable Development Principles
const scalablePrinciples = [
  {
    id: 1,
    icon: <BuildIcon />,
    title: "SOLID Principles",
    description: "Modular, maintainable code for scalable systems.",
  },
  {
    id: 2,
    icon: <ArchitectureIcon />,
    title: "Clean Architecture",
    description: "Layered separation for easier testing & extension.",
  },
  {
    id: 3,
    icon: <TimelineIcon />,
    title: "Agile Practices",
    description: "Iterative sprints ensuring adaptability and quality.",
  },
  {
    id: 4,
    icon: <LightbulbIcon />,
    title: "PDLC Awareness",
    description: "End-to-end product lifecycle understanding.",
  },
];

const ScalableDevelopment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      id="scalable-development"
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
            How I Build{" "}
            <Box component="span" sx={{ color: "#22d3ee" }}>
              Scalable & Maintainable Systems
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
            Applying proven principles and architectures ensures my projects are robust, maintainable, and easy to extend as they grow.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 4, sm: 6, md: 8 }}
          justifyContent="center"
        >
          {scalablePrinciples.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
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
                    p: { xs: 3, sm: 4 },
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      transform: { xs: "translateY(-5px)", sm: "translateY(-8px)" },
                      boxShadow: "0 10px 30px rgba(34,211,238,0.3)",
                      borderColor: "rgba(34,211,238,0.3)",
                    },
                    "& svg": {
                      fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                      color: "#22d3ee",
                      mb: { xs: 2, sm: 3 },
                    },
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: { fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" } }
                  })}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#22d3ee",
                      mb: { xs: 1, sm: 1.5 },
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
                      lineHeight: 1.6,
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

export default ScalableDevelopment;