import React from 'react';
import { oreImageAtlas } from '../../data/minerals';
import './Ore.css';

interface OreProps {
  type: number;
}


const Ore: React.FC<OreProps> = ({ type }) => {

  return (
    <div className="ore-img">
      <img className="ore-frame" src={oreImageAtlas[type]} alt="" />
    </div>
  );
};

export default Ore;
