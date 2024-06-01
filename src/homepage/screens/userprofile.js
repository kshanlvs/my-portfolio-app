import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; 
import { styledButton } from '@mui/system';



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


const ResumeButton = styled(Button)({
  marginTop: 50,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#808080',
  fontSize: 25,
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#ffffff', // Change text color to white on hover
    '& .MuiButton-icon': {
      color: '#ffffff', // Change icon color to white on hover
    },
  },
  '@media (max-width: 600px)': {
    width: '100%', // Set width to 100% on smaller screens
    maxWidth: 'none', // Remove max-width on smaller screens
    fontSize: 20, // Adjust font size for smaller screens
  },
});

const resumeUrl = '/images/kishan-flutter-resume.pdf'; 
const handleDownload = () => {
  // Create a hidden link and trigger a click event to download the resume
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = "kishan_sharma_resume.pdf"; // Set the default file name for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleView = () => {
  // Open the resume in a new tab/window for viewing
  window.open(resumeUrl, '_blank');
};

const UserProfile = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom="50px"
      paddingTop="50px"
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
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }} // Column on small screens, row on larger screens
        alignItems="center"
        justifyContent="center"
        gap={2} // Add some space between the buttons
        sx={{ mt: 4 }}
      >
        <CustomButton
          variant="contained"
          endIcon={<ArrowForwardIcon />} // Adding arrow icon at the end
        >
          HIRE ME
        </CustomButton>
        <ResumeButton onClick={handleDownload}
      endIcon={<DownloadIcon />} // Add the download icon
    >
      Download Resume
    </ResumeButton>
      </Box>
    </Box>
  );
};

export default UserProfile;
