const Footer: React.FC = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-[20px]">
      <div className="container mx-auto">
        <p className="text-white text-center">
          &copy; Copyright {currentFullYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
