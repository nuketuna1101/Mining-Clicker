import React from 'react';
import './Character.css'; // CSS 파일을 가져옵니다.
import characterImg from '../../assets/arteta.png';


interface CharacterProps {
  name: string;
}

const Character: React.FC<CharacterProps> = ({ name }) => {
  return (
    <div className="character">
      <img src={characterImg} alt={name} className="character-img" />
      <div className="character-idle">{name}</div>
    </div>
  );
};

export default Character;
