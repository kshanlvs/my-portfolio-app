// src/homepage/screens/ResponsiveAppBar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = [
  { label: 'Profile', href: '#user-profile' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Scalability', href: '#scalability' },
  { label: 'Agile', href: '#agile' },
  { label: 'Scalable Dev', href: '#scalable-development' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contacts' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [elevated, setElevated] = useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleNavClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleCloseNavMenu();
  };

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = () => {
    const profileSection = document.querySelector('#user-profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevated ? 6 : 0}
      sx={{
        background: elevated
          ? 'rgba(15,23,42,0.95)' // dark cyan shade with opacity
          : 'transparent',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#user-profile"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#06b6d4', // cyan accent
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            KISHAN SHARMA
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: '#06b6d4' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleNavClick(page.href)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#user-profile"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#06b6d4',
              textDecoration: 'none',
            }}
          >
            K.S.
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavClick(page.href)}
                sx={{
                  my: 2,
                  color: '#06b6d4',
                  display: 'block',
                  fontWeight: 600,
                  mx: 1,
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#22d3ee',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Social & Profile Icon */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="GitHub">
              <IconButton
                href="https://github.com/kshanlvs"
                target="_blank"
                sx={{ color: '#06b6d4', mx: 0.5 }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/kishan-kumar-sharma-8a24b5b7"
                target="_blank"
                sx={{ color: '#06b6d4', mx: 0.5 }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>

            {/* Profile Avatar - Now scrolls to profile section instead of opening dropdown */}
            <Tooltip title="Go to Profile">
              <IconButton 
                onClick={handleProfileClick}
                sx={{ p: 0, ml: 2 }}
              >
                <Avatar sx={{ 
                  bgcolor: '#06b6d4', 
                  color: '#0f172a',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    bgcolor: '#22d3ee',
                  }
                }}>
                  K
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;