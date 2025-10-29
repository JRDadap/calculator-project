import React from "react";

interface CustomButtonProps {
    value: number | string;
    onClick: (value: number | string) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
} 


const CustomButton: React.FC<CustomButtonProps> = ({
  value,
  onClick,
  type = 'button', 
  className = 'button',
  disabled = false,
}) => {
  return (
  <button
      type={type}
      onClick={() => onClick(value)}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default CustomButton ; 