import React from 'react';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';
import './App.css';
function App() {
  return (

    <div className="App">


      <React.Fragment>
        <Navbar />

        <Routeur />
      </React.Fragment>

    </div>
  );
}

export default App;