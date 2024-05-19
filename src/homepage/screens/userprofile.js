import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)({
  height: 50,
  width: 250,
  marginTop: 50, // Margin top of 50px
  backgroundColor: '#FFA500', // Orange background color
  color: '#002147', // Oxford Blue text color
  fontSize: 25,
  borderRadius: '10px', // Rounded corners
  '&:hover': {
    backgroundColor: '#FF8C00', // Darker shade of orange on hover
  },
});

const UserProfile = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Avatar
        alt="User"
        src="/images/user-profile.png"
        sx={{ width: 250, height: 250 }}
      />

      <Typography
        variant="h5"
        component="p"
        color="white"
        fontSize={{ xs: 30, sm: 40, md: 50 }} // Adjust font size based on screen size
        sx={{
          mt: 2,
          fontWeight: 'bold',
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 8 }, // Adjust padding based on screen size
        }}
      >
        Hi, I'm a FLUTTER DEVELOPER
      </Typography>
      <Typography
        variant="h5"
        component="p"
        color="orange"
        sx={{
          mt: 2,
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 8 }, // Adjust padding based on screen size
        }}
      >
        Specialist in building natively compiled applications for mobile, web, and desktop from a single
        codebase using Google's Flutter framework.
      </Typography>
      <CustomButton
        variant="contained"
        endIcon={<ArrowForwardIcon />} // Adding arrow icon at the end
        sx={{
          mt: 4, // Adjust margin top based on screen size
          width: { xs: '80%', sm: 250 }, // Adjust width based on screen size
        }}
      >
        HIRE ME
      </CustomButton>
    </Box>
  );
};

export default UserProfile;
