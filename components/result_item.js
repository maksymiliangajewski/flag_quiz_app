import { View, StyleSheet, Text } from "react-native";
import appColors from "../constants/appColors";
import appStrings from "../constants/appStrings";

export default function ResultItem({ country, answerCorrect }) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.textBase}>{country}</Text>
      <Text style={[styles.textBase && { fontWeight: "800" }]}>
        {answerCorrect === true ? appStrings.correct : appStrings.wrong}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: appColors.lightBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    color: appColors.darkBlue,
  },
});
