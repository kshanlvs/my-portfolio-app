import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  Stack,
} from "@mui/material";
import {
  Code,
  Smartphone,
  Storage,
  DesignServices,
  Api,
  Security,
  Cloud,
  DataObject,
} from "@mui/icons-material";

const SkillsSection = () => {
  // Categorized skills based on your resume
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone />,
      color: "#22d3ee",
      skills: [
        "Flutter",
        "Dart",
        "Android Development",
        "iOS Development",
        "Cross-platform Apps",
        "Mobile UI/UX",
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <DesignServices />,
      color: "#8b5cf6",
      skills: [
        "React",
        "Material-UI",
        "Responsive Design",
        "Clean Architecture",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
    {
      title: "State Management",
      icon: <DataObject />,
      color: "#10b981",
      skills: [
        "GetX",
        "Provider",
        "MobX",
        "Bloc Pattern",
        "Riverpod",
        "State Management",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Api />,
      color: "#f59e0b",
      skills: [
        "FastAPI",
        "REST APIs",
        "API Integration",
        "Node.js",
        "PHP",
        "GraphQL",
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Cloud />,
      color: "#ef4444",
      skills: [
        "Firebase",
        "MySQL",
        "MongoDB",
        "Cloud Functions",
        "Firestore",
        "Sanity CMS",
      ],
    },
    {
      title: "Tools & Practices",
      icon: <Code />,
      color: "#ec4899",
      skills: [
        "Git/GitHub",
        "Clean Code",
        "Agile Methodology",
        "CI/CD",
        "Testing",
        "Debugging",
      ],
    },
  ];

  const proficiency = [
    { label: "Expert", color: "#22d3ee", level: 90 },
    { label: "Advanced", color: "#8b5cf6", level: 75 },
    { label: "Intermediate", color: "#10b981", level: 60 },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            TECHNICAL EXPERTISE
          </Typography>
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
            Skills & Technologies
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            With 4+ years of experience in full-stack development, I specialize
            in creating scalable, high-performance applications using modern
            technologies and best practices.
          </Typography>
        </Box>

        {/* Skill Categories Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: category.color,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: `${category.color}20`,
                      borderRadius: 2,
                      p: 1.5,
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {React.cloneElement(category.icon, {
                      sx: { color: category.color, fontSize: 28 },
                    })}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "text.primary" }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {category.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                        fontWeight: 500,
                        border: `1px solid ${category.color}30`,
                        "&:hover": {
                          backgroundColor: `${category.color}25`,
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Proficiency Level */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: "background.paper",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            Proficiency Levels
          </Typography>
          <Grid container spacing={3}>
            {proficiency.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: item.color }}>
                      {item.level}%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: 8,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: `${item.level}%`,
                        backgroundColor: item.color,
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mt: 3,
              fontStyle: "italic",
            }}
          >
            Based on 4+ years of professional experience across various
            projects and technologies
          </Typography>
        </Paper>

        {/* Core Competencies */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: 700 }}>
            Core Competencies
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              "Clean Architecture Implementation",
              "High-Performance Mobile Apps",
              "Cross-Platform Development",
              "API Design & Integration",
              "State Management Solutions",
              "UI/UX Optimization",
              "Database Design & Management",
              "Agile Development Practices",
            ].map((competency, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      backgroundColor: "primary.main",
                      borderRadius: "50%",
                      mr: 2,
                    }}
                  />
                  <Typography variant="body1">{competency}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;