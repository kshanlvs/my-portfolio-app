import React from "react";
import { Box, Container, Typography, Grid, styled } from "@mui/material";
import { motion } from "framer-motion";

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  // backgroundColor: "#0f172a", // professional dark slate
  color: "#f8fafc",
  padding: "90px 40px",
  borderRadius: "24px",
  margin: "60px 0",
  "@media (max-width:600px)": {
    padding: "70px 20px",
  },
});

const SectionHeader = styled(Box)({
  textAlign: "center",
  marginBottom: "64px",
});

const Title = styled(Typography)({
  fontSize: "2.7rem",
  fontWeight: 800,
  lineHeight: 1.25,
  marginTop: "8px",
  "@media (max-width:600px)": {
    fontSize: "2.1rem",
  },
});

const Highlight = styled("span")({
  color: "#22d3ee", // cyan accent color
});

const Description = styled(Typography)({
  color: "#cbd5e1",
  fontSize: "1.1rem",
  maxWidth: "720px",
  margin: "18px auto 0",
  lineHeight: 1.7,
});

const ItemCard = styled(Box)({
  background: "rgba(34,211,238,0.05)", // subtle cyan overlay
  backdropFilter: "blur(12px)",
  borderRadius: "18px",
  padding: "36px 24px",
  height: "100%",
  textAlign: "left",
  transition: "all 0.35s ease",
  border: "1px solid rgba(34,211,238,0.3)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 40px rgba(34,211,238,0.3)",
    borderColor: "rgba(34,211,238,0.5)",
  },
});

const ItemTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#22d3ee", // cyan accent
  marginBottom: "12px",
});

// ===== Agile Principles Data =====
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

// ===== Component =====
function AgileSection() {
  return (
    <SectionWrapper id="agile">
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader>
          <Typography
            variant="overline"
            sx={{ color: "#94a3b8", letterSpacing: 2, fontWeight: 600 }}
          >
            Development Process
          </Typography>

          <Title>
            How I Deliver Value Using <Highlight>Agile Methodology</Highlight>
          </Title>

          <Description>
            A structured yet flexible approach that helps me ship high-quality
            products efficiently while adapting to evolving requirements.
          </Description>
        </SectionHeader>

        {/* Cards */}
        <Grid container spacing={6}>
          {agilePrinciples.map((item, index) => (
            <Grid item xs={12} md={4} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <ItemCard>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Typography sx={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </ItemCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default AgileSection;
