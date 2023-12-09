import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-modern-datepicker';

const DateScreens = ({route,navigation}:any) => {
    const curentday = new Date().toJSON().slice(0, 10);
    const [selectedDate, setSelectedDate] = useState(curentday);//Lưu trữ ngày và giờ đã chọn từ DatePicker.

    if(route.params != undefined){
        const {datetime} = route.params;
        setSelectedDate(datetime);
        route.params = undefined
    }

    const GetDateHome =(Date: any) =>{         
        navigation.navigate('VeXeKhachScreen',{datetime: Date})
    }

    return (  
        <>
            <StatusBar translucent={true} backgroundColor="#819FF7" barStyle="dark-content"></StatusBar>
            <Text style={styles.datePicker}>
                Chọn thời gian khởi hành
            </Text>
            <View >
                
               <DatePicker
                    options={{
                        backgroundColor: '#fff',
                        textHeaderColor: 'black',
                        textDefaultColor: 'black',
                        selectedTextColor: '#fff',
                        mainColor: '#819FF7',
                        textSecondaryColor: 'black',
                        borderColor: 'rgba(122, 146, 165, 0.1)',
                    }}
                    current={selectedDate}
                    selected={selectedDate}
                    mode="calendar"
                    minuteInterval={30}
                    style={{ borderRadius: 10 }}
                    onDateChange={date => { setSelectedDate(date),GetDateHome(date)}}
                /> 
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    datePicker: {
        marginTop: 23,
        backgroundColor: "#819FF7",
        paddingHorizontal: 16,
        paddingVertical: 60,
        fontSize: 25,
        color: "white",
    },
    Icon:{
      padding:12,
      width:42,
      top:-20,
      left:40,
      zIndex:9000,
      backgroundColor:'#819FF7',
      borderRadius:10,
      position: 'absolute',
      elevation: 4,
      shadowColor: '#555555',
    }
})
export default DateScreens;