import React from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import AnimatedBox from './components/AnimatedBox';
import logo from './assets/logo.svg';
import Character from './components/Character/Character';
import Button from './components/Button/Button';
import MiningAnimation from './components/MiningAnimation/MiningAnimation';
import Pickaxe from './components/Pickaxe/Pickaxe';
let cnt = 0;

function App() {
  const handleClick = () => { alert('Button clicked!'); cnt++; console.log("cnt: " + cnt);};

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1> Mining Clicker {cnt}</h1>
          <MiningAnimation/>
        </div>
        <div>
          <Button className="btn-start" label="Start Game" onClick={handleClick} />
        </div>

        <div>
          <p>하이</p>
          <h1> Mining Anim </h1>
          <Pickaxe/>
        </div>


      </header>
    </div>
  );
}

export default App;
