import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

export default class InputItem extends Component {
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
            <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{ color: '#D3D3D3'}}>{this.props.contentInput}</Text>
                    <TextInput
                        style={{ width: "100%"}}
                        placeholder="Enter"
                        value={this.state.conent}
                        secureTextEntry={this.props.check}
                        onChangeText={this.contentHandler}
                    />
                </View>
                <TouchableOpacity style={styles.inputIcon}>
                    <Icons name={this.props.icon}
                        color="#DCDCDC"
                        size={28}
                    />
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: "#C0C0C0",
        borderColor: "#FAF8F8",
        borderWidth: .5,
        margin: 32,
        // marginBottom: -15,
        marginRight:60,
        marginLeft: 60,
        backgroundColor: '#FAF8F8',
    },
    inputIcon: {
        paddingTop: 30,
        paddingRight: 4,
    }
});
