import { signOut } from "firebase/auth";
import React from "react";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useAppDispatch } from "../app/hooks";
import { setToast, setUserStatus } from "../app/slices/AppSlice";

import { pokemonTabs } from "../utils/Constants";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast(`Logged out successfully `));
  };

  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];

  return (
    <footer>
      <div className="block"></div>
      <div className="data">
        {location.pathname.includes("/pokemon") && (
          <ul>
            {routes.map((route) => {
              return (
                <li key={route.name} className="" onClick={() => {}}>
                  {route.value}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="block">
        <MdOutlinePowerSettingsNew onClick={handleLogout} />
      </div>
    </footer>
  );
};

export default Footer;
