import React, { Component } from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.9},
    {id: 2, nome: 'Ana', nota: 9.1},
    {id: 3, nome: 'Bia', nota: 5.4},
    {id: 4, nome: 'Claudia', nota: 7.6},
    {id: 5, nome: 'Roberto', nota: 6.8},
    {id: 6, nome: 'Rafael', nota: 9.9},
    {id: 7, nome: 'Guilherme', nota: 10.0},
    {id: 8, nome: 'Rebeca', nota: 8.8},
    {id: 9, nome: 'Tobias', nota: 8.8},
    {id: 10, nome: 'Florentina', nota: 7.8},
    {id: 11, nome: 'João', nota: 7.9},
    {id: 12, nome: 'Ana', nota: 9.1},
    {id: 13, nome: 'Bia', nota: 5.4},
    {id: 14, nome: 'Claudia', nota: 7.6},
    {id: 15, nome: 'Roberto', nota: 6.8},
    {id: 16, nome: 'Rafael', nota: 9.9},
    {id: 17, nome: 'Guilherme', nota: 10.0},
    {id: 18, nome: 'Rebeca', nota: 8.8},
    {id: 19, nome: 'Tobias', nota: 8.8}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    BorderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center',
    justifyContent: 'center'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItems} keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}