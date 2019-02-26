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
          <View style={{ flex: 2, alignContent: 'space-between' }}>
            <ImageBackground source={backgroundImage}
              style={{ width: '100%', height: '75%', justifyContent: 'flex-start', alignItems: 'center' }}>
              <View style={{ height: '28%', width: '30%', backgroundColor: 'white', marginTop: '15%', borderRadius: 30 }}>
                <Image source={appIcon}
                  style={{ height: 120, width: 120 }} />
              </View>
              <Text style={{ color: 'white', fontSize: 22, fontWeight: '300' }}>Sign In</Text>
              <View style={{ height: 270, marginTop: 50, width: '90%', backgroundColor: '#FAF8F8', borderRadius: 8, justifyContent: 'flex-start' }}>
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
          </View>
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', marginTop:12}}>
            <Text style={{color:'lightgrey'}}>Don't have an account,</Text>
            <TouchableOpacity><Text style={{color: 'grey'}}>Create Now</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green'
  },
});
