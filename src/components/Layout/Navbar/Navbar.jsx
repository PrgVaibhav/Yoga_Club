import { useState } from "react";
import { NavLinks } from "./NavLinks";
import "./Navbar.scss";
export const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const clickHandler = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <span className="yoga">Yoga</span>{" "}
          <span className="world">World</span>
        </h1>
      </div>
      <div className="button_toggle" onClick={clickHandler}>
        <span className={mobileNav ? "active" : ""}></span>
        <span className={mobileNav ? "active" : ""}></span>
        <span className={mobileNav ? "active" : ""}></span>
      </div>
      <nav className={mobileNav ? "navbar active" : "navbar"}>
        <NavLinks setMobileNav={setMobileNav} />
      </nav>
    </header>
  );
};
