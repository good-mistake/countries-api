import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "./data.json";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryInfo = ({ darkMode }) => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const country = jsonData.find((country) => country.name === countryName);
    setData(country);
    if (country) {
      const borders = country.borders?.map((borderCode) => {
        const borderCountry = jsonData.find((c) => c.alpha3Code === borderCode);
        return borderCountry ? borderCountry.name : borderCode;
      });
      setBorderCountries(borders);
    }
  }, [data, countryName]);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <main className="countryInfoContainer">
      {" "}
      <button
        onClick={() => navigate(`/`)}
        className={`backBtn ${darkMode ? "dark" : "light"}`}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`backIcon ${darkMode ? "dark" : "light"}`}
        />{" "}
        <span>Back</span>
      </button>
      <div className={`info ${darkMode ? "dark" : "light"}`}>
        <section className="imgInfo">
          <img src={data.flag} alt={`${data.name} flag`} />
        </section>{" "}
        <section
          className={`countriesBasicInfo  ${darkMode ? "dark" : "light"}`}
        >
          {" "}
          <div>
            {" "}
            <section>
              <h2>{data.name}</h2>{" "}
              <p>
                <strong>Native Name:</strong> {data.nativeName}
              </p>{" "}
              <p>
                <strong>Population:</strong> {data.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {data.region}
              </p>{" "}
              <p>
                <strong>Sub Region:</strong> {data.subregion}
              </p>{" "}
              <p>
                <strong>Capital:</strong> {data.capital}
              </p>
            </section>
            <section>
              {" "}
              <p>
                <strong>Top Level Domain:</strong> {data.topLevelDomain}
              </p>{" "}
              <p>
                <strong>Currencies:</strong>{" "}
                {data.currencies?.map((currency, index) => (
                  <span key={index}>{currency.name}</span>
                ))}
              </p>{" "}
              <p>
                <strong>Languages: </strong>
                {data.languages?.map((language) => language.name).join(", ")}
              </p>
            </section>
          </div>
          <div>
            <p className="borderCountriesContainer">
              <strong>Border Countries:</strong>
              {borderCountries?.length > 0 ? (
                borderCountries?.map((border, index) => (
                  <span
                    key={index}
                    className="borderCountries"
                    onClick={() => navigate(`/country/${border}`)}
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span> No Border Countries</span>
              )}
            </p>
          </div>
        </section>
      </div>{" "}
      {/* Add more country details as needed */}
    </main>
  );
};

export default CountryInfo;
