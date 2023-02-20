import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useContext } from "react";
import appColors from "../constants/appColors";
import { MyContext } from "../store/context";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Bar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QuizScreen() {
  const myCtx = useContext(MyContext);
  const quizCountries = myCtx.countries;
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleNextPress = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleSelectedOption = (_option) => {
    console.log(_option);
  };

  // return (
  //   <View style={styles.container}>
  //     {quizCountries && (
  //       <View style={styles.parent}>
  //         <View style={styles.flagContainer}>
  //           <Image
  //             source={{
  //               uri:
  //                 "http://www.geognos.com/api/en/countries/flag/" +
  //                 quizCountries[questionNumber].id +
  //                 ".png",
  //             }}
  //             indicator={ProgressBar}
  //             style={styles.image}
  //           />
  //           <Text style={styles.question}>
  //             {quizCountries[questionNumber].id}
  //           </Text>
  //           <Text style={styles.question}>
  //             {quizCountries[questionNumber].name}
  //           </Text>
  //         </View>
  //         <View style={styles.answersContainer}>
  //           <TouchableOpacity
  //             style={styles.answerButton}
  //             onPress={() => handleSelectedOption(true)}
  //           >
  //             <Text style={styles.answer}>True</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.answerButton}
  //             onPress={() => handleSelectedOption(false)}
  //           >
  //             <Text style={styles.answer}>False</Text>
  //           </TouchableOpacity>
  //         </View>
  //         <View style={styles.bottomContainer}>
  //           {questionNumber !== quizCountries.length - 1 && (
  //             <TouchableOpacity style={styles.button} onPress={handleNextPress}>
  //               <Text style={styles.buttonText}>Next</Text>
  //             </TouchableOpacity>
  //           )}
  //           {questionNumber === quizCountries.length - 1 && (
  //             <TouchableOpacity style={styles.button} onPress={() => null}>
  //               <Text style={styles.buttonText}>Show result</Text>
  //             </TouchableOpacity>
  //           )}
  //         </View>
  //       </View>
  //     )}
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image
          source={{
            uri:
              "http://www.geognos.com/api/en/countries/flag/" +
              quizCountries[questionNumber].id +
              ".png",
          }}
          indicator={ProgressBar}
          style={styles.image}
        />
      </View>
      <View style={styles.countryTextContainer}>
        <Text>{quizCountries[questionNumber].id}</Text>
        <Text style={styles.countryText}>
          {quizCountries[questionNumber].name}
        </Text>
      </View>
      <View style={styles.buttonsRow}>
        <View style={[styles.answerButton, { marginRight: 3 }]}>
          <TouchableOpacity>
            <Ionicons
              style={styles.buttonText}
              name="checkmark-outline"
              size={45}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.answerButton,
            { backgroundColor: appColors.red, marginLeft: 3 },
          ]}
        >
          <TouchableOpacity>
            <Ionicons
              style={styles.buttonText}
              name="close-outline"
              size={45}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flagContainer: {
    flex: 1,
    alignSelf: "center",
  },
  countryTextContainer: {
    flex: 1,
  },
  countryText: {
    color: appColors.darkBlue,
    fontSize: 24,
    alignSelf: "center",
  },
  buttonText: {
    color: "#121212",
    alignSelf: "center",
  },
  answerButton: {
    marginHorizontal: 6,
    flex: 1,
    backgroundColor: appColors.green,
    justifyContent: "center",
  },
  buttonsRow: {
    flex: 2,
    flexDirection: "row",
  },
  image: {
    height: 160,
    width: 320,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     height: "100%",
//     flex: 1,
//   },
//   flagContainer: {
//     marginVertical: 16,
//     alignItems: "center",
//   },
//   answersContainer: {
//     marginVertical: 16,
//     flex: 1,
//     alignItems: "center",
//   },
//   bottomContainer: {
//     marginBottom: 12,
//     paddingVertical: 16,
//     alignItems: "center",
//   },
//   button: {
//     backgroundColor: appColors.blue,
//     padding: 15,
//     paddingHorizontal: 40,
//     borderRadius: 18,
//     alignItems: "center",
//     marginBottom: 40,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: appColors.dirtyWhite,
//   },
//   question: {
//     fontSize: 28,
//   },
//   answer: {
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   answerButton: {
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//     marginVertical: 8,
//     backgroundColor: appColors.lightBlue,
//     borderRadius: 12,
//   },
//   parent: {
//     height: "100%",
//   },
//   image: {
//     height: 160,
//     width: 320,
//   },
// });
