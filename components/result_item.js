import { View, StyleSheet, Text } from "react-native";
import colorAssets from "../assets/colorAssets";
import stringAssets from "../assets/stringAssets";

export default function ResultItem({ country, answerCorrect }) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.textBase}>{country}</Text>
      <Text style={[styles.textBase && { fontWeight: "800" }]}>
        {answerCorrect === true ? stringAssets.correct : stringAssets.wrong}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colorAssets.lightBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    color: colorAssets.darkBlue,
  },
});
