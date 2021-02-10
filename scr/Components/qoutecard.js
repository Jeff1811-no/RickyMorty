
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const QoutesCards=({
    id,
    phrase,
    author,
   

})=>{
    return(
        
        <View style={styles.container}>
            <View style={styles.carta}>
            <Text style={styles.texto} >{id}</Text>
            <Text style={styles.texto}>{phrase}</Text>
            <Text style={styles.texto}>{author}</Text>
            
            </View>     
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto:{
          backgroundColor:'#000',
          color:"#fff",
      },
      carta:{
        borderRadius:10,
        margin:5,
        height:height*0.20,
        width:width*0.92,
        backgroundColor:"#4ED327",
        justifyContent:"center",
        marginVertical:5,
        borderColor:"#fff",
      },
      imagen:{
        height:75,
        width:75,
      }

})

export default QoutesCards;
1;