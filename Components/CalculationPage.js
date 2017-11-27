import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './StyleSheet';
import BetweenInnings from './CalculcatorComponents/betweenInnings';
import FirstInnings from './CalculcatorComponents/firstInnings';
import SecondInnings from './CalculcatorComponents/secondInnings';
import BallByBall from './CalculcatorComponents/BallByBall/ballByBall';

export default class CalculationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <View>
                { this.props.pickerValue == 'betweenInningsInterruption' ? 
                    <BetweenInnings textChange={this.props.textChange}/> : null
                }
                { this.props.pickerValue == 'firstInningsInterruption' ? 
                    <FirstInnings textChange={this.props.textChange}/> : null
                }
                { this.props.pickerValue == 'secondInningsInterruption' ? 
                    <SecondInnings textChange={this.props.textChange}/> : null
                }
                { this.props.pickerValue == 'ballByBall' ? 
                    <BallByBall resetPickerValue={this.props.resetPickerValue} textChange={this.props.textChange}/> : null
                }
            </View>
        )
    }
}