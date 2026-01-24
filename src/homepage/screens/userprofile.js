import React from "react";
import { Box, Typography, Button, Container, Avatar, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import profileImg from "../../assets/user-profile.png";

// ===== Styled Buttons =====
const PrimaryButton = styled(Button)(({ theme }) => ({
  height: 52,
  padding: "0 32px",
  background: "#2563eb", // electric blue
  color: "#ffffff",
  fontWeight: 600,
  textTransform: "none",
  borderRadius: 10,
  transition: "all 0.3s ease",
  "&:hover": {
    background: "#1e40af",
    transform: "translateY(-2px)",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  height: 52,
  padding: "0 32px",
  background: "rgba(255,255,255,0.05)",
  color: "#2563eb",
  fontWeight: 600,
  textTransform: "none",
  borderRadius: 10,
  border: "1px solid #2563eb",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "#2563eb",
    color: "#ffffff",
  },
}));

const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1L9Mi-W_CrFBnE_KXT_r-UZCa3AuPOTc7";

const UserProfile = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0f172a", // deep slate
        color: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1.2fr 0.8fr" }}
          gap={8}
          alignItems="center"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#60a5fa", letterSpacing: 2 }}
            >
              FLUTTER & FULL-STACK DEVELOPER
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: 32, md: 44 },
                fontWeight: 800,
              }}
            >
              Building <span style={{ color: "#22d3ee" }}>scalable web & mobile</span> apps
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontSize: 17,
                color: "#cbd5e1",
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              Hi, I’m <strong>Kishan Sharma</strong>. I craft high-quality, production-ready applications using Flutter, React, and Firebase with clean architecture and smooth UX.
            </Typography>

            <Box mt={5} display="flex" gap={2} flexWrap="wrap">
              <PrimaryButton endIcon={<ArrowForwardIcon />}>Hire Me</PrimaryButton>
              <SecondaryButton
                endIcon={<DownloadIcon />}
                onClick={() => window.open(resumeUrl, "_blank")}
              >
                Resume
              </SecondaryButton>
            </Box>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Avatar
                src={profileImg}
                sx={{
                  width: { xs: 180, sm: 220, md: 260 },
                  height: { xs: 180, sm: 220, md: 260 },
                  border: "4px solid #1e293b",
                  boxShadow: "0 20px 40px rgba(34,211,238,0.25)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "120%",
                  height: "120%",
                  borderRadius: "50%",
                  border: "2px solid #2563eb",
                  top: "-10%",
                  left: "-10%",
                  animation: "pulse 2s infinite",
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default UserProfile;
