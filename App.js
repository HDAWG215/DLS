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
import styles from './Components/StyleSheet';
import WelcomePage from './Components/WelcomePage';

fetchState = () => {
  const state = getState();
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

  render() {
    return (      
      <WelcomePage
        setActivePickerState={ this.setActivePickerState }
        valueChange={ this.valueChange }
        { ...this.state }/>            
    );
  }
}