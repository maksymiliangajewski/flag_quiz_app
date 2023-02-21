import { StyleSheet, Text, View, Image } from "react-native";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../store/context";
import { prepareCountries } from "../controllers/countries_controller";
import imageAssets from "../assets/images/imageAssets";
import MyButton from "../components/my_button";
import LoadingOverlay from "../components/loading_overlay";
import colorAssets from "../assets/colorAssets";
import stringAssets from "../assets/stringAssets";
import fontAssets from "../assets/fonts/fontAssets";
import { StackActions } from "@react-navigation/native";

export default function StartQuizScreen({ navigation }) {
  const myCtx = useContext(MyContext);
  const userName = myCtx.userName;
  const roundsNumber = myCtx.roundsNumber;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCountries() {
      const fetchedCountries = await prepareCountries(roundsNumber);
      setIsLoading(false);
      myCtx.setCountries(fetchedCountries);
    }

    getCountries();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.background}>
        <LoadingOverlay />
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image source={imageAssets.startQuizImage} style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textBig}>
          {stringAssets.hello} {userName}!
        </Text>
        <Text style={styles.textSmall}>
          {stringAssets.startQuizHint(roundsNumber)}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={stringAssets.startQuiz}
          onPressFunction={() => {
            navigation.dispatch(StackActions.replace("QuizScreen"));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    paddingVertical: "10%",
    backgroundColor: colorAssets.dirtyWhite,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 15,
    paddingTop: 50,
  },
  image: {
    height: "110%",
    resizeMode: "contain",
  },
  centerContainer: {
    flex: 2,
    backgroundColor: colorAssets.white,
    borderRadius: 15,
    margin: 15,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textBig: {
    fontSize: 40,
    fontFamily: fontAssets.bold,
    alignContent: "center",
    alignSelf: "center",
    paddingBottom: 20,
    color: colorAssets.darkBlue,
  },
  textSmall: {
    alignContent: "center",
    alignSelf: "center",
    fontSize: 18,
    fontFamily: fontAssets.regular,
    color: colorAssets.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
