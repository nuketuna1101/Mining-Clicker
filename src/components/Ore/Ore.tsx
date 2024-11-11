import React from 'react';
import oreImg01 from './ore_atlas_01.png';
import oreImg02 from './ore_atlas_02.png';
import oreImg03 from './ore_atlas_03.png';
import oreImg04 from './ore_atlas_04.png';
import oreImg05 from './ore_atlas_05.png';
import oreImg06 from './ore_atlas_06.png';
import oreImg07 from './ore_atlas_07.png';
import oreImg08 from './ore_atlas_08.png';
import oreImg09 from './ore_atlas_09.png';
import './Ore.css';

interface OreProps {
  type: number;
}


const Ore: React.FC<OreProps> = ({type}) => {

const oreImageAtlas = [
  oreImg01,
  oreImg02,
  oreImg03,
  oreImg04,
  oreImg05,
  oreImg06,
  oreImg07,
  oreImg08,
  oreImg09,
];

  return (
    <div className="ore-img">
      {/* <img className="ore-frame" src={oreImageAtlas[type]} alt=""/> */}
      <img className="ore-frame" src={oreImageAtlas[type]} alt=""/>
      </div>
  );
};

export default Ore;
