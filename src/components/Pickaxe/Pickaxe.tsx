

import React, { useState, useEffect } from 'react';
import pickaxeImg from '../../assets/pickaxe.png';
import './Pickaxe.css';
import { useSpring, animated } from '@react-spring/web';

const Pickaxe: React.FC<{ progress: number, addProgress: () => void }> = ({ progress, addProgress }) => {
  const [isActive, setIsActive] = useState(true);
  const [props, api] = useSpring(() => ({
    from: { transform: 'rotate(-45deg)' },
  }));

  const handleClick = async () => {
    if (isActive) {
      setIsActive(false);
      await api.start({
        to: async (next) => {
          await next({ transform: 'rotate(-225deg)', config: { tension: 200, friction: 10 } });
          addProgress();
          await next({ transform: 'rotate(-45deg)', config: { duration: 1500 } });
          setIsActive(true);
        },
      });
    }
  };

  return (
    <div className="pickaxe-container">
      <button className="pickaxe-button" onClick={handleClick}>
        <animated.img className="pickaxe-img" src={pickaxeImg} alt="pickaxe" style={props} />
      </button>
    </div>
  );
};

export default Pickaxe;