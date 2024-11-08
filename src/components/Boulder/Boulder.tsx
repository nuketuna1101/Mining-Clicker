import React from 'react';
import boulderImg from '../../assets/boulder.png';
import './Boulder.css';

const Boulder: React.FC = () => {
  return (
    <div className="boulder-img">
      <img className="boulder-resized" src={boulderImg} alt="boulder" />
    </div>
  );
};

export default Boulder;
