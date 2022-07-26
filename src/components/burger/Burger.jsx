import React from "react";
import cl from "./burger.module.scss";

const Burger = ({ showMobilNav, setShowMobilNav }) => {
  return (
    <button
      onClick={() =>
        showMobilNav === false ? setShowMobilNav(true) : setShowMobilNav(false)
      }
      className={`${cl.burger} ${showMobilNav === true ? cl.show : null}`}
    >
      <span>Открыть меню</span>
    </button>
  );
};

export default Burger;
