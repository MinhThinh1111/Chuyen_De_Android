import React, { useState } from "react";
import { Alert, Button, Image, ImageBackground, Modal, Platform, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const VeMayBay = ({navigation}:any)=>{
    const images = [
        require('../assets/Images/giamgia/slider1.jpg'),
        require('../assets/Images/giamgia/slider2.jpg'),
        require('../assets/Images/giamgia/slider3.jpg'),
        require('../assets/Images/giamgia/slider4.jpg'),
    ]
    const FindPlaneScreen = () => {
        navigation.navigate('FindPlaneScreen');
     }
    
    return (
        <ScrollView>
            <ImageBackground source={require('../assets/Images/giamgia/Bg.jpg')} style={{ height: 200, marginBottom: 100 }} >
                <View>
                    <Text style={styles.title}>Đặt Chuyến Bay</Text>
                    <Text style={{ marginLeft: 15, color: '#FFF' }}>Ưu đãi tốt nhất để có chuyến đi tiết kiệm chi phí!</Text>
                </View>
                <View style={styles.box}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.title1}>Cập nhật tất cả khuyến mãi hiện hành:</Text>
                        <SliderBox
                            images={images}
                            style={styles.sliderBox}
                            firstItem={4}
                            circleLoop={true}
                            autoplay={true}
                        />
                    </View>
                </View>
            </ImageBackground>
            <View>
                <Text style={styles.title}>Tìm vé máy bay theo nhu cầu:</Text>
                <Text style={{ marginLeft: 15 }}>Điền yêu cầu tại đây: </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imformation}>
                    <Text style={styles.locate}>Địa điểm </Text>
                    <Text style={styles.inputLoc}> Điểm đi: (vd: Hà Nội)* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputHint}
                            placeholder="Vui lòng nhập điểm đi!"
                        />
                    </View>
                    <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 13 }}> Điểm đến: (vd: TP. Hồ Chí Minh)* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputHint}
                            placeholder="Vui lòng nhập điểm đến!"
                        />
                    </View>
                    <Text style={styles.inputLoc}>Thời gian: </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.inputLoc}>Ngày* </Text>
                        <View style={styles.inputDateTime}>
                            <TextInput
                                style={styles.inputHint}
                            />
                        </View>
                        <Text style={styles.inputLoc}>Giờ* </Text>
                        <View style={styles.inputDateTime}>
                            <TextInput
                                style={styles.inputHint}
                            />
                        </View>
                    </View>
                    <Text style={styles.inputLoc}>Giá* </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputHint}
                            placeholder="Vui lòng nhập giá chuyến bay!"
                        />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnFind} onPress={() => FindPlaneScreen()}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.note}>Lưu Ý !</Text>
                <Text style={styles.note1}>- Yêu cầu quý khách điền đúng thông tin </Text>
                <Text style={styles.note1}>- Việc điền sai thông tin sẽ ảnh hưởng đến vé đặt của khách hàng</Text>
                <Text style={styles.note1}>- Nếu đã đúng thông tin, Quý khách có thể nhấn "Tiếp tục" </Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    box: {
        height: 230,
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
    sliderBox: {
        height: 150,
        marginLeft: 30,
        marginTop: 15,
    },
    imformation: {
        height: 360,
        width: 360,
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
        height: 33,
        width: 330,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderBlockColor: '#42CDF9',
        borderWidth: 2,
        borderRadius: 10
    },
    inputDateTime: {
        height: 33,
        width: 100,
        marginTop: 5,
        marginLeft: 15,
        marginBottom: 5,
        backgroundColor: '#FFF',
        borderBlockColor: '#42CDF9',
        borderWidth: 2,
        borderRadius: 10
    },
    btn: {
        backgroundColor: '#42CDF9',
        marginLeft: 200,
        borderRadius: 4,
        borderColor: "#222",
        width: 120,
        height: 40,
        alignItems: 'center',
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
    locate: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#42CDF9'
    },
    inputLoc: {
        marginLeft: 15,
        marginTop: 5,
        fontSize: 13
    },
    inputHint: {
        height: 35,
        fontSize: 12,
        marginLeft: 10
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
    btnFind: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'white'
    },
})
export default VeMayBay;