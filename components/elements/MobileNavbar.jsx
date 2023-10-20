import { navIcon, menuIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="mobile-nav-container">
      <div className="logo-icon-container">
        <Image src={navIcon} alt="abella logo icon" className="nav-icon" />
      </div>
      <div className="menu-icon-container">
        <Image src={menuIcon} alt="mobile menu icon" className="nav-icon" />
      </div>
    </div>
  );
};

export default MobileNavbar;
