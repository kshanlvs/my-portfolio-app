import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";

// Import images
import atplImage from "../../assets/atpl.png";
import tataNeuImage from "../../assets/tataneu.jpg";
import aseztakImage from "../../assets/aseztak.png";

// Project Data
const projects = [
  {
    id: 1,
    title: "Jobs in Education",
    subtitle: "Android & iOS Application",
    description:
      "A cross-platform mobile app built with Flutter and Firebase. It connects educators and institutions with job seekers, offering real-time listings, smart filters, and secure communication.",
    image: atplImage,
    link: "#",
  },
  {
    id: 2,
    title: "Aseztak Wholesale Online App",
    subtitle: "Android & iOS Application",
    description:
      "A modern B2B e-commerce platform for wholesalers and retailers. Manage bulk orders, live inventory, and supplier–buyer interactions seamlessly with a professional interface.",
    image: aseztakImage,
    link: "https://aseztak.com",
  },
  {
    id: 3,
    title: "TATA NEU App",
    subtitle: "Flutter & Full-Stack App",
    description:
      "A cutting-edge loyalty & rewards application built with Flutter, Node.js, and Firebase, providing seamless user experience and real-time updates for offers, vouchers, and transactions.",
    image: tataNeuImage,
    link: "#",
  },
];

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
    console.error(`Image failed to load for project ${projectId}`);
  };

  // Debug: Log image paths
  useEffect(() => {
    console.log("Image paths:", {
      atplImage,
      tataNeuImage,
      aseztakImage
    });
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        color: "#f8fafc",
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={{ xs: 6, sm: 8, md: 10, lg: 12 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#94a3b8",
            letterSpacing: { xs: 1.5, sm: 2, md: 3 },
            fontWeight: 600,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            display: 'block',
            mb: 1,
          }}
        >
          Latest Work
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#f8fafc",
            mb: 2,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
            lineHeight: 1.2,
            px: { xs: 1, sm: 0 },
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
            px: { xs: 2, sm: 3, md: 0 },
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
            lineHeight: 1.7,
          }}
        >
          A showcase of my work across mobile and web platforms — crafted with
          precision, performance, and modern design principles.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
        {projects.map((project) => (
          <Grid item xs={12} key={project.id}>
            <Grid
              container
              spacing={{ xs: 4, sm: 6, md: 8 }}
              alignItems="center"
              direction={isMobile ? "column" : "row"}
            >
              {/* Image */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    borderRadius: { xs: 2, sm: 3, md: 4 },
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                    transition: "all 0.4s ease",
                    backgroundColor: imageErrors[project.id]
                      ? (project.id === 2 ? "rgba(236, 57, 12, 0.1)" : "rgba(34,211,238,0.1)")
                      : "transparent",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: project.id === 2
                        ? "0 25px 60px rgba(236, 57, 12, 0.4)"
                        : "0 25px 60px rgba(34,211,238,0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 250, sm: 300, md: 350, lg: 400 },
                      backgroundColor: imageErrors[project.id]
                        ? (project.id === 2 ? "rgba(236, 57, 12, 0.1)" : "rgba(34,211,238,0.1)")
                        : "transparent",
                    }}
                  >
                    {!imageErrors[project.id] ? (
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        onError={() => handleImageError(project.id)}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          filter: "brightness(0.9)",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: project.id === 2 ? "#ec390c" : "#22d3ee",
                          fontWeight: 600,
                          fontSize: { xs: "1rem", sm: "1.2rem" },
                          textAlign: "center",
                          padding: 2,
                        }}
                      >
                        {project.title}
                        <br />
                        <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                          (Image not available)
                        </Typography>
                      </Box>
                    )}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: project.id === 2
                          ? "linear-gradient(to top, rgba(236, 57, 12, 0.2), rgba(0,0,0,0.3))"
                          : "linear-gradient(to top, rgba(34,211,238,0.2), rgba(0,0,0,0.3))",
                      }}
                    />
                  </Box>
                </Card>
              </Grid>

              {/* Text Content */}
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: project.id === 2 ? "#ec390c" : "#22d3ee",
                      fontWeight: 700,
                      mb: { xs: 1, sm: 1.5 },
                      letterSpacing: { xs: 0.5, sm: 1 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#f8fafc",
                      mb: { xs: 2, sm: 3 },
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#cbd5e1",
                      mb: { xs: 3, sm: 4 },
                      fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Button
                    component={Link}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    sx={{
                      background: project.id === 2
                        ? "linear-gradient(90deg, #ec390c 0%, #ff5c33 100%)"
                        : "linear-gradient(90deg, #22d3ee 0%, #06b6d4 100%)",
                      color: project.id === 2 ? "#ffffff" : "#0f172a",
                      px: { xs: 3, sm: 3.5 },
                      py: { xs: 1.25, sm: 1.4 },
                      fontWeight: 600,
                      borderRadius: { xs: 2, sm: 3 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: project.id === 2
                          ? "linear-gradient(90deg, #ff5c33 0%, #ec390c 100%)"
                          : "linear-gradient(90deg, #06b6d4 0%, #22d3ee 100%)",
                        boxShadow: project.id === 2
                          ? "0 8px 20px rgba(236, 57, 12, 0.5)"
                          : "0 8px 20px rgba(34,211,238,0.5)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;