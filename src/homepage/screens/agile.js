import React from "react";
import { Box, Container, Typography, Grid, styled } from "@mui/material";
import { motion } from "framer-motion";

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  background: "linear-gradient(135deg, #111 0%, #1a1a24 100%)",
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

// Sample Agile principles data
const agilePrinciples = [
  {
    id: 1,
    title: "Iterative Development",
    description:
      "I follow iterative development cycles, delivering features in small increments, allowing faster feedback and continuous improvement.",
  },
  {
    id: 2,
    title: "Collaboration & Communication",
    description:
      "I prioritize communication with stakeholders and team members to ensure alignment, transparency, and adaptive planning.",
  },
  {
    id: 3,
    title: "Responding to Change",
    description:
      "Agile helps me respond to changes efficiently, adapting features and priorities based on user feedback and evolving requirements.",
  },
];

const AgileSection = () => {
  return (
    <SectionWrapper id="agile">
      <SectionHeader>
        <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
          Project Management
        </Typography>
        <Title>
          How I Work Using <Highlight>Agile Methodology</Highlight>
        </Title>
        <Description>
          Agile principles guide my development process, ensuring rapid delivery, flexibility, and high-quality outcomes.
        </Description>
      </SectionHeader>

      <Grid container spacing={6} justifyContent="center">
        {agilePrinciples.map((item) => (
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

export default AgileSection;
