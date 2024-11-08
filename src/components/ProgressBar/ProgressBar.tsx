import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const r = 100;          // 반지름
    const stroke = 25;           // 테두리 두께
    const normalizedr = r - stroke;
    const circumference = normalizedr * 2 * Math.PI;
    const strokeDashoffset = circumference * (1 - (progress / 100));



    let cur;
    const handleClick = () => {
        setProgress(function() {
            let tmp = Math.random()
            return 25;
        });
    };

    return (
        <div className="progress-bar-container">
            <svg height={r * 2} width={r * 2}>
                <circle
                    stroke="teal"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedr}
                    cx={r}
                    cy={r}
                />
                <circle
                    stroke="yellow"
                    fill="transparent"
                    strokeWidth={stroke}
                    // strokeDasharray={circumference}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedr}
                    cx={r}
                    cy={r}
                    transform={`rotate(-90 ${r} ${r})`}
                />
            </svg>
            <button onClick={handleClick} className="progress-button"></button>
        </div>
    );
};

export default ProgressBar;
