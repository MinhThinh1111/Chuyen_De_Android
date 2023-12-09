// HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useNotes } from "../ConText/MyNote";

const HomeScreen = ({ navigation }: any) => {
    const { IsNote }: any = useNotes();

    const VeMayBay = () => {
        navigation.navigate('VeMayBay');
    }

    const ThueXe = () => {
        navigation.navigate('ThueXe');
    }

    const VeXeKhachScreen = () => {
        navigation.navigate('VeXeKhachScreen');
    }

    useEffect(() => {
    }, []);

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.banner}>
                <Image style={styles.bannerImg} source={require("../assets/Images/background1.jpg")} />
                <View style={styles.bannerText}>
                    <Text style={styles.bannerText1}>Xin chào {IsNote.TenHanhKhach}</Text>
                    <Text style={styles.bannerText2}>Chào mừng bạn đến với APP HỖ TRỢ DU LỊCH</Text>
                </View>
            </View>

            <View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>DANH MỤC</Text>
                </View>

                <ScrollView horizontal style={styles.scrollView}>
                    <TouchableOpacity onPress={() => VeXeKhachScreen()} style={styles.categoryButton}>
                        <Text style={styles.categoryButtonText}>Vé Xe Khách</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => VeMayBay()} style={styles.categoryButton}>
                        <Text style={styles.categoryButtonText}>Vé Máy Bay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ThueXe()} style={styles.categoryButton}>
                        <Text style={styles.categoryButtonText}>Thuê Xe</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>ƯU ĐÃI</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width: 380, height:360, }} source={require("../assets/Images/uudai.jpg")} />
                    <Text style={{padding: 10, color:'red', fontSize:15}}>Giảm giá lên đến 20% khi thanh toán online</Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    banner: {
        width: "100%",
        height: 260,
        position: 'relative',
    },
    bannerImg: {
        width: "100%",
        height: "100%",
    },
    bannerText: {
        position: "absolute",
        padding: 25,
        marginTop: 32,
    },
    bannerText1: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
    },
    bannerText2: {
        fontSize: 16,
        color: "black",
    },
    sectionContainer: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        marginBottom: 10,
    },
    scrollView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    categoryButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: '#58ACFA',
        marginRight: 10,
        width: 125, height: 40,
        marginBottom: 15
    },
    categoryButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;


