import React from "react";
import { Box, Grid, Typography, Card, CardContent, styled } from "@mui/material";
import MapIcon from "@mui/icons-material/MapOutlined";
import PaymentIcon from "@mui/icons-material/PaymentOutlined";
import FirebaseIcon from "@mui/icons-material/CloudOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AnimationIcon from "@mui/icons-material/AutoAwesomeOutlined";

// ===== Feature Data =====
const features = [
  {
    id: 1,
    title: "Google Maps Integration",
    description: "Implemented location tracking, directions, and custom markers in mobile apps.",
    icon: <MapIcon sx={{ fontSize: 40, color: "#06b6d4" }} />,
  },
  {
    id: 2,
    title: "Firebase Integration",
    description: "Realtime database, authentication, cloud storage, and cloud functions.",
    icon: <FirebaseIcon sx={{ fontSize: 40, color: "#f97316" }} />,
  },
  {
    id: 3,
    title: "Razorpay Payment Gateway",
    description: "Seamless payment integration with support for subscriptions & refunds.",
    icon: <PaymentIcon sx={{ fontSize: 40, color: "#22d3ee" }} />,
  },
  {
    id: 4,
    title: "Push Notifications",
    description: "Real-time alerts & reminders using Firebase Cloud Messaging.",
    icon: <NotificationsIcon sx={{ fontSize: 40, color: "#facc15" }} />,
  },
  {
    id: 5,
    title: "Custom Animations",
    description: "Interactive Lottie animations and smooth UI transitions.",
    icon: <AnimationIcon sx={{ fontSize: 40, color: "#a855f7" }} />,
  },
];

// ===== Styled Components =====
const SectionWrapper = styled(Box)(({ theme }) => ({
  py: { xs: 12, md: 16 },
  px: { xs: 3, md: 8 },
  color: "#f8fafc",
  textAlign: "center",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  padding: "30px 20px",
  background: "rgba(34, 211, 238, 0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(34, 211, 238, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 50px rgba(34, 211, 238, 0.3)",
  },
}));

// ===== Component =====
const FeaturesSection = () => {
  return (
    <SectionWrapper id="features">
      <Typography
        variant="overline"
        sx={{ color: "#22d3ee", letterSpacing: 2, fontWeight: 600 }}
      >
        Top Features
      </Typography>

      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ mt: 2, mb: 3, color: "#f8fafc" }}
      >
        Features I've Worked On
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#cbd5e1",
          maxWidth: 700,
          mx: "auto",
          mb: 8,
          lineHeight: 1.6,
        }}
      >
        Highlighting the key functionalities I've implemented in real projects across mobile and web platforms.
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={4} key={feature.id}>
            <FeatureCard>
              <Box sx={{ mb: 3 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#cbd5e1", lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default FeaturesSection;
