

import React, { useState } from 'react';
import pickaxeImg from '../../assets/pickaxe.png';
import './Pickaxe.css';
import { useSpring, animated } from '@react-spring/web';

const Pickaxe: React.FC = () => {
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


/*
import React, { useState } from 'react';
import pickaxeImg from '../../assets/pickaxe.png';
import './Pickaxe.css';
import { useSpring, animated } from '@react-spring/web';

const Pickaxe: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [props, api] = useSpring(() => ({
    from: { transform: 'rotate(-45deg)' },
  }));

  const handleClick = async () => {
    if (!isAnimating) {
      setIsAnimating(true);
      await api.start({
        to: async (next) => {
          await next({ transform: 'rotate(-225deg)', config: { tension: 200, friction: 10 } });
          await next({ transform: 'rotate(-45deg)', config: { duration: 1500 } });
        },
      });
      setIsAnimating(false); 
    }
  };

  return (
    <div className="pickaxe-container">
      <button onClick={handleClick} className="pickaxe-button" disabled={isAnimating}>
        <animated.img className="pickaxe-resized" src={pickaxeImg} alt="pickaxe" style={props} />
      </button>
    </div>
  );
};

export default Pickaxe;
*/

/*
// 레거시 코드: 자동 무한루프
const Pickaxe: React.FC = () => {
  const props = useSpring({
    from: { transform: 'rotate(-45deg)' },
    to: async (next) => {
      await next({ transform: 'rotate(-225deg)', config: { tension: 200, friction: 10 }});
      await next({ transform: 'rotate(-45deg)', config: {duration: 1500} });
    },
    loop: true,
  });
  return (
    <div className="pickaxe-img">
      <animated.img className="pickaxe-resized" src={pickaxeImg} alt="pickaxe" style={props} />
    </div>
  );
};
*/