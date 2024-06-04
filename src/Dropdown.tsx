import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const Dropdown = ({ options, value, onChange, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdownContainer">
      <div
        className={`dropdown ${darkMode ? "dark" : "light"}`}
        onClick={toggleDropdown}
      >
        <span>{value || "Filter by Region"}</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={` ${
            darkMode === true ? "arrowIconDark" : "arrowIconLight"
          }`}
        />
      </div>
      {isOpen && (
        <div className={`${darkMode ? "dark" : "light"} dropdownMenu`}>
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdownOption"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
