import { TextInput, Text, View, StyleSheet } from "react-native";
import colorAssets from "../assets/colorAssets";
import fontAssets from "../assets/fonts/fontAssets";

export default function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
    color: "white",
  },
  label: {
    fontSize: 12,
    fontFamily: fontAssets.regular,
    marginBottom: 4,
    color: colorAssets.darkBlue,
    paddingBottom: 4,
  },
  input: {
    backgroundColor: colorAssets.dirtyWhite,
    color: colorAssets.darkBlue,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
