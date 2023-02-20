import { ActivityIndicator, View, StyleSheet } from "react-native";
import appColors from "../constants/appColors";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={appColors.darkBlue}
      ></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: appColors.dirtyWhite,
  },
});
