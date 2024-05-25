import React from 'react';
import './App.css';
import ResponsiveAppBar from './homepage/screens/homepage';
import UserProfile from './homepage/screens/userprofile';
import Project from './homepage/screens/projects';
import MyComponent from './homepage/screens/certificates';
import { Container ,Box} from '@mui/material';
import Project2 from './homepage/screens/project2';



function App() {
  return (
    <div>
      <div className="intro">

        <ResponsiveAppBar />
        <UserProfile />

      </div>

      <div className='project'>
        <Project />
      </div>

      <Box
      sx={{
        backgroundImage: "url('/images/tech2.jpg')", // Replace '/images/your_background_image.jpg' with the actual path to your background image file
        backgroundSize: "cover", // Adjust the size of the background image
        backgroundPosition: "center", // Center the background image
 
      }}
    >
      <Container>
        <MyComponent />
        <Project2 /> 
      </Container>
    </Box>

  
    </div>







  );
}

export default App;