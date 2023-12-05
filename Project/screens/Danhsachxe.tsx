import React from "react";
import { StyleSheet } from "react-native";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Danhsachxe = ({navigation}:any) => {
    const ThongTinChiTiet = () => {
        navigation.navigate('ThongTinChiTiet');
    }
    return (
        <>
            <View style={styles.main}>
                <TouchableOpacity onPress={()=>{navigation.navigate('TimXe')}}>
                <Icon name="chevron-left" size={20} color="#000" />
                </TouchableOpacity>
                
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Danh sách Xe</Text>
                <Text><Icon name="bars" size={20} color="#000" /></Text>
            </View>
            <ScrollView style={{ backgroundColor: '#dadada' }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <View style={{ marginHorizontal: 10,marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 15, width: 150 }}>Kia Morning</Text>
                        <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                    </View>
                    <View style={{ flex: 2, marginLeft: 100, marginTop: 35 }}>
                        <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                        <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                        <Text style={{ color: 'blue' }}>Hiện có 1 nhà cung cấp</Text>
                        <Text style={{ color: 'orange', marginLeft: 52 }}>Từ 589.280 VND/ngày</Text>
                    </View>
                </View>
                </TouchableOpacity>

                



            </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({
    main: {
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'cyan',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
export default Danhsachxe;