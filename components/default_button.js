import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import colorAssets from "../assets/colorAssets";
import fontAssets from "../assets/fonts/fontAssets";

export default function DefaultButton({ label, onPressFunction }) {
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
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: colorAssets.primaryBlue,
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: fontAssets.regular,
    color: colorAssets.dirtyWhite,
  },
});
