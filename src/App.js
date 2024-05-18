import React from 'react';
import './App.css';
import ResponsiveAppBar from './homepage/screens/homepage';
import UserProfile from './homepage/screens/userprofile';


function App() {
  return (

  
    <div className="App">

       <ResponsiveAppBar />
      <UserProfile />
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