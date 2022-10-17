import * as React from 'react';
import { SafeAreaView, View, StyleSheet,Text} from 'react-native';
import Constants from 'expo-constants';
import Cesta from "./src/telas/Cesta"
import Texto from "./src/components/Texto"
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
    let [fontsLoaded] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold" : Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
  return (
    <View >
      <Texto>Modelo</Texto>
      
      <Cesta/>
    </View>
  );
}
