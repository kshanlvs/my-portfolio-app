import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./homepage/screens/homepage";
import UserProfile from "./homepage/screens/userprofile";
import ProjectsSection from "./homepage/screens/projects";
import Achievements from "./homepage/screens/achivements";
import ScalabilitySection from "./homepage/screens/scalability";
import AgileSection from "./homepage/screens/agile";
import ScalableDevelopment from "./homepage/screens/scalableDevelopment";
import ContactSection from "./homepage/screens/contact";

function App() {
  return (
    <>
      <CssBaseline />

      {/* ===== Header Section ===== */}
      <Box
        id="user-profile"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#0f172a", // dark slate
          color: "#f8fafc",
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
            height: "100%",
            py: 10,
          }}
        >
          <UserProfile />
        </Container>
      </Box>

      {/* ===== Projects Section ===== */}
      <Box
        id="projects"
        sx={{
          backgroundColor: "#111827",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <ProjectsSection />
        </Container>
      </Box>

      {/* ===== Scalability Section ===== */}
      <Box
        id="scalability"
        sx={{
          backgroundColor: "#1e293b",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <ScalabilitySection />
        </Container>
      </Box>

      {/* ===== Agile Methodology Section ===== */}
      <Box
        id="agile"
        sx={{
          backgroundColor: "#111827",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <AgileSection />
        </Container>
      </Box>

      {/* ===== Scalable Development Section ===== */}
      <Box
        id="scalable-development"
        sx={{
          backgroundColor: "#1f2937",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <ScalableDevelopment />
        </Container>
      </Box>

      {/* ===== Achievements Section ===== */}
      <Box
        id="achievements"
        sx={{
          backgroundColor: "#0f172a",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <Achievements />
        </Container>
      </Box>

      {/* ===== Contact Section ===== */}
      <Box
        id="contacts"
        sx={{
          backgroundColor: "#0f172a",
          py: 12,
          color: "#f8fafc",
        }}
      >
        <Container maxWidth="lg">
          <ContactSection />
        </Container>
      </Box>

      {/* ===== Footer ===== */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "grey.400",
          textAlign: "center",
          py: 3,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        © {new Date().getFullYear()} Kishan Sharma | Built with ❤️ using React & MUI
      </Box>
    </>
  );
}

export default App;
