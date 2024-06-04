import React, { useState, useEffect } from "react";
import jsonData from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "./Dropdown.tsx";
import { useNavigate } from "react-router-dom";
const Home = ({ darkMode }) => {
  const [data, setData] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [filteredOption, setFilteredOption] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const continents = [
    "Filter by Region",
    "Africa",
    "Asia",
    "Europe",
    "America",
    "Oceania",
  ];
  const handleChange = (selectedOption) => {
    setSelectedContinent(selectedOption);
    filterOption(selectedOption, search);
  };
  useEffect(() => {
    setData(jsonData);
    setFilteredOption(jsonData);
  }, [data]);

  const getThemeClass = (darkMode) => (darkMode ? "dark" : "light");
  const filterOption = (continent, search) => {
    let filteredData = data;

    if (continent && continent !== "Filter by Region") {
      filteredData = filteredData.filter(
        (country) => country.region === continent
      );
    }
    if (search) {
      filteredData = filteredData.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredOption(filteredData);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterOption(selectedContinent, value);
  };
  console.log(data);
  return (
    <>
      <main className={` ${getThemeClass(darkMode)}`}>
        <section className={`searchAndFilter ${getThemeClass(darkMode)}`}>
          <div className="search-container">
            <input
              type="text"
              className={`${getThemeClass(darkMode)} search-input`}
              placeholder="Search for a country..."
              value={search}
              onChange={handleSearch}
            />
            <FontAwesomeIcon
              icon="search"
              className={`search-icon ${
                darkMode === true ? "searchIconDark" : "searchIconLight"
              }`}
            />
          </div>
          <div className="selectContainer">
            <Dropdown
              options={continents}
              value={selectedContinent}
              onChange={handleChange}
              darkMode={darkMode}
            />
          </div>
        </section>{" "}
        <section className={`grid-container ${getThemeClass(darkMode)}`}>
          {filteredOption?.map((country, index) => {
            return (
              <>
                {" "}
                <li
                  key={index}
                  className={`${getThemeClass(darkMode)} CountriesList`}
                  onClick={() => navigate(`/country/${country.name}`)}
                >
                  <div className="imgContainer">
                    {" "}
                    <img src={country.flag} alt={`${country.name} flag`} />
                  </div>
                  <div>
                    {" "}
                    <h2>{country.name}</h2>
                    <div>
                      <span>Population:</span>{" "}
                      {country.population.toLocaleString()}
                    </div>
                    <div>
                      <span>Region:</span> {country.region}
                    </div>
                    <div>
                      <span>Capital:</span> {country.capital}
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
