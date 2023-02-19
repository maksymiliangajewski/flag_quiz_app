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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserInputScreen"
        component={UserInputScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartQuizScreen"
        component={StartQuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
