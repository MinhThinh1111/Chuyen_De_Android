import React from "react";
import { Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

const DetailFlightScreen = ({navigation}: {navigation: any}) => {
    const InformationScreen = () => {
        navigation.navigate('InformationScreen');
    }
    return (
        <ScrollView>
            <ImageBackground source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={{ height: 400 }} />
            <View style={styles.select}>

            </View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 40, fontWeight: 'bold', color: '#42CDF9' }}>Tên:</Text>
                    <Text style={{ marginLeft: 15, marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Hà Nội - Singapore</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>Từ:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Hà Nội</Text>
                        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>➔</Text>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>Đến:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Singapore</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 15, fontWeight: 'bold' }}>Hãng bay:</Text>
                        <Image source={require('../assets/Images/logo/vietjet.jpg')} style={styles.logo}></Image>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Thời gian:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 15, fontWeight: 'bold' }}>Thời gian: 6/10</Text>
                        <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Giờ bay: 12:00</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ marginTop: 7, fontSize: 30, fontWeight: 'bold' }}>Giá: 2.750.000 VND</Text>
                    </View>
                    <View style={{ marginLeft: 50, marginRight: 50, marginTop: 17 }}>
                        <Button
                            title="Đặt chuyến bay"
                            onPress={() => navigation.navigate('InformationScreen')}
                        />
                    </View>
                </View>
            </View>

            <ScrollView style={{flexDirection: 'row'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 15, marginTop: 10, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>✈ Đề xuất chuyến bay</Text>
                </View>
                <View style={styles.flight}>
                    <Image source={require('../assets/Images/giamgia/hn_singapo.jpg')} style={styles.avt} />
                    <View>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>Từ:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Hà Nội</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 11, fontWeight: 'bold' }}>Ngày: 6/10</Text>
                        <Text style={{ marginLeft: 15, fontSize: 11, fontWeight: 'bold' }}>Gio: 12:00</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: '#42CDF9' }}>⇋</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Ngày:</Text>
                        <Text style={{ marginLeft: 15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Singapore</Text>
                        <Text style={{ marginLeft: -15, marginTop: 7, fontSize: 18, fontWeight: 'bold' }}>Giá: 2.750.000 VND</Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    select: {
        marginTop: -25,
        flexDirection: 'row',
        height: 50,
        width: 300,
        marginLeft: 50,
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
    logo: {
        marginLeft: 120,
        width: 160,
        height: 70,
        borderRadius: 10,
        margin: 10
    },
    avt: {
        width: 70,
        height: 70,
        borderRadius: 10,
        margin: 10
    }
})
export default DetailFlightScreen;