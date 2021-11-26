import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import apiUrl from "../config.json";
import axios from "axios";

const AddForm = ({setModalVisible,modalVisible}) => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [music_genre,setMusic_genre] = useState("")
    const [daily_practice_time,setDaily_practice_time] = useState("")
    const [days,setDays] = useState("")
    const [days_practiced,setDays_practiced] = useState("")
  
    const handleSubmit= async()=>{
        const data={title:title,description:description,music_genre:music_genre,daily_practice_time:daily_practice_time,days:days,days_practiced:days_practiced}
        await axios.post(apiUrl.apiEndPoint + "/assignment/",data).then((res)=>{
            console.log(res)
            setTitle("")
            setDescription("")
            setMusic_genre("")
            setDaily_practice_time("")
            setDays("")
            setDays_practiced("")
            setModalVisible(!modalVisible)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <View style={styles.centeredView}>
      <TextInput 
            value={title}
            onChangeText={(e)=> setTitle(e)}
            placeholder="Enter title"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
        />
        <TextInput 
            value={description}
            onChangeText={(e)=> setDescription(e)}
            placeholder="Enter description"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
        />
        <TextInput 
            value={music_genre}
            onChangeText={(e)=> setMusic_genre(e)}
            placeholder="Enter music_genre"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
        />
        <TextInput 
            value={daily_practice_time}
            onChangeText={(e)=> setDaily_practice_time(e)}
            placeholder="Enter daily practice time in minute"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
            keyboardType="number-pad"
        />
        <TextInput 
            value={days}
            onChangeText={(e)=> setDays(e)}
            placeholder="Enter days"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
            keyboardType="number-pad"
        />
        <TextInput 
            value={days_practiced}
            onChangeText={(e)=> setDays_practiced(e)}
            placeholder="Enter days practiced"
            style={styles.textInput}
            placeholderTextColor="gray"
            inlineImagePadding={10}
            keyboardType="number-pad"
        />
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.textStyle}>Cancel</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => handleSubmit()}
            >
            <Text style={styles.textStyle}>Submit</Text>
         </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  textInput: {
      color:"#000",
      borderWidth:1,
      borderColor:"gray",
      borderRadius:15,
      marginVertical:5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:"#000"
  }
 
});

export default AddForm;