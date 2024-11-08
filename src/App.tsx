import React from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import AnimatedBox from './components/AnimatedBox';
import Character from './components/Character/Character';
import Button from './components/Button/Button';
import Pickaxe from './components/Pickaxe/Pickaxe';
import Boulder from './components/Boulder/Boulder';
let cnt = 0;

function App() {
  const handleClick = () => { alert('Button clicked!'); cnt++; console.log("cnt: " + cnt);};

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1> Mining Clicker</h1>
        </div>


        <div className="display-mining">
          <Pickaxe/>
          <Boulder/>
        </div>


      </header>
    </div>
  );
}

export default App;
