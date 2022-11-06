import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from "../consts/colors";
const Dashboard = ({navigation}) => {
    const Header = () =>{
        return(
            <View style={style.headerText}>
                <Text style={{fontSize:40,fontWeight:"bold"}}>Dashboard</Text>
            </View>
        )
    }
    const Boxes = () =>{
        return(
            <View style={style.boxContainer}>
                
                <View style={style.box}  onStartShouldSetResponder={()=>navigation.navigate("CategoryDashboard")}>
                    <View style={style.inner}>
                        
                        <Image style={{width:70, height:70, marginTop:-80,marginLeft:10}}  source={require("../assets/creator.png")} />
                        
                    </View>
                    <View><Text style={{marginTop:-80,marginLeft:20,fontWeight:"bold",fontSize:20}}>Users Manage</Text></View>
                </View>
               
                <View style={style.box} onStartShouldSetResponder={()=>navigation.navigate("CategoryDashboard")}>
                    <View style={style.inner}>
                        
                        <Image style={{width:70, height:70, marginTop:-80,marginLeft:10}}  source={require("../assets/menu.png")} />
                        
                    </View>
                    <View><Text style={{marginTop:-80,marginLeft:20,fontWeight:"bold",fontSize:20}}>Category Manage</Text></View>
                </View>
                <View style={style.box}>
                    <View style={style.inner}>
                        
                        <Image style={{width:70, height:70, marginTop:-80,marginLeft:10}}  source={require("../assets/freel.png")} />
                        
                    </View>
                    <View><Text style={{marginTop:-80,marginLeft:20,fontWeight:"bold",fontSize:20}}>Freelancers Manage</Text></View>
                </View>
                <View style={style.box}>
                    <View style={style.inner}>
                        
                        <Image style={{width:70, height:70, marginTop:-80,marginLeft:10}}  source={require("../assets/advertising.png")} />
                        
                    </View>
                    <View><Text style={{marginTop:-80,marginLeft:20,fontWeight:"bold",fontSize:20}}>advertisement Manage</Text></View>
                </View>
            </View>
        )
    }
    
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
        <View style={style.header}>
        <Icon name="arrow-left" size={28} onPress={() => navigation.goBack()} />
        <Icon name="bars" size={28} onPress={()=>navigation.navigate("Dashboard")} />
      </View>
     <Header/>
     <Boxes/>
      </SafeAreaView>
  );
};
const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      headerText:{
        width:'100%',
        height:"15%",
        alignItems:"center",
        justifyContent:"center",
        fontSize:50,
        fontWeight:"Bold"
      },
      boxContainer:{
        width:'100%',
        height:"50%",
        backgroundColor:COLORS.white,
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap'
      },
      box:{
        width:"50%",
        height:"50%",
        padding:5,
        
      },
      inner:{
        flex:1,
        backgroundColor:COLORS.light,
    
        justifyContent:'center',
        borderRadius: 30
      }
})
export default Dashboard;
