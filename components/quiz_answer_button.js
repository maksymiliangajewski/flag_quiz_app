import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QuizAnswerButton({
  iconLabel,
  onPressFunction,
  backgroundColor,
}) {
  return (
    <TouchableOpacity
      onPress={() => onPressFunction()}
      style={[styles.answerButton, { backgroundColor: backgroundColor }]}
    >
      <Ionicons style={styles.answerButtonIcon} name={iconLabel} size={70} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  answerButton: {
    width: "50%",
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  answerButtonIcon: {
    alignSelf: "center",
    justifyContent: "center",
  },
});
