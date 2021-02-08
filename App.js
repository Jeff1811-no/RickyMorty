import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ramQuotes from "./scr/api/api";
export default function App() {

  const [rmq,setquotes]=useState([]);

  const getqoutes= async()=>{
    const ll= await ramQuotes();
    console.log(ll)
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
      {
        rmq.map((qoutes,index)=>(
          <View>
              <Text>{qoutes.phrase}</Text>
              <Text>{qoutes.author}</Text>
          </View>
        
          ))
          
        

        }
      
      <Text>frase</Text>
      <StatusBar style="auto" />
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
