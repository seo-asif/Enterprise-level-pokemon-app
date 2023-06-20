import React from "react";
import pokeballIcon from "../assets/pokeball-icon.png"
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
  return (<nav>
    <div className="block">
<img src={pokeballIcon} alt="pokeball icon" />
    </div>
    <div className="data"></div>
    <div className="block">
        <GiHamburgerMenu />
    </div>
  </nav>);
};

export default Navbar;
