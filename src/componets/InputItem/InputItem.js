import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

class InputItem extends Component {
    state = {
        content: ''

    };

    contentHandler = val => {
        this.setState({
            content: val
        });
    };

    render() {

        return (
            <View style={styles.inputContainer}>
                <View style={styles.nameInput}>
                    <Text style={{ color: '#D3D3D3', fontSize: 16 }}>{this.props.contentInput}</Text>
                    <TextInput
                        style={{ width: "100%", fontSize: 18}}
                        placeholder="Enter"
                        value={this.state.conent}
                        secureTextEntry={this.props.check}
                        onChangeText={this.contentHandler}
                    />
                </View>
                <View style={styles.inputIcon}>
                    <Icons name= {this.props.icon}
                    color="#DCDCDC"
                        size={40}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "#F5F5F5",
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: 'white',
    },
    nameInput: {
        flex: 3,
    
    },
    inputIcon: {
        flex: 1,
        paddingTop:30
    }
});

export default InputItem;
