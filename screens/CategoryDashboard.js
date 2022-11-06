import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from "../consts/colors";
import { Card } from "react-native-paper";
import plants from '../consts/plants'

const Button = ({ onPress, style, icon }) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Icon name={icon} size={24} />
    </TouchableOpacity>
)
const CategoryDashboard = ({navigation}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <View style={style.header}>
                <Icon name="arrow-left" size={28} onPress={() => navigation.goBack()} />
                <Icon name="bars" size={28} onPress={() => navigation.navigate("Dashboard")} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.white }}>

                <FlatList
                    style={{ marginTop: 60 }}
                    data={plants}
                    keyExtractor={item => item.key}
                    renderItem={({ item, index }) => {
                        return <View style={{ flexDirection: 'row', padding: 20, marginBottom: 20, backgroundColor: COLORS.light, borderRadius: 16 }}>
                            <Image source={item.img}
                                style={{ width: 70, height: 70, borderRadius: 75 }}
                            />
                            <View style={{ marginLeft: 20, marginTop: 5 }}>
                                <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.name}</Text>
                                
                            </View>
                            
                            <View style={{ marginLeft: -80, marginTop: 40, flexDirection:'row' }}>
                            <Icon name="edit" style={{padding:20}} size={28} onPress={() => navigation.navigate("Dashboard")} />
                                <Icon name="trash" style={{padding:20}} size={28} onPress={() => navigation.navigate("Dashboard")} />
                            </View>
                            
                        </View>
                    }}
                />

            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})


export default CategoryDashboard;
