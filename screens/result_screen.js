import { StyleSheet, Text, View } from "react-native";
import ResultList from "../components/result_list";
import MyButton from "../components/my_button";
import colorAssets from "../assets/colorAssets";
import stringAssets from "../assets/stringAssets";
import fontAssets from "../assets/fonts/fontAssets";

export default function ResultScreen({ route, navigation }) {
  const { quizAnswers } = route.params;
  const correctAnswers = quizAnswers.filter((element) => {
    if (element.answerCorrect) return true;
    return false;
  }).length;
  return (
    <View style={styles.parent}>
      <View style={styles.topContainer}>
        <View>
          <Text style={[styles.textSmall, { fontSize: 24 }]}>
            {stringAssets.yourScore}
          </Text>
          <Text style={styles.textBig}>
            {(correctAnswers / quizAnswers.length).toFixed(2) * 100}%
          </Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={[styles.textSmall, { paddingBottom: 7 }]}>
          {stringAssets.questionsSeparately}
        </Text>
        <ResultList results={quizAnswers}></ResultList>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={stringAssets.home}
          onPressFunction={() => {
            navigation.navigate("HomeScreen");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    height: "100%",
    paddingVertical: "10%",
    backgroundColor: colorAssets.dirtyWhite,
  },
  topContainer: {
    flex: 1,
    backgroundColor: colorAssets.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
  textSmall: {
    alignSelf: "center",
    fontSize: 18,
    fontFamily: fontAssets.regular,
  },
  textBig: {
    alignSelf: "center",
    fontSize: 75,
    fontFamily: fontAssets.bold,
  },
  centerContainer: {
    flex: 2,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
});
