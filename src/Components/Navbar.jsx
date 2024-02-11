import React from 'react';

import logo from "../assets/real-estate-house.png";
const Navbar = () => {

   
  return (

   
    <div>
      <nav className=" flex items-center justify-evenly w-full h-16 bg-gray-200 mx-auto ">
        <div>
          <img src={logo} alt="logo" className=" w-28" />
        </div>
        <div>
          <p className=" font-robo text-xl font-bold ">XYZ SYSTEMS LLP.</p>
        </div>
        <div></div>
      </nav>

     
        
      </div>
    
  );
};

export default Navbar;
