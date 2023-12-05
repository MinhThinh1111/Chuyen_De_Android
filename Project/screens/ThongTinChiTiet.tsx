import React from "react";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get("window");
const height = width * 0.6;
const images = [
    'https://img1.oto.com.vn/2017/11/28/Zj2L3PM0/danh-gia-xe-kia-morn-cf10.jpg',
    'https://media.vietq.vn/files/ctvgiang/2018/05/15/kiamorning.jpg',
    'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4419056_KIA_Morning_S_2018_Xe_Tinhte_018.jpg'
]

const Thongtinchitiet = ({ navigation }: any) => {
    const Quidinhthuexe = () => {
        navigation.navigate('Quidinhthuexe');
    }
    return (
        <>
            <View style={{ padding: 10, backgroundColor: 'cyan', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Danhsachxe') }} >
                    <Icon name="chevron-left" size={20} color="#000" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thông tin chi tiết</Text>
                <Text>  <Icon name="bars" size={20} color="#000" /></Text>
            </View>
            <View style={{ width,height }}>
                <ScrollView 
                pagingEnabled
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={{width, height}}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={{ width, height, resizeMode: 'cover' }} />
                        ))
                    }
                </ScrollView>
                <View style={{flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'}}>
                    <Text style={{color:'#fff', margin:3}}>⚪⚪⚪</Text>
                </View>
            </View>

            <View style={{ marginTop: 10, marginLeft: 15 }}><Text style={{ fontSize: 18 }}>Kia Morning</Text>
                <Text><Icon name="wheelchair" size={18} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                <Text><Icon name="cog" size={18} color="#000" /> Tự động</Text>
                <Text style={{ marginTop: 50, fontSize: 20 }}>Tính năng</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                    <Text style={{ fontSize: 13, backgroundColor: 'cyan', borderRadius: 10, paddingHorizontal: 10, marginRight: 5 }}>Máy lạnh</Text>
                    <Text style={{ fontSize: 13, backgroundColor: 'cyan', borderRadius: 10, paddingHorizontal: 10, marginRight: 5 }}>Bluetooth</Text>
                    <Text style={{ fontSize: 13, backgroundColor: 'cyan', borderRadius: 10, paddingHorizontal: 10, marginRight: 5 }}>Cổng sạc USB</Text>
                    <Text style={{ fontSize: 13, backgroundColor: 'cyan', borderRadius: 10, paddingHorizontal: 10, marginRight: 5 }}>Cổng tai nghe</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#dadada', height: 60, marginTop: 20, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../assets/Images/logo.jpg')} style={{ width: 40, height: 50, marginTop: 5, marginLeft: 20 }}></Image>
                    </View>
                    <View style={{ flex: 2, marginRight: 120, marginTop: 9 }}><Text>{`Cung cấp bởi\n Moto Ho Chi Minh`}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ color: 'blue', marginTop: 9, marginRight: 20 }}>{`★ 9.3 \n5 đánh giá`}</Text>
                </View>
            </View>
            <Text style={{ marginTop: 30, fontSize: 15 }}>{`Những điều hành khách thích\n ♦ Ghế ngồi thoải mái (2)\n ♦ Quy trình đón và trả khách đơn giản (2)\n ♦ Xe sạch sẽ (2)`}</Text>
            <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#dadada', marginHorizontal: 50, borderRadius: 10, height: 30, marginTop: 10 }}><Text style={{ color: 'blue', marginTop: 4 }}>Xem đánh giá</Text></TouchableOpacity>
            <View style={{ height: 1.2, backgroundColor: '#000', marginTop: 20 }}>
            </View>
            <Text style={{ marginTop: 8 }}>Chính sách thuê xe</Text>
            <Text>{` ♦ Sử dụng tới 24 giờ mỗi ngày thuê\n ♦ Trả xe với cùng mức nhiên liệu khi nhận xe`}</Text>

            <TouchableOpacity onPress={() => { navigation.navigate('Quidinhthuexe') }}
                style={{ alignItems: 'center', backgroundColor: '#dadada', marginHorizontal: 50, borderRadius: 10, height: 30, marginTop: 10 }}><Text style={{ color: 'blue', marginTop: 4 }}>Tìm hiểu thêm</Text></TouchableOpacity>
            <View style={{ height: 1.2, backgroundColor: '#000', marginTop: 20 }}>
            </View>


        </>
    )
}
export default Thongtinchitiet;