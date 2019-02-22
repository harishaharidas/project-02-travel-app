import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, Image, ImageBackground, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

import appIcon from './Images/icon.jpg';
import backgroundImage from './Images/background.jpg';

import InputItem from "./componets/InputItem/InputItem";
import AddButton from "./componets/AddButton/AddButton";

export default class SignInPage extends Component {

  state = {
    content: ""
  };


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.header}>
            <ImageBackground source={backgroundImage}
              style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={appIcon}
                style={{ width: 120, height: 120 }} />
              <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>Sign In</Text>
            </ImageBackground>
          </View>
          <View style={styles.main}>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.firstInput}>
              <InputItem
                contentInput="Name or E-mail"
                icon="account"
                check={false}
              />
            </View>
            <View style={styles.secondInput}>
              <InputItem
                contentInput="Password"
                icon="eye-outline"
                check={true}
              />
            </View>
          </View>

          <View style={styles.sub}>
            <AddButton
              buttonName="Sign In"
              buttonWidth='300'
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#A9A9A9', fontSize: 16 }}>Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text style={{ color: '#808080', fontSize: 16, fontWeight: 'bold' }}>
                  Create Now
              </Text>
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </View>
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
    alignItems: 'center',

  },
  inputContainer: {
    width: "90%",
    flex: 1,
    position: "absolute",
    backgroundColor: 'white',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 12,
    margin: 20,
    marginTop: 280,
    padding: 20,
    paddingBottom: 70,
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
    alignItems: 'center',
    position: "absolute",
    marginTop: 530,
    width: "80%",
    marginLeft: 40,
  }

});
