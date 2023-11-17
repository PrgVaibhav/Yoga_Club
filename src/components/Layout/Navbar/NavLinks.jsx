import { FaHome, FaUser } from "react-icons/fa";
import { MdEventNote, MdContactPhone } from "react-icons/md";

import "./NavLinks.scss";

export const NavLinks = ({ setMobileNav }) => {
  return (
    <ul className="nav_link">
      <li onClick={() => setMobileNav(false)}>
        <FaHome className="icon" />
        <a href="#home">Home</a>
      </li>
      <li onClick={() => setMobileNav(false)}>
        <MdEventNote className="icon" />
        <a href="#home">Events</a>
      </li>
      <li onClick={() => setMobileNav(false)}>
        <FaUser className="icon" />
        <a href="#home">Trainers</a>
      </li>
      <li onClick={() => setMobileNav(false)}>
        <MdContactPhone className="icon" />
        <a href="#home">Contact</a>
      </li>
    </ul>
  );
};
