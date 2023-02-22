import { createContext, useState } from "react";

export const UserContext = createContext({
  userName: "",
  roundsNumber: "",
  setUserName: () => {},
  setRoundsNumber: () => {},
});

function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [roundsNumber, setRoundsNumber] = useState("");

  function setUserNameFromInput(input) {
    setUserName(input);
  }

  function setRoundsNumberFromInput(input) {
    setRoundsNumber(input);
  }

  const value = {
    userName: userName,
    roundsNumber: roundsNumber,
    setUserName: setUserNameFromInput,
    setRoundsNumber: setRoundsNumberFromInput,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
