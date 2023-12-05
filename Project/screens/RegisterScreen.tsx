import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../ConText/MyNote";
import axios from "axios";
import { Image } from "react-native";
import { ScrollView } from "react-native";

const RegisterScreen = ({ route }: any) => {
    const navigation = useNavigation()

    const [isName, setName] = useState('')
    const [ischeckName, setcheckName] = useState(false)
    const { isNote, SetNote, getNote }: any = useNotes()
    const [isPhone, setPhone] = useState('')
    const [ischeckPhone, setcheckPhone] = useState(false)

   
    const [isPhoneRegistered, setIsPhoneRegistered] = useState(false)

    const login = async () => {
        let regexPhone = new RegExp('(0[1|3|5|7|8|9])+([0-9]{8})')

        if (regexPhone.test(isPhone)) {
            const res = await fetch('http://192.168.1.11:3000/hanhkhach/searchSDT/' + isPhone);
            const data = await res.json();

            if (data.length > 0) {
                setIsPhoneRegistered(true)
            } else {
                setIsPhoneRegistered(false)

                if (isName != '') {
                    let formlogin = {
                        Ten: isName,
                        Sdt: isPhone,
                        Email: '',
                        TrangThai: 1
                    }
                    axios.post('http://192.168.1.11:3000/hanhkhach/', formlogin).then((response) => {
                        let Data = {
                            id: response.data.insertId,
                            TenHanhKhach: isName,
                            SDT: isPhone,
                        }
                        SetNote(Data)
                        AsyncStorage.setItem('Account', JSON.stringify(Data));
                        navigation.navigate("App")
                    });
                } else {
                    setcheckName(true);
                }
            }
            setcheckPhone(false)
        } else {
            setcheckPhone(true)
            setIsPhoneRegistered(true)
        }


    }

    useEffect(() => {
    }, [])
    return (
        <ScrollView>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
            </View>
            <View style={styles.phone}>
                <View style={{ padding: 30 }}>
                    <Text style={{ color: 'black', fontSize: 26, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>Chào mừng bạn lần đầu đến với ứng dụng của chúng tôi!</Text>
                    <Image style={{ width: '100%', height: 'auto', borderRadius: 12, aspectRatio: 640 / 299, marginTop: 20 }} source={require('../assets/Images/AnimationCar.gif')}></Image>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Đăng ký tài khoản</Text>
                    <Text style={{ paddingRight: 12, fontSize: 15, paddingTop: 8 }}>Cập nhật thông tin để sẵn sàng cho chuyến hành trình sắp tới</Text>

                    <TextInput keyboardType="numeric" onChangeText={(value) => setPhone(value)} style={[styles.btnPhone,]} placeholder="Nhập số điện thoại " />
                    {
                        ischeckPhone ? (
                            <Text style={{ color: 'red', marginTop: 2 }}>Nhập đúng định dạng và không được để rỗng</Text>
                        ) : (
                            isPhoneRegistered ? (
                                <Text style={{ color: 'red', marginTop: 2 }}>Số điện thoại đã được đăng ký trước đó</Text>
                            ) : (
                                ''
                            )
                        )
                    }
                    <TextInput onChangeText={(value) => setName(value)} style={{ padding: 10, borderWidth: 1, borderColor: '#d9dedb', borderRadius: 15, marginTop: 35, fontSize: 16 }} placeholder="Nhập họ và tên " />
                    {
                        ischeckName ? (
                            <Text style={{ color: 'red', marginTop: 2 }}>Không được để rỗng</Text>
                        ) : (
                            ''
                        )
                    }
                    <TouchableOpacity onPress={() => login()} style={{ width: '100%', backgroundColor: '#819FF7', borderRadius: 15, marginTop: 35 }}><Text style={{ alignSelf: 'center', padding: 15, fontSize: 16, color: 'white' }}>Đăng ký</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
export default RegisterScreen; 