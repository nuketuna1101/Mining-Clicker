import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import Pickaxe from './components/Pickaxe/Pickaxe';
import Boulder from './components/Boulder/Boulder';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Ore from './components/Ore/Ore';

let clickCnt = 0;
let minedCnt = 0;

function App() {
  // props : progress :: 현재 광질 진행도
  const [progress, setProgress] = useState(0);


  const [animation, setAnimation] = useState(false);


  // addProgress : 현재 단계에선 10% 진행도 증가
  const addProgress = () => {
    clickCnt++;
    const randValue = Math.floor(Math.random() * 100);
    setProgress(prevProgress => {
      let newProgress = prevProgress + randValue;
      if (newProgress >= 100) {
        minedCnt++;
        setAnimation(true);
        setTimeout(() => setAnimation(false), 1000); // 1초 동안 애니메이션을 실행
        newProgress = 0;
      }
      return newProgress;
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
          <ProgressBar progress={progress} animation={animation} />
        </div>

        <div className="display-variables-counter">
          <p>
            총 곡괭이질 횟수 : {clickCnt}
          </p>
          <p>
            깐 돌 개수 : {minedCnt}
          </p>
        </div>

        <Ore type={0} />

      </header>
    </div>
  );
}

export default App;
