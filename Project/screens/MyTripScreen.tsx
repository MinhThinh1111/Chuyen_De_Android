import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { useNotes } from '../ConText/MyNote';  // Import hook useNotes từ context
import axios from 'axios';  // Import thư viện axios để gửi các HTTP requests


const MyTripScreen = ({ route, navigation }: any) => {
    // Sử dụng hook useNotes từ context để lấy thông tin ghi chú và các hàm liên quan
    const { IsNote, IsVeXe, SetVeXe, SetNote, getNote }: any = useNotes()
    const [VeXeHienTai, SetVeXeHienTai] = useState([])  // State lưu trữ thông tin vé xe hiện tại
    const [VeXeDaDi, setVeXeDaDi] = useState([])  // State lưu trữ thông tin vé xe đã đi
    const [VeXeDaHuy, setVeXeDaHuy] = useState([])  // State lưu trữ thông tin vé xe đã hủy
    const [check, setcheck] = useState(1)  // State để kiểm tra loại vé hiện tại (1: Hiện tại, 2: Đã đi, 3: Đã hủy)

    // Nếu không có tham số route, thực hiện gửi HTTP request để lấy thông tin vé xe hiện tại
    if (route.params == undefined) {
        axios.get('http://192.168.1.2:3000/vexe/khachhang/' + IsNote.id + '/1').then((response) => {
            SetVeXeHienTai(response.data)
        });
    }

    // Hàm chuyển trang và truyền dữ liệu vé xe tới component TicketInform
    const NextPage = (item: any, checkve: any) => {
        navigation.navigate('TicketInform', { data: item, checkve: checkve });
    }

    // Hàm xử lý khi người dùng chọn tab "Hiện tại", "Đã đi", hoặc "Đã hủy"
    const onPress = async (id: any) => {
        if (id == 2) {
            // Gửi HTTP request để lấy thông tin vé xe đã đi
            axios.get('http://192.168.1.2:3000/vexe/khachhang/' + IsNote.id + '/2').then((response) => {
                setVeXeDaDi(response.data)
            });
        } else {
            // Gửi HTTP request để lấy thông tin vé xe đã hủy
            axios.get('http://192.168.1.2:3000/vexe/khachhang/' + IsNote.id + '/3').then((response) => {
                setVeXeDaHuy(response.data)
            });
        }
        setcheck(id);
    }

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Lịch sử mua vé</Text>
            </View>
            <View style={{ backgroundColor: '#FF6600' }}>
                <View style={{ backgroundColor: 'white', height: '100%', borderRadius: 30, padding: 15 }}>
                    <View style={styles.status}>

                        {check == 1 ?
                            (<TouchableOpacity onPress={() => onPress(1)}>
                                <Text style={styles.text}>Hiện tại</Text>
                            </TouchableOpacity>
                            ) : (<TouchableOpacity onPress={() => onPress(1)}>
                                <Text style={styles.textcheck}>Hiện tại</Text>
                            </TouchableOpacity>
                            )
                        }

                        {check == 2 ?
                            (<TouchableOpacity onPress={() => onPress(2)}>
                                <Text style={styles.text}>Đã đi</Text>
                            </TouchableOpacity>
                            ) : (<TouchableOpacity onPress={() => onPress(2)}>
                                <Text style={styles.textcheck}>Đã đi</Text>
                            </TouchableOpacity>
                            )
                        }

                        {check == 3 ?
                            (<TouchableOpacity onPress={() => onPress(3)}>
                                <Text style={styles.text}>Đã hủy</Text>
                            </TouchableOpacity>
                            ) : (<TouchableOpacity onPress={() => onPress(3)}>
                                <Text style={styles.textcheck}>Đã hủy</Text>
                            </TouchableOpacity>
                            )
                        }
                    </View>
                    {check == 1 &&
                        <FlatList data={VeXeHienTai}
                            renderItem={({ item }: any) =>
                                <TouchableOpacity onPress={() => NextPage(item,1)}>
                                    <View style={styles.trip}>
                                        <View style={{ flexDirection: 'row', borderRadius: 25, backgroundColor: '#819FF7', padding: 22 }}>
                                            <View style={{ width: '35%' }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Khởi hành</Text>
                                                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{item.GioDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Ngày</Text>
                                                <Text style={{ color: 'black', fontSize: 18, paddingBottom: 8 }}>{item.NgayDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Trạng thái</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>{(item.thanhtoan == 1)? 'Chưa thanh toán tiền vé': 'Đã thanh toán tiền vé'}</Text>
                                            </View>
                                            <View style={{ width: 1, height: '100%', backgroundColor: 'white' }}></View>
                                            <View style={{ width: '64%', marginLeft: 10 }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Biển số xe</Text>
                                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{item.BienSo}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 18 }}>Ghế</Text>
                                                <Text style={{ color: 'black', fontSize: 19, paddingBottom: 8 }}>{item.ChoNgoi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Lộ Trình</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>{item.Ten}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }

                    {check == 2 &&
                        <FlatList data={VeXeDaDi}
                            renderItem={({ item }: any) =>
                                <TouchableOpacity onPress={() => NextPage(item,2)}>
                                    <View style={styles.trip}>
                                        <View style={{ flexDirection: 'row', borderRadius: 25, backgroundColor: '#819FF7', padding: 22 }}>
                                            <View style={{ width: '35%' }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Khởi hành</Text>
                                                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{item.GioDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Ngày</Text>
                                                <Text style={{ color: 'black', fontSize: 18, paddingBottom: 8 }}>{item.NgayDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Trạng thái</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>Đã hoàn thành</Text>
                                            </View>
                                            <View style={{ width: 1, height: '100%', backgroundColor: 'white' }}></View>
                                            <View style={{ width: '64%', marginLeft: 10 }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Biển số xe</Text>
                                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{item.BienSo}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 18 }}>Ghế</Text>
                                                <Text style={{ color: 'black', fontSize: 19, paddingBottom: 8 }}>{item.ChoNgoi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Lộ Trinh</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>{item.Ten}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }

                    {check == 3 &&
                        <FlatList data={VeXeDaHuy}
                            renderItem={({ item }: any) =>
                                <TouchableOpacity onPress={() => NextPage(item,2)}>
                                    <View style={styles.trip}>
                                        <View style={{ flexDirection: 'row', borderRadius: 25, backgroundColor: '#819FF7', padding: 22 }}>
                                            <View style={{ width: '35%' }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Khởi hành</Text>
                                                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{item.GioDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Ngày</Text>
                                                <Text style={{ color: 'black', fontSize: 18, paddingBottom: 8 }}>{item.NgayDi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Trạng thái</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>Đã hủy vé</Text>
                                            </View>
                                            <View style={{ width: 1, height: '100%', backgroundColor: 'white' }}></View>
                                            <View style={{ width: '64%', marginLeft: 10 }}>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Biển số xe</Text>
                                                <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{item.BienSo}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 18 }}>Ghế</Text>
                                                <Text style={{ color: 'black', fontSize: 19, paddingBottom: 8 }}>{item.ChoNgoi}</Text>
                                                <Text style={{ color: '#3b3938', fontSize: 17 }}>Lộ Trinh</Text>
                                                <Text style={{ color: 'black', fontSize: 18 }}>{item.Ten}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }


                    <View style={{ marginTop: 100 }}></View>


                </View>
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

export default MyTripScreen;