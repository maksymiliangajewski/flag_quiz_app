import { createContext, useState } from "react";

export const MyContext = createContext({
  countries: [],
  userName: "",
  roundsNumber: "",
  setCountries: () => {},
  setUserName: () => {},
  setRoundsNumber: () => {},
});

function MyContextProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [userName, setUserName] = useState("");
  const [roundsNumber, setRoundsNumber] = useState("");

  function setCountriesFromAPI(countries) {
    setCountries(countries);
  }

  function setUserNameFromInput(input) {
    setUserName(input);
  }

  function setRoundsNumberFromInput(input) {
    setRoundsNumber(input);
  }

  const value = {
    countries: countries,
    userName: userName,
    roundsNumber: roundsNumber,
    setCountries: setCountriesFromAPI,
    setUserName: setUserNameFromInput,
    setRoundsNumber: setRoundsNumberFromInput,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContextProvider;
