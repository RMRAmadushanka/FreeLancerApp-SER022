import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
const DeleteModal = (props) => {
   const closeModal = (bool,data) =>{
        props.changeModalVisible(bool);
        props.setData(data)
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={style.container}
        >
            <View style={style.modal}>
                <View style={style.textview}>
                    <Text style={style.text}>Are you sure?</Text>

                </View>
            </View>
            <View style={style.buttonView}>
                <TouchableOpacity style={style.touchopacity} onPress={()=>closeModal(false, 'Cancel')}>
                    <Text style={{color:'blue'}}>Cancle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.touchopacity} onPress={()=>closeModal(false, 'Ok')}>
                    <Text style={{color:'red'}}>Ok</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    textview:{
        flex:1,
        alignItems:'center'
    },
    text:{
        margin:5,
        fontSize:16,
        fontWeight:'bold'
    },
    buttonView:{
        width:'100%',
        flexDirection:'row',
        marginTop:-70
    },
    touchopacity:{
        flex:1,
        paddingVertical:10,
        alignItems:'center'
    }
})

export default DeleteModal;
