import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBox: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
    loop: { reverse: true },
  });

  return (
    <animated.div style={{
      ...props,
      width: '100px',
      height: '100px',
      backgroundColor: 'lightblue',
      borderRadius: '10px'
    }} />
  );
};

export default AnimatedBox;
