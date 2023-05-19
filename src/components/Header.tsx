import React from 'react';
import Logo from "../img/Logo.png";

const Header: React.FC = () => {
  return (
    <header className="text-white bg-zinc-600">
    <div className="container mx-auto py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
       
        <a href=''><h1 className="text-2xl font-bold">Currency converter</h1></a>
        <a href=''><img src={Logo} alt="Logo" className="h-8 mr-2" /></a>
        
      </div>
    </div>
  </header>
  );
};

export default Header;