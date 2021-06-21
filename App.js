import React from 'react';
import {StyleSheet, View} from 'react-native'

import CadastroPessoa from './src/componentes/CardCasdastroPessoa/CadastroPessoa';

export default function App() {
 
    return(
      <View style={styles.back}>
        <CadastroPessoa />
      </View>
    );

}

const styles = StyleSheet.create({
  back:{
    backgroundColor:"#000"
  }
})


