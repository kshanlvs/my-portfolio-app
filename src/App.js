import React from "react";
import { Container, Box, CssBaseline, ThemeProvider, createTheme, Typography } from "@mui/material";
import ResponsiveAppBar from "./homepage/screens/homepage";
import UserProfile from "./homepage/screens/userprofile";
import ProjectsSection from "./homepage/screens/projects";
import SkillsSection from "./homepage/screens/skills";
import Achievements from "./homepage/screens/achivements";
import ScalabilitySection from "./homepage/screens/scalability";
import AgileSection from "./homepage/screens/agile";
import ScalableDevelopment from "./homepage/screens/scalableDevelopment";
import ContactSection from "./homepage/screens/contact";

// Create a professional responsive theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#22d3ee',
      light: '#67e8f9',
      dark: '#06b6d4',
    },
    secondary: {
      main: '#8b5cf6',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
      fontWeight: 600,
    },
    h6: {
      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
      fontWeight: 600,
    },
    body1: {
      fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
      lineHeight: 1.7,
    },
    overline: {
      fontSize: { xs: '0.75rem', sm: '0.875rem' },
      fontWeight: 600,
      letterSpacing: 1.5,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: { xs: '16px', sm: '24px', md: '32px' },
          paddingRight: { xs: '16px', sm: '24px', md: '32px' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Header Section */}
      <Box
        id="user-profile"
        sx={{
          minHeight: { xs: 'auto', md: '100vh' },
          backgroundColor: "#0f172a",
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          color: "#f8fafc",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ResponsiveAppBar />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: { xs: "calc(100vh - 64px)", md: "100vh" },
            py: { xs: 6, md: 10 },
          }}
        >
          <UserProfile />
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{
          backgroundColor: "#111827",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)',
          }
        }}
      >
        <Container maxWidth="lg">
          <ProjectsSection />
        </Container>
      </Box>

      {/* NEW: Skills Section */}
      <Box
        id="skills"
        sx={{
          backgroundColor: "#1e293b",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
          }
        }}
      >
        <Container maxWidth="lg">
          <SkillsSection />
        </Container>
      </Box>

      {/* Scalability Section */}
      <Box
        id="scalability"
        sx={{
          backgroundColor: "#111827",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <ScalabilitySection />
        </Container>
      </Box>

      {/* Agile Methodology Section */}
      <Box
        id="agile"
        sx={{
          backgroundColor: "#111827",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <AgileSection />
        </Container>
      </Box>

      {/* Scalable Development Section */}
      <Box
        id="scalable-development"
        sx={{
          backgroundColor: "#1f2937",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        }}
      >
        <Container maxWidth="lg">
          <ScalableDevelopment />
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box
        id="achievements"
        sx={{
          backgroundColor: "#0f172a",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
          }
        }}
      >
        <Container maxWidth="lg">
          <Achievements />
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contacts"
        sx={{
          backgroundColor: "#0f172a",
          py: { xs: 8, md: 12 },
          color: "#f8fafc",
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
        }}
      >
        <Container maxWidth="lg">
          <ContactSection />
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#000",
          color: "grey.400",
          textAlign: "center",
          py: { xs: 3, md: 4 },
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            © {new Date().getFullYear()} Kishan Sharma | Built with ❤️ using React & MUI
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'grey.600' }}>
            Crafting scalable solutions with modern technologies
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;