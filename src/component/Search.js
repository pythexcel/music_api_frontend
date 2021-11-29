import React from "react";
import {View , Text, TextInput,StyleSheet,Dimensions,Image} from "react-native";
import search from "../../assets/images.png"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Search = () => {

    return(
        <View style={styles.maineContainer}>
            <Image source={search} style={styles.search}/>
            <TextInput 
            placeholder="search"
            style={styles.textInput}
            placeholderTextColor="lightgray"
            inlineImagePadding={10}
            />
        </View>
    )
}

export default Search;

const styles= StyleSheet.create({
    maineContainer:{
        flex:1,
        flexDirection:"row",
    },
    textInput: {
        color:"#000",
        backgroundColor:"#FFFFFF",
        marginHorizontal:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        width:windowWidth*0.8,
        height:windowHeight*0.07,
     },
    search:{
        width:windowWidth*.2,
        height:windowHeight*0.07,
        paddingHorizontal:10,
        left:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        zIndex:2,
        flex:0.3,
        paddingVertical:25
    }
})