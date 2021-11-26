import React,{useState,useEffect} from "react";
import {View, Text, FlatList,StyleSheet, Image} from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import apiUrl from "../config.json";
import axios from "axios";
import iconImage from "../../assets/rythem.png";
import vectorIcon from "../../assets/icon/Vector.png";
import moment from "moment";
import  * as Progress from 'react-native-progress';


const ListOfItem=(listItem)=>(
    
    <View style={styles.container}>
        {console.log(listItem.listItem.daily_practice_time)}
        <View style={styles.imageTileWraper}>
            <Image style={styles.imageStyle} source={iconImage}/>
            <View>
                <Text style={styles.title}>{listItem.listItem.title.length > 15 ? listItem.listItem.title.substring(0,15)+"..." : listItem.listItem.title}</Text>
                <Text style={styles.music}>{listItem.listItem.music_genre}</Text>
            </View>
        </View>
        <View style={{flexDirection:"row",flex:1,justifyContent:"space-around"}}>
            <View>
                <Text style={styles.days}>{listItem.listItem.days_practiced} days / {listItem.listItem.daily_practice_time} minute per days</Text>
            </View>
            <View>
                 <Image style={styles.vectorIconStyle} source={vectorIcon}/>
            </View>
        </View>
        <View style={{ marginHorizontal:20,marginBottom:15,flexDirection:"row"}}>
            <View style={{top:10,}}>
                     <Progress.Bar progress={(listItem.listItem.days_practiced/listItem.listItem.days)} width={200} />
             </View>
             <View style={{marginLeft:30,}}>
                    <Text style={styles.days}>{Math.floor((listItem.listItem.days_practiced*100)/listItem.listItem.days)} %</Text>
            </View>                    
        </View>
    </View>
)



const ListItem = () =>{
    const [listOfData, setListOfData] = useState([])
  useEffect(()=> {
    getData();
  },[])

  const getData=async()=>{
     await axios.get("http://5.9.18.28:8061/assignment/").then((res)=>{
        setListOfData(res.data)
     }).catch((e)=>{
         console.log(e)
     })
  }

    return(
        <View style={styles.mainContainer}>
            <FlatList
                data={listOfData}
                keyExtractor={({item,index}) => index}
                renderItem={({item}) => {
                    return (
                        <ListOfItem listItem={item}/>
                    );
                }}
                />
        </View>
    )
};
export default ListItem;

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection:"column"
    },
    container: {
        width:310,
        height:170,
        backgroundColor:"#FFFFFF",
        marginHorizontal:20,
        marginVertical:15,
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    imageStyle: {
        height:50,
        width:50,
    },
    title: {
        fontSize:18,
        color:"#000",
        marginHorizontal:20,
        fontWeight:"bold"
    },
    imageTileWraper: {
        flexDirection:"row",
        margin:20
    },
    music: {
        fontWeight:"bold",
        fontSize:14,
        color:"gray",
        marginHorizontal:20,
    },
    vectorIconStyle: {
        height:30,
        width:30,
    },
    days: {
        fontSize:15,
        color:"#000",
        marginHorizontal:20,
    }
})