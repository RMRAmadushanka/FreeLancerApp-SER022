import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import plants from '../consts/plants'
const HomeCategoryInfos = ({ navigation, route }) => {
    const plant = route.params;
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
        <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.white }}>
            <FlatList
                style={{ marginTop: 60 }}
                data={plant.data}
                keyExtractor={item => item.key}
                renderItem={({ item, index }) => {
                    return <View style={{ flexDirection: 'row',padding:20,marginBottom:20, backgroundColor:COLORS.light, borderRadius:16 }}>
                        <Image source={item.img}
                            style={{ width: 70, height: 70, borderRadius: 75 }}
                        />
                        <View style={{marginLeft:20, marginTop:5}}>
                            <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.name}</Text>
                            <Text style={{ fontSize: 18, opacity: .7 }}>{item.des}</Text>
                        </View>
                    </View>
                }}
            />
        </View>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
})

export default HomeCategoryInfos;
