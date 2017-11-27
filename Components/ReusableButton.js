import React, { Component } from 'react';
import { 
    Button,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class StyledButton extends Component {    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}>
                <View style={this.props.buttonStyle}>
                    <Text style={this.props.textStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}