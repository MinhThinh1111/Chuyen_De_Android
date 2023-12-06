import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const Quidinhthuexe = ({navigation}:any) => {
    const Home = () => {
        navigation.navigate('Home');
    };
    return (
        <>

            <View style={{padding: 10, backgroundColor: 'cyan', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ThongTinChiTiet')}}>
                <Icon name="chevron-left" size={20} color="#000" />
                </TouchableOpacity>
                
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chính sách thuê xe</Text>
                <Text>  <Icon name="bars" size={20} color="#000" /></Text>
            </View>
            <View style={{backgroundColor:'#fff'}}>
            <View style={{ marginHorizontal: 10, marginVertical: 10, borderRadius: 20, borderWidth: 2, backgroundColor: '#FFF', borderColor: '#FFF', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                <View style={{ flex: 1 }}>

                    <Image style={{ width: 150, height: 110, marginLeft: 15, borderRadius: 10 }} source={require('../assets/Images/oto.jpg')}></Image>
                </View>
                <View style={{ flex: 2, marginLeft: 100, marginTop: 5 }}>
                    <Text style={{ width: 150 }}>Kia Morning</Text>
                    <Text><Icon name="wheelchair" size={15} color="#000" /> 4    <Icon name="suitcase" size={15} color="#000" /> 2</Text>
                    <Text><Icon name="cog" size={15} color="#000" /> Tự động</Text>
                </View>
                
            </View>
            <Text style={{ color:'blue',fontSize:20}}> Sử dụng tới 24h mỗi ngày thuê</Text>
            <Text style={{ marginLeft:17,fontSize:15,marginTop:6}}>{` Cần đặt cọc bằng tiền mặt hoặc chuyển khoản ngân hàng\n Có thể hoàn trả\n Có thể đổi lịch\n Đón/Trả miễn phí ngoài chi nhánh chính\n Áp dụng phụ phí trong trường hợp trả xe muộn\n Không bao gồm bảo hiểm\n Phải có bằng lái xe phù hợp `}</Text>
            <Text style={{ marginLeft:200,fontSize:15, marginTop:30}}> 589.290 VND /Ngày</Text>
            {/* <TouchableOpacity style={{ paddingVertical: 10, marginTop: 70, borderRadius: 20, alignItems: 'center', backgroundColor: 'orange', marginHorizontal: 120  }}><Text style={{fontSize:20,color:'blue'}}><Icon name="check" size={20} color="blue" /> Thanh Toán</Text></TouchableOpacity> */}

            
            </View>
            <TouchableOpacity onPress={Home} style={styles.exitButton}>
                <Text style={styles.exitButtonText}>Thoát</Text>
            </TouchableOpacity>
            
        </>
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
  });
export default Quidinhthuexe;