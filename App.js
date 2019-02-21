/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, Image, ImageBackground, StatusBar } from 'react-native';

import appIcon from './src/Images/icon.jpg';
import backgroundImage from './src/Images/background.jpg';

import InputItem from "./src/componets/InputItem/InputItem";
import AddButton from "./src/componets/AddButton/AddButton";

export default class App extends Component {

  state = {
    content: ""
  };


  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={styles.header}>
          <ImageBackground source={backgroundImage}
            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={appIcon}
              style={{ width: 120, height: 120 }} />
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Sign In</Text>
          </ImageBackground>
        </View>
        <View style={styles.main}>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.firstInput}>
            <InputItem
              contentInput="Name or E-mail"
              icon="account"
            />
          </View>
          <View style={styles.secondInput}>
            <InputItem
              contentInput="Password"
              icon="lock-outline"
            />
          </View>
        </View>
        <View style={styles.sub}>
          <AddButton 
          buttonName="Sign In"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    width: "90%",
    position: "absolute",
    backgroundColor: 'white',
    borderColor: '#F5F5F5',
    borderWidth: 0.5,
    borderRadius: 12,
    margin: 20,
    marginTop: 280,
    padding: 20,
    paddingBottom: 40,
    paddingTop: 40,
  },
  firstInput: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    backgroundColor: "white",
    margin: 5
  },
  secondInput: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    margin: 5
  },
  sub: {
    justifyContent: 'center'
  }

});
