// src/homepage/screens/ProjectsSection.js
import React from "react";
import { Box, Grid, Typography, Button, CircularProgress, styled } from "@mui/material";
import LaunchIcon from "@mui/icons-material/LaunchOutlined";
import { motion } from "framer-motion";

// ===== Image Imports =====
import FlutterLogo from "../../assets/Flutter.png";
import FirebaseLogo from "../../assets/firebase.png";
import JavaLogo from "../../assets/java.png";
import PythonLogo from "../../assets/python.png";
import NodeLogo from "../../assets/javascript.png";
import ReactLogo from "../../assets/react.png";
import GitLogo from "../../assets/git.png";
import JiraLogo from "../../assets/jira.png";
import MySQLLogo from "../../assets/mysql.png";
import AWSLogo from "../../assets/aws.png";

import TataNeuImg from "../../assets/tataneu.jpg";
import AseztakImg from "../../assets/aseztak.png";
import JobsInEduImg from "../../assets/atpl.png";

// ===== Sample Data =====
const skills = [
  { id: 1, logo: FlutterLogo, title: 'Flutter', percentage: 90 },
  { id: 2, logo: FirebaseLogo, title: 'Firebase', percentage: 85 },
  { id: 3, logo: JavaLogo, title: 'Java', percentage: 70 },
  { id: 4, logo: PythonLogo, title: 'Python', percentage: 75 },
  { id: 5, logo: NodeLogo, title: 'Node JS', percentage: 80 },
  { id: 6, logo: ReactLogo, title: 'React JS', percentage: 85 },
  { id: 7, logo: GitLogo, title: 'GitHub', percentage: 90 },
  { id: 8, logo: JiraLogo, title: 'Jira', percentage: 75 },
  { id: 9, logo: MySQLLogo, title: 'MySQL', percentage: 70 },
  { id: 10, logo: AWSLogo, title: 'AWS', percentage: 65 },
];

const projects = [
  {
    id: 0,
    title: "Tata Neu Super App",
    type: "Android, iOS & Web",
    description: "A multi-service super app offering seamless experience across banking, shopping, and lifestyle services. Built with Flutter and Firebase, it integrates multiple services into a single platform.",
    imageUrl: TataNeuImg,
    link: "https://www.tataneu.com",
  },
  {
    id: 1,
    title: "Aseztak Wholesale Online App",
    type: "Android & iOS Application",
    description: "A modern B2B e-commerce platform designed for wholesalers and retailers. Enables easy bulk ordering, live inventory tracking, and seamless supplier–buyer interactions.",
    imageUrl: AseztakImg,
    link: "https://aseztak.com",
  },
  {
    id: 2,
    title: "Jobs in Education Application",
    type: "Android & iOS Application",
    description: "A cross-platform job portal for educators and institutions, built with Flutter and Firebase. Streamlines recruitment with real-time listings, smart filtering, and direct application tracking.",
    imageUrl: JobsInEduImg,
    link: "https://www.jobsineducation.net",
  },
];

// ===== Styled Components =====
const SectionWrapper = styled(Box)(({ theme }) => ({
  // background: '#1a1a1a',
  color: '#ffffff',
  padding: '80px 60px',
  borderRadius: '20px',
  margin: '40px 0',
  [theme.breakpoints.down('sm')]: { padding: '50px 20px' },
}));

const SectionHeader = styled(Box)({ textAlign: 'center', marginBottom: '50px' });

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: { fontSize: '2rem' },
}));

const Highlight = styled('span')({ color: '#06b6d4' }); // cyan accent

const Description = styled(Typography)(({ theme }) => ({
  color: '#b0b0b0',
  fontSize: '1rem',
  maxWidth: '600px',
  margin: '15px auto 0 auto',
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: { fontSize: '0.9rem' },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  textAlign: 'center',
  padding: '30px 20px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', // cyan hover
  },
  [theme.breakpoints.down('sm')]: { padding: '20px 15px' },
}));

const Logo = styled('img')({ width: '60px', height: '60px', marginBottom: '15px' });

const PercentageCircle = ({ value }) => (
  <Box sx={{ position: 'relative', display: 'inline-flex', mt: 1 }}>
    <CircularProgress
      variant="determinate"
      value={value}
      thickness={5}
      size={60}
      sx={{ color: '#06b6d4', '& .MuiCircularProgress-circle': { strokeLinecap: 'round' } }}
    />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 600,
      }}
    >
      {`${Math.round(value)}%`}
    </Box>
  </Box>
);

const ProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#06b6d4',
  color: '#0f172a',
  px: 4,
  py: 1.2,
  borderRadius: '8px',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#22d3ee',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: { width: '100%' },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '16px',
  boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.6)',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 25px 70px rgba(0, 0, 0, 0.7)',
  },
  [theme.breakpoints.down('sm')]: { marginTop: '20px' },
}));

// ===== Main Component =====
const ProjectsSection = () => (
  <SectionWrapper>
    {/* Skills Section */}
    <SectionHeader>
      <Typography variant="overline" sx={{ color: '#b0b0b0', letterSpacing: 2 }}>
        My Skills
      </Typography>
      <Title>
        Explore <Highlight>Skills & Experience</Highlight>
      </Title>
      <Description>
        I specialize in building high-quality mobile and web experiences using Flutter, React, and Firebase.
      </Description>
    </SectionHeader>

    <Grid container spacing={4} justifyContent="center" sx={{ mb: 12 }}>
      {skills.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={2.4} key={item.id}>
          <SkillCard>
            <Logo src={item.logo} alt={item.title} />
            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600 }}>
              {item.title}
            </Typography>
            <PercentageCircle value={item.percentage} />
          </SkillCard>
        </Grid>
      ))}
    </Grid>

    {/* Projects Section */}
    <SectionHeader sx={{ mt: 8, mb: 6 }}>
      <Typography variant="overline" sx={{ color: '#b0b0b0', letterSpacing: 2 }}>
        My Work
      </Typography>
      <Title>
        Featured <Highlight>Projects</Highlight>
      </Title>
      <Description>
        A selection of projects showcasing my skills in Flutter, React, Firebase, and fullstack development.
      </Description>
    </SectionHeader>

    {projects.map((project, index) => {
      const isEven = index % 2 === 0;
      return (
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" }, mb: 12 }}
          key={project.id}
        >
          {/* Text */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#06b6d4',
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  mb: 1,
                  fontWeight: 600,
                  fontSize: { xs: 12, sm: 14, md: 16 },
                }}
              >
                {project.type}
              </Typography>

              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700, mb: 2, fontSize: { xs: 20, sm: 24, md: 28 } }}>
                {project.title}
              </Typography>

              <Typography variant="body1" sx={{ color: '#b0b0b0', fontSize: { xs: 14, sm: 16, md: 18 }, lineHeight: 1.6, mb: 3, maxWidth: '90%' }}>
                {project.description}
              </Typography>

              <ProjectButton endIcon={<LaunchIcon />} href={project.link} target="_blank">
                View Project
              </ProjectButton>
            </motion.div>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: isEven ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <ProjectImage component="img" src={project.imageUrl} alt={project.title} />
            </motion.div>
          </Grid>
        </Grid>
      );
    })}
  </SectionWrapper>
);

export default ProjectsSection;
