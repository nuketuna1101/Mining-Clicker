import React from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import AnimatedBox from './components/AnimatedBox';
import logo from './assets/logo.svg';
import Character from './components/Character/Character';
import Button from './components/Button/Button';

function App() {

  const handleClick = () => { alert('Button clicked!'); };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <p> 아르테타를 따라하라! </p>
        </div>
        <div>
          <Button className="btn-start" label="Start Game" onClick={handleClick} />
        </div>


        {/* <div> <AnimatedBox /></div>

        <div> <Character name="tmpman" /></div> */}

      </header>
    </div>
  );
}

export default App;
