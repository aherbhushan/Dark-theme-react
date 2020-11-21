import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './themes.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  //use useState to keep track of what the user has selected previously
  //setting dark mode false inititially

  return (
    <div className= {darkMode ? "darkMode" : "lightMode"}>
      <nav>
        <div className="toggleContainer">
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle</button>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>{darkMode ? "Click toggle to switch to light mode" : "Click toggle to switch to dark mode"}</h2>
      </main>
    </div>
  );
}

export default App;
