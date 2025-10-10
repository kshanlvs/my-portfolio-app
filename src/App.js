import React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./homepage/screens/homepage";
import UserProfile from "./homepage/screens/userprofile";
import ProjectsSection from "./homepage/screens/projects"; // <-- merged component
import Achievements from "./homepage/screens/achivements";
import ScalabilitySection from "./homepage/screens/scalability";
import AgileSection from "./homepage/screens/agile";
import ScalableDevelopment from "./homepage/screens/scalableDevelopment";
import SideProjects from "./homepage/screens/sideprojects"; // <-- new import
import ContactSection from "./homepage/screens/contact"; // <-- new import



<Container maxWidth="lg">
  <ScalableDevelopment />
</Container>




function App() {
  return (
    <>
      <CssBaseline />

      {/* Header Section */}
      <Box
        id="user-profile"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a 40%, #1c1c1c 100%)",
          color: "#fff",
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

      {/* Projects & Skills Section */}
      <Box
        id="projects"
        sx={{
          background: "linear-gradient(135deg, #111 0%, #0e1a24 100%)",
          py: 12,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <ProjectsSection />
        </Container>
      </Box>

      {/* Scalability & Architecture Section */}
<Box
  sx={{
    background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
    color: "white",
    py: 12,
  }}
>
  <Container maxWidth="lg">
    <ScalabilitySection />
  </Container>
</Box>
{/* Agile Methodology Section */}
<Box
  sx={{
    background: "linear-gradient(135deg, #111 0%, #1a1a24 100%)",
    color: "white",
    py: 12,
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
    background: "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)",
    color: "white",
    py: 12,
  }}
>
  <Container maxWidth="lg">
    <ScalableDevelopment />
  </Container>
</Box>
   {/* <Box
        id="side-projects"
        sx={{
          background: "linear-gradient(135deg, #111 0%, #1a1a24 100%)",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <SideProjects />
        </Container>
      </Box> */}


      {/* Achievements */}
      <Box
        id="achievements"
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Achievements />
        </Container>
      </Box>

           <Box
        id="contacts"
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
            <ContactSection />
        </Container>
      </Box>

         

      {/* Footer */}
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
