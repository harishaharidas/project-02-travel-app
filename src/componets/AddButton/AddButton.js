import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class AddButton extends Component {

    render() {

        return (
            <TouchableOpacity>
                <Text style={[styles.buttonContent]}>
                    {this.props.buttonName}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    buttonContent: {
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
        width: 300,
        borderColor: "#00BFFF",
        borderWidth: 1,
        backgroundColor: "#00BFFF",
        borderRadius: 32
    },
});

export default AddButton;