"use client";

import { useScreenSize } from "@/hooks";
import { DesktopNavbar, MobileNavbar } from "@/components/elements";

const Nav = () => {
  const [isSmall] = useScreenSize();

  return (
    <section>
      <nav className="nav">
        {/* DYNAMIC NAVBAR */}
        {isSmall ? <MobileNavbar /> : <DesktopNavbar />}
      </nav>
    </section>
  );
};

export default Nav;
