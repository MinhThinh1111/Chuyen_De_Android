import React, { useState } from "react";
import { Alert, Button, Image, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

const InformationScreen = ({navigation}: {navigation: any}) => {
    const [text, setText] = useState('');
    const ConfirmInformationScreen = () => {
        navigation.navigate('ConfirmInformationScreen');
    }
    return (
        <View>
            <View>
                <Text style={styles.title}>Đặt chỗ của tôi</Text>
                <Text style={{ marginLeft: 15 }}>Điền thông tin và xem lại đặt chỗ.</Text>
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
                <Text style={styles.title1}>Thông tin liên hệ</Text>
                <Text style={{ marginLeft: 15 }}>Điền thông tin tại đây: </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imformation}>
                    <Text style={{ marginLeft: 15, marginTop: 5 }}>Thông tin liên hệ (nhận vé/phiếu thanh toán) </Text>
                    <Text style={styles.locate}>Họ và Tên (vd: Nguyen Gia Han)* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 30, fontSize: 10, marginLeft: 10 }}
                            placeholder="Vui lòng nhập họ và tên!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    <Text style={styles.locate}>Điện thoại di động* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 30, fontSize: 10, marginLeft: 10 }}
                            placeholder="Vui lòng nhập số Điện thoại di động!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    <Text style={styles.locate}>Email* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 30, fontSize: 10, marginLeft: 10 }}
                            placeholder="Vui lòng nhập Email!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    <Text style={styles.locate}>Ngày sinh* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 30, fontSize: 10, marginLeft: 10 }}
                            placeholder="Vui lòng nhập ngày sinh!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    <Text style={styles.locate}>Quốc tịch* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 30, fontSize: 10, marginLeft: 10 }}
                            placeholder="Vui lòng nhập Quốc tịch"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailLoc}>Từ:</Text>
                        <Text style={styles.location}>HCM</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.detailLoc}>Den:</Text>
                        <Text style={styles.location}>Singapore</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.location}>Hãng bay:</Text>
                        <Image source={require('../assets/Images/logo/vietjet.jpg')} style={{ marginLeft: 50, marginTop: 5, height: 15, width: 35}} />
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
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ConfirmInformationScreen')}>
                <Text style={{ marginLeft: 12, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Tiếp tục</Text>
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
        height: 350,
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
        marginLeft: 150,
        borderRadius: 4,
        borderColor: "#222",
        width: 100,
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
    locate: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 10
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
export default InformationScreen;