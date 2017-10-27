import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './StyleSheet';
import BetweenInnings from './CalulcatorComponents/betweenInnings';

export default class CalculationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <View style={ styles.container }>
                <Button title="Back" onPress={ this.props.resetPickerValue }/>
                <Text style={styles.instructions}>You are on {this.props.pickerValue}</Text>
                { this.props.pickerValue == 'betweenInningsInterruption' ? 
                    <BetweenInnings textChange={this.props.textChange}/> : null
                }
            </View>
        )
    }
}