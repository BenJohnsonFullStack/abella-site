"use client";

import { useScreenSize } from "@/hooks";
import { DesktopNavbar, MobileNavbar } from "@/components/elements";

const Nav = () => {
  const isMobile = useScreenSize();

  return (
    <section>
      <nav className="nav">
        {/* DYNAMIC NAVBAR */}
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </nav>
    </section>
  );
};

export default Nav;
