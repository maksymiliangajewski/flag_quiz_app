import { createContext, useState } from "react";

export const MyContext = createContext({
  flagsIds: [],
  userName: "",
  roundsNumber: "",
  setUserName: () => {},
  setRoundsNumber: () => {},
});

function MyContextProvider({ children }) {
  const [flagsIds, setFlagsIds] = useState([]);
  const [userName, setUserName] = useState("");
  const [roundsNumber, setRoundsNumber] = useState("");

  function setUserNameFromInput(input) {
    setUserName(input);
  }

  function setRoundsNumberFromInput(input) {
    setRoundsNumber(input);
  }

  const value = {
    flagsIds: flagsIds,
    userName: userName,
    roundsNumber: roundsNumber,
    setUserName: setUserNameFromInput,
    setRoundsNumber: setRoundsNumberFromInput,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyContextProvider;
