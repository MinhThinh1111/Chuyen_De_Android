import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState ,useContext} from "react";

// Tạo một context để chia sẻ dữ liệu giữa các component con
const NoteContext = createContext<any>('')

const MyNote = ({children}:any) => {
    // Khai báo state IsNote và SetNote để lưu trữ dữ liệu ghi chú
    const [IsNote,SetNote] = useState({})
    // Khai báo state IsVeXe và SetVeXe để lưu trữ dữ liệu vé xe
    const [IsVeXe,SetVeXe] = useState([])

    // Hàm lấy dữ liệu ghi chú từ AsyncStorage
    const getNote = async () => {
        const result = await AsyncStorage.getItem('Account')
        if(result !== null) {
            SetNote(JSON.parse(result)) 
        }    
    }
    // Hàm lấy dữ liệu vé xe từ AsyncStorage
    const getChuyenDi = async () => {
        const result = await AsyncStorage.getItem('VeXe')
        if(result !== null) {
            SetVeXe(JSON.parse(result))
        }
    }

    // Sử dụng useEffect để gọi hàm getChuyenDi và getNote khi component được render lần đầu tiên
    useEffect(()=>{ 
        getChuyenDi();   
        getNote()      
    },[])

    // Trả về Provider của NoteContext, cung cấp các giá trị và hàm cho các component con
    return(
        <NoteContext.Provider value={{IsNote,SetNote,getNote,getChuyenDi,IsVeXe,SetVeXe}} >
            {children}
        </NoteContext.Provider>
    )
}

// Hook tùy chỉnh useNotes để sử dụng giá trị và hàm từ NoteContext
export const useNotes =()=> useContext(NoteContext);

export default MyNote
