import React, { useState } from "react";
import { Alert, Button, Image, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ConfirmInformationScreen = ({ navigation }: { navigation: any }) => {
    const Home = () => {
        navigation.navigate('Home');
    };
    const [text, setText] = useState('');
    return (
        <View>
            <View>
                <Text style={styles.title}>Đặt chỗ của tôi</Text>
                <Text style={{ marginLeft: 15 }}>Xem lại thông tin và thanh toán.</Text>
            </View>
            <View style={styles.box}>
                <Image source={require('../assets/Images/box.png')} style={{ height: 60, width: 60, margin: 20 }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.title1}>Đóng gói hàng hóa nhanh với </Text>
                    <Text style={styles.title2}>Yêu cầu xác nhận thông tin khách hàng</Text>
                    <Text style={styles.title2}>Để nhận được nhiều ưu đãu từ MMMMMM</Text>
                </View>
            </View>
            <View>
                <Text style={styles.title}>Thông tin liên hệ</Text>
                <Text style={{ marginLeft: 15 }}>Xem thông tin tại đây: </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imformation}>
                    <Text style={{ marginLeft: 15, marginTop: 5 }}>Thông tin liên hệ (nhận vé/phiếu thanh toán) </Text>
                    <Text style={styles.detailUser}>Họ và Tên (vd: Nguyen Gia Han)* </Text>
                    <Text style={styles.detailUser1}>Hoang Nhat Tran Nguyen</Text>
                    <Text style={styles.detailUser}>Điện thoại di động* </Text>
                    <Text style={styles.detailUser1}>0987654321</Text>
                    <Text style={styles.detailUser}>Email* </Text>
                    <Text style={styles.detailUser1}>Nguyen123@gmail.com</Text>
                    <Text style={styles.detailUser}>Ngày sinh* </Text>
                    <Text style={styles.detailUser1}>11/11/1990</Text>
                    <Text style={styles.detailUser}>Quốc tịch* </Text>
                    <Text style={styles.detailUser1}>Việt Nam</Text>
                </View>
                <View style={styles.detail}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailLoc}>Từ:</Text>
                        <Text style={styles.location}>HCM</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailLoc}>Đến:</Text>
                        <Text style={styles.location}>Singapore</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.location}>Hãng bay:</Text>
                        <Image source={require('../assets/Images/logo/vietjet.jpg')} style={{ marginLeft: 50, marginTop: 5, height: 15, width: 35 }} />
                    </View>
                    <Text style={styles.date}>Ngày: 6/10</Text>
                    <Text style={styles.time}>Giờ: 12:00</Text>
                    <Text style={styles.date}>Giá: 2.750.000 VND</Text>
                </View>
            </View>
            <View>
                <Text style={styles.note}>Lưu Ý !</Text>
                <Text style={styles.note1}>- Yêu cầu quý khách điền đúng thông tin </Text>
                <Text style={styles.note1}>- Việc điền sai thông tin sẽ ảnh hưởng đến vé đặt của khách hàng</Text>
                <Text style={styles.note1}>- Nếu đã đúng thông tin, Quý khách có thể nhấn "Tiếp tục" </Text>
            </View>
            <TouchableOpacity style={styles.exitButton}>
                <Text style={styles.exitButtonText}>Thanh Toán</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Home} style={styles.exitButton}>
                <Text style={styles.exitButtonText}>Thoát</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 365,
        margin: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection: 'row'
    },

    detail: {
        height: 150,
        width: 125,
        marginTop: 10,
        marginLeft: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    imformation: {
        height: 280,
        width: 230,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    exitButton: {
        height: 50,
        backgroundColor: '#819FF7',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        alignSelf: 'center',
        marginTop: 20,
    },
    exitButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    input: {
        height: 30,
        width: 200,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderRadius: 10
    },
    btn: {
        backgroundColor: '#42CDF9',
        marginLeft: 140,
        borderRadius: 4,
        borderColor: "#222",
        width: 130,
        height: 50,
        fontSize: 18,
        justifyContent: "center",
        marginTop: 14,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        marginLeft: 15,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#42CDF9'
    },
    title1: {
        marginLeft: 15,
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#42CDF9'
    },
    title2: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 10,
        fontWeight: 'bold'
    },
    detailUser: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 10
    },
    detailUser1: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    detailLoc: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 10,
        fontWeight: 'bold',
        color: '#42CDF9'
    },
    location: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 10,
        fontWeight: 'bold'
    },
    date: {
        marginLeft: 15,
        marginTop: 7,
        fontSize: 10,
        fontWeight: 'bold'
    },
    time: {
        marginLeft: 15,
        fontSize: 11,
        fontWeight: 'bold'
    },
    note: {
        marginLeft: 30,
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    note1: {
        marginLeft: 30,
        marginTop: 5,
        fontSize: 10,
    },
})
export default ConfirmInformationScreen;