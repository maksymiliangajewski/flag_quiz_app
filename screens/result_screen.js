import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import imageAssets from "../assets/imageAssets";
import ResultList from "../components/result_list";
import appColors from "../constants/appColors";

export default function ResultScreen({ route, navigation }) {
  const { quizAnswers } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={imageAssets.quizHomeImage}
              style={styles.homeImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <ResultList results={quizAnswers}></ResultList>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.dirtyWhite,

    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  topContainer: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    height: 300,
    width: 300,
  },
  bottomContainer: {
    flex: 2,
    paddingTop: 30,
    paddingBottom: 30,
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
  buttonContainer: { flex: 1 },
});
