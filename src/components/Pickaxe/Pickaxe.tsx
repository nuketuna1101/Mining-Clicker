import React from 'react';
import pickaxeImg from '../../assets/pickaxe.png';
import './Pickaxe.css';
import { useSpring, animated } from '@react-spring/web';

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

export default Pickaxe;
