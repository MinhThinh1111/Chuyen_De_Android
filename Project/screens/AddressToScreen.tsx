import React, { useState, useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';

// Component xử lý chọn địa chỉ từ màn hình đến (to) hoặc từ (from)
const AddressToScreens = ({ route, navigation }: any) => {

    // State để lưu danh sách tỉnh/thành phố và quận/huyện
    const [listTinh, setListTinh] = useState([]);
    const [listHuyen, setListHuyen] = useState([]);
    const { address } = route.params;

    // Hàm lấy danh sách tỉnh/thành phố từ API
    const getTinh = async () => {
        //Sử dụng cấu trúc try-catch để bắt và xử lý các lỗi có thể xảy ra khi gọi API
        try {
            const res = await fetch('http://192.168.1.11:3000/tinh');//Nếu hàm fetch thành công, kết quả sẽ được lưu vào biến res
            const data = await res.json();//Gọi phương thức json() của biến res để chuyển đổi dữ liệu từ định dạng JSON sang đối tượng JavaScript, và lưu vào biến data
            setListTinh(data);//Gọi hàm setListTinh với tham số là biến data, để cập nhật trạng thái của component với dữ liệu về các tỉnh
        } catch (err) {//nếu không, hàm này sẽ ném ra một lỗi và chuyển sang khối catch.
            console.log(err);
        }
    }

    // Hàm lấy danh sách quận/huyện dựa trên ID tỉnh/thành phố từ API
    const getHuyenXa = async (id: any) => {
        try {
            // const res = await fetch('http://192.168.1.11:3000/quanhuyen/IdTinh/'+ id);
            const res = await fetch('http://192.168.1.11:3000/quanhuyen/IdTinh/' + id);
            const data = await res.json();
            setListHuyen(data);
        } catch (err) {
            console.log(err);
        }
    }

    // Hàm xử lý khi chọn địa chỉ và chuyển về màn hình chính
    const getAdderesNavigate = async (Id: any, Ten: any, Id_Huyen: any) => {//Nhận vào ba tham số là Id, Ten và Id_Huyen
        //Kiểm tra giá trị của biến address, là một biến toàn cục chứa thông tin về loại địa chỉ mà người dùng muốn chọn, là ‘to’ hay ‘from’
        //Nếu address bằng ‘to’, nghĩa là người dùng muốn chọn địa chỉ đến, thì thực hiện khối lệnh bên trong câu lệnh if

        if (address == 'to') {
            navigation.navigate('Home', { Idadderss: Id, Tenadderss: Ten, checkAdders: 'to', Id_Huyen: Id_Huyen });//checkAdders là ‘to’ để đánh dấu là địa chỉ đến
            //Gọi phương thức navigation.navigate với tham số đầu tiên là tên của trang chủ (‘Home’), và tham số thứ hai là một đối tượng chứa các thông tin
        } else {
            navigation.navigate('Home', { Idadderss: Id, Tenadderss: Ten, checkAdders: 'from', Id_Huyen: Id_Huyen });
        }
    }

    // Sử dụng useEffect để gọi hàm lấy danh sách tỉnh khi component được render
    useEffect(() => {
        getTinh();
    }, [])
    return (
        <>
            <StatusBar backgroundColor="#642EFE" barStyle="dark-content"></StatusBar>
            <Text style={styles.datePicker}>
                Chọn nơi bạn muốn đi
            </Text>
            <View style={styles.address}>
                <Text style={{ fontSize: 19, color: 'black', alignSelf: 'center' }}>Tỉnh thành</Text>
                <Text style={{ fontSize: 19, color: 'black', }}>Quận huyện </Text>
            </View>
            <View style={{
                height: 1,
                backgroundColor: "#C0C0C0",
            }}></View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: "50%" }}>
                    <FlatList data={listTinh}
                        renderItem={({ item }: any) =>
                            <TouchableOpacity onPress={() => getHuyenXa(item.Id)}>
                                <Text style={styles.addresname}>{item.Ten}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={{ height: 300, width: 1, backgroundColor: '#C0C0C0' }}></View>
                <View style={{ width: "50%" }}>
                    <FlatList data={listHuyen}
                        renderItem={({ item }: any) =>
                            <TouchableOpacity onPress={() => getAdderesNavigate(item.Id_Tinh, item.Ten, item.Id)}>
                                <Text style={styles.addresname}>{item.Ten}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    datePicker: {
        marginTop: 20,
        backgroundColor: "#642EFE",
        paddingHorizontal: 16,
        paddingVertical: 40,
        textAlign: 'center',
        fontSize: 20,
        color: "white",
    },
    Icons: {
        top: -20,
        left: 40,
        position: 'absolute',
        zIndex: 9999,
    },
    Icon: {
        padding: 12,
        width: 42,
        zIndex: 9000,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        shadowColor: 'red',
    },
    text: {
        padding: 23,
        fontSize: 18,
        fontWeight: 'bold',
    },
    address: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        paddingHorizontal: 44
    },
    addresname: {
        fontSize: 18,
        padding: 20,
        color: 'black'
    }
})
export default AddressToScreens;