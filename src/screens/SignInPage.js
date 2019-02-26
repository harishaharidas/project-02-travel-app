import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, Image, ImageBackground, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

import appIcon from '../Images/icon.jpg';
import backgroundImage from '../Images/background.jpg';

import InputItem from "../componets/InputItem/InputItem";
import AddButton from "../componets/AddButton/AddButton";

export default class SignInPage extends Component {

  state = {
    content: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <ScrollView>
            <ImageBackground source={backgroundImage}
              style={styles.backgroundStyle}>
              <View style={styles.iconImage}>
                <Image source={appIcon}
                resizeMode='cover'
                  style={{ height: 100, width: 100, marginTop: '5%'}} />
              </View>
              <Text style={styles.textContent}>Sign In</Text>
              <View style={styles.inputContent}>
                <InputItem
                  contentInput="Name or E-mail"
                  icon="account-outline"
                  check={false}
                />
                <InputItem
                  contentInput="Password"
                  icon="eye-outline"
                  check={true}
                />
              </View>
              <AddButton
                buttonName='Sign In' />
            </ImageBackground>
          <View style={styles.footerContent}>
            <Text style={{ color: 'lightgrey' }}>Don't have an account,</Text>
            <TouchableOpacity><Text style={{ color: 'grey' }}>Create Now</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    width: '100%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    flex:1,
    paddingBottom: '4%',
    paddingTop: '8%',
    paddingLeft: '2%',
    paddingRight: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: '30%',
    borderRadius: 30
  },
  textContent: {
    color: 'white',
    fontSize: 22,
    marginTop: '3%',
    fontWeight: '700',
    fontWeight: '300',
  },
  inputContent: {
    height: 230,
    marginTop: '4%',
    width: '90%',
    backgroundColor: '#FAF8F8',
    borderRadius: 8,
    // backgroundColor: 'red',
    justifyContent: 'flex-start'
  },
  footerContent: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '15%',
    
  }
});
