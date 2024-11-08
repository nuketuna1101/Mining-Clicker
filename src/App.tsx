import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import Pickaxe from './components/Pickaxe/Pickaxe';
import Boulder from './components/Boulder/Boulder';
import ProgressBar from './components/ProgressBar/ProgressBar';


let cnt = 0;

function App() {
  const handleClick = () => { alert('Button clicked!'); cnt++; console.log("cnt: " + cnt); };
  // props : progress :: 현재 광질 진행도
  const [progress, setProgress] = useState(0);
  // addProgress : 현재 단계에선 10% 진행도 증가
  const addProgress = () => {
    const randValue = Math.floor(Math.random() * 100);
    setProgress(prevProgress => {
      let newProgress = prevProgress + randValue;
      return newProgress >= 100 ? 0 : newProgress;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1> Mining Clicker</h1>
        </div>

        <div className="display-mining">
          <Pickaxe progress={progress} addProgress={addProgress} />
          <Boulder />
        </div>
        <div className="display-progressbar">
          <ProgressBar progress={progress} />
        </div>
      </header>
    </div>
  );
}

export default App;
