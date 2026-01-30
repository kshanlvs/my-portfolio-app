import React from "react";
import { Box, Typography, Button, Container, Avatar, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import profileImg from "../../assets/user-profile.png";

const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1L9Mi-W_CrFBnE_KXT_r-UZCa3AuPOTc7";

const UserProfile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
            gap: { xs: 6, sm: 8, md: 10, lg: 12 },
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#22d3ee",
                letterSpacing: { xs: 1, sm: 1.5, md: 2 },
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                display: 'block',
                mb: { xs: 1, sm: 2 },
              }}
            >
              FLUTTER & FULL-STACK DEVELOPER
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { 
                  xs: '2rem', 
                  sm: '2.5rem', 
                  md: '3rem', 
                  lg: '3.5rem' 
                },
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Building{" "}
              <Box component="span" sx={{ color: "#22d3ee" }}>
                scalable web & mobile
              </Box>{" "}
              apps
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: { xs: 3, sm: 4, md: 5 },
                color: "#cbd5e1",
                maxWidth: { xs: '100%', md: '90%', lg: '600px' },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Hi, I'm <strong>Kishan Sharma</strong>. I craft high-quality, 
              production-ready applications using Flutter, React, and Firebase 
              with clean architecture and smooth UX.
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                gap: { xs: 2, sm: 3 },
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'flex-start' }
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  height: { xs: 48, sm: 52 },
                  px: { xs: 3, sm: 4 },
                  background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 100%)",
                  color: "#0f172a",
                  fontWeight: 600,
                  "&:hover": {
                    background: "linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(34,211,238,0.5)",
                  },
                }}
              >
                Hire Me
              </Button>
              <Button
                variant="outlined"
                endIcon={<DownloadIcon />}
                onClick={() => window.open(resumeUrl, "_blank")}
                sx={{
                  height: { xs: 48, sm: 52 },
                  px: { xs: 3, sm: 4 },
                  color: "#22d3ee",
                  borderColor: "#22d3ee",
                  fontWeight: 600,
                  "&:hover": {
                    background: "rgba(34,211,238,0.1)",
                    borderColor: "#06b6d4",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Download Resume
              </Button>
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
                  width: { 
                    xs: 180, 
                    sm: 220, 
                    md: 260, 
                    lg: 300 
                  },
                  height: { 
                    xs: 180, 
                    sm: 220, 
                    md: 260, 
                    lg: 300 
                  },
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
                  border: "2px solid #22d3ee",
                  top: "-10%",
                  left: "-10%",
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%": {
                      transform: "scale(1)",
                      opacity: 1,
                    },
                    "50%": {
                      transform: "scale(1.05)",
                      opacity: 0.7,
                    },
                    "100%": {
                      transform: "scale(1)",
                      opacity: 1,
                    },
                  },
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