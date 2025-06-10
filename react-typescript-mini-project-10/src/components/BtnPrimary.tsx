import React from "react";
import type { ButtonProps } from "../interface";

const BtnPrimary: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  loading = false,
  btnStyle,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={btnStyle}
      className={`bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default BtnPrimary;
