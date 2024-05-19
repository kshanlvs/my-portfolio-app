import React from 'react';
import { Container, Box, Typography, styled, Grid } from '@mui/material';
import Button from '@mui/material/Button';

// Sample data for the list
const items = [
  { id: 1, logo: '/images/Flutter.png', title: 'Flutter', percentage: 75 },
  { id: 2, logo: '/images/firebase.png', title: 'Firebase', percentage: 85 },
  { id: 3, logo: '/images/java.png', title: 'Java', percentage: 65 },
  { id: 1, logo: '/images/python.png', title: 'Python', percentage: 75 },
  { id: 2, logo: '/images/javascript.png', title: 'Node JS', percentage: 85 },
  { id: 3, logo: '/images/react.png', title: 'React JS', percentage: 65 },
  { id: 2, logo: '/images/git.png', title: 'Git Hub', percentage: 85 },
  { id: 3, logo: '/images/jira.png', title: 'Jira', percentage: 65 },
  { id: 3, logo: '/images/mysql.png', title: 'MySql', percentage: 65 },
  { id: 2, logo: '/images/js.png', title: 'JavaScript', percentage: 85 },
  { id: 3, logo: '/images/laravel.png', title: 'Laravel', percentage: 65 },
  { id: 3, logo: '/images/aws.png', title: 'AWS', percentage: 65 },
];

const CustomCard = ({ logoSrc, title, percentage }) => {
  return (
    <CustomContainer>
      <Logo src={logoSrc} alt={`${title} logo`} />
      <Typography variant="h6" sx={{ color: 'white', marginBottom: '10px' }}>
        {title}
      </Typography>
      <PercentageButton>
        {percentage}%
      </PercentageButton>
    </CustomContainer>
  );
};

const CustomContainer = styled(Box)({
  borderRadius: '15px',
  backgroundColor: '#1f1f1f', // Dark grey background
  border: '1px solid grey', // Grey border color
  padding: '20px',
  textAlign: 'center',
  fontSize: '14px', // Adjusted font size
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  minWidth: '80px', // Adjusted minimum width for better responsiveness
});

const Logo = styled('img')({
  width: '40px',
  height: '40px',
  marginBottom: '10px',
});

const PercentageButton = styled(Button)({
  backgroundColor: '#131313', // Darker grey background color
  color: 'grey', // Grey text color
  fontSize: '16px',
  borderRadius: '50px', // Rounded corners
  width: '80px',
  height: '30px',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#ec390c',
    color: 'white',
  },
});

const SkillsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white', // White text color
  padding: '20px', // Adjusted padding
  textAlign: 'center',
  fontSize: '15px',
});

const ProjectContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ParentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column', // Change to column layout for small screens
});

const LearnMoreButton = styled(Button)({
  backgroundColor: '#002147',
  color: 'white',
  marginTop: '20px',
  borderRadius: '10px',
  height: '60px',
  width: '200px',
  '&:hover': {
    backgroundColor: '#FF8C00',
  },
  display: 'block', // Display as block element
  marginLeft: 'auto', // Center horizontally
  marginRight: 'auto', // Center horizontally
});

const Skills = () => {
  return (
    <SkillsBox>
      <Typography variant="h6" color="#002147" fontWeight="bold" sx={{ fontSize: '15px' }}>
        My Skills
      </Typography>
      <Typography variant='h3' fontWeight="bold" >
        Let's explore popular
      </Typography>
      <Typography variant="h3" fontWeight="bold" color="#002147" sx={{ marginBottom: '10px' }}>
        Skills & Experience
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada.
      </Typography>
      <LearnMoreButton>
        Learn More
      </LearnMoreButton>
    </SkillsBox>
  );
};

const Project = () => {
  return (
    <ParentContainer>
      <Skills />
      <ProjectContainer>
        <Grid container spacing={2} justifyContent="center">
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}> {/* Adjusted grid layout */}
              <CustomCard
                logoSrc={item.logo}
                title={item.title}
                percentage={item.percentage}
              />
            </Grid>
          ))}
        </Grid>
      </ProjectContainer>
    </ParentContainer>
  );
};

export default Project;
