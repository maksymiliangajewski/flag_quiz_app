import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import appStrings from "../constants/appStrings";
import appColors from "../constants/appColors";
import { useContext, useEffect } from "react";
import { MyContext } from "../store/context";
import { prepareCountries } from "../controllers/countries_controller";

export default function StartQuizScreen({ navigation }) {
  const myCtx = useContext(MyContext);
  const userName = myCtx.userName;
  const roundsNumber = myCtx.roundsNumber;

  useEffect(() => {
    async function getCountries() {
      const fetchedCountries = await prepareCountries(roundsNumber);
      myCtx.setCountries(fetchedCountries);
    }

    getCountries();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Text style={styles.question}>Hello {userName}!</Text>
        <Text style={[styles.question] && { fontSize: 20 }}>
          You have decided to play {roundsNumber} rounds of quiz. In each
          rounds, you have to decide if country name is accurate to country
          flag.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("QuizScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{appStrings.start}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    height: 300,
    width: 300,
  },
  button: {
    width: "100%",
    backgroundColor: appColors.blue,
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: appColors.dirtyWhite,
  },
  question: {
    fontSize: 28,
  },
  flagContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
});
