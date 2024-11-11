import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './styles/App.css';
// == COMPONENTS == //
// ===========================================================================
import Pickaxe from './components/Pickaxe/Pickaxe';
import Boulder from './components/Boulder/Boulder';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Ore from './components/Ore/Ore';
import MenuBar from './components/MenuBar/MenuBar';
// ===========================================================================
// == HOOKS ==
import { useMining } from './hooks/useMining'
// ===========================================================================
// == SERVICES ==
import countService from './services/countService';
// ===========================================================================

function App() {
  const { progress, animation, addProgress, minerals } = useMining();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1> Mining Clicker</h1>
        </div>
        <div className="App-topbar">
          <MenuBar />
        </div>
      </header>


      <div className='App-body'>
        <div className="display-mining">
          <Pickaxe progress={progress} addProgress={addProgress} />
          <Boulder />
        </div>
        <div className="display-progressbar">
          <ProgressBar progress={progress} animation={animation} />
        </div>
        <div className="display-variables-counter">
          <p>
            총 곡괭이질 횟수 : {countService.getClickCnt()}
          </p>
          <p>
            깐 돌 개수 : {countService.getMinedCnt()}
          </p>
        </div>
        <div className="ore-storage">
          {minerals.map(mineral => (
            <div className='ore-each' key={mineral.id}>
              <Ore type={mineral.id} />
              <p> {mineral.quantity} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  // return (
  //   <div className="App">
  //     <div className="App-title">
  //       <h1> Mining Clicker</h1>
  //     </div>

  //     <div className="display-mining">
  //       <Pickaxe progress={progress} addProgress={addProgress} />
  //       <Boulder />
  //     </div>
  //     <div className="display-progressbar">
  //       <ProgressBar progress={progress} animation={animation} />
  //     </div>

  //     <div className="display-variables-counter">
  //       <p>
  //         총 곡괭이질 횟수 : {countService.getClickCnt()}
  //       </p>
  //       <p>
  //         깐 돌 개수 : {countService.getMinedCnt()}
  //       </p>
  //     </div>
  //     <div className="ore-storage">
  //       {minerals.map(mineral => (
  //         <div className='ore-each'>
  //           <Ore type={mineral.id} />
  //           <p> {mineral.quantity} </p>
  //         </div>
  //       ))}
  //     </div>

  //   </div>
  // );
}

export default App;
