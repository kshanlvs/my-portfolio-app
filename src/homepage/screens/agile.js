import React from "react";
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// Agile Principles Data
const agilePrinciples = [
  {
    id: 1,
    title: "Iterative & Incremental Delivery",
    description:
      "I deliver features in small, measurable increments, enabling faster feedback, reduced risk, and continuous product improvement.",
  },
  {
    id: 2,
    title: "Cross-Team Collaboration",
    description:
      "I work closely with product managers, designers, and backend teams to ensure alignment, transparency, and predictable delivery.",
  },
  {
    id: 3,
    title: "Adaptability to Change",
    description:
      "I embrace change through continuous feedback loops, ensuring solutions evolve with user needs and business priorities.",
  },
];

function AgileSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      id="agile"
      sx={{
        color: "#f8fafc",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "#94a3b8",
              letterSpacing: { xs: 1, sm: 1.5, md: 2 },
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              display: 'block',
              mb: 1,
            }}
          >
            Development Process
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
            How I Deliver Value Using{" "}
            <Box component="span" sx={{ color: "#22d3ee" }}>
              Agile Methodology
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#cbd5e1",
              maxWidth: 720,
              mx: "auto",
              px: { xs: 2, sm: 3, md: 0 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            A structured yet flexible approach that helps me ship high-quality
            products efficiently while adapting to evolving requirements.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={{ xs: 4, sm: 6, md: 8 }}>
          {agilePrinciples.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Box
                  sx={{
                    background: "rgba(34,211,238,0.05)",
                    backdropFilter: "blur(12px)",
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    p: { xs: 3, sm: 4, md: 5 },
                    height: "100%",
                    textAlign: "left",
                    transition: "all 0.35s ease",
                    border: "1px solid rgba(34,211,238,0.3)",
                    "&:hover": {
                      transform: { xs: "translateY(-5px)", sm: "translateY(-10px)" },
                      boxShadow: "0 16px 40px rgba(34,211,238,0.3)",
                      borderColor: "rgba(34,211,238,0.5)",
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
}

export default AgileSection;