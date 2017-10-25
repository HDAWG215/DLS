import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    TextInput,
    Modal
} from 'react-native';
import StyledButton from './Components/Button';
import styles from './Components/StyleSheet';
import WelcomePage from './Components/WelcomePage';
import CalculationPage from './Components/CalculationPage';

fetchState = () => {
    const state = getState();
}

export default class App extends Component {  
    constructor(props) {
        super(props);
        this.state = {};
    };

    valueChange = (value) => {
        this.setState(() => {
            return { pickerValue: value,
                welcomeHeaderText: value }
        })
    }

    setActivePickerState = () => {  
        this.setState(prevState => {      
        return { activePicker: !prevState.activePicker }
        })
    }

    resetPickerValue = () => {
        this.setState(() => {
            return { pickerValue: null,
                activePicker: false }
        })
    }

    textChange = (text) => {
        this.setState({text})
    }

    render() {
        return ( 
            <View style={styles.container}>     
                { !this.state.pickerValue ? <WelcomePage 
                    setActivePickerState={ this.setActivePickerState }
                    valueChange={ this.valueChange }
                    pickerValue={ this.state.pickerValue }
                    {...this.state}
                /> : 
                <CalculationPage 
                    resetPickerValue={ this.resetPickerValue }
                    textChange={ this.textChange }
                    {...this.state}
                /> }    
            </View>
        );
    }
}