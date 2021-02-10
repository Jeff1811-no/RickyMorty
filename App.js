import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import ramQuotes from "./scr/api/api";
import QoutesCards from "./scr/Components/qoutecard";
export default function App() {

  const [rmq,setquotes]=useState([]);

  const getqoutes= async()=>{
    const ll= await ramQuotes();

    setquotes(ll);
  }

  useEffect(()=>{
    getqoutes();
  },[])

 if(!rmq){
   return(
     <Text>No</Text>
   )
 }else{
  return (
    <View style={styles.container}>
       
        <ScrollView>
        {
        rmq.map((qoutes,index)=>(
          <QoutesCards 
          key={index}
            id={qoutes.id}
            phrase={qoutes.phrase}
            author={qoutes.author}
          />
          ))
        
        }
        </ScrollView>
      <Text>frase</Text>
    
    </View>
  );
 }
    
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
