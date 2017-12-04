import React, { Component } from 'react';
import { Text, View, Picker, Button, Modal } from 'react-native';
import styles from './StyleSheet';
import ReusableButton from './ReusableButton';

export default class ScenarioPicker extends Component {  
    constructor(props) {
      super(props);    
    }  
    render() {      
        return (
            <View>
                <ReusableButton 
                    buttonStyle={styles.buttons.generalButton}
                    textStyle={styles.buttons.generalButtonText} 
                    title='Choose Scenario' 
                    onPress={this.props.setActivePickerState}/>
                    { this.props.activePicker ?
                        <Picker              
                            style={styles.common.picker}
                            selectedValue={ this.props.pickerValue }
                            onValueChange={(value) => {this.props.valueChange(value)}}>                        
                            <Picker.Item label='First Team Interrupted' value='firstInningsInterruption'/>
                            <Picker.Item label='Ball By Ball' value='ballByBall'/>
                            <Picker.Item label='Second Team Interrupted' value='secondInningsInterruption'/>                            
                            <Picker.Item label='Between Innings Interruption' value='betweenInningsInterruption'/>                            
                            <Picker.Item label='Both Teams Interrupted' value='bothInterruption'/>
                            <Picker.Item label='Multiple Interruptions' value='multiInterruption'/>
                        </Picker> :
                    null }                         
            </View>   
        )
    }
}