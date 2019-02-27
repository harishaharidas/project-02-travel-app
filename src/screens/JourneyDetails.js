import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import backGroundImageTop from '../Images/background.jpg';
import flightImage from '../Images/icon.jpg';
import MyTextField from '../componets/MyTextField/MyTextField';
import MyDatePicker from '../componets/MyDatePicker/MyDatePicker'

export default class JourneyDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent />
        <View style={{ height: 70 }}>
          <ImageBackground source={backGroundImageTop} style={[styles.backGroundTop, { justifyContent: 'space-between' }]} >
            <TouchableOpacity style={{ width: 80 }}>
              <Icon name='chevron-left' style={styles.backIconStyle} />
            </TouchableOpacity>
            <View style={styles.planeTicket}>
              <Text style={styles.planeTicketText}>Plane Ticket</Text>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={styles.formSection}>
          <ImageBackground source={backGroundImageTop} style={[styles.backGroundTop]} >
            <View style={styles.semicircle}>
              <Image source={flightImage} style={styles.flightImage} />
            </View>
          </ImageBackground>
          <View style={styles.tripType}>
            <TouchableOpacity style={[styles.tripSelect]}>
              <Text style={[styles.tripSelectText, { color: 'white' }]}>Round</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tripSelect, { backgroundColor: 'transparent' }]}>
              <Text style={styles.tripSelectText}>One Way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tripSelect, { backgroundColor: 'transparent' }]}>
              <Text style={styles.tripSelectText}>Multi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputFields}>
            <MyTextField
              placeHolder='From'
              iconName='map-marker'
              keyBoardType='default'
            />
            <MyTextField
              placeHolder='To'
              iconName='map-marker'
              keyBoardType='default'
            />
            <MyDatePicker
              placeHolder='Departure Date'
              DateIcon='calendar-clock'
            />
            <MyDatePicker
              placeHolder='Return Date'
              DateIcon='calendar-clock'
            />
            <MyTextField
              placeHolder='Number of Passengers'
              iconName='account'
              keyBoardType='number-pad'
            />
            <MyTextField
              placeHolder='Flight Class'
              iconName='crown'
              keyBoardType='default'
            />
          </View>
          <View style={styles.moreDetailFlex}>
            <TouchableOpacity>
              <Text style={styles.moreDetailsText}>more details
                <Icon name='chevron-down' style={styles.moreDetailIcon} /></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={{ color: 'white', fontSize: 18 }}>Search Flights</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  backGroundTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  backIconStyle: {
    fontSize: 50,
    color: 'white',
    paddingTop: 20,
    fontWeight: '100',
  },
  planeTicket: {
    flex: 1,
    marginLeft: -40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  planeTicketText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    marginLeft: -60,
    fontSize: 20,
  },
  semicircle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    top: 75,
    backgroundColor: 'white'
  },
  flightImage: {
    width: 60,
    height: 60,
    left: 45,
    top: 18,
  },
  formSection: {
    flex: 3,
    width: '100%',
    backgroundColor: 'white',
  },
  tripType: {
    flexDirection: 'row',
    height: '7%',
    width: '95%',
    marginLeft: '3%',
    marginTop: 30,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
    borderWidth: 1,
    borderColor: 'lightblue',
  },
  tripSelect: {
    flex: 1,
    borderTopLeftRadius: 45,
    borderBottomLeftRadius: 45,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
    backgroundColor: '#33ccff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tripSelectText: {
    color: 'grey',
    fontSize: 14,
  },
  inputFields: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 30,
    marginLeft: 12,
    marginRight: 15,
  },
  moreDetailsText: {
    marginTop: 32,
    color: 'darkblue',
    fontSize: 12,
  },
  moreDetailFlex: {
    paddingRight: '4%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  moreDetailIcon: {
    fontSize: 16,
    paddingTop: 12,
    color: 'blue',
  },
  buttonSection: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  searchButton: {
    height: 56,
    width: 280,
    backgroundColor: '#33ccff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});