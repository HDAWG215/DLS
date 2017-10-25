import React, { Component } from 'react';
import { Text, View, Picker, Button, Modal } from 'react-native';
import styles from './StyleSheet';

export default class ScenarioPicker extends Component {  
    constructor(props) {
      super(props);    
    }  
    render() {      
        return (
            <View>
                <Button
                    color='blue'            
                    title='Choose Scenario'
                    onPress={ this.props.setActivePickerState }/>
                    { this.props.activePicker ?
                        <Picker              
                            style={styles.picker}
                            selectedValue={ this.props.pickerValue }
                            onValueChange={(value) => {this.props.valueChange(value)}}>
                            <Picker.Item label='First Team Interrupted' value='firstInterruption'/>
                            <Picker.Item label='Second Team Interrupted' value='secondInterruption'/>
                            <Picker.Item label='Both Teams Interrupted' value='bothInterruption'/>
                            <Picker.Item label='Multiple Interruptions' value='multiInterruption'/>
                        </Picker> :
                    null }                         
            </View>   
        )
    }
}