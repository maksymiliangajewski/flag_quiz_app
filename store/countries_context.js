import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: [],
  setCountries: () => {},
});

function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState([]);

  function setCountriesFromAPI(countries) {
    setCountries(countries);
  }

  const value = {
    countries: countries,
    setCountries: setCountriesFromAPI,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContextProvider;
