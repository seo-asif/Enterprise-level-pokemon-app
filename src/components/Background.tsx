import React from "react";

import pokeball1 from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";

const Background = () => {
  return (
    <div className="background">
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball1" />
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball2" />
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball3" />
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball4" />
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball5" />
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball6" />
    </div>
  );
};

export default Background;
