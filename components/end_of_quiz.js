import { Text, View, Image, StyleSheet } from "react-native";
import imageAssets from "../assets/imageAssets";
import appColors from "../constants/appColors";
import appStrings from "../constants/appStrings";
import MyButton from "./my_button";

export default function EndOfQuizComponent({ navigation, quizAnswers }) {
  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image source={imageAssets.endQuizImage} style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textBig}>{appStrings.allDone}</Text>
        <Text style={styles.textSmall}>{appStrings.endOfQuizText}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={appStrings.seeResult}
          onPressFunction={() => {
            navigation.navigate("ResultScreen", {
              quizAnswers: quizAnswers,
            });
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
    justifyContent: "space-around",
  },
  textBig: {
    fontSize: 32,
    fontWeight: "600",
    alignContent: "center",
    alignSelf: "center",
    color: appColors.darkBlue,
  },
  textSmall: {
    fontSize: 18,
    fontWeight: "500",
    alignContent: "center",
    alignSelf: "center",
    color: appColors.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
