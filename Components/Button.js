import React, { Component } from 'react';
import { Button } from 'react-native';


export default class StyledButton extends Component {    
    setActivePickerState = () => {  
        this.setState(prevState => {      
        return { activePicker: !prevState.activePicker }
        })
    }

    render() {
        return (
        <Button
            color='blue'
            title='Choose Scenario'
            onPress={()=>{ this.setState({activePicker: !this.state.activePicker }); }}          
        />    
        )
    }
}