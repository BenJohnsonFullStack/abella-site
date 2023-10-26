"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import { navIcon, menuIcon, closeIcon } from "@/assets";
import Image from "next/image";
import { scrollToTop } from "@/utils";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const handleToggle = () => {
    setToggle((prev) => setToggle(!prev));
  };

  const handleActive = (e) => {
    const { text } = e.target;
    setActive(text);
    handleToggle();
  };

  return (
    <div className="mobile-nav-container">
      <div className="logo-icon-container">
        <Image
          src={navIcon}
          alt="abella logo icon"
          className="nav-icon"
          onClick={() => {
            setActive("");
            scrollToTop();
          }}
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
          <div className={toggle ? "mobile-dropdown" : "hidden"}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} onClick={handleActive}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${
                      active === link.title ? "active" : ""
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
