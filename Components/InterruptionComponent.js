import React, { Component } from 'react';
import { 
    View, 
    Button, 
    TextInput
} from 'react-native';
import CalulcationInput from './CalculationInput';
import styles from './StyleSheet';

export default class InterruptionComponent extends Component {
    constructor(props) {
        super(props);        
    }

    addInterruption = () => {

    }

    render() {
        return (
            <View> 
                <CalulcationInput textChange={this.props.wicketsAtInt} title='Wickets At Interruption'/>
                <CalulcationInput textChange={this.props.oversAtInt} title='Overs At Interruption'/>
                <CalulcationInput textChange={this.props.lengthAfterInt} title='Game Length After Interruption'/>
                <Button title='Done' onPress={this.props.toggleInterruption}/>
            </View>
        )
    }
}