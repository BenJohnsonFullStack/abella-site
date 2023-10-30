"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import { navIcon } from "@/assets";
import Image from "next/image";
import { scrollToTop } from "@/utils";

const DesktopNavbar = () => {
  const [active, setActive] = useState("");

  const handleActive = (e) => {
    const { text } = e.target;
    setActive(text);
  };

  return (
    <div className="desktop-nav-container">
      <div
        className="logo-icon-container"
        onClick={() => {
          setActive("");
          scrollToTop();
        }}
      >
        <Image src={navIcon} alt="abella logo icon" className="nav-icon" />
        <div className="vertical-line"></div>
        <div>
          <p>Virtual Health Coaches</p>
        </div>
      </div>

      <div className="desktop-menu">
        <ul className="desktop-navlink-list">
          {navLinks.map((link) => (
            <li key={link.id} onClick={handleActive}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${active === link.title ? "active" : ""}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
