import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useNotes } from "../ConText/MyNote";
const AccountScreen = ({ navigation }: any) => {
    const { IsNote, SetNote, getNote }: any = useNotes()

    const login = () => {
        SetNote({})
        AsyncStorage.clear()
        navigation.replace('LoginPhone')
    }
    const UpdateProfileScreen = () => {
        navigation.navigate('UpdateProfileScreen');
    };
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.banner}>
                <Image style={styles.bannerImg} source={require("../assets/Images/banner1.jpg")} />
            </View>

            <View style={styles.search}>
                <Image style={{ width: 200, height: 200, borderRadius: 100 }} source={require('../assets/Images/avatar1.jpg')}></Image>
                <Text style={{ fontSize: 20, color: 'black', padding: 10, fontWeight: 'bold' }}>Tên: {IsNote.TenHanhKhach}</Text>
                <Text style={{ fontSize: 20, color: 'black', padding: 10, fontWeight: 'bold' }}>SĐT: {IsNote.SDT}</Text>
                <Text style={{ fontSize: 20, color: 'black', padding: 10, fontWeight: 'bold' }}>Email: {IsNote.Email}</Text>
            </View>
            <View style={{ paddingTop: 150 }}>
                <TouchableOpacity style={styles.menu} onPress={() => UpdateProfileScreen()}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="edit" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Cập nhật thông tin</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="book" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Giới thiệu</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="settings" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Cài đặt</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={() => login()}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="log-out" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Đăng xuất</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
    menu: {
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 28,
        paddingHorizontal: 10,
        width: '85%',
        alignItems: "center",
        marginTop: 40,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#555555',

    },
    banner: {
        width: "100%",
        height: 260,
    },
    bannerImg: {
        width: "100%",
        height: 150,
    },

    search: {
        width: "100%",
        padding: 25,
        position: "absolute",
        top: 60, alignItems: 'center'
    },
})
export default AccountScreen;