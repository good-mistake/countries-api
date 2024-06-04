import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={` header ${darkMode ? "dark" : "light"}`}>
      {" "}
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode}>
        {darkMode === true ? (
          <FontAwesomeIcon icon="fa-solid fa-moon" rotation={340} />
        ) : (
          <FontAwesomeIcon icon="fa-regular fa-moon" rotation={340} />
        )}{" "}
        {darkMode === true ? <span>Light Mode</span> : <span>Dark Mode</span>}
      </button>
    </header>
  );
};

export default Header;
