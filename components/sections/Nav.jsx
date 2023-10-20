"use client";

import { useScreenSize } from "@/hooks";

const Nav = () => {
  const isMobile = useScreenSize();

  return (
    <section>
      <nav className="nav">
        {/* MOBILE NAVIGATION */}
        {isMobile && (
          <>
            <div>Mobile Nav</div>
          </>
        )}

        {/* DESKTOP NAVIGATION */}
        {!isMobile && (
          <>
            <div>Desktop Nav</div>
          </>
        )}
      </nav>
    </section>
  );
};

export default Nav;
