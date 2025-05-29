import React from "react";

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container mx-auto">
          <p>&copy; {currentFullYear}</p>
        </div>  
      </footer>
    </>
  );
};

export default Footer;
