import React from "react";

const Footer: React.FC = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer py-[10px] bg-black">
        <div className="container px-[1rem] mx-auto">
          <p>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
