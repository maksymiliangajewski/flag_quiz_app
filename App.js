import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/navigation";
import MyContextProvider from "./store/context";

export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </MyContextProvider>
  );
}
