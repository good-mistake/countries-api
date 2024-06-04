import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./CountryInfo.tsx";
import Home from "./Home.tsx";
import Header from "./Header.tsx";
import { useState } from "react";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <Router>
      {" "}
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/country/:countryName"
            element={<CountryInfo darkMode={darkMode} />}
          />
        </Routes>{" "}
      </div>
    </Router>
  );
};

export default App;
