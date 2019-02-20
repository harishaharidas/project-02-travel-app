import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class AddButton extends Component {

    render() {

        return (
            <View style={styles.buttonContent}>
                <Button
                    title={this.props.buttonName}
                    color="#00BFFF"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonContent: {
        textAlign: "center",
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        width:"50%",
        // paddinig:15,
        justifyContent: 'center',
    }

});

export default AddButton;