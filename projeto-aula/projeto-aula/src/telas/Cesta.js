import React from 'react';
import {Text,Image,View,StyleSheet,Dimensions} from 'react-native';
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png"

const dimension = Dimensions.get('screen').width;
export default function Cesta(){
  return(
    <>
    <Image source={topo} StyleSheet ={styleCesta.topo}/>
    <Text StyleSheet={styleCesta.title}>DETALHES DA CESTA</Text>
    <View> 
    <Text >Cesta de Verduras </Text>
     <View>
     <Image source={logo}/>
     <Text>Fazenda do Alemao</Text>
    </View>
    </View>
    </>
  )
}
const styleCesta = StyleSheet.create({
  topo:{
    width:"100%",
    height:578/768 * dimension,
  },
  title:{
    width:"100%",
    position:"absolute",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"white",
    fontWeight:"bold",
    padding:16,
  }

})



