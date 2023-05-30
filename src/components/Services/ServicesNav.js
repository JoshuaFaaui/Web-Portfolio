import React from "react";
import "../../styles/Services/Navbar/ServicesNav.sass"
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
function ServicesNav() {
  return (
    <div id="ServicesNavFoundation">
      <ul id="ServicesNavOptions">
        <Link to="/" className="Servicesnavlinks">
          <AiOutlineHome className="navicons" />
          <span>Home</span>
        </Link>
        <li className="Servicesnavlinks" id="navservicesicon">
          <FaRegHandshake className="navicons" />
          <span>Services</span>
        </li>
      </ul>
    </div>
  );
}

export default ServicesNav;
