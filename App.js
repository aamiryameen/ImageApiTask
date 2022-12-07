import React from "react";
import { LogBox, } from "react-native";
import RootStack from "./src/navigation/RootStack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreLogs(["VirtualizedLists", "componentWillReceiveProps"]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  )
}
