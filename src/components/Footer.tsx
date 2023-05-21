import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-600 text-white py-5" >
      <div className="container mx-auto px-2 flex justify-center">
        <p className="text-sm text-center">&copy; Currency converter. Made by Ivan Peshikov in 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;