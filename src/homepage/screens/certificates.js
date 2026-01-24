import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Link,
  styled,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";

// ===== Styled Components =====
const SectionWrapper = styled(Box)({
  // backgroundColor: "#0f172a",
  color: "#f8fafc",
  py: 12,
  px: { xs: 3, md: 8 },
});

const ProjectCard = styled(Card)({
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
  },
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, rgba(34,211,238,0.2), rgba(0,0,0,0.3))",
});

const ViewButton = styled(Button)({
  background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 100%)",
  color: "#0f172a",
  textTransform: "none",
  px: 3.5,
  py: 1.4,
  fontWeight: 600,
  borderRadius: 8,
  fontSize: "1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)",
    boxShadow: "0 8px 20px rgba(34,211,238,0.5)",
  },
});

// ===== Project Data =====
const projects = [
  {
    id: 1,
    title: "Jobs in Education",
    subtitle: "Android & iOS Application",
    description:
      "A cross-platform mobile app built with Flutter and Firebase. It connects educators and institutions with job seekers, offering real-time listings, smart filters, and secure communication.",
    image: "/images/atpl.png",
    link: "#",
  },
  {
    id: 2,
    title: "TATA NEU App",
    subtitle: "Flutter & Full-Stack App",
    description:
      "A cutting-edge loyalty & rewards application built with Flutter, Node.js, and Firebase, providing seamless user experience and real-time updates for offers, vouchers, and transactions.",
    image: "/images/tata-neu.png",
    link: "#",
  },
];

// ===== Component =====
const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <Box textAlign="center" mb={12}>
        <Typography
          variant="overline"
          sx={{
            color: "#94a3b8",
            letterSpacing: 3,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Latest Work
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mt: 2,
            color: "#f8fafc",
          }}
        >
          Explore My Popular{" "}
          <Box component="span" sx={{ color: "#22d3ee" }}>
            Projects
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#cbd5e1",
            mt: 2,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A showcase of my work across mobile and web platforms — crafted with
          precision, performance, and modern design principles.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={8}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Grid container spacing={4} alignItems="center" flexDirection={{ xs: "column", md: "row" }}>
              {/* Image */}
              <Grid item xs={12} md={6}>
                <ProjectCard>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 240, md: 360 },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.85)",
                      }}
                    />
                    <Overlay />
                  </Box>
                </ProjectCard>
              </Grid>

              {/* Text */}
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#22d3ee",
                      fontWeight: 700,
                      mb: 1,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                      color: "#f8fafc",
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#cbd5e1",
                      mb: 4,
                      lineHeight: 1.7,
                      fontSize: "1rem",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <ViewButton
                    component={Link}
                    href={project.link}
                    target="_blank"
                    endIcon={<LaunchIcon />}
                  >
                    View Project
                  </ViewButton>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ProjectsSection;
