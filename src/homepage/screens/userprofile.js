import React from 'react';
import { Avatar, Typography, Box, Button, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

// ===== Styled Buttons =====
const HireButton = styled(Button)(({ theme }) => ({
  height: 50,
  width: 250,
  backgroundColor: '#FFA500',
  color: '#002147',
  fontSize: 18,
  fontWeight: 'bold',
  borderRadius: '12px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF8C00',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ResumeButton = styled(Button)(({ theme }) => ({
  height: 50,
  width: 250,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#FFA500',
  fontSize: 18,
  fontWeight: 'bold',
  borderRadius: '12px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#002147',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

// ===== Resume Handlers =====
const resumeUrl = 'https://drive.google.com/uc?export=download&id=1iTl-VVt3bSyEZhdobS9rhw4yFv_Zy6Bm';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'kishan_sharma_resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ===== Main Component =====
const UserProfile = () => {
  return (
    <Box
      id="user-profile"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={{ xs: 6, md: 12 }}
      px={{ xs: 2, md: 8 }}
      sx={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
        borderRadius: '20px',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          alt="Kishan Sharma"
          src="/images/user-profile.png"
          sx={{
            width: { xs: 140, sm: 180, md: 220 },
            height: { xs: 140, sm: 180, md: 220 },
            margin: '0 auto',
            border: '4px solid #FFA500',
            boxShadow: '0px 10px 30px rgba(255, 165, 0, 0.4)',
          }}
        />

        <Typography
          variant="h4"
          sx={{
            mt: 3,
            fontWeight: 'bold',
            fontSize: { xs: 24, sm: 32, md: 40 },
          }}
        >
          Hi, I'm Kishan Sharma
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 1.5,
            color: '#FFA500',
            fontSize: { xs: 16, sm: 18, md: 20 },
            fontWeight: 500,
          }}
        >
          Flutter & Fullstack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2.5,
            color: '#b0b0b0',
            maxWidth: { xs: '90%', sm: '80%', md: '700px' },
            fontSize: { xs: 14, sm: 16, md: 18 },
            lineHeight: 1.6,
          }}
        >
          I specialize in building beautiful and responsive mobile and web applications with Flutter, React, and Firebase. Passionate about clean architecture, scalability, and creating delightful user experiences.
        </Typography>

        {/* Buttons */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={2}
          justifyContent="center"
          mt={4}
        >
          <HireButton
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => alert('Hire me clicked!')}
          >
            HIRE ME
          </HireButton>

          <ResumeButton
            variant="contained"
            endIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download Resume
          </ResumeButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default UserProfile;
