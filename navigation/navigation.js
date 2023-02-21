import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home_screen";
import QuizScreen from "../screens/quiz_screen";
import ResultScreen from "../screens/result_screen";
import UserInputScreen from "../screens/user_input_screen";
import StartQuizScreen from "../screens/start_quiz_screen";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="UserInputScreen" component={UserInputScreen} />
      <Stack.Screen name="StartQuizScreen" component={StartQuizScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
