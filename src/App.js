/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import ParImpar from './componetes/ParImpar'
import Simples from './componetes/Simples'
import { Inverter , MegaSena} from './componetes/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível!!!!' />
        <ParImpar numero={31} />
        <Inverter texto = 'React Nativo!' />
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
