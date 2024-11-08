import React from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
import Pickaxe from './components/Pickaxe/Pickaxe';
import Boulder from './components/Boulder/Boulder';
import ProgressBar from './components/ProgressBar/ProgressBar';



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


        <ProgressBar/>

      </header>
    </div>
  );
}

export default App;
