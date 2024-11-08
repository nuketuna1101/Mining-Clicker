import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const radius = 100;          // 반지름
    const stroke = 25;           // 테두리 두께
    const normalizedRadius = radius - stroke;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference * (1 - (progress / 100));



    let cur;
    const handleClick = () => {
        // setProgress(prev => (prev + 10) % 110);
        setProgress(function() {
            return 25;
        });
    };

    return (
        <div className="progress-bar-container">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    transform="rotate(45deg)"
                    stroke="teal"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="yellow"
                    fill="transparent"
                    strokeWidth={stroke}
                    // strokeDasharray={circumference}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    transform={`rotate(-90 ${radius} ${radius})`}
                />
            </svg>
            <button onClick={handleClick} className="progress-button">Increase Progress</button>
        </div>
    );
};

export default ProgressBar;
