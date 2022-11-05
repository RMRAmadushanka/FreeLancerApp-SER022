import { SafeAreaView, View, Text, Image,StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../consts/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>

            <View style={style.header}>
                <View>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome to</Text>
                    <Text style={{fontSize:38, fontWeight:"bold", color:COLORS.blue}}>Freelancer</Text>
                </View>
            <Icon name="bars" size={28} />
            </View>
            <View style={{marginTop: 30, flexDirection:'row'}}>
                <View style={style.searchContainer}>
                <Icon name="search" size={25} style={{marginLeft:20}}/>
                <TextInput placeholder="Search" style={style.input}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    searchContainer:{
        height: 50,
        backgroundColor:COLORS.light,
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        fontSize:10,
        fontWeight:"bold",
        color:COLORS.dark,
        flex:1
    }
})

export default Home;
