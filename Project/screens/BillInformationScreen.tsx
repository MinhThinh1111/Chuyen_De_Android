import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BillInformationScreen = ({ navigation }: any) => {
    const Home = () => {
        navigation.navigate('Home');
    };

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Thông tin thanh toán</Text>
            </View>


            <TouchableOpacity>
                <View style={styles.paymentMethod}>
                    <View style={styles.methodDetails}>
                        <Text style={styles.methodTitle}>Thanh toán trực tiếp</Text>
                        <Text style={{fontSize:18}}>Vui lòng đến trước nhà xe</Text>
                        <Text style={styles.boldRed}>60 phút</Text>
                        <Text style={{fontSize:18}}>để thanh toán và nhận vé</Text>
                        <Text style={{fontSize:18}}>Địa chỉ:</Text>
                        <Text style={styles.boldRed}>53 Võ Văn Ngân, P.Linh Chiểu, Q.Thủ Đức</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.paymentMethod}>
                    <View style={styles.methodDetails}>
                        <Text style={styles.methodTitle}>Thanh toán chuyển khoản</Text>
                        <Text style={{fontSize:18}}>Vui lòng chuyển khoản vào số TK</Text>
                        <Text style={styles.boldRed}>6785987</Text>
                        <Text style={styles.boldRed}>Ngân Hàng Á Châu (ACB)</Text>
                        <Text style={{fontSize:18}}>Tên Tài khoản</Text>
                        <Text style={styles.boldRed}>Võ Minh Thịnh</Text>
                        <Text style={{fontSize:18}}>Nội dung chuyển khoản:</Text>
                        <Text style={styles.boldRed}>Tên_SDT_NgayDi</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={Home} style={styles.exitButton}>
                <Text style={styles.exitButtonText}>Thoát</Text>
            </TouchableOpacity>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      width: '100%',
      backgroundColor: '#642EFE',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtHeader: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    paymentMethod: {
      borderRadius: 20,
      backgroundColor: '#819FF7',
      padding: 22,
      marginVertical: 20,
      width: '90%',
      alignSelf: 'center',
    },
    methodDetails: {
      marginLeft: 10,
      alignItems: 'center',
    },
    methodTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10, 
    },
    boldRed: {
      fontWeight: 'bold',
      color: 'red',
      fontSize:17
    },
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
  
export default BillInformationScreen;
