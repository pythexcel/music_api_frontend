import React from "react";
import { View, Text, TextInput, StyleSheet, Dimensions, Image } from "react-native";
import search from "../../assets/images.png";
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Search = () => {

    return (
        <View style={styles.maineContainer}>

            <TextInput
                placeholder="search"
                style={styles.textInput}
                placeholderTextColor="lightgray"
                inlineImagePadding={10}
            />
            <Icon style={styles.search} name="search" size={30} color="#000" />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    maineContainer: {
        marginHorizontal: 10
    },
    textInput: {
        color: "#000",
        backgroundColor: "#FFFFFF",
        width: windowWidth * 0.9,
        height: windowHeight * 0.06,
        borderRadius: 20,
        marginHorizontal: 10,
        paddingLeft: 40
    },
    search: {
        position: "absolute",
        paddingTop: 15,
        paddingLeft: 15

    }
})