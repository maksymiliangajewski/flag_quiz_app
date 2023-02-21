import { StyleSheet, Text, View, Image } from "react-native";
import appStrings from "../constants/appStrings";
import appColors from "../constants/appColors";
import imageAssets from "../assets/imageAssets";
import MyButton from "../components/my_button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image
          source={imageAssets.quizHomeImage}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textBig}>{appStrings.flag}</Text>
        <Text style={styles.textBig}>{appStrings.quiz}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={appStrings.homeLetsGo}
          onPressFunction={() => {
            navigation.navigate("UserInputScreen");
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
  backgroundImage: {
    height: "150%",
    resizeMode: "contain",
  },
  centerContainer: {
    flex: 2,
    margin: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBig: {
    fontSize: 75,
    fontWeight: "700",
    color: appColors.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
