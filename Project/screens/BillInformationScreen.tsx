import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

const BillInformationScreen = ({ route, navigation }: any) => {
    const Home = () => {
        navigation.navigate('Home');
    }
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Thông Tin Thanh Toán</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={styles.trip}>
                        <View style={{ flexDirection: 'row', borderRadius: 25, backgroundColor: '#819FF7', padding: 22 }}>
                            <View style={{width: '30%'}}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Trường hợp: </Text>
                                <Text>Thanh toán trực tiếp</Text>
                            </View>
                            <View style={{ width: 1, height: '100%', backgroundColor: 'white' }}></View>
                            <View style={{ width: '69%', marginLeft: 10, alignItems: 'center' }}>
                                <Text>Vui lòng đến trước nhà xe <Text style={{ fontWeight: 'bold', color: 'red'}}>60 phút</Text> để thanh toán và nhận vé</Text>
                                <Text>Địa chỉ:<Text style={{ fontWeight: 'bold', color: 'red'}}>53 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức</Text></Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.trip}>
                        <View style={{ flexDirection: 'row', borderRadius: 25, backgroundColor: '#819FF7', padding: 22 }}>
                            <View style={{ width: '35%' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Trường hợp: </Text>
                                <Text>Thanh toán chuyển khoản</Text>
                            </View>
                            <View style={{ width: 1, height: '100%', backgroundColor: 'white' }}></View>
                            <View style={{ width: '64%', marginLeft: 10 }}>
                                <Text>Vui lòng chuyển khoản vào số TK</Text>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>6785987</Text>
                                <Text>Ngân Hàng Á Châu (ACB)</Text>
                                <Text>Tên Tài khoản</Text>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>Võ Minh Thịnh</Text>
                                <Text>Nội dung chuyển khoản:</Text>
                                <Text style={{ fontWeight: 'bold', color: 'red' }}>Tên_SDT_NgayDi</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Home()} style={{ width: '30%', height: 50, marginTop: 30, backgroundColor: '#819FF7', borderRadius: 12, alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: 'white', padding: 10, fontSize: 20, textAlign: 'center' }}>Thoát</Text>
                </TouchableOpacity>

            </View>

        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#642EFE',
        height: 100
    },
    txtHeader: {
        marginTop: 50,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        borderRadius: 20,
        backgroundColor: '#642EFE',
        marginTop: 10,
        elevation: 4,
        shadowColor: '#555555',
        alignItems: 'center'
    },

    trip: {

        elevation: 10,
        shadowColor: '#4d4d4d',
        marginTop: 30,
    },
    text: {
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 15,
        paddingHorizontal: 25,
        paddingVertical: 6,
        color: 'red',
        alignSelf: 'center',
    },

    textcheck: {
        borderRadius: 10,
        fontSize: 15,
        paddingHorizontal: 25,
        paddingVertical: 6,
        color: 'black',
        alignSelf: 'center',
    },

    text1: {
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 22,

    },
    text2: {
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 22,
        paddingVertical: 12,
        fontWeight: 'bold',
    }


})

export default BillInformationScreen;