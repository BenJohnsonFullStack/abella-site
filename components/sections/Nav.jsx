"use client";

import { useScreenSize } from "@/hooks";
import { DesktopNavbar, MobileNavbar } from "@/components/elements";

const Nav = () => {
  const [isSmall] = useScreenSize();

  return (
    <nav className="nav">
      {/* DYNAMIC NAVBAR */}
      {isSmall ? <MobileNavbar /> : <DesktopNavbar />}
      <div className="nav-border"></div>
    </nav>
  );
};

export default Nav;
