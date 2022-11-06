import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, SafeAreaView, StyleSheet,Image } from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import plants from '../consts/plants'
const HomeCategoryInfos = ({ navigation, route }) => {
    const plant = route.params;

    return (<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      
        <View style={style.header}>
            <Icon name="arrow-left" size={28} onPress={()=>navigation.goBack()}/>
            <Icon name="bars" size={28} />
        </View>
        {/* {plant.map((item, index) => (
        <View style={{flexDirection:'row'}}>
            <Image source={item.data.img}  />
        </View>
        ))} */}
    </SafeAreaView>
    )
};

const style = StyleSheet.create({
    header: { paddingHorizontal: 20, marginTop: 50, flexDirection: 'row', justifyContent: 'space-between' }
})

export default HomeCategoryInfos;
