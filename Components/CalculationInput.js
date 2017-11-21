import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './StyleSheet';

export default class CalculationInput extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <TextInput
                style={styles.textBox}
                onChangeText={this.props.textChange}
                value={this.props.text}
            />
        )
    }
}