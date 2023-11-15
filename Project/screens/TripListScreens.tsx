import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';
import Waiting from "./Waiting";

// Component TripListScreens nhận các tham số thông qua route
const TripListScreens = ({ route }: any) => {
    const navigation = useNavigation()

    // Lấy thông tin từ route.params
    const { NgayDi, idLoTrinh, toAdderss, fromAdderss } = route.params;

    // State chứa danh sách chuyến đi
    const [chuyenDi, setchuyenDi] = useState([]);

    // Ngày mặc định để test
    let i = '2023-11-3';

    // Hàm gọi API để lấy danh sách chuyến đi theo idLoTrinh và NgayDi
    const getChuyenDiByIdLoTrinhNgayDi = async () => {
        try {
            const res = await fetch('http://192.168.1.103:3000/chuyendi/search/' + idLoTrinh + '/' + NgayDi);
            const data = await res.json();
            setchuyenDi(data);
        } catch (err) {
            console.log(err);
        }
    }

    // Hàm chuyển hướng sang màn hình chọn ghế khi người dùng nhấn vào một chuyến đi
    const nextPage = (id: any, idxe: any, giaTien: any) => {
        navigation.navigate('ChooseSeat', { Id_ChuyenDi: id, Id_Xe: idxe, giaTien: giaTien })
    }

    // Sử dụng useEffect để gọi hàm lấy danh sách chuyến đi khi component được render
    useEffect(() => {
        getChuyenDiByIdLoTrinhNgayDi();
    }, [])
    
    return (
        <>
            <View style={styles.header}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
                <Image style={{ width: '100%', height: 200 }} source={require('../assets/Images/banner1.jpg')}></Image>
                
                <View style={styles.headerName}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: -10 }} ><Icon style={{ backgroundColor: 'white', padding: 12, borderRadius: 10 }} name="arrow-back" size={20} color="red" /></TouchableOpacity>
                    
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight:'bold'}}>{toAdderss}</Text>
                    <Icon name="arrow-forward" size={26} color="#fff" />
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight:'bold' }}>{fromAdderss}</Text>
                </View>
            </View>
            <View style={styles.date}>
                {/* <TouchableOpacity>
                    <IconFontisto name="date" size={20} color='white'></IconFontisto>
                </TouchableOpacity> */}
                <View>
                    <Text style={{ color: '#fff', fontSize: 20, textAlign:'center', fontWeight:'bold' }}>Danh sách chuyến xe</Text>
                    <Text style={{ color: '#fff', fontSize: 20, textAlign:'center', fontWeight:'bold' }}> {NgayDi}</Text>
                </View>
                {/* <IconFontisto name="nav-icon-list-a" size={20} color='white'></IconFontisto> */}
            </View>

            <View style={{ backgroundColor: '#DDDDDD', flex: 1, height: '100%'}}>
                {/* Khi chuyến xe k có*/}
                {chuyenDi.length == 0 && <View>
                    <Text style={{ marginTop: 90, alignSelf: 'center', fontSize: 24, color: 'black', fontWeight: 'bold' }}>Không tìm thấy chuyến xe </Text>
                    <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', }}>các chuyến xe trong ngày tạm hết vé.</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', }}>quý khách vui lòng thử lại sau hoặc chọn </Text>
                    <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', }}>ngày khởi hành khác</Text>
                    <Waiting></Waiting>
                </View>}

                <View style={{ marginBottom: 12 }}></View>
                {/* Hiện các chuyến đi */}
                <FlatList data={chuyenDi}
                    renderItem={({ item }: any) =>
                        <TouchableOpacity onPress={() => nextPage(item.Id,item.Id_Xe,item.Gia_Tien)}>
                            <View style={{ padding: 10, backgroundColor: '#819FF7', width: '96%', alignSelf: 'center', marginTop: 12, borderRadius: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 15, color: 'black', width: '65%' }}>Giường nằm {item.SoGheTrong} chỗ</Text>
                                    <Text style={{color:'black'}}>Còn {item.SoGheTrong} Chố trống</Text>
                                </View>
                                <View style={{ height: 1, backgroundColor: '#C0C0C0' }}></View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', width: '20%'}}>{item.GioDi}</Text>
                                    <IconFontisto style={{}} name="record" size={10} color='black'></IconFontisto>
                                    <View style={{ height: 2, width: '21%', backgroundColor: 'black' }}></View>
                                    <Text style={{fontSize: 20, color:'black'}}> {item.TongThoiGian}H </Text>
                                    <View style={{ height: 2, width: '21%', backgroundColor: 'black' }}></View>
                                    <IconFontisto style={{}} name="record" size={10} color='black'></IconFontisto>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', width: '22%', paddingLeft: 5 }}>{item.GioDen}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 15, color: 'black', width: '50%' }}>{item.Diem_Bat_Dau}</Text>
                                    <Text style={{ fontSize: 15, color: 'black', width: '50%',marginLeft:80 }}>{item.Diem_Ket_Thuc}</Text>
                                </View>
                                <View style={{ height: 1, backgroundColor: '#C0C0C0' }}></View>
                                <Text style={{ fontSize: 19, color: 'black', paddingTop: 12, paddingLeft: 220, fontWeight: 'bold' }}>Giá: {item.Gia_Tien} VND</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
            <View style={{ marginBottom: 12 }}>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: 'black',
        height: 170
    },
    headerName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        top: -120

    },
    date: {
        
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#819FF7',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        height: '10%'
    }
})

export default TripListScreens;