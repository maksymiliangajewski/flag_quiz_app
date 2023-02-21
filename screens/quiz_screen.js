import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useContext } from "react";
import appColors from "../constants/appColors";
import { MyContext } from "../store/context";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Bar";
import { flagUri } from "../http/http";
import QuizAnswerButton from "../components/quiz_answer_button";
import EndOfQuizComponent from "../components/end_of_quiz";

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
              indicator={ProgressBar}
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
                backgroundColor={appColors.green}
              />
              <QuizAnswerButton
                iconLabel={"close-outline"}
                onPressFunction={() => handleSelectedOption(false)}
                backgroundColor={appColors.red}
              />
            </View>
          </View>
        </View>
      )}
      {/* {questionNumber >= quizCountries.length &&
        EndOfQuizComponent({ navigation, quizAnswers })} */}
      {questionNumber >= quizCountries.length && (
        <EndOfQuizComponent navigation={navigation} quizAnswers={quizAnswers} />
      )}
    </View>
  );
}

// export function EndOfQuizComponent({ navigation, quizAnswers }) {
//   return (
//     <View style={styles.background}>
//       <View style={styles.buttonsRow}>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate("ResultScreen", {
//               quizAnswers: quizAnswers,
//             })
//           }
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>"End of quiz. See results"</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  background: {
    height: "100%",
    paddingTop: "10%",
    backgroundColor: appColors.dirtyWhite,
  },
  topContainer: {
    flex: 1,
    backgroundColor: appColors.white,
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
    backgroundColor: appColors.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBig: {
    fontSize: 35,
    fontWeight: "600",
    alignContent: "center",
    alignSelf: "center",
    color: appColors.darkBlue,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: appColors.white,
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

// const styles = StyleSheet.create({
//   parent: {
//     height: "100%",
//   },
//   container: {
//     flex: 1,
//   },
//   flagContainer: {
//     flex: 1,
//     alignSelf: "center",
//   },
//   countryTextContainer: {
//     flex: 1,
//   },
//   countryText: {
//     color: appColors.darkBlue,
//     fontSize: 24,
//     alignSelf: "center",
//   },
//   buttonText: {
//     color: "#121212",
//     alignSelf: "center",
//   },
//   answerButton: {
//     marginHorizontal: 6,
//     flex: 1,
//     backgroundColor: appColors.green,
//     justifyContent: "center",
//   },
//   buttonsRow: {
//     flex: 2,
//     flexDirection: "row",
//   },
//   image: {
//     height: 160,
//     width: 320,
//   },
//   button: {
//     width: "100%",
//     height: 200,
//     backgroundColor: appColors.blue,
//     padding: 15,
//     borderRadius: 18,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 40,
//   },
// });
