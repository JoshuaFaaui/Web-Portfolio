import React from 'react'
import '../../styles/Home/NavBar/HomeNav.sass'
import { AiOutlineHome } from "react-icons/ai";
import {FaRegHandshake} from "react-icons/fa"
import { Link } from 'react-router-dom';
function HomeNav() {
  return (
    <div id="HomeNavFoundation">
      <ul id='HomeNavOptions'>
        <li id='navhomeicon' className='Homenavlinks'><AiOutlineHome className='navicons'/><span>Home</span></li>
        <Link to="services" className='Homenavlinks'><FaRegHandshake className='navicons'/><span>Services</span></Link>
      </ul>
    </div>
  );
}

export default HomeNav