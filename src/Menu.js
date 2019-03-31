import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

export default createDrawerNavigator({
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
    }
}, { drawerWidth: 300})