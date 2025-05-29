import React from 'react';

const Btn: React.FC<ButtonProps> = ({ variant = "primary", label, ...props }) => {

  return (
     <button
      className={`btn ${variant === "white" ? "btn-white" : "btn-primary"}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Btn;
