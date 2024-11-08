import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { label, onClick } = this.props;
        return (
            <button className={`btn`} onClick={onClick}>
                {label}
            </button>
        );
    }
}

export default Button;




/*
interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="button">
    </div>
  );
};

export default Button;
*/