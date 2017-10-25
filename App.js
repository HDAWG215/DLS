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
import ScenarioPicker from './Components/ScenarioPicker';

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

    this.state = {      
    };
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

  render() {
    return (      
      <View style={styles.container}>          
        <Welcome welcomeHeaderText='Welcome to the DLS Calculator'/>          
        <Text style={styles.instructions}>Please choose a scenario below</Text>            
        <ScenarioPicker 
          setActivePickerState={this.setActivePickerState} 
          valueChange={this.valueChange} 
          {...this.state}/>      
        { this.state.pickerValue ? <Text style={styles.textThing}>{this.state.pickerValue}</Text> : null }
      </View>         
    );
  }
}