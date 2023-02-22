import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoadingOverlay from "./components/loading_overlay";
import MainAppStack from "./navigation/navigation";
import UserContextProvider from "./store/user_context";
import CountriesContextProvider from "./store/countries_context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <LoadingOverlay />;

  return (
    <UserContextProvider>
      <CountriesContextProvider>
        <NavigationContainer>
          <MainAppStack />
        </NavigationContainer>
      </CountriesContextProvider>
    </UserContextProvider>
  );
}
