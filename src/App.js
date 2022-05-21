import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Main from './components/Main';

const App = () => {
  const [overlay, setOverlay] = useState(false)

  return (
    <div className="App">
      {
        overlay
        &&
        <div className='overlay'></div>
      }
      <header>
          <Header setOverlay={setOverlay} />
        </header>
        <main>
          <Main />
        </main>
    </div>
  );
}

export default App;
