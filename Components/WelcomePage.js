import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import styles from './StyleSheet';
import ScenarioPicker from './ScenarioPicker';

class Welcome extends Component {
    render() {
        return (
            <Text style={styles.common.welcome}>{this.props.welcomeHeaderText}</Text>
        );
    }
}

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <View style={styles.common.container}>          
                <Welcome welcomeHeaderText='Welcome to the DLS Calculator'/>          
                <Text style={styles.common.instructions}>Please choose a scenario below</Text>            
                <ScenarioPicker 
                    setActivePickerState={this.props.setActivePickerState} 
                    valueChange={this.props.valueChange}
                    {...this.props}/>      
                <Text style={styles.common.textThing}>{this.props.pickerValue}</Text>
            </View>
        )
    }
}