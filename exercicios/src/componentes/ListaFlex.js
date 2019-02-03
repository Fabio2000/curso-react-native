import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [  
    {id: 1, nome: 'Fabio', nota: 7.9},
    {id: 2, nome: 'Thomas', nota: 7},
    {id: 3, nome: 'Igor', nota: 10},
    {id: 4, nome: 'Thifany', nota: 7.9},
    {id: 5, nome: 'Carlos', nota: 5.9},
    {id: 6, nome: 'Gabriel', nota: 8.9},
    {id: 7, nome: 'Jay', nota: 9.9},
    {id: 8, nome: 'Maria', nota: 5.7},
    {id: 9, nome: 'João', nota: 7.4},

    {id: 11, nome: 'Fabio', nota: 7.9},
    {id: 12, nome: 'Thomas', nota: 7},
    {id: 13, nome: 'Igor', nota: 10},
    {id: 14, nome: 'Thifany', nota: 7.9},
    {id: 15, nome: 'Carlos', nota: 5.9},
    {id: 16, nome: 'Gabriel', nota: 8.9},
    {id: 17, nome: 'Jay', nota: 9.9},
    {id: 18, nome: 'Maria', nota: 5.7},
    {id: 19, nome: 'João', nota: 7.4},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    //Flex
    //justifyContent: 'space-around'
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
}

export const Aluno = props => 
<View style={itemEstilo}>
   <Text>Nome: {props.nome}</Text>
   <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
</View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => `${index}` }/>
        </ScrollView>
    )
}