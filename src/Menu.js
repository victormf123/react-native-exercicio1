import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import ParImpar from './componetes/ParImpar'
import Simples from './componetes/Simples'
import { Inverter , MegaSena} from './componetes/Multi'
import Contador from './componetes/Contador'
import Plataformas from './componetes/Plataformas'
import ValidarProps from './componetes/ValidarProps'
import Evento from './componetes/Evento'
import { Avo } from './componetes/ComunicacaoDireta'
import { TextoSincronizado } from './componetes/ComunicacaoIndireta'
import ListaFlex from './componetes/ListaFlex'
import Flex from './componetes/Flex'


const MyDrawerNavigator = createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!'/>
    },
    Contador: {
        screen: () => <Contador numero={8} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    }, 
    ValidarProps: {
        screen: () => <ValidarProps ano={18}/>
    },
    Evento: {
        screen: () => <Evento />
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    TextoSincronizado: {
        screen: () => <TextoSincronizado />
    },
    ListaFlex: {
        screen: () => <ListaFlex />,
        navigationOptions: { title: 'Lista (Flex Box)' }
    },
    Flex: {
        screen: () => <Flex />
    },

}, { drawerWidth: 300})

export default Menu = createAppContainer(MyDrawerNavigator)