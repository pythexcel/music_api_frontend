/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import Frame from './src/component/Frame';
 import Search from "./src/component/Search";
 import ListItem from './src/component/ListItem';
 
 const App = () => {
  
 
   return (
         <View style={styles.maineContainer}>
           <View style={{flex:2}}>
               <Frame />
           </View>
           <View style={{flex:1}}>
                <Search/>
           </View>
           <View style={{flex:6}}>
                <ListItem/>
           </View>
         </View>
   );
 };
 
 const styles = StyleSheet.create({
   maineContainer: {
     flex: 1,
     backgroundColor: "#F3F6FA",
     flexDirection:"column"
   },
  
 });
 
 export default App;
 