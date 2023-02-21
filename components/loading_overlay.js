import { ActivityIndicator, View, StyleSheet } from "react-native";
import colorAssets from "../assets/colorAssets";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colorAssets.darkBlue}
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
  },
});
