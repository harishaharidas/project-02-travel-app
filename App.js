/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import appIcon from './src/Images/icon.jpg';
import backgroundImage from './src/Images/background.jpg';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={backgroundImage} 
          style={{ width: '100%', height: '100%' ,alignItems: 'center',justifyContent: 'center'}}>
            <Image source={appIcon}
              style={{ width: 120, height: 120 }} />
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Sign In</Text>
          </ImageBackground>
        </View>
        <View style={styles.main}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#00BFFF',
  },
  main: {
    flex: 1,
    alignItems: 'center'
  }

});
