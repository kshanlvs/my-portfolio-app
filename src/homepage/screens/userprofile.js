import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

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
        sx={{ mt: 2, fontWeight: 'bold' }}
      >
        Hi, I'm a Flutter Developer
      </Typography>
    </Box>
  );
};

export default UserProfile;
