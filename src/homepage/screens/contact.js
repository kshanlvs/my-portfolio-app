// src/homepage/screens/ContactSection.js
import React from "react";
import { Box, Typography, Button, IconButton, styled } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SectionWrapper = styled(Box)({
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  color: "white",
  padding: "80px 40px",
  borderRadius: "20px",
  margin: "40px 0",
  textAlign: "center",
});

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Get in <span style={{ color: '#ec390c' }}>Touch</span>
      </Typography>
      <Typography sx={{ color: '#b0b0b0', fontSize: '1.1rem', mb: 4 }}>
        Feel free to reach out for collaborations, projects, or just a chat.
      </Typography>
      <Button
        startIcon={<EmailIcon />}
        href="mailto:sbittu348@gmail.com"
        sx={{
          backgroundColor: "#ec390c",
          color: "white",
          px: 4,
          py: 1.2,
          borderRadius: "8px",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": { backgroundColor: "#ff4b1f", transform: "translateY(-2px)" },
          mb: 3,
        }}
      >
        Email Me
      </Button>

      <Box sx={{ mt: 2 }}>
        <IconButton href="https://github.com/kshanlvs" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/kishan-kumar-sharma-8a24b5b7" target="_blank" sx={{ color: 'white', mx: 1 }}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Box>
    </SectionWrapper>
  );
};

export default ContactSection;
