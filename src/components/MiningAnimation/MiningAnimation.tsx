import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/mining_animation.json'; // Lottie JSON 파일 경로

const MiningAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="mining-animation">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default MiningAnimation;
