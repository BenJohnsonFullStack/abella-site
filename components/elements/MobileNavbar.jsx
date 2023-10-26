"use client";

import { useState } from "react";
import { navIcon, menuIcon, closeIcon } from "@/assets";
import Image from "next/image";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const handleToggle = () => {
    setToggle((prev) => setToggle(!prev));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="mobile-nav-container">
      <div className="logo-icon-container">
        <Image
          src={navIcon}
          alt="abella logo icon"
          className="nav-icon"
          onClick={scrollToTop}
        />
      </div>

      <div className="mobile-menu">
        <div className="menu-icon-container">
          <Image
            src={toggle ? closeIcon : menuIcon}
            alt="mobile menu icon"
            className="nav-icon"
            onClick={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
