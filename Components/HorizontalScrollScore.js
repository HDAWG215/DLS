import React, { Component } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import styles from './StyleSheet';

export default class HorinzontalScoreScrollView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.children);
        return (
            <ScrollView horizontal={true}>
                {this.props.children}
            </ScrollView>
        )
    }
}