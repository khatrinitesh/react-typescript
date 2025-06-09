import React from "react";

const Footer: React.FC = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-[10px] bg-black">
      <p>&copy; copyright {currentFullYear}</p>
    </footer>
  );
};

export default Footer;
