// Import các thành phần và thư viện cần thiết
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNotes } from "../ConText/MyNote";
import axios from "axios";

// Component UpdateProfileScreen
const UpdateProfileScreen = ({ navigation }: any) => {
  const { IsNote, SetNote }: any = useNotes();
  const [newName, setNewName] = useState(IsNote.TenHanhKhach || ''); // Tên mới
  const [newPhone, setNewPhone] = useState(IsNote.SDT || ''); // Số điện thoại mới
  const [newEmail, setNewEmail] = useState(IsNote.Email || ''); // Email mới

  // Hàm cập nhật thông tin cá nhân
  const handleUpdateProfile = async () => {
    try {
      // Gửi yêu cầu PUT đến đường dẫn http://192.168.2.98:3000/hanhkhach với dữ liệu cập nhật
      const response = await axios.put("http://192.168.1.6:3000/hanhkhach", {
        Id: IsNote.id,
        Ten: newName,
        Sdt: newPhone,
        Email: newEmail,
        TrangThai: IsNote.TrangThai,
      });

      // Kiểm tra xem yêu cầu đã thành công hay không
      if (response.status === 200) {
        // Cập nhật state và quay lại màn hình AccountScreen
        SetNote({
          ...IsNote,
          TenHanhKhach: newName,
          SDT: newPhone,
          Email: newEmail,
        });
        navigation.goBack();
      } else {
        console.error("Có lỗi khi gửi yêu cầu PUT.");
      }
    } catch (error) {
      console.error("Có lỗi khi gửi yêu cầu PUT:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên mới:</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={(text) => setNewName(text)}
        placeholder="Nhập tên mới"
      />

      <Text style={styles.label}>Số điện thoại mới:</Text>
      <TextInput
        style={styles.input}
        value={newPhone}
        onChangeText={(text) => setNewPhone(text)}
        placeholder="Nhập số điện thoại mới"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email mới:</Text>
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)}
        placeholder="Nhập email mới"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
        <Text style={styles.updateButtonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

// Kiểu dáng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  updateButton: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateProfileScreen;
