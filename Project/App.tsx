import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { Text } from "react-native";
import TabNavigator from "./screens/navigation/TabNavigator";

import MyNote from "./ConText/MyNote";
import LoginPhoneScreen from "./screens/LoginPhoneScreen";
import LoginNameScreen from "./screens/LoginNameScreen";
import AddressToScreens from "./screens/AddressToScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyNote>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginPhone" component={LoginPhoneScreen}></Stack.Screen>
            <Stack.Screen name="LoginName" component={LoginNameScreen}></Stack.Screen>
            <Stack.Screen name="App" component={TabNavigator}></Stack.Screen>
            <Stack.Screen name="AddresTo" component={AddressToScreens}></Stack.Screen>
          </Stack.Navigator>
        </MyNote>
      </NavigationContainer>
    </>
  )
}
const styles = StyleSheet.create({
})

export default App;