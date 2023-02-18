import { TextInput, Text, View, StyleSheet } from "react-native";
import appColors from "../constants/appColors";

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
    fontWeight: "500",
    marginBottom: 4,
    color: appColors.darkBlue,
    paddingBottom: 4,
  },
  input: {
    backgroundColor: appColors.dirtyWhite,
    color: appColors.darkBlue,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
