import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const ThueXe = ({navigation}: any) => {
    const Danhsachxe = () => {
        navigation.navigate('Danhsachxe');
    }
  return (
    <>
      <View>
        <View style={{ padding: 10, backgroundColor: 'cyan', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tìm Xe</Text>
          <Text>  <Icon name="bars" size={20} color="#000" /></Text>
        </View>

        <Text style={{ fontSize: 20, paddingLeft: 15 }}>Địa điểm thuê xe của bạn</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderWidth: 2, }}><Icon name="map" size={40} color="#000" /></View>
          <View style={{ width: 360, height: 50, borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#fff', borderWidth: 2 }}><TextInput style={{ fontSize: 20 }}
            placeholder="Điền thành phố, sân bay, khách sạn"></TextInput></View>
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 15 }}>Ngày bắt đầu</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderWidth: 2, }}><Icon name="map" size={40} color="#000" /></View>
          <View style={{ width: 360, height: 50, borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#fff', borderWidth: 2 }}><TextInput style={{ fontSize: 20 }}
            placeholder="09 tháng 10 2023"></TextInput></View>
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 15 }}>Giờ bắt đầu</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderWidth: 2, }}><Icon name="map" size={40} color="#000" /></View>
          <View style={{ width: 360, height: 50, borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#fff', borderWidth: 2 }}><TextInput style={{ fontSize: 20 }}
            placeholder="09:00"></TextInput></View>
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 15 }}>Ngày kết thúc</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderWidth: 2, }}><Icon name="map" size={40} color="#000" /></View>
          <View style={{ width: 360, height: 50, borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#fff', borderWidth: 2 }}><TextInput style={{ fontSize: 20 }}
            placeholder="13 tháng 10 2023"></TextInput></View>
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 15 }}>Giờ kết thúc</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 50, height: 50, borderTopStartRadius: 10, borderBottomStartRadius: 10, backgroundColor: '#fff', borderWidth: 2, }}><Icon name="map" size={40} color="#000" /></View>
          <View style={{ width: 360, height: 50, borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#fff', borderWidth: 2 }}><TextInput style={{ fontSize: 20 }}
            placeholder="09:00"></TextInput></View>



        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Danhsachxe')}
          style={{ paddingVertical: 10, marginTop: 100, borderRadius: 20, alignItems: 'center', backgroundColor: 'orange', marginHorizontal: 100 }}>
          <Text style={{ fontSize: 20 }}>
            <Icon name="search" size={20} color="#000" /> Tìm xe</Text>
        </TouchableOpacity>


      </View>
    </>

  )
}
export default ThueXe;