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
import BillInformationScreen from "./screens/BillInformationScreen";
import VeMayBay from "./screens/VeMayBay";
import FindPlaneScreen from "./screens/FindPlaneScreen";
import DetailFlightScreen from "./screens/DetailFlightScreen";
import InformationScreen from "./screens/InformationScreen";
import ConfirmInformationScreen from "./screens/ConfirmInformationScreen";
import ThueXe from "./screens/ThueXe";
import Danhsachxe from "./screens/Danhsachxe";
import Thongtinchitiet from "./screens/ThongTinChiTiet";
import Quidinhthuexe from "./screens/Quidinhthuexe";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";
import VeXeKhachScreen from "./screens/VeXeKhach";
import HuongDanScreen from "./screens/HuongDan";



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
            {/* Thinh */}
            <Stack.Screen name="LoginPhone" component={LoginPhoneScreen}></Stack.Screen>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="App" component={TabNavigator}></Stack.Screen>
            <Stack.Screen name="VeXeKhachScreen" component={VeXeKhachScreen}></Stack.Screen>
            <Stack.Screen name="AddresTo" component={AddressToScreens}></Stack.Screen>
            <Stack.Screen name="Date" component={DateScreens}></Stack.Screen>
            <Stack.Screen name="TripList" component={TripListScreens}></Stack.Screen>
            <Stack.Screen name="ChooseSeat" component={ChooseSeatScreen}></Stack.Screen>
            <Stack.Screen name="BookTicket" component={BookTicket}></Stack.Screen>
            <Stack.Screen name="TicketInform" component={Ticketinformation}></Stack.Screen>
            <Stack.Screen name="BillInformation" component={BillInformationScreen}></Stack.Screen>
            <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen}></Stack.Screen>
            <Stack.Screen name="HuongDan" component={HuongDanScreen}></Stack.Screen>

            {/* Trieu */}
            <Stack.Screen name="VeMayBay" component={VeMayBay}></Stack.Screen>
            <Stack.Screen name="FindPlaneScreen" component={FindPlaneScreen}></Stack.Screen>
            <Stack.Screen name="DetailFlightScreen" component={DetailFlightScreen}></Stack.Screen>
            <Stack.Screen name="InformationScreen" component={InformationScreen}></Stack.Screen>
            <Stack.Screen name="ConfirmInformationScreen" component={ConfirmInformationScreen}></Stack.Screen>

            {/* Thang*/}
            <Stack.Screen name="ThueXe" component={ThueXe}></Stack.Screen>
            <Stack.Screen name="Danhsachxe" component={Danhsachxe}></Stack.Screen>
            <Stack.Screen name="ThongTinChiTiet" component={Thongtinchitiet}></Stack.Screen>
            <Stack.Screen name="Quidinhthuexe" component={Quidinhthuexe}></Stack.Screen>
            
          </Stack.Navigator>
        </MyNote>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
})

export default App;