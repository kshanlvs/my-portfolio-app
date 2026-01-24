// src/homepage/screens/ContactSection.js
import React from "react";
import { Box, Typography, Button, IconButton, styled } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  color: "#f8fafc",
  padding: "100px 40px",
  borderRadius: "24px",
  textAlign: "center",
  margin: "60px 0",
  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
});

const GradientButton = styled(Button)({
  background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 100%)",
  color: "#0f172a",
  fontWeight: 600,
  borderRadius: 10,
  textTransform: "none",
  px: 5,
  py: 1.5,
  fontSize: "1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px rgba(34,211,238,0.4)",
  },
});

const SocialIcon = styled(IconButton)({
  color: "#22d3ee",
  mx: 1,
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#06b6d4",
    transform: "scale(1.2)",
  },
});

// ===== Component =====
const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Typography
        variant="h3"
        sx={{ mb: 2, fontWeight: 700 }}
      >
        Get in <span style={{ color: "#22d3ee" }}>Touch</span>
      </Typography>

      <Typography
        sx={{ color: "#cbd5e1", fontSize: "1.1rem", mb: 5, maxWidth: 600, mx: "auto" }}
      >
        Feel free to reach out for collaborations, projects, or just a chat. I respond promptly and would love to connect!
      </Typography>

      <GradientButton
        startIcon={<EmailIcon />}
        href="mailto:sbittu348@gmail.com"
      >
        Email Me
      </GradientButton>

      <Box sx={{ mt: 5 }}>
        <SocialIcon href="https://github.com/kshanlvs" target="_blank">
          <GitHubIcon fontSize="large" />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/kishan-kumar-sharma-8a24b5b7" target="_blank">
          <LinkedInIcon fontSize="large" />
        </SocialIcon>
      </Box>
    </SectionWrapper>
  );
};

export default ContactSection;
