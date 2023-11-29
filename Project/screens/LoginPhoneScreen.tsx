import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import { useNotes } from "../ConText/MyNote";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Component chính của màn hình đăng nhập bằng số điện thoại
const LoginPhoneScreen = () => {
    // Sử dụng hook navigation từ React Navigation để điều hướng giữa các màn hình
    const navigation = useNavigation();

    // Các state để quản lý dữ liệu và trạng thái của màn hình
    const [isPhone, setPhone] = useState(''); // Số điện thoại nhập vào
    const [ischeckPhone, setcheckPhone] = useState(false); // Trạng thái kiểm tra định dạng số điện thoại
    const [isPhoneRegistered, setIsPhoneRegistered] = useState(true); // Kiểm tra số điện thoại đã được đăng ký hay chưa

    // Sử dụng custom hook để quản lý dữ liệu ghi chú
    const { IsNote, SetNote, getNote }: any = useNotes()

    // Hàm xử lý sự kiện khi người dùng ấn nút đăng nhập
    const login = async () => {
        // Kiểm tra định dạng số điện thoại sử dụng biểu thức chính quy
        let regexPhone = new RegExp('(0[1|3|5|7|8|9])+([0-9]{8})');

        if (regexPhone.test(isPhone)) {
            // Gửi yêu cầu đến API để kiểm tra số điện thoại
            const res = await fetch('http://192.168.1.118:3000/hanhkhach/searchSDT/' + isPhone);
            const data = await res.json();

            if (data.length > 0) {
                // Nếu số điện thoại đã được đăng ký, lưu thông tin vào state và AsyncStorage, sau đó chuyển sang màn hình App
                let Data = {
                    id: data[0].Id,
                    TenHanhKhach: data[0].Ten,
                    SDT: data[0].Sdt,
                };
                SetNote(Data)
                AsyncStorage.setItem('Account', JSON.stringify(Data));
                navigation.navigate("App")
            } else {
                // navigation.navigate("LoginName", { phone: isPhone })
                // Nếu số điện thoại chưa được đăng ký, cập nhật trạng thái
                setIsPhoneRegistered(false)
            }
            // Đặt trạng thái kiểm tra và kiểm tra số điện thoại về false
            setcheckPhone(false);
        } else {
            // Nếu số điện thoại không đúng định dạng, cập nhật trạng thái kiểm tra và kiểm tra số điện thoại về true
            setcheckPhone(true);
            setIsPhoneRegistered(true);
        }

    }

    // Sử dụng useEffect để kiểm tra nếu đã có thông tin đăng nhập từ trước thì chuyển sang màn hình App
    useEffect(() => {

        if (IsNote.SDT != undefined) {
            navigation.navigate("App")
        }
    })
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
            </View>
            <View style={styles.phone}>
                <View style={{ padding: 30 }}>
                    <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold', marginTop: 30 }}>Nhập số điện thoại của bạn!</Text>
                    <Text style={{ paddingRight: 12, fontSize: 15, paddingTop: 8 }}>Mã bảo mật gồm 6 chứ số sẽ được gửi qua SMS để xác thực số điện thoại di động của bạn.</Text>
                    <TextInput keyboardType="numeric" onChangeText={(value) => setPhone(value)} style={[styles.btnPhone,]} placeholder="Nhập số điện thoại " />
                    {
                        ischeckPhone ? (
                            <Text style={{ color: 'red', marginTop: 2 }}>Nhập đúng định dạng và không được để rỗng</Text>
                        ) : (
                            !isPhoneRegistered ? (
                                <Text style={{ color: 'red', marginTop: 2 }}>Số điện thoại chưa được đăng ký</Text>
                            ) : (
                                ''
                            )
                        )
                    }
                    <TouchableOpacity onPress={() => login()} style={{ width: '100%', backgroundColor: '#819FF7', borderRadius: 15, marginTop: 35 }}><Text style={{ alignSelf: 'center', padding: 15, fontSize: 16, color: 'white' }}>Tiếp tục</Text></TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400', marginTop: 30, textAlign: 'center' }}>Bạn chưa có tài khoản!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginName", { phone: isPhone })} style={{ width: '100%', borderRadius: 15, marginTop: 0, alignSelf: 'center', }}><Text style={{ fontWeight: '800', alignSelf: 'center', padding: 10, fontSize: 16, color: 'black' }}>Đăng ký ngay</Text></TouchableOpacity>

                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#819FF7',
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
        borderColor: '#d9dedb',
        borderRadius: 15,
        // marginVertical: 35,
        marginTop: 35,
        fontSize: 16
    }

})
export default LoginPhoneScreen; 