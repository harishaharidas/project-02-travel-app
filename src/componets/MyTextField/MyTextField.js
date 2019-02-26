import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MytextField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.iconName} style={styles.iconStyle} />
        <TextInput placeholder={this.props.placeHolder} style={styles.textInputStyle} placeholderTextColor='lightgrey' keyboardType= {this.props.keyBoardType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginLeft: 15,
    paddingTop: 15,
    borderBottomColor: 'lightgrey'
  },
  textInputStyle: {
    width: 135,
    height: 40,
    // paddingBottom: -2,
  },
  iconStyle: {
    marginTop: 12,
    fontSize: 24,
    color: 'lightgrey',
  },
});
