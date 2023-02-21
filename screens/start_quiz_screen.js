import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import appStrings from "../constants/appStrings";
import appColors from "../constants/appColors";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../store/context";
import { prepareCountries } from "../controllers/countries_controller";
import imageAssets from "../assets/imageAssets";
import MyButton from "../components/my_button";
import LoadingOverlay from "../components/loading_overlay";

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
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image source={imageAssets.startQuizImage} style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textBig}>
          {appStrings.hello} {userName}!
        </Text>
        <Text style={styles.textSmall}>
          {appStrings.startQuizHint(roundsNumber)}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={appStrings.startQuiz}
          onPressFunction={() => {
            navigation.navigate("QuizScreen");
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
    backgroundColor: appColors.dirtyWhite,
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
    backgroundColor: appColors.white,
    borderRadius: 15,
    margin: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBig: {
    fontSize: 40,
    fontWeight: "600",
    alignContent: "center",
    alignSelf: "center",
    paddingBottom: 20,
    color: appColors.darkBlue,
  },
  textSmall: {
    alignContent: "center",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
    color: appColors.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
