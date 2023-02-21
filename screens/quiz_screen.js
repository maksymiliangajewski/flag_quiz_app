import { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Image from "react-native-image-progress";
import { MyContext } from "../store/context";
import { flagUri } from "../http/http";
import QuizAnswerButton from "../components/quiz_answer_button";
import EndOfQuizComponent from "../components/end_of_quiz";
import colorAssets from "../assets/colorAssets";
import fontAssets from "../assets/fonts/fontAssets";
import LoadingOverlay from "../components/loading_overlay";

export default function QuizScreen({ navigation }) {
  const myCtx = useContext(MyContext);
  const quizCountries = myCtx.countries;
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleSelectedOption = (_option) => {
    setQuizAnswers([
      ...quizAnswers,
      {
        country: quizCountries[questionNumber].name,
        answerCorrect:
          quizCountries[questionNumber].value === _option ? true : false,
      },
    ]);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <View>
      {quizCountries && questionNumber < quizCountries.length && (
        <View style={styles.background}>
          <View style={styles.topContainer}>
            <Image
              source={{
                uri: flagUri(quizCountries[questionNumber].id),
              }}
              indicator={LoadingOverlay}
              style={styles.flagImage}
            />
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.textBig}>
              {quizCountries[questionNumber].name}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonsRow}>
              <QuizAnswerButton
                iconLabel={"checkmark-outline"}
                onPressFunction={() => handleSelectedOption(true)}
                backgroundColor={colorAssets.green}
              />
              <QuizAnswerButton
                iconLabel={"close-outline"}
                onPressFunction={() => handleSelectedOption(false)}
                backgroundColor={colorAssets.red}
              />
            </View>
          </View>
        </View>
      )}
      {questionNumber >= quizCountries.length && (
        <EndOfQuizComponent navigation={navigation} quizAnswers={quizAnswers} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    paddingTop: "10%",
    backgroundColor: colorAssets.dirtyWhite,
  },
  topContainer: {
    flex: 1,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 15,
  },
  flagImage: {
    height: "100%",
    width: "90%",
  },
  centerContainer: {
    flex: 1,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBig: {
    fontSize: 35,
    fontFamily: fontAssets.bold,
    alignContent: "center",
    alignSelf: "center",
    color: colorAssets.darkBlue,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    flexDirection: "row",
    margin: 15,
    padding: 15,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
