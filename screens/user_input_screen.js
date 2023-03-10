import { useContext, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import imageAssets from "../assets/images/imageAssets";
import Input from "../components/input";
import colorAssets from "../assets/colorAssets";
import stringAssets from "../assets/stringAssets";
import fontAssets from "../assets/fonts/fontAssets";
import DefaultButton from "../components/default_button";
import { UserContext } from "../store/user_context";

export default function UserInputScreen() {
  const userContext = useContext(UserContext);
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    userName: userContext.userName,
    roundsNumber: userContext.roundsNumber,
  });
  const roundsNumberInputRef = useRef();

  const inputChangedHandler = (inputIdentifier) => (enteredValue) => {
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [inputIdentifier]: enteredValue,
    }));
  };

  function validateFields() {
    let errorMsg = "";
    let validationError = false;

    if (inputValues.userName.length < 1) {
      errorMsg += stringAssets.nameErrorText;
      validationError = true;
    }
    if (inputValues.roundsNumber < 1 || inputValues.roundsNumber > 99) {
      errorMsg += stringAssets.roundsErrorText;
      validationError = true;
    }
    if (validationError) {
      Alert.alert(stringAssets.alertErrorText, errorMsg);
      return true;
    }
    return false;
  }

  return (
    <View style={styles.background}>
      <KeyboardAwareScrollView>
        <View style={styles.topContainer}>
          <Image
            source={imageAssets.userInputImage}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.textRegular}>
            {stringAssets.userInputScreenHint}
          </Text>
          <View>
            <View>
              <Input
                label={stringAssets.name}
                textInputConfig={{
                  maxLength: 32,
                  onChangeText: inputChangedHandler("userName"),
                  value: inputValues.userName,
                  returnKeyType: "next",
                  onSubmitEditing: () => {
                    roundsNumberInputRef.current.focus();
                  },
                  blurOnSubmit: false,
                }}
              ></Input>
              <Input
                label={stringAssets.numberOfRounds}
                textInputConfig={{
                  keyboardType: "decimal-pad",
                  maxLength: 2,
                  onChangeText: inputChangedHandler("roundsNumber"),
                  value: inputValues.roundsNumber,
                  ref: roundsNumberInputRef,
                }}
              ></Input>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <DefaultButton
            label={stringAssets.next}
            onPressFunction={() => {
              if (!validateFields()) {
                userContext.setUserName(inputValues.userName);
                userContext.setRoundsNumber(inputValues.roundsNumber);
                navigation.navigate("StartQuizScreen");
              }
            }}
          />
        </View>
      </KeyboardAwareScrollView>
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
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 15,
    paddingTop: 30,
  },
  backgroundImage: {
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
  textRegular: {
    fontSize: 20,
    fontFamily: fontAssets.regular,
    color: colorAssets.darkBlue,
  },
  bottomContainer: {
    flex: 1,
    margin: 15,
    marginTop: 75,
    padding: 15,
  },
});
