import { StyleSheet, Text, View } from "react-native";
import appStrings from "../constants/appStrings";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{appStrings.homeTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
});
