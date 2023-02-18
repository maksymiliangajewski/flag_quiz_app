import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/title";
import appStrings from "../constants/appStrings";
import appColors from "../constants/appColors";
import imageAssets from "../assets/imageAssets";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.imageContainer}>
        <Image source={imageAssets.quizHomeImage} style={styles.homeImage} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserInputScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{appStrings.homeLetsGo}</Text>
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
});
