import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
//import Padrao from './estilo/Padrao'

export default class App extends React.Component{
  render(){
    return(
      <View style={style.container}>
        <Simples texto='Flexível!!!!'/>
        <ParImpar numero={23} />
        <Inverter texto='React Native!'/>
        <MegaSena numeros={6}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})