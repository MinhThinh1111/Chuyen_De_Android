import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, TextInput, StyleSheet, Alert, FlatList } from "react-native";
import { StatusBar } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFeather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from "../ConText/MyNote";

import axios from "axios";

// Component chọn điểm đón và trả khi đặt vé
const BookTicket = ({ route, navigation }: any) => {
    const { IsNote, SetNote, getNote }: any = useNotes()
    const { data, Id_ChuyenDi, TongTien } = route.params;
    const [DiemDi, setDiemDi] = useState('')
    const [DiemTra, setDiemTra] = useState('')
    const [batDau, setBatDau] = useState([])
    const [batCuoi, setBatCuoi] = useState([])
    const [dontra, setDonTra] = useState(1)
    const [checkmodle, setcheckmodle] = useState(1)
    const [input, setInput] = useState('')


    // Hàm lấy danh sách điểm xuất phát và điểm đến từ API
    const getBookTicket = async () => {
        const data = await AsyncStorage.getItem('idHuyen');//khia báo biến data để lấy dữ liệu về id của huyện
        let id = data?.split(',');//Dấu ? sau data là toán tử tùy chọn (optional chaining), nghĩa là nó sẽ kiểm tra xem data có tồn tại hay không trước khi thực hiện phương thức split. Nếu data không tồn tại, nó sẽ trả về undefined, nếu không, nó sẽ tách data thành một mảng các id bằng dấu phẩy, và lưu vào biến id

        // Lấy danh sách điểm xuất phát từ API
        //Sử dụng cấu trúc try-catch để bắt và xử lý các lỗi có thể xảy ra khi gọi API
        try {
            const res = await fetch('http://192.168.1.11:3000/diemxe/huyen/' + id[0]);//hàm getBookTicket sẽ gọi hàm fetch với đường dẫn của API, kèm theo id của huyện đầu tiên (id[0]) để lấy dữ liệu về các điểm xe của huyện đó,Nếu hàm fetch thành công, kết quả sẽ được lưu vào biến res, nếu không, hàm này sẽ ném ra một lỗi và chuyển sang khối catch
            const data = await res.json();//chuyển đổi dữ liệu từ định dạng JSON sang đối tượng JavaScript, và lưu vào biến data
            setBatDau(data);//hàm setBatDau với tham số là biến data, để cập nhật trạng thái của component với dữ liệu về các điểm xe của huyện đầu tiên
        } catch (err) {
            console.log(err);
        }

        // Lấy danh sách điểm đến từ API
        //Sử dụng cấu trúc try-catch để bắt và xử lý các lỗi có thể xảy ra khi gọi API
        try {

            const res = await fetch('http://192.168.1.11:3000/diemxe/huyen/' + id[1]);
            const data = await res.json();//chuyển đổi dữ liệu từ định dạng JSON sang đối tượng JavaScript, và lưu vào biến data
            setBatCuoi(data);//hàm setBatDau với tham số là biến data, để cập nhật trạng thái của component với dữ liệu về các điểm xe của huyện thứ 2
        } catch (err) {
            console.log(err);
        }
    }

    // Hàm chọn điểm đón hoặc điểm trả
    const chonDiemdon = (name: any, trangthai: any) => {
        //Kiểm tra giá trị của tham số trangthai. 
        if (trangthai == 2) {//Nếu trangthai bằng 2, nghĩa là điểm đón đó đã hết chỗ
            setcheckmodle(2)//gọi hàm setcheckmodle với tham số là 2, để hiển thị một thông báo cho người dùng biết là điểm đón đó đã hết chỗ
        } else {//Nếu trangthai khác 2, nghĩa là điểm đón đó còn chỗ, thì kiểm tra giá trị của biến dontra
            if (dontra == 1) {//Nếu dontra bằng 1, nghĩa là người dùng muốn chọn điểm đón
                setDiemDi(name)//thì gọi hàm setDiemDi với tham số là name, để cập nhật trạng thái của component với tên của điểm đón
                setcheckmodle(1)//Sau đó, gọi hàm setcheckmodle với tham số là 1, để đóng danh sách các điểm đón và chuyển sang danh sách các điểm trả
            } else {//Ngược lại người dùng muốn chọn điểm trả
                setDiemTra(name)//thì gọi hàm setDiemTra với tham số là name, để cập nhật trạng thái của component với tên của điểm trả
                setcheckmodle(1)//Sau đó, gọi hàm setcheckmodle với tham số là 1, để đóng danh sách các điểm trả và chuyển sang trang đặt vé
            }
        }
    }

    // Hàm đặt vé xe
    const datvexe = async () => {
        try {

            // Kiểm tra trạng thái ghế trước khi đặt vé
            for (let index = 0; index < data.length; index++) {//Duyệt qua mảng data, là một mảng chứa thông tin về các ghế đã chọn bởi người dùng. Mỗi phần tử của mảng có một thuộc tính là Id, là mã số của ghế
                axios.get('http://192.168.1.11:3000/chongoi/check/' + Id_ChuyenDi + '/' + data[index].Id).then((response) => {//Gọi hàm axios.get với đường dẫn của API, kèm theo Id_ChuyenDi là id của chuyến đi, và data[index].Id là id của ghế. Hàm này trả về một Promise, nên đoạn code sử dụng phương thức then để xử lý kết quả khi Promise được giải quyết. Phương thức then nhận vào một hàm callback, có tham số là response, là đối tượng chứa dữ liệu trả về từ AP
                    if (response.data.Id != undefined) {//Trong hàm callback Nếu giá trị này khác undefined, nghĩa là ghế đó đã bị đặt bởi người khác, thì gọi hàm Alert.alert để hiển thị một thông báo cho người dùng biết là có lỗi hệ thống khi đặt vé
                        Alert.alert('Thông báo', 'Lỗi hệ thống khi đặt vé')
                        navigation.navigate('Home')
                    }
                })
            }

            // Cập nhật số ghế trống trong chuyến đi
            //Gọi hàm axios.get với đường dẫn của API, kèm theo Id_ChuyenDi là id của chuyến đi, để lấy dữ liệu về chuyến đi đó
            axios.get('http://192.168.1.11:3000/chuyendi/' + Id_ChuyenDi).then((response) => {
                let updatechuyendi = {//khai báo một biến có tên là updatechuyendi, là một đối tượng chứa hai thuộc tính:
                    Id: response.data.Id,//Id là id của chuyến đi
                    SoGheTrong: response.data.SoGheTrong - data.length//SoGheTrong là số ghế trống của chuyến đi sau khi trừ đi số lượng ghế đã đặt, được lấy từ response.data.SoGheTrong và data.length
                }
                //cập nhật số ghế trống của chuyến đi lên cơ sở dữ liệu
                axios.put('http://192.168.1.11:3000/chuyendi/updateSoGheTrong', updatechuyendi).then((response) => {
                })
            });

            // Tạo vé xe và cập nhật trạng thái ghế
            //khai báo một biến có tên là formVeXe, là một đối tượng chứa các thông tin về vé xe của một hành khách
            let formVeXe = {
                Id_ChuyenDi: Id_ChuyenDi,
                Id_HanhKhach: IsNote.id,
                DiemDon: DiemDi,
                DiemTra: DiemTra,
                TrangThai: 1,
                TongTien: TongTien,//được tính bằng số lượng ghế nhân với giá vé của mỗi ghế
                thanhtoan: 1

            }
            axios.post('http://192.168.1.11:3000/vexe/', formVeXe).then((response) => {
                //Duyệt qua mảng data, là một mảng chứa thông tin về các ghế đã chọn bởi người dùng. Mỗi phần tử của mảng có một thuộc tính là Id, là mã số của ghế.
                for (let index = 0; index < data.length; index++) {
                    //Khai báo một biến có tên là formChongoi, là một đối tượng chứa các thông tin về chỗ ngồi trên xe, bao gồm
                    let formChongoi = {
                        Id_VeXe: response.data.insertId,//Id_VeXe là id của vé xe, được lấy từ response.data.insertId
                        Id_GheXe: data[index].Id,//Id_GheXe là id của ghế, được lấy từ data[index].Id
                        TrangThai: 1,//TrangThai là trạng thái của chỗ ngồi, có giá trị là 1, nghĩa là chỗ ngồi đã được đặt
                        Id_ChuyenDi: Id_ChuyenDi,//Id_ChuyenDi là id của chuyến đi

                    }
                    //để tạo một chỗ ngồi mới trên cơ sở dữ liệu
                    axios.post('http://192.168.1.11:3000/chongoi/', formChongoi).then((response) => {
                    });
                }

                // Cập nhật số ghế trống sau khi đặt vé
                //Gọi hàm axios.get với đường dẫn của API, kèm theo Id_ChuyenDi là id của chuyến đi, để lấy dữ liệu về chuyến đi đó.
                axios.get('http://192.168.1.11:3000/chuyendi/' + Id_ChuyenDi).then((response) => {
                    let updatechuyendi = {//khai báo một biến có tên là updatechuyendi, là một đối tượng chứa hai thuộc tính
                        Id: response.data.Id,//Id là id của chuyến đi
                        SoGheTrong: response.data.SoGheTrong - data.length//SoGheTrong là số ghế trống của chuyến đi sau khi trừ đi số lượng ghế đã đặt, được lấy từ response.data.SoGheTrong và data.length. Biến data là một mảng chứa thông tin về các ghế đã đặt
                    }
                    //cập nhật số ghế trống của chuyến đi lên cơ sở dữ liệu
                    axios.put('http://192.168.1.11:3000/chuyendi/updateSoGheTrong', updatechuyendi).then((response) => {
                        Alert.alert('Thông báo', 'Đặt Vé Thành Công')//Trong hàm callback, gọi hàm Alert.alert để hiển thị một thông báo cho người dùng biết là đặt vé thành công
                        navigation.navigate('MyTric')
                    })
                });
            });

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBookTicket()

    }, [])
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={{ height: 38, backgroundColor: '#819FF7' }}></View>
            <View style={{ justifyContent: "space-between", flexDirection: 'row', padding: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}><IconIonicons name="chevron-back" size={28} color="black" /></TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Chọn điểm đón và trả</Text>
                <Text>      </Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#642EFE' }}></View>
            <View style={{ padding: 15 }}>
                <TouchableOpacity onPress={() => setDonTra(1)}>
                    <View style={{ width: '100%', height: 100, borderRadius: 12, borderWidth: 1, borderColor: 'red' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#642EFE', paddingTop: 15, paddingLeft: 10 }}>Điểm đón</Text>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 10 }}>{DiemDi}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDonTra(2)}>
                    <View style={{ width: '100%', height: 100, borderRadius: 12, borderWidth: 1, borderColor: 'red', marginTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#642EFE', paddingTop: 15, paddingLeft: 10 }}>Điểm trả</Text>
                        <Text style={{ fontSize: 16, color: 'black', paddingLeft: 10 }}>{DiemTra}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ padding: 15 }}>
                {dontra == 1 ?
                    <Text style={{ fontSize: 18, color: 'black' }}>Danh sách điểm đón</Text>
                    :
                    <Text style={{ fontSize: 18, color: 'black' }}>Danh sách điểm trả</Text>
                }
                {dontra == 1 &&
                    <FlatList data={batDau}
                        renderItem={({ item }: any) =>
                            <View>
                                <TouchableOpacity onPress={() => chonDiemdon(item.Name, item.TrangThai)} style={{ paddingVertical: 15, flexDirection: 'row' }}>
                                    <IconIonicons name="car" size={28} color="#265ff0" style={{ marginTop: 6 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 18, color: 'black', paddingBottom: 5 }}>{item.Name}</Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}>{item.ViTri}</Text>
                                        {item.TrangThai == 2 &&
                                            <Text>Vui lòng nhập địa chỉ trung chuyển</Text>
                                        }

                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}></View>
                            </View>
                        }
                    />
                }

                {dontra == 2 &&
                    <FlatList data={batCuoi}
                        renderItem={({ item }: any) =>
                            <View>
                                <TouchableOpacity onPress={() => chonDiemdon(item.Name, item.TrangThai)} style={{ paddingVertical: 15, flexDirection: 'row' }}>
                                    <IconIonicons name="car" size={28} color="#265ff0" style={{ marginTop: 6 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 18, color: 'black', paddingBottom: 5 }}>{item.Name}</Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}>{item.ViTri}</Text>
                                        {item.TrangThai == 2 &&
                                            <Text>Vui lòng nhập địa chỉ trung chuyển</Text>
                                        }
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}></View>
                            </View>
                        }
                    />
                }
            </View>

            {checkmodle == 2 &&
                <View style={{ width: '100%', height: '75%', backgroundColor: '#FFFFFF', position: 'absolute', top: 150, zIndex: 100000 }}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Nhập địa chỉ trung chuyển</Text>
                        <TextInput multiline={true} onChangeText={(value) => setInput(value)} style={[styles.btnPhone]} placeholder="Nhập địa điểm " />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setcheckmodle(1)} style={{ width: 150, height: 45, backgroundColor: 'white', borderColor: '#FF6600', borderWidth: 1, borderRadius: 2 }}><Text style={{ fontSize: 18, alignSelf: 'center', paddingTop: 10, color: '#FF6600' }}>Quay lại</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => chonDiemdon(input, 1)} style={{ width: 150, height: 45, backgroundColor: '#FF6600', borderRadius: 2 }}><Text style={{ fontSize: 18, alignSelf: 'center', paddingTop: 10, color: 'white' }}>Xác nhận</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
            <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
                {DiemDi == '' || DiemTra == '' ?
                    <TouchableOpacity style={{ width: '100%', height: 50, marginBottom: 15, backgroundColor: '#642EFE', borderRadius: 12, alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', padding: 10, fontSize: 20 }}>Đặt vé</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => datvexe()} style={{ width: '100%', height: 50, marginBottom: 15, backgroundColor: '#642EFE', borderRadius: 12, alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', padding: 10, fontSize: 20 }}>Đặt vé</Text>
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FF6600',
        height: 80
    },
    phone: {
        top: -30,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20
    },
    btnPhone: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#c2c1be',
        borderRadius: 15,
        height: 150,
        marginTop: 35,
        fontSize: 16
    }
})
export default BookTicket