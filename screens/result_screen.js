import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import imageAssets from "../assets/imageAssets";
import appColors from "../constants/appColors";

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={imageAssets.quizHomeImage}
          style={styles.homeImage}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: appColors.dirtyWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  homeImage: {
    height: 300,
    width: 300,
  },
});
