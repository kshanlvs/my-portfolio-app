import React from 'react';
import { Avatar, Typography, Box, Button, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';
import profileImg from '../../assets/user-profile.png';

// ===== Styled Buttons =====
const HireButton = styled(Button)(({ theme }) => ({
  height: 52,
  width: 260,
  background: 'linear-gradient(135deg, #FFA500, #FF8C00)',
  color: '#002147',
  fontSize: 17,
  fontWeight: 700,
  borderRadius: '14px',
  textTransform: 'none',
  boxShadow: '0 10px 30px rgba(255,165,0,0.35)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 40px rgba(255,165,0,0.45)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ResumeButton = styled(Button)(({ theme }) => ({
  height: 52,
  width: 260,
  backgroundColor: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(8px)',
  color: '#FFA500',
  fontSize: 17,
  fontWeight: 600,
  borderRadius: '14px',
  textTransform: 'none',
  border: '1px solid rgba(255,165,0,0.4)',
  '&:hover': {
    backgroundColor: '#FFA500',
    color: '#002147',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

// ===== Resume Handler =====
const resumeUrl =
  'https://drive.google.com/uc?export=download&id=1iTl-VVt3bSyEZhdobS9rhw4yFv_Zy6Bm';

const handleDownload = () => {
  window.open(resumeUrl, '_blank');
};

// ===== Main Component =====
const UserProfile = () => {
  return (
    <Box
      id="user-profile"
      py={{ xs: 8, md: 14 }}
      px={{ xs: 3, md: 10 }}
      sx={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Avatar */}
        <Box
          sx={{
            display: 'inline-flex',
            p: '6px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFA500, #FF8C00)',
          }}
        >
          <Avatar
            src={profileImg}
            alt="Kishan Sharma"
            sx={{
              width: { xs: 150, sm: 190, md: 230 },
              height: { xs: 150, sm: 190, md: 230 },
              border: '5px solid #111',
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 4,
            fontWeight: 800,
            fontSize: { xs: 26, sm: 34, md: 42 },
          }}
        >
          Hi, I’m Kishan Sharma
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: '#FFA500',
            fontSize: { xs: 16, sm: 18, md: 20 },
            fontWeight: 600,
          }}
        >
          Flutter & Full-Stack Developer
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: '#cfcfcf',
            maxWidth: 720,
            mx: 'auto',
            fontSize: { xs: 14, sm: 16, md: 18 },
            lineHeight: 1.7,
          }}
        >
          I build scalable, high-performance mobile and web applications using
          Flutter, React, and Firebase. I focus on clean architecture, smooth
          UX, and production-ready solutions.
        </Typography>

        {/* CTA Buttons */}
        <Box
          mt={5}
          display="flex"
          gap={2.5}
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
        >
          <HireButton endIcon={<ArrowForwardIcon />}>
            Hire Me
          </HireButton>

          <ResumeButton endIcon={<DownloadIcon />}>
            Download Resume
          </ResumeButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default UserProfile;
