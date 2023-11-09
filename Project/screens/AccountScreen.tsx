import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useNotes } from "../ConText/MyNote";
const AccountScreen = ({ navigation }: any) => {
    const {IsNote,SetNote,getNote}:any = useNotes()
    const login = ()=>{
        SetNote({})
        AsyncStorage.clear()
        navigation.replace('LoginPhone')
    }
    return (
        <>
            <View>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            </View>
            <View style={styles.header}>
                <View style={{ padding: 23 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>{IsNote.TenHanhKhach}</Text>
                    <Text style={{ fontSize: 17, color: 'white' }}>{IsNote.SDT}</Text>
                </View>
                <View style={{ padding: 23 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 12 }} source={require('../assets/Images/avatar.jpg')}></Image>
                </View>
            </View>

            <ScrollView>
                <TouchableOpacity style={styles.menu}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="info" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Giới thiệu</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="info" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Quy chế hoạt động</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>login()}>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="info" size={22} color="red" />
                        <Text style={{ fontSize: 18, paddingLeft: 13 }}>Đăng xuất</Text>
                    </View>
                    <View>
                        <Icon name="chevron-right" size={23} color="black" />
                    </View>
                </TouchableOpacity>
            </ScrollView>


        </>
    )
}


const styles = StyleSheet.create({
    header: {
        paddingTop:40,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#642EFE',
    },
    menu: {
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 28,
        paddingHorizontal: 10,
        width: '85%',
        alignItems: "center",
        marginTop: 25,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#555555',

    }
})
export default AccountScreen;