import React, { Component } from 'react';
import { 
    View, 
    Button, 
    TextInput
} from 'react-native';
import CalulcationInput from './CalculationInput';
import ReusableButton from './ReusableButton';
import styles from './StyleSheet';

export default class InterruptionComponent extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <View> 
                <CalulcationInput textChange={this.props.wicketsAtInt} title='Wickets At Interruption'/>
                <CalulcationInput textChange={this.props.oversAtInt} title='Overs At Interruption'/>
                <CalulcationInput textChange={this.props.lengthAfterInt} title='Game Length After Interruption'/>
                <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Done' 
                    onPress={this.props.toggleInterruption}/>
            </View>
        )
    }
}