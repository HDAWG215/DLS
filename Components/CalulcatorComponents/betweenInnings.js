import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import CalculationInput from './../CalculationInput';

export default class BetweenInnings extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <View>                
                <CalculationInput text='Length of Game (Overs)' textChange={this.props.textChange}/>
                <CalculationInput text='1st Team Total' textChange={this.props.textChange}/>
                <CalculationInput text='2nd Team Overs' textChange={this.props.textChange}/>   
                <Text>{this.state.calculatedScore}</Text>                                             
            </View>
        )
    }
}