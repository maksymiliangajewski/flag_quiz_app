import { Text, View, Image, StyleSheet } from "react-native";
import colorAssets from "../assets/colorAssets";
import fontAssets from "../assets/fonts/fontAssets";
import imageAssets from "../assets/images/imageAssets";
import stringAssets from "../assets/stringAssets";
import MyButton from "./my_button";

export default function EndOfQuizComponent({ navigation, quizAnswers }) {
  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image source={imageAssets.endQuizImage} style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textBig}>{stringAssets.allDone}</Text>
        <Text style={styles.textSmall}>{stringAssets.endOfQuizText}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={stringAssets.seeResult}
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
    padding: 15,
    justifyContent: "space-around",
  },
  textBig: {
    fontSize: 32,
    fontFamily: fontAssets.bold,
    alignContent: "center",
    alignSelf: "center",
    color: colorAssets.darkBlue,
  },
  textSmall: {
    fontSize: 18,
    fontFamily: fontAssets.regular,
    alignContent: "center",
    alignSelf: "center",
    color: colorAssets.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
