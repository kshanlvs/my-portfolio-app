import React from 'react';
import { Avatar, Typography, Box, Button, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

// ===== Styled Buttons =====
const HireButton = styled(Button)({
  height: 50,
  width: 250,
  backgroundColor: '#FFA500', // Orange background
  color: '#002147', // Dark text
  fontSize: 20,
  fontWeight: 'bold',
  borderRadius: '12px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF8C00', // Darker orange
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
});

const ResumeButton = styled(Button)({
  height: 50,
  width: 250,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#FFA500',
  fontSize: 20,
  fontWeight: 'bold',
  borderRadius: '12px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#002147',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
  '@media (max-width: 600px)': {
    width: '100%',
  },
});

// ===== Resume Handlers =====
const resumeUrl = 'https://drive.google.com/uc?export=download&id=1iTl-VVt3bSyEZhdobS9rhw4yFv_Zy6Bm';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'kishan_sharma_resume.pdf'; // default file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



const handleView = () => {
  window.open(resumeUrl, '_blank');
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
            width: { xs: 180, sm: 220, md: 250 },
            height: { xs: 180, sm: 220, md: 250 },
            margin: '0 auto',
            border: '4px solid #FFA500',
            boxShadow: '0px 10px 30px rgba(255, 165, 0, 0.4)',
          }}
        />

        <Typography
          variant="h4"
          sx={{
            mt: 4,
            fontWeight: 'bold',
            fontSize: { xs: 28, sm: 36, md: 42 },
          }}
        >
          Hi, I'm Kishan Sharma
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: '#FFA500',
            fontSize: { xs: 18, sm: 20, md: 22 },
            fontWeight: 500,
          }}
        >
          Flutter & Fullstack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            color: '#b0b0b0',
            maxWidth: { xs: '90%', md: '700px' },
            fontSize: { xs: 16, sm: 17, md: 18 },
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
          mt={5}
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
