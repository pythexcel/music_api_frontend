import React,{useState} from "react";
import { View, Text,Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Modal} from "react-native";
import frame from "../../assets/frame.png";
import vector from "../../assets/Vector.png";
import profile from "../../assets/teacherImage.png"
import add from "../../assets/add.png";
import AddForm from "./AddForm";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Frame=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.frameWaraper}> 
            <Image source={frame} resizeMode="stretch" style={{height:120,width:windowWidth*0.9999}} />
               <View  style={styles.imageStyle1}>
                   <Image source={vector} style={styles.vector}/> 
               </View>
               <View  style={styles.profileImageWraper}>
                   <Image source={profile} style={styles.profile}/> 
                   <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
                        <Image source={add} style={styles.add}/> 
                   </TouchableOpacity>
               </View>
               <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <AddForm setModalVisible={setModalVisible} modalVisible={modalVisible}/>
                       
                    </View>
                    </View>
                </Modal>
         </View>
    )
}

export default Frame;

const styles=StyleSheet.create({
    frameWaraper: { 
        flex:1,
    },
    imageStyle1:{
        alignItems:"flex-end",
        margin:20,
        top:-110
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    vector: {
        height:windowHeight*0.04, 
        width: windowWidth*0.09
    },
    profileImageWraper:{
        margin:windowWidth*.05,
        top:-windowHeight*.18,
        flexDirection:"row"
        
    },
    profile: {
        height:windowHeight*0.1, 
        width: windowWidth*0.2
    },
    add: {
        height:windowHeight*0.1,
        width: windowWidth*0.2,
        left:windowWidth*0.54,
        top:windowWidth*0.05
    },
    modalView: {
        justifyContent:"center",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    
   
})