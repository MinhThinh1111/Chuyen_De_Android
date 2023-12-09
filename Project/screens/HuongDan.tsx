import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HuongDanScreen = ({navigation}:any) => {
    const VeXeKhachScreen = () => {
        navigation.navigate('VeXeKhachScreen');
    };
    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={styles.header}>
                <Text style={styles.txtHeader}>Hướng dẫn đặt vé</Text>
            </View>
            <View style={styles.contentContainer}>
                <Step text="Bước 1" description="Chọn nơi đi, nơi đến" />
                <Step text="Bước 2" description="Chọn ngày khởi hành" />
                <Step text="Bước 3" description="Ấn vào button 'Tìm Chuyến'" />
                <Step text="Bước 4" description="Chọn chuyến xe phù hợp" />
                <Step text="Bước 5" description="Ấn chọn ghế (Ghế có dấu X là ghế đã hết)" />
                <Step text="Bước 6" description="Số lượng ghế và giá tiền sẽ hiển thị" />
                <Step text="Bước 7" description="Chọn địa điểm trung chuyển" />
                <Step text="Bước 8" description="Ấn vào button 'Đặt Vé'" />
                <Step text="Bước 9" description="Ấn vào button 'Thanh Toán' để thanh toán vé" />
            </View>
            <TouchableOpacity onPress={VeXeKhachScreen} style={styles.exitButton}>
                <Text style={styles.exitButtonText}>Quay Lại</Text>
            </TouchableOpacity>
        </>
    );
};

const Step = ({ text, description }) => {
    return (
        <View style={styles.stepContainer}>
            <Text style={styles.stepText}>{text}</Text>
            <Text style={styles.stepDescription}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    stepContainer: {
        marginBottom: 20,
    },
    stepText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
    stepDescription: {
        fontSize: 16,
        color: '#333',
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

export default HuongDanScreen;
