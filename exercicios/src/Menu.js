import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contador'
import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
Flex:{
    screen: Flex
},

ListaFlex: {
  screen: ListaFlex,
  navigationOptions: {title: 'Lista (Flex Box)' }
},    
TextoSincronizado:{
    screen: TextoSincronizado,
    navigationOptions:{title: 'Texto Sincronizado'}
} ,  
    
    
Avo:{     
   screen: () => <Avo nome='João' sobrenome='Rodrigues'/>
},
Evento:{
    screen: Evento
},

ValidarProps: {
    screen: () => <ValidarProps ano={18}/>
},

    plataformas: {
    screen: Plataformas
    },
contador: {
    screen: () => <Contador numeroInicial={1000} />
},
MegaSena:{
     screen: () => <MegaSena numeros={6} />,
     navigationOptions: {title: 'Mega Sena' }
 },
Inverter:{
    screen: () => <Inverter texto='react Native!'/>
},
ParImpar:{
    screen: () => <ParImpar numeros={20} />,
    navigationOptions: {title: 'Par & Impar' }
},
Simples:{
    screen: () => <Simples texto='Flexível!!!!'/>
}
}, {drawerWidth: 300 })
