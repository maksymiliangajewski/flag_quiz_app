import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import appColors from "../constants/appColors";
import { MyContext } from "../store/context";

export default function QuizScreen() {
  const myCtx = useContext(MyContext);

  const [questions, setQuestion] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);

  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&type=boolean&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    console.log(data.results);
  };

  const handleNextPress = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleSelectedOption = (_option) => {
    console.log(_option);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.flagContainer}>
            <Text style={styles.question}>
              {decodeURIComponent(questions[questionNumber].question)}
            </Text>
          </View>
          <View style={styles.answersContainer}>
            <TouchableOpacity
              style={styles.answerButton}
              onPress={() =>
                handleSelectedOption(questions[questionNumber].correct_answer)
              }
            >
              <Text style={styles.answer}>
                {/* {decodeURIComponent(questions[questionNumber].correct_answer)} */}
                {myCtx.userName}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.answerButton}
              onPress={() =>
                handleSelectedOption(
                  questions[questionNumber].incorrect_answers[0]
                )
              }
            >
              <Text style={styles.answer}>
                {/* {decodeURIComponent(
                  questions[questionNumber].incorrect_answers[0]
                )} */}
                {myCtx.roundsNumber}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            {questionNumber !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
            {questionNumber === 9 && (
              <TouchableOpacity style={styles.button} onPress={() => null}>
                <Text style={styles.buttonText}>Show result</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  flagContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  answersContainer: {
    marginVertical: 16,
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    marginBottom: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: appColors.blue,
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: appColors.dirtyWhite,
  },
  question: {
    fontSize: 28,
  },
  answer: {
    fontSize: 18,
    fontWeight: "400",
  },
  answerButton: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 8,
    backgroundColor: appColors.lightBlue,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
