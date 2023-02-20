import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import imageAssets from "../assets/imageAssets";
import ResultList from "../components/result_list";
import appColors from "../constants/appColors";
import appStrings from "../constants/appStrings";
import MyButton from "../components/my_button";

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
          <Text style={styles.textSmall}>{appStrings.congratulations}</Text>
          <Text style={styles.textSmall}>{appStrings.yourScore}</Text>
          <Text style={styles.textBig}>
            {(correctAnswers / quizAnswers.length).toFixed(2) * 100}%
          </Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={[styles.textSmall, { paddingBottom: 7 }]}>
          {appStrings.questionsSeparately}
        </Text>
        <ResultList results={quizAnswers}></ResultList>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.textSmall, { paddingTop: 12 }]}>
          {appStrings.returnToHome}
        </Text>
        <MyButton
          label={appStrings.home}
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
    backgroundColor: appColors.dirtyWhite,
  },
  topContainer: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
  textSmall: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textBig: {
    alignSelf: "center",
    fontSize: 75,
    fontWeight: "700",
  },
  centerContainer: {
    flex: 2,
    backgroundColor: appColors.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: appColors.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
  },
});
