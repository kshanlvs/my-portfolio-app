import React from 'react';
import './App.css';
import ResponsiveAppBar from './homepage/screens/homepage';
import UserProfile from './homepage/screens/userprofile';
import Project from './homepage/screens/projects';


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
    </div>






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello from V2</h1>
    //   </header>
    // </div>
  );
}

export default App;