import React, { useState } from "react";
import { Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const FindPlaneScreen = ({navigation}: {navigation: any}) => {
    const [text, setText] = useState('');
    const DetailFlightScreen = () => {
        navigation.navigate('DetailFlightScreen');
    }
    return (
        <ScrollView>
            <ImageBackground source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={{ height: 80, marginBottom: 50 }}>
                <View style={styles.select}>
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>➔</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('VeMayBay')}>
                        <Text style={styles.btnFind}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <ScrollView style={{flexDirection: 'row'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.locate}>✈ Kết quả tìm kiếm</Text>
                </View>
                <TouchableOpacity style={styles.flight} onPress={() => navigation.navigate('DetailFlightScreen')}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flight} onPress={() => navigation.navigate('DetailFlightScreen')}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flight} onPress={() => navigation.navigate('DetailFlightScreen')}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flight} onPress={() => navigation.navigate('DetailFlightScreen')}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flight} onPress={() => navigation.navigate('DetailFlightScreen')}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={styles.locate}>Từ:</Text>
                        <Text style={styles.loc}>Hà Nội</Text>
                        <Text style={styles.date}>Ngày: 6/10</Text>
                        <Text style={styles.time}>Giờ: 12:00</Text>
                    </View>
                    <View>
                        <Text style={styles.locate}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.locate}>Đến:</Text>
                        <Text style={styles.loc}>Singapore</Text>
                        <Text style={styles.price}>Giá: 2.750.000 VND</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    select: {
        flexDirection: 'row',
        height: 120,
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
    },
    flight: {
        flexDirection: 'row',
        height: 110,
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
    },
    avt: {
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10
    },
    locate: {
        marginLeft: 15, 
        marginTop: 5, 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#42CDF9' 
    },
    loc: {
        marginLeft: 15, 
        marginTop: 7, 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    price: {
        marginLeft: -15, 
        marginTop: 7, 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    date: {
        marginLeft: 15, 
        marginTop: 7, 
        fontSize: 11, 
        fontWeight: 'bold'
    },
    time: {
        marginLeft: 15, 
        fontSize: 11, 
        fontWeight: 'bold'
    },
    btn: {

        backgroundColor: '#42CDF9',
        borderRadius: 4,
        borderColor: "#222",
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15,
        marginLeft: -15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    btnFind: {       
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
})
export default FindPlaneScreen;