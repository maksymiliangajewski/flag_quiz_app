import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import appColors from "../constants/appColors";

export default function MyButton({ label, onPressFunction }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: appColors.blue,
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: appColors.dirtyWhite,
  },
});