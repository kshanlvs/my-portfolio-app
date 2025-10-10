// src/homepage/screens/SideProjects.js
import React from "react";
import { Box, Container, Typography, Grid, Button, styled } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";

// Sample Projects
const sideProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "Flutter app using Googles DialogFlow to answer FAQs and provide suggestions.",
    imageUrl: "/images/chatbot.png",
    link: "https://github.com/kshanlvs/chat_bot",
  },
  {
    id: 2,
    title: "Food Ordering App",
    description: "Flutter app with product listing, cart, and payment integration.",
    imageUrl: "/images/ecommerce.png",
    link: "https://github.com/kshanlvs/fudo",
  },
  {
    id: 3,
    title: "Audio Recorder & Player App",
    description: "flutter app with audio recorder and player integration",
    imageUrl: "/images/bot.png",
    link: "https://github.com/kshanlvs/audioPlayer",
  },
];

// Styled Components
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

const ProjectCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  textAlign: "center",
  padding: "20px",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 30px rgba(236, 57, 12, 0.3)",
  },
});

const SideProjects = () => {
  return (
    <SectionWrapper id="side-projects">
      <SectionHeader>
        <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
          Hobbies & Curiosity
        </Typography>
        <Title>
          My <Highlight>Side Projects</Highlight>
        </Title>
        <Description>
          Small projects that showcase my creativity, learning, and experimentation across Flutter, React, and Python.
        </Description>
      </SectionHeader>

      <Grid container spacing={6} justifyContent="center">
        {sideProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            {/* Animate each card with a fade-up + slight delay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard>
                <Box
                  component="img"
                  src={project.imageUrl}
                  alt={project.title}
                  sx={{ width: "100%", borderRadius: "12px", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#ec390c", mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#b0b0b0", mb: 2 }}>
                  {project.description}
                </Typography>
                <Button
                  endIcon={<LaunchIcon />}
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#ec390c",
                    color: "white",
                    px: 3,
                    py: 1,
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#ff4b1f", transform: "translateY(-2px)" },
                  }}
                >
                  View Code
                </Button>
              </ProjectCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default SideProjects;
