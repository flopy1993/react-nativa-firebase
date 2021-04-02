import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserCreate from "./screens/UserCreate";
import UserDetail from "./screens/UserDetail";
import UserList from "./screens/UserList";

//contiene toda la navegacion
const Stack = createStackNavigator();

function MyStack() {
  //cada pantalla tiene un Screen
  return (
    <Stack.Navigator>
      <Stack.Screeen name="UserDetail" component={UserDetail}></Stack.Screeen>
      <Stack.Screeen name="UserList" component={UserList}></Stack.Screeen>
      <Stack.Screeen name="UserCreate" component={UserCreate}></Stack.Screeen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usercreate" component={UserCreate}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
