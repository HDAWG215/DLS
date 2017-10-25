/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

class Welcome extends Component {
    render() {
        return (
        <Text style={styles.welcome}>{this.props.welcomeHeaderText}</Text>
        );
    }
}

class ScoreBox extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => this.setState({scoreBoxText: text})}
        value={this.props.text}/>
    )
  }
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
                    {...this.state}
                /> }    
            </View>
        );
    }
}