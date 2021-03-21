import {React, useState} from 'react';
import NavBar from './components/NavBar'
import InfoPanel from './components/InfoPanel'
import FootNav from './components/FootNav'
import './App.css';

function App() {
  const screenConfig = useState(0);

  return (
    <div>
      <NavBar/>
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
