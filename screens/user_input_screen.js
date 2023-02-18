import { StyleSheet, Text, View } from "react-native";
import UserForm from "../components/user_form";
import appColors from "../constants/appColors";
import appStrings from "../constants/appStrings";

export default function UserInputScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{appStrings.userInputScreenHint}</Text>
      </View>
      <View style={styles.box}>
        <UserForm />
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
  box: {
    padding: 10,
    backgroundColor: appColors.white,
    margin: 2,
    borderRadius: 7,
    margin: 5,
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
  title: {
    fontSize: 20,
    fontWeight: "500",
    padding: 6,
    color: appColors.darkBlue,
  },
});
