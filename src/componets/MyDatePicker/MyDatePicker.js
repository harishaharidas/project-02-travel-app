import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "" }
  }

  iconFunc = () => {
    return (
      <Icon name={this.props.DateIcon} />
    );
  }
  render() {
    return (
      <DatePicker
        style={{ width: 180, paddingTop: 20, paddingLeft: 20 }}
        date={this.state.date}
        mode="date"
        placeholder={this.props.placeHolder}
        format="DD-MM-YYYY"
        minDate={new Date()}
        maxDate="25-5;2019"
        iconComponent={<Icon name={this.props.DateIcon} style={{ fontSize: 24, color:'lightgrey' }} />}
        customStyles={{
          dateIcon: {
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
          },
          dateInput: {
            borderColor: 'transparent',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
          },
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}