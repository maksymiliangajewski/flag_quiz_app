import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "./input";
import MyButton from "./my_button";

export default function UserForm() {
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    userName: "",
    roundsNumber: "",
  });

  const inputChangedHandler = (inputIdentifier) => (enteredValue) => {
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [inputIdentifier]: enteredValue,
    }));
  };

  return (
    <View>
      <View>
        <Input
          label={"Name"}
          textInputConfig={{
            maxLength: 32,
            onChangeText: inputChangedHandler("userName"),
            value: inputValues.userName,
          }}
        ></Input>
        <Input
          label={"Number of rounds"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            maxLength: 2,
            onChangeText: inputChangedHandler("roundsNumber"),
            value: inputValues.roundsNumber,
          }}
        ></Input>
      </View>
      <MyButton
        label="Next"
        onPressFunction={() => {
          // console.log(inputValues);
          navigation.navigate("QuizScreen");
        }}
      />
    </View>
  );
}
