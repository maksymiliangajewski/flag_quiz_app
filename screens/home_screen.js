import { StyleSheet, Text, View, Image } from "react-native";
import colorAssets from "../assets/colorAssets";
import imageAssets from "../assets/images/imageAssets";
import stringAssets from "../assets/stringAssets";
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
        <Text style={styles.textBig}>{stringAssets.flag}</Text>
        <Text style={styles.textBig}>{stringAssets.quiz}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <MyButton
          label={stringAssets.homeLetsGo}
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
    // fontFamily: "open-sans-bold",
    color: colorAssets.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    padding: 15,
  },
});
