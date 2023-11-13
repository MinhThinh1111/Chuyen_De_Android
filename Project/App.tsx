import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreens";
import { Text } from "react-native";
import TabNavigator from "./screens/navigation/TabNavigator";
import AddressToScreens from "./screens/AddressToScreen";
import DateScreens from "./screens/DateScreens";
import TripListScreens from "./screens/TripListScreens";
import ChooseSeatScreen from "./screens/ChooseSeatScreen";
import BookTicket from "./screens/BookTicket";
import MyNote from "./ConText/MyNote";
import LoginPhoneScreen from "./screens/LoginPhoneScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Ticketinformation from "./screens/Ticketinformation";



// Tạo một Stack Navigator sử dụng createNativeStackNavigator từ thư viện @react-navigation/native-stack
const Stack = createNativeStackNavigator();

// Định nghĩa component chính của ứng dụng
const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* Sử dụng MyNote, một Context Provider được cung cấp từ file ./ConText/MyNote */}
        <MyNote>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginPhone" component={LoginPhoneScreen}></Stack.Screen>
            <Stack.Screen name="LoginName" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="App" component={TabNavigator}></Stack.Screen>
            <Stack.Screen name="AddresTo" component={AddressToScreens}></Stack.Screen>
            <Stack.Screen name="Date" component={DateScreens}></Stack.Screen>
            <Stack.Screen name="TripList" component={TripListScreens}></Stack.Screen>
            <Stack.Screen name="ChooseSeat" component={ChooseSeatScreen}></Stack.Screen>
            <Stack.Screen name="BookTicket" component={BookTicket}></Stack.Screen>
            <Stack.Screen name="TicketInform" component={Ticketinformation}></Stack.Screen>
          </Stack.Navigator>
        </MyNote>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
})

export default App;