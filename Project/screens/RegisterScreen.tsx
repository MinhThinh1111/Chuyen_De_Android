import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useNotes } from "../ConText/MyNote";

const RegisterScreen = ({ route }: any) => {
    const navigation = useNavigation();

    const [isName, setName] = useState('');
    const [ischeckName, setcheckName] = useState(false);
    const { isNote, SetNote }: any = useNotes();
    const [isPhone, setPhone] = useState('');
    const [isEmail, setEmail] = useState('');
    const [ischeckEmail, setcheckEmail] = useState(false);
    const [ischeckPhone, setcheckPhone] = useState(false);
    const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);
    const [isPassword, setPassword] = useState('');
    const [ischeckPassword, setcheckPassword] = useState(false);

    const check = async () => {
        let regexPhone = /^(0[1-9])+([0-9]{8})$/;
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Kiểm tra định dạng số điện thoại
        if (!regexPhone.test(isPhone)) {
            setcheckPhone(true);
            setIsPhoneRegistered(true);
            return;
        }else{
            setcheckPhone(false);
        }

        // Kiểm tra số điện thoại đã đăng ký hay chưa
        const res = await fetch('http://192.168.2.97:3000/hanhkhach/searchSDT/' + isPhone);
        const data = await res.json();

        if (data.length > 0) {
            setIsPhoneRegistered(true);
            return;
        }

        setIsPhoneRegistered(false);

        if (isName.trim() === '') {
            setcheckName(true);
            return;
        }
        else{
            setcheckName(false);
        }

        // Kiểm tra định dạng email
        if (!regexEmail.test(isEmail)) {
            setcheckEmail(true);
            return;
        }else{
            setcheckEmail(false);
        }

        // Kiểm tra mật khẩu không được để trống
        if (isPassword.trim() === '') {
            setcheckPassword(true);
            return;
        }else{
            setcheckPassword(false);
        }

        let formcheck = {
            Ten: isName,
            Sdt: isPhone,
            Email: isEmail,
            MatKhau: isPassword,
            TrangThai: 1
        };

        axios.post('http://192.168.2.97:3000/hanhkhach/', formcheck).then((response) => {
            let Data = {
                id: response.data.insertId,
                TenHanhKhach: isName,
                SDT: isPhone,
                Email: isEmail,
                MatKhau: isPassword
            };
            SetNote(Data);
            AsyncStorage.setItem('Account', JSON.stringify(Data));

            // Hiển thị Alert khi đăng ký thành công
            Alert.alert(
                "Đăng ký thành công",
                "Bạn đã đăng ký thành công. Đăng nhập ngay!",
                [
                    { text: "OK", onPress: () => navigation.navigate("LoginPhone") }
                ]
            );
        });
    };

    return (
        <ScrollView>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}></View>
            <View style={styles.phone}>
                <View style={{ padding: 30 }}>
                    <Text style={{ color: 'black', fontSize: 26, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Chào mừng bạn đến với ứng dụng của chúng tôi!</Text>
                    <Image style={{ width: '100%', height: 'auto', borderRadius: 12, aspectRatio: 640 / 299, marginTop: 20 }} source={require('../assets/Images/background.jpg')}></Image>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>Đăng ký tài khoản</Text>
                    <Text style={{ paddingRight: 12, fontSize: 15, paddingTop: 8, textAlign: 'center' }}>Cập nhật thông tin để sẵn sàng cho chuyến hành trình sắp tới</Text>

                    <TextInput keyboardType="numeric" onChangeText={(value) => setPhone(value)} style={[styles.btnPhone,]} placeholder="Nhập số điện thoại " />
                    {ischeckPhone ? (
                        <Text style={{ color: 'red', marginTop: 2 }}>Nhập đúng định dạng và không được để rỗng</Text>
                    ) : (
                        isPhoneRegistered ? (
                            <Text style={{ color: 'red', marginTop: 2 }}>Số điện thoại đã được đăng ký trước đó</Text>
                        ) : (
                            ''
                        )
                    )}

                    <TextInput onChangeText={(value) => setName(value)} style={{ padding: 10, borderWidth: 1, borderColor: '#d9dedb', borderRadius: 15, marginTop: 35, fontSize: 16 }} placeholder="Nhập họ và tên " />
                    {ischeckName ? (
                        <Text style={{ color: 'red', marginTop: 2 }}>Không được để rỗng</Text>
                    ) : (
                        ''
                    )}

                    <TextInput onChangeText={(value) => setEmail(value)} style={{ padding: 10, borderWidth: 1, borderColor: '#d9dedb', borderRadius: 15, marginTop: 35, fontSize: 16 }} placeholder="Nhập Email " />
                    {ischeckEmail ? (
                        <Text style={{ color: 'red', marginTop: 2 }}>Nhập đúng định dạng email và không được để rỗng</Text>
                    ) : (
                        ''
                    )}

                    {/* Thêm TextInput cho mật khẩu */}
                    <TextInput
                        onChangeText={(value) => setPassword(value)}
                        style={{ padding: 10, borderWidth: 1, borderColor: '#d9dedb', borderRadius: 15, marginTop: 35, fontSize: 16 }}
                        placeholder="Nhập Mật khẩu"
                        secureTextEntry={true} // Ẩn ký tự khi nhập mật khẩu
                    />
                    {/* Thông báo khi mật khẩu rỗng (có thể thay đổi hoặc bổ sung theo yêu cầu) */}
                    {ischeckPassword ? (
                        <Text style={{ color: 'red', marginTop: 2 }}>Không được để rỗng</Text>
                    ) : (
                        ''
                    )}

                    <TouchableOpacity onPress={() => check()} style={{ width: '100%', backgroundColor: '#819FF7', borderRadius: 15, marginTop: 35 }}><Text style={{ alignSelf: 'center', padding: 15, fontSize: 16, color: 'white' }}>Đăng ký</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#819FF7',
        height: 80,
    },
    phone: {
        top: -30,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    btnPhone: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#d9dedb',
        borderRadius: 15,
        marginTop: 35,
        fontSize: 16,
    },
});

export default RegisterScreen;
