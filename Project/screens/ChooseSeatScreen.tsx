import React, { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

// Component để chọn ghế xe
const ChooseSeatScreen = ({ route, navigation }: any) => {
    // Lấy thông tin từ tham số đường dẫn
    const { Id_ChuyenDi, Id_Xe, giaTien, SoGhe } = route.params;
    // Danh sách ghế tầng 1 và 2
    const [ListGheXeT1, setListGheXeT1] = useState([]);
    const [ListGheXeT2, setListGheXeT2] = useState([]);
    // Tầng đang chọn (mặc định là tầng 1)
    const [Tang, setTang] = useState(1);
    // Đối tượng để lưu trữ thông tin đặt vé xe
    const collectionDatVeXe: any = {};
    // Số lượng ghế đã chọn
    const [soLuong, setsoLuong] = useState(0);

    // Hàm gọi API để lấy danh sách ghế xe
    const GhetGheXeByChuyenDi = async () => {
        // Lấy danh sách ghế đã đặt theo chuyến đi

        //Tìm kiếm chỗ ngồi trên xe theo id của chuyến
        //Sử dụng cấu trúc try-catch để bắt và xử lý các lỗi có thể xảy ra khi gọi API
        try {
            //Nếu hàm fetch thành công, kết quả sẽ được lưu vào biến res
            const res = await fetch('http://192.168.1.11:3000/chongoi/search/' + Id_ChuyenDi);
            const data = await res.json();//Sau đó, phương thức json() của biến res được gọi để chuyển đổi dữ liệu từ định dạng JSON sang đối tượng JavaScript, và lưu vào biến data

            if (data != null) {//Kiểm tra giá trị của biến data. Nếu data khác null, nghĩa là có dữ liệu về các chỗ ngồi trên xe, thì duyệt qua mảng data
                for (let index = 0; index < data.length; index++) {
                    //Khai báo một biến có tên là collectionDatVeXe, là một đối tượng chứa các thông tin về việc đặt vé xe của một hành khách
                    collectionDatVeXe[data[index].Id_ChuyenDi + data[index].Id_GheXe] = '1';//Gán giá trị ‘1’ cho thuộc tính của biến collectionDatVeXe có tên là Id_ChuyenDi + Id_GheXe, tức là ghép id của chuyến đi và id của ghế lại thành một chuỗi.Việc này có thể là để đánh dấu rằng chỗ ngồi đó đã được đặt, hoặc để lưu lại id của chỗ ngồi cho mỗi vé xe.
                }
            }
        } catch (err) {//nếu không, hàm này sẽ ném ra một lỗi và chuyển sang khối catch in ra lỗi
            console.log(err);
        }

        // Lấy danh sách ghế tầng 1
        try {
            //Nếu hàm fetch thành công, kết quả sẽ được lưu vào biến res
            const res = await fetch('http://192.168.1.11:3000/ghexe/search/' + Id_Xe + '/1');
            const data = await res.json();//Sau đó, phương thức json() của biến res được gọi để chuyển đổi dữ liệu từ định dạng JSON sang đối tượng JavaScript, và lưu vào biến data

            if (data != null) {//Nếu data khác null, nghĩa là có dữ liệu về các ghế trên xe
                const List: any = [];//khai báo một biến có tên là List, là một mảng có kiểu dữ liệu là any
                for (let index = 0; index < data.length; index++) {//Sau đó, duyệt qua mảng data
                    List.push({//Thêm một phần tử mới vào mảng List, là một đối tượng chứa các thông tin về một ghế trên xe, bao gồm:
                        Id: data[index].Id,//Id là id của ghế
                        Ten: data[index].Ten,//Ten là tên của ghế
                        Id_Xe: data[index].Id_Xe,//Id_Xe là id của xe
                        TrangThai: collectionDatVeXe[data[index].Id + Id_ChuyenDi] == undefined ? '1' : '2',//TrangThai là trạng thái của ghế. Nếu thuộc tính có tên là id của ghế cộng với id của chuyến đi trong biến collectionDatVeXe bằng undefined, nghĩa là ghế đó chưa được đặt, thì gán giá trị ‘1’ cho trạng thái, nếu không, gán giá trị ‘2’, nghĩa là ghế đó đã được đặt
                        Index: index,//Index là chỉ số của ghế trong mảng data
                        SoGhe: data[index].SoGhe,//SoGhe là số ghế của ghế đó
                    });
                }
                setListGheXeT1(List);//cập nhật trạng thái của component với dữ liệu về các ghế trên xe của tầng 1
            }
        } catch (err) {
            console.log(err);
        }

        // Lấy danh sách ghế tầng 2
        try {
            const res = await fetch('http://192.168.1.11:3000/ghexe/search/' + Id_Xe + '/2');
            const data = await res.json();
            if (data != null) {
                const List: any = [];
                for (let index = 0; index < data.length; index++) {
                    List.push({
                        Id: data[index].Id,
                        Ten: data[index].Ten,
                        Id_Xe: data[index].Id_Xe,
                        TrangThai: collectionDatVeXe[data[index].Id + Id_ChuyenDi] == undefined ? '1' : '2',
                        Index: index,
                        SoGhe: data[index].SoGhe,
                    });
                }
                setListGheXeT2(List);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Hàm chọn/chặn ghế khi người dùng nhấn vào ghế
    const Chonchongoi = async (Index: any, check: any) => {
        //Nếu check bằng 1, nghĩa là chọn ghế tầng 1
        if (check == 1) {
            // Chọn ghế tầng 1
            //Nếu trạng thái của ghế bằng ‘3’, nghĩa là ghế đó đã được chọn bởi người dùng, thì giảm biến soLuong đi 1
            if (ListGheXeT1[Index].TrangThai == '3') {
                let so = soLuong - 1;
                setsoLuong(so);//cập nhật trạng thái của component với số lượng ghế đã chọn
                //gán trạng thái của ghế thành ‘1’, nghĩa là ghế đó chưa được chọn
                ListGheXeT1[Index] = { Id: ListGheXeT1[Index].Id, Ten: ListGheXeT1[Index].Ten, Id_Xe: ListGheXeT1[Index].Id_Xe, TrangThai: '1', Index: Index, SoGhe: ListGheXeT1[Index].SoGhe };
            } else {//Nếu trạng thái của ghế khác ‘3’, nghĩa là ghế đó chưa được chọn bởi người dùng
                //Nếu soLuong lớn hơn 3, nghĩa là người dùng đã chọn quá nhiều ghế, thì gọi hàm Alert.alert để hiển thị một thông báo cho người dùng biết là quý khách chỉ được chọn tối đa 4 ghế cho mỗi lần đặt
                if (soLuong > 3) {
                    Alert.alert("Thông báo", "Quý khách chỉ được chọn tối đa 4 ghế cho mỗi lần đặt");
                } else {//Nếu soLuong không lớn hơn 3, nghĩa là người dùng có thể chọn thêm ghế
                    let so = soLuong + 1;//Tăng biến soLuong lên 1,
                    setsoLuong(so);//cập nhật trạng thái của component với số lượng ghế đã chọn
                    //gán trạng thái của ghế thành ‘3’, nghĩa là ghế đó đã được chọn
                    ListGheXeT1[Index] = { Id: ListGheXeT1[Index].Id, Ten: ListGheXeT1[Index].Ten, Id_Xe: ListGheXeT1[Index].Id_Xe, TrangThai: '3', Index: Index, SoGhe: ListGheXeT1[Index].SoGhe };
                }
            }
            //khai báo một biến có tên là List, là một mảng có kiểu dữ liệu là any, nghĩa là nó có thể chứa bất kỳ giá trị nào
            const List: any = [];
            //Duyệt qua mảng ListGheXeT1, và thêm các phần tử của nó vào mảng List
            for (let index = 0; index < ListGheXeT1.length; index++) {
                await List.push(ListGheXeT1[index]);//await để đợi kết quả của hàm List.push
            }
            await setListGheXeT1(List);//cập nhật trạng thái của component với dữ liệu về các ghế trên xe của tầng 
        } else {
            // Chọn ghế tầng 2
            //Nếu trạng thái của ghế bằng ‘3’, nghĩa là ghế đó đã được chọn bởi người dùng, thì giảm biến soLuong đi 1
            if (ListGheXeT2[Index].TrangThai == '3') {
                let so = soLuong - 1;
                setsoLuong(so);//cập nhật trạng thái của component với số lượng ghế đã chọn
                //gán trạng thái của ghế thành ‘1’, nghĩa là ghế đó chưa được chọn
                ListGheXeT2[Index] = { Id: ListGheXeT2[Index].Id, Ten: ListGheXeT2[Index].Ten, Id_Xe: ListGheXeT2[Index].Id_Xe, TrangThai: '1', Index: Index, SoGhe: ListGheXeT2[Index].SoGhe };
            } else {//Nếu trạng thái của ghế khác ‘3’, nghĩa là ghế đó chưa được chọn bởi người dùng
                if (soLuong > 3) { //Nếu soLuong lớn hơn 3, nghĩa là người dùng đã chọn quá nhiều ghế, thì gọi hàm Alert.alert để hiển thị một thông báo cho người dùng biết là quý khách chỉ được chọn tối đa 4 ghế cho mỗi lần đặt
                    Alert.alert("Thông báo", "Quý khách chỉ được chọn tối đa 4 ghế cho mỗi lần đặt");
                } else {//Nếu soLuong không lớn hơn 3, nghĩa là người dùng có thể chọn thêm ghế
                    let so = soLuong + 1;//Tăng biến soLuong lên 1
                    setsoLuong(so);//cập nhật trạng thái của component với số lượng ghế đã chọn
                    //gán trạng thái của ghế thành ‘3’, nghĩa là ghế đó đã được chọn
                    ListGheXeT2[Index] = { Id: ListGheXeT2[Index].Id, Ten: ListGheXeT2[Index].Ten, Id_Xe: ListGheXeT2[Index].Id_Xe, TrangThai: '3', Index: Index, SoGhe: ListGheXeT2[Index].SoGhe };
                }
            }
            const List: any = []; //khai báo một biến có tên là List, là một mảng có kiểu dữ liệu là any, nghĩa là nó có thể chứa bất kỳ giá trị nào
            //Duyệt qua mảng ListGheXeT2, và thêm các phần tử của nó vào mảng List
            for (let index = 0; index < ListGheXeT2.length; index++) {
                await List.push(ListGheXeT2[index]);
            }
            await setListGheXeT2(List);
        }
    }

    // Hàm gọi API để lấy thông tin đặt vé tầng 1
    const getDatveTang1 = async () => {
        //TODO: Thực hiện gọi API để lấy thông tin đặt vé tầng 1
    }

    // Hàm chuyển sang trang đặt vé khi người dùng nhấn nút "Tiếp Tục"
    const nextPage = async () => {
        //Khai báo mãng rỗng có tên là List để lưu trữ danh sách ghế đã chọn
        const List: any = [];
        // Thêm danh sách ghế đã chọn ở tầng 1
        //Duyệt qua mảng ListGheXeT1, là một mảng chứa các đối tượng về các ghế trên xe của tầng 1
        for (let index = 0; index < ListGheXeT1.length; index++) {
            //Nếu trạng thái bằng ‘3’, nghĩa là ghế đó đã được chọn bởi người dùng, thì sử dụng await để đợi kết quả của hàm List.push
            if (ListGheXeT1[index].TrangThai === '3') {
                await List.push({
                    Id: ListGheXeT1[index].Id//Phần tử mới là một đối tượng chứa một thuộc tính là Id, là id của ghế
                });
            }
        }
        // Thêm danh sách ghế đã chọn ở tầng 2
        //Duyệt qua mảng ListGheXeT2, là một mảng chứa các đối tượng về các ghế trên xe của tầng 2
        for (let index = 0; index < ListGheXeT2.length; index++) {
            //Nếu trạng thái bằng ‘3’, nghĩa là ghế đó đã được chọn bởi người dùng, thì sử dụng await để đợi kết quả của hàm List.push
            if (ListGheXeT2[index].TrangThai === '3') {
                await List.push({
                    Id: ListGheXeT1[index].Id//Phần tử mới là một đối tượng chứa một thuộc tính là Id, là id của ghế
                });
            }
        }
        // Chuyển sang trang đặt vé và truyền thông tin ghế đã chọn
        navigation.navigate('BookTicket', { data: List, Id_ChuyenDi: Id_ChuyenDi, TongTien: (250000 * soLuong) });
    }

    // Hook useEffect để gọi API lấy danh sách ghế khi màn hình được tạo
    useEffect(() => {
        GhetGheXeByChuyenDi();
    }, []);

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content"></StatusBar>
            <View style={{ height: 42, backgroundColor: '#642EFE' }}></View>
            <View style={{ backgroundColor: '#FFFFFF', justifyContent: "space-between", flexDirection: 'row', padding: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}><IconIonicons name="chevron-back" size={28} color="black" /></TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Chọn ghế</Text>
                <Text>      </Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#dee3e0' }}></View>

            <View style={{ padding: 15, flexDirection: 'row', backgroundColor: '#FFFFFF', }}>
                <View style={{ width: '50%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                        <IconEntypo name="squared-cross" size={38} color="#DDDDDD" />
                        <Text>Đã bán</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconIonicons name="square-outline" size={38} color="#0101DF" />
                        <Text>Đang chọn</Text>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                        <IconIonicons name="square-outline" size={38} color="black" />
                        <Text>Chưa đặt</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ backgroundColor: '#f2f0f0', borderRadius: 30, padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => setTang(1)} style={{ padding: 20 }}><Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tầng 1</Text></TouchableOpacity>

                            <TouchableOpacity onPress={() => setTang(2)} style={{ padding: 20 }}><Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Tầng 2</Text></TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#CCCCCC', height: 1, marginBottom: 12 }}>
                        </View>
                        {Tang == 1 &&
                            <View style={{ alignContent: 'center', alignSelf: 'center', width: '90%', height: 330, flexWrap: 'wrap' }}>
                                {ListGheXeT1.map((item: any) => {
                                    return <View key={item.Id}>

                                        {item.TrangThai == '1' ?
                                            <TouchableOpacity style={{ paddingHorizontal: 35 }} onPress={() => Chonchongoi(item.Index, 1)}><IconIonicons name="square-outline" size={(item.SoGhe == 20) ? 60 : 50} color="black" /></TouchableOpacity>
                                            : item.TrangThai == '2' ?
                                                <Text style={{ paddingHorizontal: 34 }}><IconEntypo name="squared-cross" size={(item.SoGhe == 20) ? 60 : 50} color="#DDDDDD" /></Text>
                                                :
                                                <TouchableOpacity style={{ paddingHorizontal: 35 }} onPress={() => Chonchongoi(item.Index, 1)}><IconIonicons name="square-outline" size={(item.SoGhe == 20) ? 60 : 50} color="#0101DF" /></TouchableOpacity>
                                        }
                                    </View>
                                })}
                            </View>
                        }

                        {Tang == 2 &&
                            <View style={{ alignContent: 'center', alignSelf: 'center', width: '90%', height: 330, flexWrap: 'wrap' }}>
                                {ListGheXeT2.map((item: any) => {
                                    return <View key={item.Id}>

                                        {item.TrangThai == '1' ?
                                            <TouchableOpacity style={{ paddingHorizontal: 35 }} onPress={() => Chonchongoi(item.Index, 2)}><IconIonicons name="square-outline" size={(item.SoGhe == 20) ? 60 : 50} color="black" /></TouchableOpacity>
                                            : item.TrangThai == '2' ?
                                                <Text style={{ paddingHorizontal: 34 }}><IconEntypo name="squared-cross" size={(item.SoGhe == 20) ? 60 : 50} color="#DDDDDD" /></Text>
                                                :
                                                <TouchableOpacity style={{ paddingHorizontal: 35 }} onPress={() => Chonchongoi(item.Index, 2)}><IconIonicons name="square-outline" size={(item.SoGhe == 20) ? 60 : 50} color="#00CCFF" /></TouchableOpacity>
                                        }
                                    </View>
                                })}
                            </View>
                        }
                    </View>
                    {soLuong > 0 &&
                        <View style={{ marginTop: 20, justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                            <View><Text style={{ color: 'black', fontSize: 18 }}>Số Lượng : {soLuong} chố</Text>
                                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{giaTien * soLuong}VND</Text></View>
                            <TouchableOpacity onPress={() => nextPage()} style={{ backgroundColor: '#642EFE', height: 40, alignItems: 'center', borderRadius: 10 }}><Text style={{ color: 'white', paddingTop: 8, fontSize: 15, paddingHorizontal: 15 }}>Tiếp Tục</Text></TouchableOpacity></View>
                    }
                </View>
            </ScrollView>
        </>
    )
}
export default ChooseSeatScreen