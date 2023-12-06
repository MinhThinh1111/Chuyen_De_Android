import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View, Alert } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { useNotes } from "../ConText/MyNote";


const Ticketinformation = ({ route, navigation }: any) => {
   const { data, checkve } = route.params;
   const { IsNote, SetNote, getNote }: any = useNotes();

   const Bill = () => {
      navigation.navigate('BillInformation');
   }

   const DeletVeXe = async () => {
      axios.get('http://192.168.1.6:3000/chuyendi/' + data.Id_ChuyenDi).then((response) => {
         let updatechuyendi = {
            Id: data.Id_ChuyenDi,
            SoGheTrong: response.data.SoGheTrong + data.soghe
         };

         axios.put('http://192.168.1.6:3000/chuyendi/updateSoGheTrong', updatechuyendi).then((response) => {
            let updatevexe = {
               Id: data.Id,
               TrangThai: 3,
            };

            axios.put('http://192.168.1.6:3000/vexe/IdVeXe', updatevexe).then((response) => {
               let updateChongoi = {
                  TrangThai: 3,
                  Id_VeXe: data.Id,
               };

               axios.put('http://192.168.1.6:3000/chongoi/updateIdVeXe', updateChongoi).then((response) => {
                  Alert.alert("Thông báo", "Hủy vé thành công");
                  navigation.navigate('MyTric');
               });
            });
         });
      });
   }

   useEffect(() => {
   }, [])
   return (
      <>
         <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
         <View style={{ height: 42, backgroundColor: '#642EFE' }}></View>
         <View style={{ backgroundColor: '#642EFE', justifyContent: "space-between", flexDirection: 'row', padding: 15 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}><IconIonicons name="chevron-back" size={28} color="white" /></TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Thông tin vé</Text>
            <Text>     </Text>
         </View>
         <View style={{ padding: 15 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginBottom: 4 }}>Thông tin chuyến</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Tuyến đường: {data.Ten}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Chuyến: {data.GioDi} giờ</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Ngày: {data.NgayDi}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Số ghế: {data.soghe}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Chố ngồi: {data.ChoNgoi}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Tổng tiền: {data.TongTien} VND</Text>

            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 4 }}>Điểm đón</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{data.Diem_Bat_Dau}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{data.DiemDon}</Text>

            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 4 }}>Điểm trả</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{data.DiemTra}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>{data.Diem_Ket_Thuc}</Text>

            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 4 }}>Thông tin hành khách</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Họ và tên: {IsNote.TenHanhKhach}</Text>
            <Text style={{ color: 'black', fontSize: 18 }}>Số điện thoại: {IsNote.SDT}</Text>

            <TouchableOpacity onPress={() => Bill()} style={{ borderColor: '#b2b4b8', borderWidth: 1, marginTop: 25, borderRadius: 15, backgroundColor: '#642EFE' }}><Text style={{ padding: 6, color: '#fff', fontSize: 18, alignSelf: 'center' }}>Thanh Toán</Text></TouchableOpacity>
            {checkve == 1 &&
               <TouchableOpacity onPress={() => DeletVeXe()} style={{ borderColor: '#b2b4b8', borderWidth: 1, marginTop: 25, borderRadius: 15, backgroundColor: '#642EFE' }}><Text style={{ padding: 6, color: '#fff', fontSize: 18, alignSelf: 'center' }}>Hủy vé</Text></TouchableOpacity>
            }





         </View>

      </>

   )
}

export default Ticketinformation;