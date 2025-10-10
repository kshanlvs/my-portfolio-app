import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";
import ArchitectureIcon from "@mui/icons-material/Apartment";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TimelineIcon from "@mui/icons-material/Timeline";

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  background: "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)",
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
  "@media (max-width:600px)": { fontSize: "2rem" },
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
  svg: {
    fontSize: "3rem",
    color: "#ec390c",
    marginBottom: "15px",
  },
});

// ===== Scalable Development Principles =====
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
  return (
    <SectionWrapper id="scalable-development">
      <SectionHeader>
        <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
          Software Architecture
        </Typography>
        <Title>
          How I Build <Highlight>Scalable & Maintainable Systems</Highlight>
        </Title>
        <Description>
          Applying proven principles and architectures ensures my projects are robust, maintainable, and easy to extend as they grow.
        </Description>
      </SectionHeader>

      <Grid container spacing={6} justifyContent="center">
        {scalablePrinciples.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.id * 0.2 }}
            >
              <ItemCard>
                {item.icon}
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

export default ScalableDevelopment;
