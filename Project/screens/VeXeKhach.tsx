import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, StatusBar, Alert } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from "react-native-vector-icons/Feather";
import IconFontisto from "react-native-vector-icons/Fontisto";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from "../ConText/MyNote";

const VeXeKhachScreen = ({ route, navigation }: any) => {
    const curentday = new Date().toJSON().slice(0, 10);

    const { IsNote }: any = useNotes()

    const [date, setdate] = useState(curentday);
    const [toAdderss, settoAdderss] = useState('');
    const [fromAdderss, setfromAdderss] = useState('');
    const [idToAdderss, setIdToAdderss] = useState();
    const [idFromAdderss, setIdFromAdderss] = useState();
    const [IdHuyento, setIdHuyento] = useState('');
    const [IdHuyenfrom, setIdHuyenform] = useState('');


    if (route.params != undefined) {
        const { datetime } = route.params;
        const { Idadderss } = route.params;
        const { Tenadderss } = route.params;
        const { checkAdders } = route.params;
        const { Id_Huyen } = route.params;

        if (datetime != undefined) {
            let getYear = datetime.slice(0, 4);
            let getMonth = datetime.slice(5, 7);
            let getDate = datetime.slice(8, 10);
            let date = getYear + '-' + getMonth + '-' + getDate;
            setdate(date);
        } else if (Idadderss != undefined) {
            if (checkAdders == 'to') {
                setIdHuyento(Id_Huyen);
                settoAdderss(Tenadderss);
                setIdToAdderss(Idadderss);
            } else {
                setIdHuyenform(Id_Huyen);
                setfromAdderss(Tenadderss);
                setIdFromAdderss(Idadderss);
            }
        }
        route.params = undefined;
    }

    const swapAdderss = async () => {
        let to = toAdderss;
        let idTo = idToAdderss;
        let idtoHuyen = IdHuyento;

        await setIdHuyento(IdHuyenfrom);
        await setIdHuyenform(idtoHuyen);
        await settoAdderss(fromAdderss);
        await setfromAdderss(to);
        await setIdToAdderss(idFromAdderss);
        await setIdFromAdderss(idTo);
    };

    const nextPage = async () => {
        if (idToAdderss == null || idFromAdderss == null) {
            if (idToAdderss == null && idFromAdderss == null) {
                Alert.alert('Thông báo', 'Vui lòng chọn nơi khởi hành và nơi bạn muốn đến');
            } else if (idFromAdderss == null) {
                Alert.alert('Thông báo', 'Vui lòng chọn nơi bạn muốn đến');
            } else {
                Alert.alert('Thông báo', 'Vui lòng chọn nơi khởi hành');
            }
        } else {
            try {
                let datahuyen =
                    IdHuyento + ',' +
                    IdHuyenfrom;

                await AsyncStorage.setItem('idHuyen', datahuyen);

                const res = await fetch('http://192.168.2.97:3000/lotrinh/search/' + idToAdderss + '/' + idFromAdderss);
                const data = await res.json();

                navigation.navigate('TripList', { idLoTrinh: data.Id, NgayDi: date, toAdderss: toAdderss, fromAdderss: fromAdderss });
            } catch (err) {
                console.log(err);
            }
            navigation.navigate('TripList', { idLoTrinh: null, NgayDi: date, toAdderss: toAdderss, fromAdderss: fromAdderss });
        }
    };
    const HuongDan = () => {
        navigation.navigate('HuongDan');
    };

    useEffect(() => {
    }, []);

    return (
        <ScrollView>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.banner}>
                <Image style={styles.bannerImg} source={require("../assets/Images/banner1.jpg")} />
            </View>
            <View style={styles.headerName}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: -10 }} ><Icon style={{ backgroundColor: 'white', padding: 12, borderRadius: 10 }} name="arrow-back" size={20} color="red" /></TouchableOpacity>
            </View>

            <View style={styles.search}>
                <View style={styles.searchAddress}>
                    <View style={styles.searchAddressTo}>
                        <IconFeather name="map-pin" size={20} color="red" />
                        <View style={styles.searchAddressName}>
                            <Text>Nơi đi</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("AddresTo", { address: 'to' })}>
                                {
                                    toAdderss == null || toAdderss.length == 0 ?
                                        <Text style={{ fontWeight: "bold", color: 'black', fontSize: 20 }}>Nơi đi</Text>
                                        :
                                        <Text style={{ fontWeight: "bold", color: 'black', fontSize: 20 }}>{toAdderss}</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.searchAddressTo}>
                        <IconFeather name="map-pin" size={20} color="red" />
                        <View style={styles.searchAddressName}>
                            <Text>Nơi đến</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("AddresTo", { address: 'from' })}>
                                {
                                    fromAdderss == null || fromAdderss.length == 0 ?
                                        <Text style={{ fontWeight: "bold", color: 'black', fontSize: 20 }}>Nơi đến</Text>
                                        :
                                        <Text style={{ fontWeight: "bold", color: 'black', fontSize: 20 }}>{fromAdderss}</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => swapAdderss()} style={styles.Icon}><IconIonicons name="swap-vertical-sharp" size={20} color="red" /></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.searchDate} onPress={() => navigation.navigate("Date", { datetime: date })}>
                    <View>
                        <Text>Ngày khởi hành</Text>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{date}</Text>
                    </View>
                    <IconFontisto name="date" size={20} color='red'></IconFontisto>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nextPage()} >
                    <View style={styles.BtnSearch}>
                        <Text style={{ alignSelf: "center", color: "white", fontSize: 15 }}>Tìm chuyến</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 190, padding: 25 }}>
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => HuongDan()}>
                            <View style={{ width: 380, height: 360, }}>
                                <Image style={styles.ImageNews} source={require('../assets/Images/background1.jpg')} />
                                <Text style={{ padding: 15, fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Hướng Dẫn Đặt Vé</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    exitButton: {
        height: 50,
        backgroundColor: '#819FF7',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        alignSelf: 'center',
        marginTop: 20,
    },
    exitButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    container: {
        backgroundColor: "#FFFFFF"
    },
    banner: {
        width: "100%",
        height: 260,
    },
    bannerImg: {
        width: "100%",
        height: 260,
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
    search: {
        width: "100%",
        padding: 25,
        position: "absolute",
        top: 174
    },
    searchAddress: {
        paddingHorizontal: 10,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#555555',
        backgroundColor: '#FFFFFF',
    },
    searchAddressTo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,

    },
    searchAddressName: {
        paddingHorizontal: 10,
    },
    line: {
        height: 1,
        marginLeft: 30,
        backgroundColor: "#C0C0C0",
    },
    searchDate: {
        paddingHorizontal: 37,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#555555',
        backgroundColor: '#FFFFFF',
        marginVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    BtnSearch: {
        borderRadius: 15,
        elevation: 2,
        shadowColor: '#555555',
        backgroundColor: '#642EFE',
        padding: 15,
    },
    News: {
        backgroundColor: '#58ACFA',
        borderRadius: 15,
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginRight: 12,
        elevation: 2,
        shadowColor: '#555555',
    },
    ImageNews: {
        width: '100%',
        height: 250,
    },
    NameNews: {
        fontWeight: 'bold',
        fontSize: 18,
        overflow: 'hidden',
        padding: 8,
        color: '#fff',
        textAlign: 'center'
    },
    Icon: {
        padding: 12,
        width: 42,
        top: 35,
        left: 250,
        zIndex: 9000,
        backgroundColor: '#E6E6FA',
        borderRadius: 10,
        position: 'absolute',
        elevation: 4,
        shadowColor: '#555555',
    },
    headerName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        top: -120

    }

})
export default VeXeKhachScreen;