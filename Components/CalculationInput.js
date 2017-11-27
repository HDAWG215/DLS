import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './StyleSheet';

export default class CalculationInput extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <View>
                <Text style={styles.common.textInputHeading}>{this.props.title}</Text>
                <TextInput
                    keyboardType='numeric'
                    returnKeyType='done'
                    style={styles.common.textBox}
                    onChangeText={this.props.textChange}
                    value={this.props.text}
                />
            </View>
        )
    }
}