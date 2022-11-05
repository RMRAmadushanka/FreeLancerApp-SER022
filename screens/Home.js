import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../consts/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import plants from '../consts/plants'
const width = Dimensions.get("screen").width/2-30
const Home = () => {
    const categories = ['web design', 'Logo Design', 'Programming', "Artist"]
    const [categoryIndex, setcategoryIndex] = React.useState(0)
    const CategoryList = () => {
        return <View style={style.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() =>setcategoryIndex(index)} >
                    <Text  style={[style.categoryText, categoryIndex == index && style.categoryTextSelected]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    }
    const navigation = useNavigation();
    const Card = (item) =>{
        return <View style={style.card}></View>
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>

            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.blue }}>Freelancer</Text>
                </View>
                <Icon name="bars" size={28} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 20 }} />
                    <TextInput placeholder="Search" style={style.input} />
                </View>
            </View>
            <CategoryList />
            <FlatList columnWrapperStyle={{justifyContent:"space-between"}} numColumns={2} data={plants} renderItem={({item})=><Card plant={item}/>}/>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.dark,
        marginLeft: 10,
        flex: 1
    },
    categoryContainer: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    categoryText: {
        color: "grey",
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.blue,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.blue
    },
    card:{
        height:225,
        backgroundColor:COLORS.light,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        padding:15
    }
})

export default Home;
