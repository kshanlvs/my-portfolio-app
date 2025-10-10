import React from "react";
import { Box, Container, Typography, Grid, styled } from "@mui/material";
import { motion } from "framer-motion";

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
  color: "white",
  padding: "80px 40px",
  borderRadius: "20px",
  margin: "40px 0",
});

const SectionHeader = styled(Box)({
  textAlign: "center",
  marginBottom: "50px",
});

const Title = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  lineHeight: 1.3,
  '@media (max-width:600px)': { fontSize: '2rem' },
});

const Highlight = styled("span")({
  color: "#ec390c",
});

const Description = styled(Typography)({
  color: "#b0b0b0",
  fontSize: "1.1rem",
  maxWidth: "700px",
  margin: "15px auto 0 auto",
  lineHeight: 1.6,
});

const ItemCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  padding: "30px 20px",
  textAlign: "center",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 30px rgba(236, 57, 12, 0.3)",
  },
});

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
    <SectionWrapper id="scalability">
      <SectionHeader>
        <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
          Software Architecture
        </Typography>
        <Title>
          How I Ensure <Highlight>Scalability & Maintainability</Highlight>
        </Title>
        <Description>
          I design applications keeping scalability, modularity, and maintainability in mind using best practices like SOLID and Clean Architecture.
        </Description>
      </SectionHeader>

      <Grid container spacing={6} justifyContent="center">
        {principles.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.id * 0.2 }}
            >
              <ItemCard>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#ec390c", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#b0b0b0" }}>
                  {item.description}
                </Typography>
              </ItemCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ScalabilitySection;
