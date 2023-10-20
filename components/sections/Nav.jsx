"use client";

import { useScreenSize } from "@/hooks";
import { DesktopNavbar, MobileNavbar } from "../elements";

const Nav = () => {
  const isMobile = useScreenSize();

  return (
    <section>
      <nav className="nav">
        {/* MOBILE NAVIGATION */}
        {isMobile && (
          <>
            <MobileNavbar />
          </>
        )}

        {/* DESKTOP NAVIGATION */}
        {!isMobile && (
          <>
            <DesktopNavbar />
          </>
        )}
      </nav>
    </section>
  );
};

export default Nav;
