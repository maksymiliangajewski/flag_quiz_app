import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: [],
  // userName: "",
  // roundsNumber: "",
  setCountries: () => {},
  // setUserName: () => {},
  // setRoundsNumber: () => {},
});

function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState([]);
  // const [userName, setUserName] = useState("");
  // const [roundsNumber, setRoundsNumber] = useState("");

  function setCountriesFromAPI(countries) {
    setCountries(countries);
  }

  // function setUserNameFromInput(input) {
  //   setUserName(input);
  // }

  // function setRoundsNumberFromInput(input) {
  //   setRoundsNumber(input);
  // }

  const value = {
    countries: countries,
    // userName: userName,
    // roundsNumber: roundsNumber,
    setCountries: setCountriesFromAPI,
    // setUserName: setUserNameFromInput,
    // setRoundsNumber: setRoundsNumberFromInput,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContextProvider;
