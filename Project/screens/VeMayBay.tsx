import React from "react";
import { Text, View } from "react-native";
const VeMayBay = ({navigation}:any)=>{
    const GetDateHome =(Date: any) =>{         
        navigation.navigate('Home',{datetime: Date})
    }
    return(
        <>
        <View>
            <Text>Thue Xe</Text>
        </View>
        </>
    )
}
export default VeMayBay;