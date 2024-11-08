import React from 'react';
import pickaxeImg from '../../assets/pickaxe.png';
import './Pickaxe.css';
const Pickaxe: React.FC = () => {
  return (
    <div className="pickaxe-img">
      <img className="pickaxe-resized" src={pickaxeImg} alt="pickaxe" />
    </div>
  );
};

export default Pickaxe;
