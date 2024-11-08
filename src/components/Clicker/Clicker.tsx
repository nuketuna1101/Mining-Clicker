import React, { useEffect, useState } from 'react';
import clickerImg from '../../assets/clicker.png';
import './Clicker.css';

const Clicker: React.FC = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        if (!isDisabled){
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
            }, 2000);
        }
    }


    return (
        <button className={`clciker-button ${isDisabled ? 'disabled' : ''}`} onClick={handleClick} disabled={isDisabled}>
            <img src={clickerImg} alt="clicker" className="clicker-resized" />
        </button>
    );
};

export default Clicker;
