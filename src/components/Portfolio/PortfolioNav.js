import React from "react";
import "../../styles/Portfolio/Navbar/PortfolioNav.sass"
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
function PortfolioNav() {
  return (
    <div id="PortfolioNavFoundation">
      <ul id="PortfolioNavOptions">
        <Link to="/" className="Portfolionavlinks">
          <AiOutlineHome className="navicons" />
          <span>Home</span>
        </Link>
        <li className="Portfolionavlinks" id="navportfolioicon">
          <FaRegHandshake className="navicons" />
          <span>Services</span>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioNav;
