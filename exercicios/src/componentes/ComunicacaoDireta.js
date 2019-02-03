import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhoComProps(props) {
  return React.Children.map(props.Children,
    c => React.cloneElement(c,{...props, ...c.props}))
}

export const Filho = props =>
<View>
  <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
</View>

export const Pai = props =>
<View>
<Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
{/*props.children*/}
{filhoComProps(props)}
</View>

export const Avo = props =>
<View> 
   <Text {...fonte}>Avô: {props.nome} {props.sobrenome}></Text>
   <Pai nome= 'Waldir' sobrenome={props.sobrenome}>
   <Filho nome='Fabio'/>
   <Filho nome='Fernanda'/>
   </Pai>
   <Pai {...props} nome='Pedro'>
    <Filho nome='Rebeca'/>
    <Filho nome='Renata'/>
   </Pai>
</View>

export default Avo