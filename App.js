import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/navigation";
import MyContextProvider from "./store/context";
import { useFonts } from "expo-font";
import LoadingOverlay from "./components/loading_overlay";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <LoadingOverlay />;

  return (
    <MyContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </MyContextProvider>
  );
}
